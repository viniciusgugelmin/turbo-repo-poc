import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  server: {
    base: process.env.VITE_BASE_URL,
    strictPort: true,
    open: true,
    proxy: {
      [process.env.VITE_A_PATH]: {
        target: `${process.env.VITE_BASE_URL}:${process.env.VITE_A_PORT}`,
      },
      [process.env.VITE_B_PATH]: {
        target: `${process.env.VITE_BASE_URL}:${process.env.VITE_B_PORT}`,
      },
    },
  },
};
