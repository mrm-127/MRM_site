import { NextResponse } from "next/server";
import { processMessage } from "@/lib/brain";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const message = String(body.message ?? "").trim();
  const sessionId = String(body.sessionId ?? "").trim();
  const source = (body.source ?? "web") as "web" | "telegram" | "widget";

  if (!message || !sessionId) {
    return NextResponse.json(
      { error: "message and sessionId are required" },
      { status: 422 }
    );
  }

  let reply: string;
  try {
    reply = await processMessage({ message, sessionId, source });
  } catch (err) {
    console.error("[/api/chat error]", err);
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
  return NextResponse.json({ reply });
}
