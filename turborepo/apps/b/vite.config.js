import { defineConfig } from "vite";
import customConfig from "viteconfig";

// https://vitejs.dev/config/
export default defineConfig({
  ...customConfig,
  server: {
    ...customConfig.server,
    port: 5001
  },
});
