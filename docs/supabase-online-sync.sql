create table if not exists public.app_states (
  project_key text primary key,
  data jsonb not null,
  device_id text,
  updated_at timestamptz not null default now()
);

alter table public.app_states enable row level security;

drop policy if exists "public read app states" on public.app_states;
drop policy if exists "public insert app states" on public.app_states;
drop policy if exists "public update app states" on public.app_states;

create policy "public read app states" on public.app_states
  for select using (true);

create policy "public insert app states" on public.app_states
  for insert with check (true);

create policy "public update app states" on public.app_states
  for update using (true) with check (true);

create or replace function public.set_app_state_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists app_states_updated_at on public.app_states;
create trigger app_states_updated_at
before update on public.app_states
for each row
execute function public.set_app_state_updated_at();

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'app_states'
  ) then
    alter publication supabase_realtime add table public.app_states;
  end if;
end $$;
