import { createClient } from '@supabase/supabase-js';

const configuredSupabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!configuredSupabaseUrl || !supabasePublishableKey) {
  throw new Error(
    'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in .env.local.',
  );
}

const isLocalSupabaseUrl = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?(?:\/|$)/i.test(
  configuredSupabaseUrl,
);
const supabaseUrl =
  import.meta.env.DEV && isLocalSupabaseUrl
    ? new URL('/supabase', window.location.origin).toString()
    : configuredSupabaseUrl;

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
