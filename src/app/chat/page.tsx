"use client";

import { useEffect, useRef, useState } from "react";

interface Msg {
  role: "user" | "bot";
  text: string;
}

const WELCOME =
  "سلام! من دستیار هوشمند MRM Intelligence هستم. می‌توانم درباره خدمات مشاوره هوش مصنوعی، رزرو جلسه، یا هر سوال دیگری کمکتان کنم.";

function getSessionId() {
  const KEY = "mrm_chat_session";
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(KEY, id);
  }
  return id;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const sessionRef = useRef("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    sessionRef.current = getSessionId();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          sessionId: sessionRef.current,
          source: "web",
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply ?? "خطایی رخ داد." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "خطا در اتصال. لطفاً دوباره تلاش کنید." },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div
      className="flex flex-col bg-surface"
      style={{ height: "calc(100dvh - 80px)" }}
    >
      {/* Chat header */}
      <div className="flex items-center gap-3 border-b border-line/60 bg-white px-6 py-4 shadow-sm shadow-navy/5">
        <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-teal">
          <svg
            className="size-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">دستیار هوشمند MRM</p>
          <div className="flex items-center gap-1.5">
            <span className="pulse-soft size-1.5 rounded-full bg-teal" />
            <span className="text-xs text-muted">آنلاین</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-5 md:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "rounded-br-sm bg-navy text-white"
                    : "rounded-bl-sm border border-line/70 bg-white text-ink shadow-card"
                }`}
                style={{ whiteSpace: "pre-wrap" }}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-end">
              <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-line/70 bg-white px-4 py-3 shadow-card">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="size-2 rounded-full bg-teal"
                    style={{
                      animation: "bounce 0.8s infinite",
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="sticky bottom-0 border-t border-line/60 bg-white px-4 py-3 md:px-8">
        <div className="mx-auto flex max-w-2xl gap-3">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height =
                Math.min(e.target.scrollHeight, 120) + "px";
            }}
            onKeyDown={handleKey}
            placeholder="پیام خود را بنویسید…"
            rows={1}
            className="flex-1 resize-none rounded-xl border border-line/70 bg-surface px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-teal/60 focus:bg-white"
            style={{ minHeight: "44px", maxHeight: "120px" }}
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-teal-bright text-white shadow-teal transition-all hover:-translate-y-px hover:shadow-teal-lg disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="ارسال"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22 11 13 2 9l20-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
