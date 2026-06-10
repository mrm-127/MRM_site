import { NextResponse } from "next/server";

/**
 * دریافت درخواست مشاوره.
 * 🔧 فاز بعد: این درخواست در جدول `consultation_requests` در Supabase ذخیره می‌شود
 *    و یک ایمیل اطلاع‌رسانی (Resend) ارسال خواهد شد.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "name, email and phone are required" },
      { status: 422 },
    );
  }

  const submission = {
    name,
    email,
    phone,
    service: String(body.service ?? ""),
    message: String(body.message ?? ""),
    createdAt: new Date().toISOString(),
  };

  // TODO(Supabase): await supabase.from("consultation_requests").insert(submission)
  // TODO(Resend): notify mr.momeni@gmail.com
  console.log("[consultation request]", submission);

  return NextResponse.json({ ok: true });
}
