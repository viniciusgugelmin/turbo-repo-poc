// vite.config.js
import { defineConfig } from "file:///home/bruno/dev/turbo-repo-poc/turborepo/node_modules/vite/dist/node/index.js";
import customConfig from "file:///home/bruno/dev/turbo-repo-poc/turborepo/packages/viteconfig/index.js";
var vite_config_default = defineConfig({
  ...customConfig,
  server: {
    ...customConfig.server,
    port: 5001
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9icnVuby9kZXYvdHVyYm8tcmVwby1wb2MvdHVyYm9yZXBvL2FwcHMvYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvYnJ1bm8vZGV2L3R1cmJvLXJlcG8tcG9jL3R1cmJvcmVwby9hcHBzL2Ivdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvYnJ1bm8vZGV2L3R1cmJvLXJlcG8tcG9jL3R1cmJvcmVwby9hcHBzL2Ivdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGN1c3RvbUNvbmZpZyBmcm9tIFwidml0ZWNvbmZpZ1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLi4uY3VzdG9tQ29uZmlnLFxuICBzZXJ2ZXI6IHtcbiAgICAuLi5jdXN0b21Db25maWcuc2VydmVyLFxuICAgIHBvcnQ6IDUwMDFcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVCxTQUFTLG9CQUFvQjtBQUM1VixPQUFPLGtCQUFrQjtBQUd6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixHQUFHO0FBQUEsRUFDSCxRQUFRO0FBQUEsSUFDTixHQUFHLGFBQWE7QUFBQSxJQUNoQixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==