import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
// export default defineConfig({
//   base: "/Stakepool-Frontend/",
//   plugins: [vue()],
//   resolve: {
//   alias: {
//   "~": path.resolve(__dirname, "node_modules"),
//   "@": path.resolve(__dirname, "src"),
//   },
//   },
//   build: {
//   chunkSizeWarningLimit: 1600,
//   },
//   });
// module.exports = {
//   configureWebpack: {
//     optimization: {
//       splitChunks: {
//         minSize: 10000,
//         maxSize: 250000,
//       },
//     },
//   },
// };
