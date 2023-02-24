import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['**/test.{ts,tsx}'],
    setupFiles: '.vitest/setup'
  }
})
