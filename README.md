# rn-workshop-2

## VSCode Extensions
1. ES7+ React/Redux/React-Native snippets [dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  1.1 Snippets for boilerplate code (rnfes - React Native Functional component Export with Stylesheet)
  1.2 [Documentation](https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md) for shortcuts
2. VSCode React Refactor [planbcoding.vscode-react-refactor](https://marketplace.visualstudio.com/items?itemName=planbcoding.vscode-react-refactor)
  2.1 Abstract Component into a file on its own
3. ESLint [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  3.1 Write cleaner code to prevent bugs in future
  3.2 Linters - Define style for codebase (eg. space vs tab, ' vs ", semicolon or anti-semicolon)
4. Prettier [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  4.1 Help you style your code (formatter)
  4.2 Integrate with ESLint
5. Highlight Matching Tag [vincaslt.highlight-matching-tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
  5.1 Easier to see which is the enclosing tag
6. Auto Rename Tag [formulahendry.auto-rename-tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

## npm, yarn, pnpm
- Follow Workshop Preparations to install node.js, npm/yarn
- To install pnpm, go to [pnpm installation documentation](https://pnpm.io/installation)
- For npm/yarn users, run `expo init`
- For pnpm users, run `expo init --no-install`, then cd to workspace and run `pnpm i --shamefully-hoist` HAHAHA because there's some problem with React and pnpm, so to install required dependencies we need to add shamefully-hoist, but it gets better after that :). Subsequent dependencies you can just do `pnpm add <package_name>`.

## React Native Application

### Instructions
1. `expo init <APP_NAME> --no-install` -> `cd <APP_NAME>`
2. `npm i` or `yarn` or `pnpm i --shamefully-hoist` //i is short for install, some problem with React and pnpm so on installing react/react-native packages, need to use --shamefully-hoist, not needed for other packages
3. `npm i -D eslint` //-D is short for --save-dev
4. `npm init @eslint/config` //hit space to select, hit enter to finalise selection
  4.1 Check syntax, find problems and enforce code style
  4.2 JavaScript modules (import/export) //even if you are using typescript
  4.3 React //even if you are using react native
  4.4 No (unless you are using TypeScript, legend)
  4.5 Node + Browser
  4.6 Answer questions about your style (config=js;indentation=spaces;quotes=single;line_endings=windows/unix(or Mac);require_semicolons=Yes;)
  4.7 [Optional] For TypeScript, run `npm i -D eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks`
  4.8 Add Script to package.json `"lint": "eslint ."`
  4.9 `npm i -D prettier eslint-plugin-prettier`
  5.10 [Guide](https://dev-yakuza.posstree.com/en/react-native/eslint-prettier-husky-lint-staged/)

### Prettier, ESLint and Husky integration
1. `npm i -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks husky lint-staged`
2. Create a `.prettierignore` following:
  ```
  # Ignore artifacts:
  build
  coverage
  ```
3. Create a `.prettierrc.js` following:
  ```
  module.exports = {
    singleQuote: true,
    trailingComma: 'all',
  };
  ```
4. Follow this [gist](https://gist.github.com/MarcusTw/97a14cba79a604b2b18e58b474d31350), copy your `.eslintrc.js`.
5. In your `package.json`, add the following scripts
  5.1 `"lint": "eslint --ext .jsx --ext .jsx ./src"`
  5.2 `"lint:fix": "eslint --fix --ext .jsx --ext .jsx ./src"`
  5.3 `"format": "prettier --check ./src"`
  5.4 `"write": "prettier --write ./src"`
6. In your `package.json`, add the following configurations
  ```
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
        "prettier --config .prettierrc --write",
        "git add"
    ]
  },
  "husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
  },
  ```
7. Init husky
  ```
  npx husky-init && npm install       # npm
  npx husky-init && yarn              # Yarn 1
  yarn dlx husky-init --yarn2 && yarn # Yarn 2+
  pnpm dlx husky-init && pnpm install # pnpm
  ```
8. `npx husky install`
9. `npx husky add .husky/pre-commit "npm lint:fix"`
10. `npx husky add .husky/pre-commit "npm test"` //run tests before commit
11. Add test script in `package.json`
  ```
  "scripts": {
    ...
    "test": "echo hello_world",
  }
  ```

### Usage
1. `git clone https://github.com/MarcusTw/rn-workshop-2.git <APP_NAME>`
2. [Optional] If you are using `npm` or `yarn`, please delete `pnpm-lock.yaml`
3. In `package.json`, change `"name"` to your `<APP_NAME>`
4. Delete this `README.md` and replace with your own...