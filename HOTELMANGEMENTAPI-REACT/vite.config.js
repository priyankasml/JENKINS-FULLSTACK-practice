import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/hotelmanagement/',   // <-- Use relative paths for Tomcat deployment
  plugins: [react()],
})
