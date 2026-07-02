import { Pool } from "pg";
import { readFileSync } from "fs";
import { join } from "path";

declare global {
  var _pgPool: Pool | undefined;
}

const supabaseCa = readFileSync(
  join(process.cwd(), "certs/supabase-ca-bundle.pem"),
  "utf8",
);

export const pool =
  global._pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { ca: supabaseCa, rejectUnauthorized: true },
    max: 5,
  });

if (process.env.NODE_ENV !== "production") {
  global._pgPool = pool;
}
