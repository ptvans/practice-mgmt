import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Using base: '/' because site is deployed to custom domain (www.gethelena.com)
// If deploying to username.github.io/repo-name, use base: '/repo-name/' instead
export default defineConfig({
  plugins: [react()],
  base: '/',
})

