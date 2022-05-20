import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), qiankun('micro1', { useDevMode: true })],
  server: {
    port: 6888,
    open: true
  },
  base: '/micro1/'
})
