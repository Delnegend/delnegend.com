import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite-plus'

const rootDir = import.meta.dirname

export default defineConfig({
	build: {
		target: 'esnext'
	},
	fmt: {
		semi: false,
		singleQuote: true,
		sortImports: {
			groups: [
				'type-import',
				['value-builtin', 'value-external'],
				'type-internal',
				'value-internal',
				['type-parent', 'type-sibling', 'type-index'],
				['value-parent', 'value-sibling', 'value-index'],
				'unknown'
			]
		},
		sortTailwindcss: {
			functions: ['clsx', 'cn'],
			preserveWhitespace: true,
			stylesheet: './src/assets/main.css'
		},
		tabWidth: 2,
		trailingComma: 'none',
		useTabs: true
	},
	lint: {
		categories: {
			correctness: 'error',
			pedantic: 'warn',
			perf: 'warn',
			restriction: 'error',
			style: 'warn',
			suspicious: 'error'
		},
		env: {
			browser: true
		},
		plugins: ['typescript', 'unicorn', 'oxc', 'vue'],
		rules: {
			'sort-imports': 'off',
			'eslint-plugin-vue/max-props': 'off',
			'eslint-plugin-unicorn/filename-case': 'off',
			'eslint/sort-keys': 'off',
			'eslint-plugin-vue/define-props-destructuring': 'off',
			'eslint-plugin-unicorn/no-null': 'off'
		}
	},
	plugins: [vue(), tailwindcss()],
	resolve: {
		alias: {
			'~': path.resolve(rootDir, './src')
		}
	},
	staged: {
		'*': 'vp check --fix'
	}
})
