import type { Config } from 'tailwindcss'
import { tailwindConfig } from './src/styles/config/tailwind';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  ...tailwindConfig,
} satisfies Config
