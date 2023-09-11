import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  server: {
    base: process.env.VITE_BASE_URL,
    strictPort: true,
    open: true
  }
};
