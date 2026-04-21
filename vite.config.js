import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    // Raise the warning threshold slightly (images are now tiny)
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Split vendor chunks so browsers can cache React separately from app code
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },

  // Serve assets with aggressive caching in preview mode
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})
