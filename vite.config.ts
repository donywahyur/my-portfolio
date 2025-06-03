import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Bind to all network interfaces inside the container
    port: 5173, // Ensure the port matches your Docker setup
    strictPort: true, // Fail immediately if the port is unavailable
    hmr: {
      protocol: "wss", // Use WebSockets over HTTPS
      host: "dynodhan.xyz", // Use the domain where the browser is running
    },
  },
});
