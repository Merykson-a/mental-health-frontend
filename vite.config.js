import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    base: "/mental-health-frontend/",
    build: {
        outDir: "dist",
        assetsDir: "./",
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [vue()],
    resolve: {
        alias: {
            "@/": resolve(__dirname, "src") + "/",
        },
    },
});
