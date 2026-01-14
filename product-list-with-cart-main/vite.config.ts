import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  base: "",
  plugins: [react(),svgr()],
  css: {
  },
  build: {
    outDir: 'dist'
}
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'
// import svgr from 'vite-plugin-svgr';

// export default defineConfig({
//   base: "/frontend-mentor-solo/product-list-with-cart-main/",
//   plugins: [react(), svgr()],
//   resolve: {
//     alias: {
//       'bulma': 'node_modules/bulma/css/bulma.css',
//     },
//   },
//   build: {
//     outDir: './dist/product-list-with-cart-main/'
// }
// })
