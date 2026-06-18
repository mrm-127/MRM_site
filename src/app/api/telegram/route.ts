import { NextResponse } from "next/server";
import { processMessage } from "@/lib/brain";

interface TelegramMessage {
  message_id: number;
  from?: { id: number; first_name: string };
  chat: { id: number; type: string };
  text?: string;
}

interface TelegramUpdate {
  update_id: number;
  message?: TelegramMessage;
}

const BOT_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

async function telegramPost(method: string, body: Record<string, unknown>) {
  return fetch(`${BOT_API}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export async function POST(request: Request) {
  // Optional webhook secret verification
  const secret = request.headers.get("x-telegram-bot-api-secret-token");
  if (
    process.env.TELEGRAM_WEBHOOK_SECRET &&
    secret !== process.env.TELEGRAM_WEBHOOK_SECRET
  ) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let update: TelegramUpdate;
  try {
    update = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const msg = update.message;
  if (!msg?.text) return NextResponse.json({ ok: true });

  const chatId = msg.chat.id;

  // Show typing indicator (fire-and-forget)
  void telegramPost("sendChatAction", { chat_id: chatId, action: "typing" });

  const reply = await processMessage({
    message: msg.text,
    sessionId: `tg_${chatId}`,
    source: "telegram",
  });

  await telegramPost("sendMessage", {
    chat_id: chatId,
    text: reply,
    parse_mode: "HTML",
  });

  return NextResponse.json({ ok: true });
}
