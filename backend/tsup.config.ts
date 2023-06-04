import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['esm'],
  target: 'es2022',
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
})