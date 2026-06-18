// Run Supabase migrations via direct PostgreSQL connection
// Usage: node scripts/migrate.mjs
//
// Requires DATABASE_URL in .env.local
// Get it from: Supabase Dashboard → Settings → Database → Connection string (URI)

import pg from "pg";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));

// Read .env.local manually (no dotenv dependency)
const envPath = resolve(__dir, "../.env.local");
const envContent = readFileSync(envPath, "utf8");
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eq = trimmed.indexOf("=");
  if (eq < 0) continue;
  const key = trimmed.slice(0, eq).trim();
  const val = trimmed.slice(eq + 1).trim();
  if (!process.env[key]) process.env[key] = val;
}

const url = process.env.DATABASE_URL;
if (!url || url.includes("[YOUR-PASSWORD]")) {
  console.error("❌  DATABASE_URL not set in .env.local");
  console.error(
    "   Go to: Supabase Dashboard → Settings → Database → Connection string (URI)"
  );
  console.error(
    "   Then replace the DATABASE_URL value in .env.local and re-run."
  );
  process.exit(1);
}

const sqlPath = resolve(__dir, "../supabase/migrations/001_chatbot.sql");
const sql = readFileSync(sqlPath, "utf8");

const client = new pg.Client({ connectionString: url, ssl: { rejectUnauthorized: false } });

try {
  console.log("🔌  Connecting to Supabase...");
  await client.connect();
  console.log("⚡  Running migration...");
  await client.query(sql);
  console.log("✅  Migration complete!");
} catch (err) {
  console.error("❌  Migration failed:", err.message);
  process.exit(1);
} finally {
  await client.end();
}
