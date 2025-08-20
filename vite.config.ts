import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // important when serving from a custom root domain
  build: {
    outDir: 'dist', // default, but explicit is good
    emptyOutDir: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
