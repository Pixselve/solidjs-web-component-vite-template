import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
    plugins: [solidPlugin(), FullReload(['src/**/*'])],
    server: {
        port: 3000,
    },
    preview: {},
    build: {
        target: 'esnext',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                 entryFileNames: 'index.js',
            }
        }

    },
});
