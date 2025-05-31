import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

export default defineConfig({
  base: '/uitm-car-rental-system/', // 👈 Important for GitHub Pages
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, 'partials/core'),
        resolve(__dirname, 'partials/component'),
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
        about: resolve(__dirname, 'about.html'),
        blog: resolve(__dirname, 'blog.html'),
        blogSingle: resolve(__dirname, 'blog-single.html'),
        car: resolve(__dirname, 'car.html'),
        carSingle: resolve(__dirname, 'car-single.html'),
        contact: resolve(__dirname, 'contact.html'),
        mainPage: resolve(__dirname, 'main.html'),
        myBooking: resolve(__dirname, 'my-booking.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        service: resolve(__dirname, 'services.html'),
      },
    },
  },
})
