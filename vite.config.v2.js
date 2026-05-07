import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
    },
    base: '/skif_new/v2/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about/index.html',
                cdo: 'about/cdo/index.html',
                ool: 'about/ool/index.html',
                rood: 'about/rood/index.html',
                instructions: 'instructions/index.html',
            }
        }
    },
})