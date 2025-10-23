import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/hotelmanagement/',   // <-- Add this line
  plugins: [react()],
})
