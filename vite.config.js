import react from '@vitejs/plugin-react'
import { cwd } from 'node:process'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd(), '')
  const supabaseUrl = env.VITE_SUPABASE_URL
  const useLocalSupabaseProxy =
    supabaseUrl && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?(?:\/|$)/i.test(supabaseUrl)

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: true,
      ...(useLocalSupabaseProxy && {
        proxy: {
          '/supabase': {
            target: supabaseUrl,
            changeOrigin: true,
            ws: true,
            rewrite: (path) => path.replace(/^\/supabase/, ''),
          },
        },
      }),
    },
  }
})
