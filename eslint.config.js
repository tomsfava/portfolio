import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier"

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      "react/jsx-uses-react": "off", // Desativa a regra que exige a importação do React
      "react/react-in-jsx-scope": "off", // Desativa a regra que exige o React no escopo
    },
  },
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error"
    },
  },
  {
    extends: ["plugin:prettier/recommended"]
  },
];
