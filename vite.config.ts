import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Numele repository-ului GitHub. Site-ul va fi servit de la
// https://aoprisan.github.io/cezar/, deci base-ul trebuie să fie „/cezar/".
export default defineConfig({
  base: '/cezar/',
  plugins: [react()],
})
