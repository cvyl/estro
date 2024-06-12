module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }]
  },
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
};
