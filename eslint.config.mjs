import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";
import jestDom from "eslint-plugin-jest-dom";
import a11yPlugin from "eslint-plugin-jsx-a11y";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import prettierPlugin from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import securityPlugin from "eslint-plugin-security";
import testingLibrary from "eslint-plugin-testing-library";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      ".next",
      "dist",
      "build",
      "coverage",
      "node_modules",
      "out",
      "**/*.config.{js,ts}",
      "**/*.d.ts",
      "next-env.d.ts",
    ],
  },
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
    ],
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "jsx-a11y": a11yPlugin,
      security: securityPlugin,
      perfectionist: perfectionistPlugin,
      prettier: prettierPlugin,
      "testing-library": testingLibrary,
      "jest-dom": jestDom,
      "@next/next": nextPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: ["./tsconfig.json"],
        ecmaFeatures: { jsx: true },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...a11yPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...securityPlugin.configs.recommended.rules,

      // Import Rules
      "import/default": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/namespace": ["error", { allowComputed: true }],
      "import/no-absolute-path": "error",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // TypeScript Rules
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-misused-promises": "off",

      // React Rules
      "react/jsx-no-useless-fragment": "error",
      "react/self-closing-comp": "error",
      "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Next.js Specific Rules
      "@next/next/no-img-element": "error",
      "@next/next/no-page-custom-font": "error",
      "@next/next/no-sync-scripts": "error",
      "@next/next/no-title-in-document-head": "error",
      "@next/next/no-html-link-for-pages": "error",

      // General Rules
      "no-duplicate-imports": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      complexity: ["error", 30],
      "max-depth": ["error", 4],
      "max-lines-per-function": ["error", { max: 200, skipBlankLines: true, skipComments: true }],

      // Accessibility Rules
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-role": "error",

      // Security Rules
      "security/detect-object-injection": "warn",
      "security/detect-non-literal-fs-filename": "error",

      // Code Organization
      "perfectionist/sort-interfaces": [
        "error",
        {
          type: "natural",
          order: "asc",
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
        },
      ],
    },
  },
  // Configuration for Next.js API routes
  {
    files: ["pages/api/**/.{ts,js}", "app/api/**/.{ts,js}"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-console": "off", // Allow console in API routes
    },
  },
  // Configuration for Next.js configuration files
  {
    files: ["next.config.{js,ts}", "middleware.{js,ts}"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "import/no-default-export": "off",
    },
  }
);
