import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
        },
      },
    ],
  },
});
