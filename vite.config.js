import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "manifest.json", // Copy manifest.json
          dest: ".", // To the root of dist/
        },
        {
          src: "src/assets/leetai16.png", // Copy your extension icon
          dest: "assets", // To the root of dist/
        },
        {
          src: "src/background.js", // Copy background.js
          dest: ".", // To the root of dist/
        },
      ],
    }),
  ],
  base: "",
  build: {
    rollupOptions: {
      input: {
        content: "src/content.jsx",
      },

      output: {
        format: "module",
        entryFileNames: "assets/[name].js", // Output the JS files into the 'assets' folder
        chunkFileNames: "assets/[name].js", // Output chunked JS files for dynamic imports
        assetFileNames: "assets/[name].[ext]",
        manualChunks: null,
      },
    },
  },
});
