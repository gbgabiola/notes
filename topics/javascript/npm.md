# NPM

- `npm -v` or `npm --version` checks npm version
- `npm` or `npm help` returns help instructions
- `npm init` creates `package.json` file and prompts questions
  - `-y` or `--yes` flag sets yes to all questions as default
- `package.json` file
  - manifest file with app info
  - list dependencies (name & version)
  - specify if versions should be updated
  - create NPM scripts
  - easily create with "**npm init**"
- set default configs for `package.json`

  ```sh
  $ npm config set init-author-name "YOUR NAME"
  $ npm set init-license "MIT"
  ```
- get default configs for `package.json`

  ```sh
  $ npm config get init-author-name
  $ npm get init-license
  ```

- remove default configs for `package.json`

  ```sh
  $ npm config delete init-author-name
  $ npm delete init-license
  ```

- `npm install` will install package/s saved in `package.json`
  - with `-g` flag installs the package/s globally
  - with `--production` flag will install package/s not including dev-dependencies
- `npm install <packageName>` will install specific package/s
  - with `-D` flag will install package/s as dev-dependencies
- dev-dependencies are package/s only used in development, not needed in production, e.g.,
  - gulp task runner
  - minify js
  - compile sass files
  - etc
- `npm install <packageName>@4.17.18` to install certain version of a package/s
- `npm uninstall <packageName>` or `npm remove <packageName>` will remove package/s
  - with `-g` flag removes the package/s globally
  - with `-D` flag will remove packages as dev-dependencies
- `npm update <packageName>` to update package/s to the latest safe version
- `npm root -g` finds the root folder globally
- `npm list` or `npm list --depth 0` or `npm list --depth 1` will lists the packages installed
  - with `-g` flag will lists all packages globally
- npm scripts

  ```sh
  "scripts": {
      "start": "node index.js",
      "dev": "live-server"
  ```
- shortcodes:
  - `-g` or `--global`
  - `i` or `install`
  - `-D` or `--save-dev`


## Semantic Versioning

- 8.2.6 package version
- Major (8) version changes breaks the API
- Minor (2) version presents new features and does not break API
- Patch (6) is for bug fixes
- caret (`^`) symbol will install the latest minor version
- tilde (`~`) symbol will keep the minor version and only update the latest patch version
- asterisk (`*`) symbol will install the latest version of the package
