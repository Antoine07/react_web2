import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"
import path from "path"
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
	plugins: [
		tanstackRouter({
			target: 'react',
			autoCodeSplitting: true,
		  }),
		react(),
	],
	server: {
		port: 5173,
		open: true
	},
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});


