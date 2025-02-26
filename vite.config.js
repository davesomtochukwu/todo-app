import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // Ensures relative paths work in a containerized setup
  server: {
    port: 3000,
  }
});