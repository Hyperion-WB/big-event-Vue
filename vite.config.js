import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy:{
      '/api': {//获取路径中包含的/api请求
        target: 'http://localhost:8098',
        changeOrigin: true,//修改源
        rewrite: (path) => path.replace(/^\/api/, '')
      }}
  }
})
