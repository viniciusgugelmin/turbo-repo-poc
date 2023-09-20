import { defineConfig } from "vite";
import customConfig from "viteconfig";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  ...customConfig,
  plugins: [...customConfig.plugins, vue()],
  server: {
    ...customConfig.server,
    port: process.env.VITE_A_PATH,
  },
});
