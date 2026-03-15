import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                onboarding: resolve(__dirname, 'onboarding.html'),
                marketplace: resolve(__dirname, 'marketplace.html'),
                dashboard: resolve(__dirname, 'dashboard.html'),
            },
        },
    },
});
