import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// 打包成单页面
export default defineConfig({
  plugins: [viteSingleFile()],
});
