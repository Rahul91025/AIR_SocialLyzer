import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Shorter imports using '@' for the src directory
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"], // Ensures 'lucide-react' is not pre-bundled by Vite
  },
  server: {
    port: 3000, // Optional: Customize the development server port
    open: true, // Optional: Automatically open the browser
  },
  build: {
    sourcemap: true, // Optional: Useful for debugging the production build
  },
});
