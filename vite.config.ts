import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // custom domain root
  build: { outDir: 'dist', emptyOutDir: true },
  optimizeDeps: { exclude: ['lucide-react'] },
})
