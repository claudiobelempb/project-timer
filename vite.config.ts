import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '/src') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, '/src/components')
      },
      { find: '@pages', replacement: path.resolve(__dirname, '/src/pages') },
      { find: '@styles', replacement: path.resolve(__dirname, '/src/styles') }
    ]
  },
  plugins: [react()],
  server: {
    hmr: { overlay: false }
  }
});
