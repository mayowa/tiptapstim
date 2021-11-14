import { defineConfig } from 'tsup'

export default defineConfig({
	splitting: false,
	sourcemap: true,
	clean: false,
	target: 'es6',
	outDir: 'public/assets',
	entryPoints: ['src/main.ts'],
})
