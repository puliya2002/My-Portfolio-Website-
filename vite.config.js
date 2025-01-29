import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true, // Ensures proper routing for SPAs
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Prevents code splitting issues
      },
    },
  },
  base: "/", // Ensures correct base path
});
