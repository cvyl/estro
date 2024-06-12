// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'unused-imports'],
	extends: [
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:import/recommended'
	],
	rules: {
		semi: ['error', 'never'],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'jsx-quotes': ['error', 'prefer-single'],
		'@typescript-eslint/no-unused-vars': 'warn',
		'unused-imports/no-unused-imports': 'warn',
		'import/no-unresolved': 'off'
	},
	overrides: [
		{
			files: ['**/*.tsx'],
			rules: {
				quotes: ['error', 'single'],
				'jsx-quotes': ['error', 'prefer-single']
			}
		}
	]
}
