import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vpr from 'vite-plugin-restart';
let ViteRestart = vpr.default

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    react(),

    ViteRestart({
      restart: [
        'my.config.[jt]s',
      ]
    })
  ]

})
