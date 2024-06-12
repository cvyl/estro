module.exports = {
	extends: 'next/core-web-vitals',
	rules: {
	  semi: ['error', 'never'],
	  quotes: ['error', 'single', { allowTemplateLiterals: true }],
	  'jsx-quotes': ['error', 'prefer-single']
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
  };
  