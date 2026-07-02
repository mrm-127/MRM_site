import "server-only";
import { pool } from "@/lib/db";

export type ChannelStat = {
  source: string;
  conversations: number;
  messages: number;
};

export type DashboardStats = {
  chatLeads: number;
  totalLeads: number;
  messages: number;
  conversations: number;
  leadConversionRate: number;
  channels: ChannelStat[];
};

export async function getDashboardStats(): Promise<DashboardStats> {
  const [leadsRes, consultationsRes, messagesRes, conversationsRes, channelsRes] =
    await Promise.all([
      pool.query<{ count: string }>("select count(*) from leads"),
      pool.query<{ count: string }>(
        "select count(*) from consultation_requests",
      ),
      pool.query<{ count: string }>("select count(*) from chat_memories"),
      pool.query<{ count: string }>(
        "select count(distinct session_id) from chat_memories",
      ),
      pool.query<{ source: string; conversations: string; messages: string }>(
        `select source,
                count(distinct session_id) as conversations,
                count(*) as messages
         from chat_memories
         group by source
         order by messages desc`,
      ),
    ]);

  const chatLeads = Number(leadsRes.rows[0].count);
  const consultations = Number(consultationsRes.rows[0].count);
  const messages = Number(messagesRes.rows[0].count);
  const conversations = Number(conversationsRes.rows[0].count);

  return {
    chatLeads,
    totalLeads: chatLeads + consultations,
    messages,
    conversations,
    leadConversionRate: conversations > 0 ? (chatLeads / conversations) * 100 : 0,
    channels: channelsRes.rows.map((row) => ({
      source: row.source,
      conversations: Number(row.conversations),
      messages: Number(row.messages),
    })),
  };
}
