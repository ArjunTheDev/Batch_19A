import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host_app',
      remotes: {
        mf_app: 'http://localhost:4173/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    })
  ],
  server:{
    port: 5000,
  },
  test: {
    globals: true,            // allow using Jest‑style globals like `describe`/`test`
    environment: 'jsdom',     // simulate the browser DOM
    setupFiles: './src/setupTests.js',
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}']
  }
})
