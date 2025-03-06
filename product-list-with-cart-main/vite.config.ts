import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/frontend-mentor-solo/product-list-with-cart-main/",
  plugins: [react()],
  css: {
  },
  build: {
    outDir: './dist/product-list-with-cart-main/'
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
