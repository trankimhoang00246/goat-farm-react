import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Đường dẫn gốc cho các file tĩnh. Giữ nguyên '/' nếu deploy tại root.
  build: {
    outDir: "dist", // thư mục output
    emptyOutDir: true,
  },
});
