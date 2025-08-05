// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig(({ mode }) => {
    return {
        plugins: [vue()],
        server: {
            open: true,
        },
        base: mode === 'production' ? '/holomen-video-archives/dist/' : '/',
    };
});
