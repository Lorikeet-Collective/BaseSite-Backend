import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import ts from "typescript";

export default defineConfig([
  {
    ignores: ["dist"],
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
    plugins: { js, ts },
    extends: ["js/recommended"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "none",
    },
  },
  tseslint.configs.recommended,
]);
