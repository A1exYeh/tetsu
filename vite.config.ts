import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: 'https://a1exyeh.github.io/tetsu/',
  plugins: [react()],
});
