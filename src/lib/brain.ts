import OpenAI from "openai";
import { supabase } from "./supabase";
import { shortTermMemory } from "./memory";

// OpenRouter is OpenAI-compatible — we use the OpenAI SDK with a custom base URL
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "https://mrmintelligence.ir",
    "X-Title": "MRM Intelligence",
  },
});

const MODEL =
  process.env.OPENROUTER_MODEL ?? "anthropic/claude-haiku-4-5-20251001";

const SYSTEM_PROMPT = `تو یک دستیار هوشمند فارسی‌زبان برای MRM Intelligence هستی.
محمدرضا مومنی مشاور هوش مصنوعی و امور مالی با ۲۸ سال تجربه مالی است.
خدمات: مشاوره استراتژی هوش مصنوعی، آموزش تیم‌های مالی، پیاده‌سازی داشبوردهای هوشمند مالی.
وظیفه‌ات: پاسخ سوالات، معرفی خدمات، ثبت اطلاعات تماس مشتریان، و راهنمایی برای رزرو مشاوره.
همیشه به فارسی پاسخ بده مگر اینکه کاربر زبان دیگری استفاده کند.
مودب، حرفه‌ای و مختصر باش. وقتی کاربر اطلاعات تماس داد، از ابزار capture_lead استفاده کن.
از هیچ ایموجی یا نماد خاصی استفاده نکن. فقط متن ساده فارسی بنویس.`;

const TOOLS: OpenAI.Chat.ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "capture_lead",
      description:
        "ذخیره اطلاعات تماس مشتری بالقوه که تمایل به دریافت خدمات یا ارتباط با تیم دارد",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "نام کامل مشتری" },
          phone: { type: "string", description: "شماره تلفن" },
          email: { type: "string", description: "ایمیل (اختیاری)" },
          interest: {
            type: "string",
            description: "حوزه علاقه‌مندی یا نوع خدمات",
          },
        },
        required: ["name", "phone"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "check_booking_status",
      description:
        "استعلام وضعیت رزرو مشاوره مشتری بر اساس ایمیل یا شماره تلفن",
      parameters: {
        type: "object",
        properties: {
          email: { type: "string", description: "ایمیل مشتری" },
          phone: { type: "string", description: "شماره تلفن مشتری" },
        },
      },
    },
  },
];

async function executeTool(
  name: string,
  args: Record<string, unknown>,
  source: string
): Promise<string> {
  if (name === "capture_lead") {
    const { error } = await supabase.from("leads").insert({
      name: String(args.name ?? ""),
      phone: String(args.phone ?? ""),
      email: String(args.email ?? ""),
      interest: String(args.interest ?? ""),
      source,
    });
    if (error) {
      console.error("[capture_lead]", error.message);
      return "خطا در ثبت اطلاعات. لطفاً مستقیماً با ما تماس بگیرید.";
    }
    return "اطلاعات تماس شما با موفقیت ثبت شد. کارشناسان ما به زودی با شما تماس می‌گیرند.";
  }

  if (name === "check_booking_status") {
    let q = supabase
      .from("consultation_requests")
      .select("name, service, created_at")
      .limit(1);
    if (args.email) q = q.eq("email", String(args.email));
    else if (args.phone) q = q.eq("phone", String(args.phone));
    const { data } = await q;
    if (!data?.length)
      return "رزروی با این مشخصات یافت نشد. لطفاً اطلاعات را بررسی کنید.";
    const r = data[0] as { name: string; service: string; created_at: string };
    const date = new Date(r.created_at).toLocaleDateString("fa-IR");
    return `رزرو مشاوره برای ${r.name} (${r.service || "مشاوره"}) در تاریخ ${date} ثبت شده است. وضعیت: در انتظار تأیید.`;
  }

  return "ابزار نامشخص";
}

const DAILY_LIMIT = 5;

async function getDailyCount(sessionId: string): Promise<number> {
  try {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const { count, error } = await supabase
      .from("chat_memories")
      .select("*", { count: "exact", head: true })
      .eq("session_id", sessionId)
      .eq("role", "user")
      .gte("created_at", todayStart.toISOString());
    if (error) {
      console.error("[getDailyCount]", error.message);
      return 0;
    }
    return count ?? 0;
  } catch (err) {
    console.error("[getDailyCount error]", err);
    return 0;
  }
}

export async function processMessage(opts: {
  message: string;
  sessionId: string;
  source: "web" | "telegram" | "widget";
}): Promise<string> {
  const { message, sessionId, source } = opts;

  const used = await getDailyCount(sessionId);
  if (used >= DAILY_LIMIT) {
    return `سهمیه روزانه شما (${DAILY_LIMIT} پیام) به پایان رسیده است. فردا می‌توانید مجدداً با ما صحبت کنید.\nبرای ارتباط فوری با کارشناسان ما تماس بگیرید.`;
  }

  const history = shortTermMemory.get(sessionId);

  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history.map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
    { role: "user", content: message },
  ];

  const first = await openai.chat.completions.create({
    model: MODEL,
    messages,
    tools: TOOLS,
    tool_choice: "auto",
    max_tokens: 1024,
  });

  const firstMsg = first.choices[0].message;
  let reply = "";

  if (firstMsg.tool_calls?.length) {
    const toolResults: OpenAI.Chat.ChatCompletionMessageParam[] = [];

    for (const tc of firstMsg.tool_calls) {
      if (tc.type !== "function") continue;
      let args: Record<string, unknown> = {};
      try {
        args = JSON.parse(tc.function.arguments);
      } catch {}
      const result = await executeTool(tc.function.name, args, source);
      toolResults.push({
        role: "tool",
        tool_call_id: tc.id,
        content: result,
      });
    }

    const second = await openai.chat.completions.create({
      model: MODEL,
      messages: [...messages, firstMsg, ...toolResults],
      tools: TOOLS,
      max_tokens: 1024,
    });

    reply = second.choices[0].message.content ?? "";
  } else {
    reply = firstMsg.content ?? "";
  }

  shortTermMemory.add(sessionId, { role: "user", content: message });
  shortTermMemory.add(sessionId, { role: "assistant", content: reply });

  void supabase.from("chat_memories").insert([
    { session_id: sessionId, role: "user", content: message, source },
    { session_id: sessionId, role: "assistant", content: reply, source },
  ]);

  return reply;
}
