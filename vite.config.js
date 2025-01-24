import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "konva/lib/Global.js": "konva/lib/index.js",
      "konva/lib/Core.js": "konva/lib/index.js",
    },
  },
});
