import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    globalIgnores([
        'node_modules/',
        'dist/',
        'build/',
        'scripts/',
        'src/routeTree.gen.ts',
        '*.env*',
        '*.d.ts',
    ]),
    {
        name: 'base-rules',
        plugins: {
            import: importPlugin,
        },
        rules: {
            'arrow-body-style': 'off',
            'import/prefer-default-export': 'off',
            'no-shadow': 'off',
            'camelcase': 'off',
            'no-nested-ternary': 'off',
            'class-methods-use-this': 'off',
            'no-await-in-loop': 'off',
            'no-unused-vars': 'off',
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            
            'react-refresh/only-export-components': 'warn',
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            import:importPlugin,
        },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
            prettierConfig,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            '@typescript-eslint/no-shadow': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn', 
            '@typescript-eslint/ban-ts-comment': 'warn', 
            '@typescript-eslint/no-explicit-any': 'warn',
            
            'react/react-in-jsx-scope': 'off',
        }
    },
]);
