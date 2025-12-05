import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    base: '/',
    assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.svg', '**/*.png', '**/*.jpg', '**/*.webp'],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@Apis': path.resolve(__dirname, './src/apis'),
            '@Assets': path.resolve(__dirname, './src/assets'),
            '@Components': path.resolve(__dirname, './src/components'),
            '@Features': path.resolve(__dirname, './src/features'),
            '@Hooks': path.resolve(__dirname, './src/hooks'),
            '@Pages': path.resolve(__dirname, './src/pages'),
            '@Routes': path.resolve(__dirname, './src/routes'),
            '@Stores': path.resolve(__dirname, './src/stores'),
            '@Types': path.resolve(__dirname, './src/types'),
            '@Utils': path.resolve(__dirname, './src/utils'),
        },
    },
    plugins: [
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
        }),
        react(),
        tsconfigPaths(),
    ],
});
