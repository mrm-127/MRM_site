-- ============================================================
-- MRM Intelligence Chatbot — Supabase Schema
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- Enable pgvector extension for RAG
create extension if not exists vector;

-- ── Documents for RAG ──────────────────────────────────────
-- Populate this table with your knowledge base content.
-- Use the Python/JS script in scripts/seed_documents.ts to embed and insert.
create table if not exists documents (
  id         bigserial primary key,
  content    text        not null,
  metadata   jsonb       default '{}',
  embedding  vector(1536)          -- text-embedding-3-small dimension
);

create index if not exists documents_embedding_idx
  on documents using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

-- Similarity search function used by brain.ts ragSearch()
create or replace function match_documents(
  query_embedding vector(1536),
  match_threshold float default 0.7,
  match_count     int   default 5
)
returns table (id bigint, content text, similarity float)
language sql stable
as $$
  select
    id,
    content,
    1 - (embedding <=> query_embedding) as similarity
  from documents
  where 1 - (embedding <=> query_embedding) > match_threshold
  order by embedding <=> query_embedding
  limit match_count;
$$;

-- ── Long-term conversation memory ──────────────────────────
create table if not exists chat_memories (
  id         bigserial primary key,
  session_id text        not null,
  role       text        not null,  -- 'user' | 'assistant'
  content    text        not null,
  source     text        default 'web', -- 'web' | 'telegram' | 'widget'
  created_at timestamptz default now()
);

create index if not exists chat_memories_session_idx
  on chat_memories (session_id, created_at);

-- ── Leads captured by the chatbot ──────────────────────────
create table if not exists leads (
  id         bigserial primary key,
  name       text        not null,
  phone      text        not null,
  email      text,
  interest   text,
  source     text        default 'web',
  created_at timestamptz default now()
);

-- Note: consultation_requests table already exists from the site's contact form.
-- Schema: name text, email text, phone text, service text, message text, created_at timestamptz
