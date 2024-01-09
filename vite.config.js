import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/test-api-react-gh/",
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
     watch: {
       usePolling: true
     },
  },
  preview: {
    port: 3000
  },
})
