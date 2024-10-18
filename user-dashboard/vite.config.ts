import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "userDashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./Dashboard": "./src/views/Dashboard",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
  },
  server: {
    port: 3001, // Establece el puerto deseado
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
});
