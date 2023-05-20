import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/mental-health-frontend/",
    build: {
        outDir: "dist",
        assetsDir: "./",
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [vue()],
});
