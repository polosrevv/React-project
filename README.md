# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Supabase database

The migrations in `supabase/migrations` create a `public.profiles` table linked
to Supabase Auth users. It stores a display name, email, and timestamps, never
passwords. Row-level security limits profile reads and updates to the signed-in
user, and a database trigger creates a profile when an Auth user is created and
keeps the profile email in sync when it changes. Passwords are managed by
Supabase Auth and must never be copied into the profiles table.

The signup page uses Supabase Auth and supplies the full name as user metadata.
Copy `.env.example` to `.env.local` and set the local Supabase URL and publishable
key from `npx supabase status`. Never put a secret or service-role key in a
`VITE_` variable; Vite exposes those values to the browser.

Apply pending migrations to the local Supabase database with:

```sh
npx supabase migration up --local
```

To apply them to a hosted project, link this workspace with its project reference
from the Supabase dashboard, then run `npx supabase db push`.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
