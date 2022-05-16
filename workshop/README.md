# React Native Application

## Instructions

1. `expo init <APP_NAME> --no-install` -> `cd <APP_NAME>`
2. `pnpm i --shamefully-hoist` or `npm i` or `yarn` //i is short for install
3. `pnpm i -D eslint` //-D is short for --save-dev
4. `pnpm init @eslint/config` //hit space to select, hit enter to finalise selection
   4.1 Check syntax, find problems and enforce code style
   4.2 JavaScript modules (import/export) //even if you are using typescript
   4.3 React //even if you are using react native
   4.4 No (unless you are using TypeScript, legend)
   4.5 Node + Browser
   4.6 Answer questions about your style (config=js;indentation=spaces;quotes=single;line_endings=windows/unix(or Mac);require_semicolons=Yes;)
   4.7 [Optional] For TypeScript, run `pnpm i -D eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks`
   4.8 Add Script to package.json `"lint": "eslint ."`
   4.9 `pnpm i -D prettier eslint-plugin-prettier`
   5.10 [Guide](https://dev-yakuza.posstree.com/en/react-native/eslint-prettier-husky-lint-staged/)
