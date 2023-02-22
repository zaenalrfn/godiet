import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/

export default defineConfig({
  // pwa: {
  //   name: "PWA Vue tutor",
  //   themeColor: "#fff",
  //   msTileColor: "#000",
  //   workboxPluginMode: "GenerateSW",
  //   workboxOptions: {
  //     skipWaiting: true,
  //   },
  // },
  plugins: [
    vue(),
    VitePWA({
      injectRegister: "auto",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
// module.exports = {
//   pwa: {
//     name: "PWA Vue tutor",
//     themeColor: "#fff",
//     msTileColor: "#000",
//     workboxPluginMode: "GenerateSW",
//     workboxOptions: {
//       skipWaiting: true,
//     },
//   },
// };
