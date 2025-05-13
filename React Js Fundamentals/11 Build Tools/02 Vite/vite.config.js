// Main Learning Points: Vite
// Vite is a fast build tool with a development server and support for ES modules.

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
});