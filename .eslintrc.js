// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['unused-imports'],
      extends: [
	  'next/core-web-vitals',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:import/recommended'
    ],
      ignorePatterns: [
  
          '*.min.*',
  
          'CHANGELOG.md',
  
          'dist',
  
          'LICENSE*',
  
          'output',
  
          'coverage',
  
          'public',
  
          'temp',
  
          'packages-lock.json',
  
          'pnpm-lock.yaml',
  
          'yarn.lock',
  
          '__snapshots__',
  
          '!.github',
  
          '!.vitepress',
  
          '!.vscode',
  
      ],
      overrides: [
  
          {
  
              files: [
  
                  '*.config.[tj]s',
  
                  'app/**/*.[tj]sx',
  
                  'src/app/**/*.[tj]sx',
  
                  'src/views/**/*.[tj]sx',
  
                  'views/**/*.[tj]sx',
  
                  'src/store/**/*.[tj]s',
  
                  'store/**/*.[tj]s',
  
              ],
  
              rules: {
  
                  'import/no-default-export': 'off',
  
              },
  
          },
  
          {
  
              files: ['*.d.ts'],
  
              rules: {
  
                  'import/no-duplicates': 'off',
  
              },
  
          },
  
          {
  
              files: ['*.js'],
  
              rules: {
  
                  '@typescript-eslint/no-var-requires': 'off',
  
              },
  
          },
  
          {
  
              files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
  
              rules: {
  
                  'no-unused-expressions': 'off',
  
              },
  
          },
  
      ],
      rules: {
  
          // import
  
          'import/named': 'off',
  
          'import/order': 'off',
  
          'import/first': 'error',
  
          'import/no-mutable-exports': 'error',
  
          'import/no-unresolved': 'off',
  
          'import/no-absolute-path': 'off',
    
          '@typescript-eslint/no-empty-function': 'off',
  
          '@typescript-eslint/interface-name-prefix': 'off',
  
          '@typescript-eslint/explicit-function-return-type': 'off',
  
          '@typescript-eslint/no-explicit-any': 'off',
  
          '@typescript-eslint/camelcase': 'off',
  
          '@typescript-eslint/no-var-requires': 'off',
  
          '@typescript-eslint/ban-ts-ignore': 'off',
  
          '@typescript-eslint/ban-ts-comment': 'off',
  
          '@typescript-eslint/explicit-module-boundary-types': 'off',
  
          '@typescript-eslint/ban-types': 'off',
  
          '@typescript-eslint/consistent-type-imports': 'warn',
  
  
          '@typescript-eslint/no-unused-vars': 'off',
  
          'unused-imports/no-unused-imports': 'error',
  
          'unused-imports/no-unused-vars': [
  
              'warn',
  
              {
  
                  vars: 'all',
  
                  varsIgnorePattern: '^_',
  
                  args: 'after-used',
  
                  argsIgnorePattern: '^_',
  
              },
  
          ],
        semi: ['error', 'never'],
        quotes: ['error', 'single', {
            allowTemplateLiterals: true
        }],
  
        'no-empty': 'warn',
  
        'no-fallthrough': 'error',
      },
  
  }