import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

export default defineConfig({
    base: '/uitm-car-rental-system/', // 👈 IMPORTANT for GitHub Pages
    plugins: [
        handlebars({
            partialDirectory: [
                resolve(__dirname, 'partials/core'),
                resolve(__dirname, 'partials/component'),
            ],
        }),
    ],
})
