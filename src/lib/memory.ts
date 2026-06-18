export interface ChatMsg {
  role: "user" | "assistant";
  content: string;
}

// In-process short-term session store (max 20 messages per session).
// NOTE: resets on server restart — use Upstash Redis for production persistence.
const store = new Map<string, ChatMsg[]>();
const MAX = 20;

export const shortTermMemory = {
  get(sessionId: string): ChatMsg[] {
    return [...(store.get(sessionId) ?? [])];
  },
  add(sessionId: string, msg: ChatMsg): void {
    const h = store.get(sessionId) ?? [];
    h.push(msg);
    if (h.length > MAX) h.splice(0, h.length - MAX);
    store.set(sessionId, h);
  },
};
