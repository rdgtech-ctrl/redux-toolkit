import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/pexels': {
        target: 'https://api.pexels.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pexels/, '')
      },
      '/giphy': {
        target: 'https://api.giphy.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/giphy/, '')
      },
      '/unsplash': {
        target: 'https://api.unsplash.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/unsplash/, '')
      }
    }
  }
})