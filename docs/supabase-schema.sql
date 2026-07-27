create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  document text,
  phone text,
  email text,
  address text,
  city text,
  allocation_method text not null default 'equal',
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_members (
  project_id uuid not null references public.projects(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('owner', 'editor', 'viewer')),
  created_at timestamptz not null default now(),
  primary key (project_id, user_id)
);

create table if not exists public.units (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  name text not null,
  area numeric(14, 2) not null default 0,
  status text not null default 'Planejada',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.phases (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  name text not null,
  budget_cents bigint not null default 0,
  start_date date,
  end_date date,
  status text not null default 'Planejada',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.transactions (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  phase_id uuid references public.phases(id) on delete set null,
  unit_id uuid references public.units(id) on delete set null,
  type text not null,
  description text not null,
  supplier text,
  quantity numeric(16, 4) not null default 1,
  measure text not null default 'un',
  unit_value_cents bigint not null default 0,
  total_cents bigint not null default 0,
  transaction_date date not null,
  financial_status text not null default 'Pago',
  due_date date,
  payment text,
  document text,
  notes text,
  deleted_at timestamptz,
  created_by uuid not null references auth.users(id),
  updated_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.attachments (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  transaction_id uuid not null references public.transactions(id) on delete cascade,
  storage_path text not null,
  file_name text not null,
  content_type text,
  size_bytes bigint,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now()
);

create or replace function public.is_project_member(target_project_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.project_members
    where project_id = target_project_id
      and user_id = auth.uid()
  );
$$;

create or replace function public.can_edit_project(target_project_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.project_members
    where project_id = target_project_id
      and user_id = auth.uid()
      and role in ('owner', 'editor')
  );
$$;

alter table public.projects enable row level security;
alter table public.project_members enable row level security;
alter table public.units enable row level security;
alter table public.phases enable row level security;
alter table public.transactions enable row level security;
alter table public.attachments enable row level security;

create policy "members read projects" on public.projects
  for select using (public.is_project_member(id));
create policy "authenticated create projects" on public.projects
  for insert with check (created_by = auth.uid());
create policy "owners update projects" on public.projects
  for update using (created_by = auth.uid());

create policy "members read memberships" on public.project_members
  for select using (public.is_project_member(project_id));
create policy "owners manage memberships" on public.project_members
  for all using (
    exists (
      select 1 from public.project_members membership
      where membership.project_id = project_members.project_id
        and membership.user_id = auth.uid()
        and membership.role = 'owner'
    )
  );
create policy "creators add first owner" on public.project_members
  for insert with check (
    user_id = auth.uid()
    and role = 'owner'
    and exists (
      select 1 from public.projects
      where projects.id = project_members.project_id
        and projects.created_by = auth.uid()
    )
  );

create policy "members read units" on public.units
  for select using (public.is_project_member(project_id));
create policy "editors manage units" on public.units
  for all using (public.can_edit_project(project_id));

create policy "members read phases" on public.phases
  for select using (public.is_project_member(project_id));
create policy "editors manage phases" on public.phases
  for all using (public.can_edit_project(project_id));

create policy "members read transactions" on public.transactions
  for select using (public.is_project_member(project_id));
create policy "editors manage transactions" on public.transactions
  for all using (public.can_edit_project(project_id));

create policy "members read attachments" on public.attachments
  for select using (public.is_project_member(project_id));
create policy "editors manage attachments" on public.attachments
  for all using (public.can_edit_project(project_id));
