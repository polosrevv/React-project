alter table public.profiles
  add column email text;

update public.profiles as profiles
set email = users.email
from auth.users as users
where users.id = profiles.id;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    coalesce(
      nullif(trim(new.raw_user_meta_data ->> 'full_name'), ''),
      nullif(split_part(coalesce(new.email, ''), '@', 1), ''),
      'New user'
    ),
    new.email
  )
  on conflict (id) do update
    set email = excluded.email;

  return new;
end;
$$;

drop trigger on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert or update of email on auth.users
  for each row execute procedure public.handle_new_user();
