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
        popup: "index.html", // Your popup entry point (React UI)
        content: "src/content.js", // Add content.js as an entry point
      },

      output: {
        entryFileNames: "assets/[name].js", // Output the JS files into the 'assets' folder
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
