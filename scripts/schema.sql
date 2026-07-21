create extension if not exists pgcrypto;

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  service_category text not null,
  post_type text not null check (post_type in ('후기', '정보')),
  rating numeric(2,1) not null check (rating >= 0.5 and rating <= 5.0),
  nickname text not null,
  title text not null,
  content text not null,
  hearts integer not null default 0,
  status text not null default 'visible' check (status in ('visible', 'hidden')),
  created_at timestamptz not null default now()
);

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references posts(id) on delete cascade,
  nickname text not null,
  content text not null,
  hearts integer not null default 0,
  status text not null default 'visible' check (status in ('visible', 'hidden')),
  created_at timestamptz not null default now()
);

create index if not exists posts_created_at_idx on posts (created_at desc);
create index if not exists comments_post_id_idx on comments (post_id);

alter table posts enable row level security;
alter table comments enable row level security;

create or replace function adjust_post_hearts(p_id uuid, delta int)
returns int
language sql
as $$
  update posts set hearts = greatest(0, hearts + delta) where id = p_id
  returning hearts;
$$;

create or replace function adjust_comment_hearts(c_id uuid, delta int)
returns int
language sql
as $$
  update comments set hearts = greatest(0, hearts + delta) where id = c_id
  returning hearts;
$$;
