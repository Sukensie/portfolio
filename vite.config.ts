import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base:
    process.env.GITHUB_ACTIONS === "true" && process.env.GITHUB_REPOSITORY
      ? process.env.CUSTOM_DOMAIN
        ? "/"
        : `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
      : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.match(/\.woff2?$/)) {
            return "assets/fonts/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "router": ["react-router-dom"],
          "animation": ["framer-motion"],
        },
      },
    },
  },
}));
