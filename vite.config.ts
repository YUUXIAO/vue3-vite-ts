import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const resolve = (dir: string) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: resolve('./src') }],
  },
});
