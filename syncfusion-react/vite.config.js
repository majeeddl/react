import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3100,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@syncfusion": path.resolve(__dirname, "./node_modules/@syncfusion"),
      "ej2-icons": path.resolve(
        __dirname,
        "node_modules/@syncfusion/ej2-icons"
      ),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        alias: {
          "@syncfusion": path.resolve(__dirname, "node_modules"),
        },
        includePaths: ["node_modules/@syncfusion"],
        importer(...args) {
          let file = args[0];

          if (file.startsWith("ej2-"))
            file = `./node_modules/@syncfusion/${file}`;

          return {
            file: file,
          };
        },
      },
    },
  },
});
