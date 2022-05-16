# rn-workshop-2

## VSCode Extensions (in order of priority)
1. ES7+ React/Redux/React-Native snippets [dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  1.1 Snippets for boilerplate code (rnfes - React Native Functional component Export with Stylesheet)
  1.2 [Documentation](https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md) for shortcuts
2. ESLint [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  2.1 Write cleaner code to prevent bugs in future
  2.2 Linters - Define style for codebase (eg. space vs tab, ' vs ", semicolon or anti-semicolon)
3. Prettier [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  3.1 Help you style your code (formatter)
  3.2 Integrate with ESLint
4. Highlight Matching Tag [vincaslt.highlight-matching-tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
  4.1 Easier to see which is the enclosing tag
5. Auto Rename Tag [formulahendry.auto-rename-tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
6. VSCode React Refactor [planbcoding.vscode-react-refactor](https://marketplace.visualstudio.com/items?itemName=planbcoding.vscode-react-refactor)
  6.1 Abstract Component into a file on its own

## npm, yarn, pnpm
- Follow Workshop Preparations to install node.js, npm/yarn
- To install pnpm, go to [pnpm installation documentation](https://pnpm.io/installation)
- For npm/yarn users, run `expo init`
- For pnpm users, run `expo init --no-install`, then cd to workspace and run `pnpm i --shamefully-hoist` HAHAHA because there's some problem with React and pnpm, so to install required dependencies we need to add shamefully-hoist, but it gets better after that :). Subsequent dependencies you can just do `pnpm add <package_name>`.
- Why you should use [pnpm](https://pnpm.io/) explained [here](https://www.youtube.com/watch?v=d1E31WPR70g&feature=emb_title&ab_channel=CoderOne)

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
  4.10 [Guide](https://dev-yakuza.posstree.com/en/react-native/eslint-prettier-husky-lint-staged/)

### Prettier and ESLint
1. `npm i -D eslint-config-prettier eslint-plugin-react-hooks`
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
5. Create a folder called `src` and this is where you will write all your code.
  5.1 In `src` folder, create an `index.jsx` and move the code from `App.js` here
  5.2 In `App.js` change it to
  ```
  export { default as Main } from './src';
  ```
  or 
  ```
  import Main from './src`;
  export default Main;
  ```
6. In your `package.json`, add the following scripts
  ```
  "lint": "eslint --ext .jsx --ext .jsx ./src",
  "lint:fix": "eslint --fix --ext .jsx --ext .jsx ./src",
  "format": "prettier --check ./src",
  "write": "prettier --write ./src"
  ```
7. You can run `npm run <SCRIPT_NAME>` or `npm <SCRIPT_NAME>` eg. `npm run lint:fix`.
8. Now, check that if you do not follow the styling in `.eslintrc.js`, you have red squiggly ("error"). You can always change to "warn" in `.eslintrc.js`.
8. At this juncture, do a simple check `npm run web` to see if there is any errors.

### Husky Integration with Prettier and ESLint
1. `npm i -D husky lint-staged`
2. In your `package.json`, add the following configurations
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
3. Init husky
  ```
  npx husky-init && npm install       # npm
  npx husky-init && yarn              # Yarn 1
  yarn dlx husky-init --yarn2 && yarn # Yarn 2+
  pnpm dlx husky-init && pnpm install # pnpm
  ```
4. `npx husky install`
5. `npx husky add .husky/pre-commit "npm lint:fix"`
6. `npx husky add .husky/pre-commit "npm test"` //run tests before commit
7. Add test script in `package.json`
  ```
  "scripts": {
    ...
    "test": "echo hello_world",
  }
  ```

## Usage
1. `git clone https://github.com/MarcusTw/rn-workshop-2.git <APP_NAME>`
2. Branches:
  2.1 For npm users, use [main branch](https://github.com/MarcusTw/rn-workshop-2/tree/main)
  2.2 For yarn users, use [main branch](https://github.com/MarcusTw/rn-workshop-2/tree/main) and delete `package-lock.json` and run `yarn install`. Basically replace `npm i` -> `yarn add`.
  2.3 For pnpm users, use [initialisation branch](https://github.com/MarcusTw/rn-workshop-2/tree/pnpm-initialisation). Basically replacing `npm` -> `pnpm` and `npx` -> `pnpx`.
  ```sh
  git checkout initialisation
  ```
3. In `package.json`, change `name` to your `<APP_NAME>`
4. Install dependencies
  ```sh
  npm i
  ```
5. Add your own unit tests and change the test script in `package.json`.
6. Delete this `README.md` and replace with your own...

### Specifications
| Package Manager | Version |
|-----------------|---------|
| npm             | 8.3.1   |
| yarn            | 1.22.18 |
| pnpm            | 6.32.11 |