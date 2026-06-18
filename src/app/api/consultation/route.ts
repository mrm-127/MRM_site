import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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

  const { error } = await supabase.from("consultation_requests").insert({
    name,
    email,
    phone,
    service: String(body.service ?? ""),
    message: String(body.message ?? ""),
  });

  if (error) {
    console.error("[supabase insert error]", error);
    return NextResponse.json({ error: "database error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
