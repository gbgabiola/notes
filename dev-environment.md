# Windows Subsystem Linux

- [Setting Up Windows for Web Development](https://blog.cloudboost.io/setting-up-windows-for-web-development-28483d245a82)

- [How to set up the perfect modern dev environment on Windows](https://char.gd/blog/2017/how-to-set-up-the-perfect-modern-dev-environment-on-windows)

- type `Windows features` in windows
- ‘Turn Windows features on or off’
- put a check next to ‘Windows Subsystem for Linux
- then restart
- Windows store, search for ‘Linux’, and go ahead and install Ubuntu.
- Install Linux

- [How do I use Bash on Ubuntu on Windows (WSL) for my VS Code terminal?](https://stackoverflow.com/questions/44450218/how-do-i-use-bash-on-ubuntu-on-windows-wsl-for-my-vs-code-terminal)

- in bash `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
- (instructions I'm getting from here) https://github.com/creationix/nvm/blob/master/README.md#installation
- After that, close, then reopen your terminal, and run `command -v nvm`
- `nvm install 10.1`
- `nvm use 10.1`
- `nvm alias default 10.1`
- `npm install -g npm@latest`
- `mkdir projectName`
- to check where you are `echo ~`
- `mkdir -p ~/proj/folderName && cd ~/project/projectName`
- `git init`
- `npm init -y`
- Open the terminal in VSC `Ctrl + ` `
- Go into `package.json`
- Under name add `"private": true,`
- Give it a name, description if you want, then git commit and we'll get a basic web page going before we add tooling
- to display `ls /mnt/c/users/<name>/projectName`?
- moving files `mv ~/projectName /mnt/c-or-d/projectName`
- install and configure `eslint` and `.editorConfig` will help with the formatting and style of your code.
- create a file .editorConfig
- ```.editorConfig
root = true
[*]
charset = utf-8
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
indent_style = space
indent_size = 2
[*.md]
indent_size = 4
```

```bash
npm install --save-dev eslint-config-airbnb-base`
```
That's for when you're doing React

```bash
(
  export PKG=eslint-config-airbnb-base;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```
- I just copy pasted that from here just so you know how I came up with that :stuck_out_tongue: https://www.npmjs.com/package/eslint-config-airbnb-base#eslint-config-airbnb-base-1
- create a file `.eslintrc.js`
```.eslintrc.js
'use strict';

module.exports = {
  root: true,
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'script',
  },
  env: {
    es6: true,
  },
  rules: {
    'no-console': ['warn', {
      allow: ['error', 'warn'],
    }],
    'prefer-destructuring': 0,
  },
  overrides: [
    {
      files: [
        'src/**/*.js',
      ],
      parserOptions: {
        sourceType: 'module',
      },
      env: {
        browser: true,
      },
    },
  ],
};
```

- `git add -A .`
- `git commit -m "initial commit"`
- create a file `.gitignore`
# Compiled source #
```
###################
*.com
*.class
*.dll
*.exe
*.o
*.so
# Packages #
############
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip
# Logs and databases #
######################
*.log
*.sql
*.sqlite
# OS generated files #
######################
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
Icon?
ehthumbs.db
Thumbs.db
# Node specific #
#################
lib-cov
*.seed
*.log
*.dat
*.out
*.pid
*.gz
pids
logs
#results
npm-debug.log
node_modules/
.nyc_output
# Project specific #
####################
/dist/
/lib/
```

- create a file `.nvmrc`
```
9.11.1
```

- `ls -A`
- Don't use beatify anymore. `eslint` and `.editorConfig` are MUCH better for that
- One thing is node_modules was accidently added to git, `.gitnore` fixes that though
`git rm -rf node_modules && npm install`

- `npm i -D http-server`
We're intalling an npm package called "http-server"
https://www.npmjs.com/package/http-server

- Just above `"test"`
`"start": "http-server docroot",` in `package.json` file
Then try running `npm start`

- Ok soo make a new git commit
`git add -A .`
`git commit -m "set up basic dev environment"`

- Make a folder `docroot`
- And in there `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Test</title>
  </head>
  <body>
    
  </body>
</html>
```

- `npm i -D webpack webpack-cli webpack-dev-server`
- Make `src/index.js`
```console.log('ey');```
- Replace `"start": "webpack-dev-server",`
- `npm rm -D http-server`
- `npm i -D babel-eslint`

- add a script `"build": "webpack",` in package.json
- then run `npm run build`, it will add a `dist` folder with `main.js`
- configure webpack







---

- [Bashing Windows](https://www.herebedragons.io/bashing-windows)
- [Use Windows Subsystem for Linux as integrated terminal](https://github.com/Microsoft/vscode/issues/22317)
- [How do I use Bash on Ubuntu on Windows (WSL) for my VS Code terminal?](https://stackoverflow.com/questions/44450218/how-do-i-use-bash-on-ubuntu-on-windows-wsl-for-my-vs-code-terminal)
- [How to install updates via command line?](https://askubuntu.com/questions/196768/how-to-install-updates-via-command-line/196777#196777)






---


## **MERN stack** (MongoDB, Express, React, Node.js)
MongoDB and Nodejs

## Browser:
- firefox/Chrome

## Text Editor or IDE:
- VSCode, Atom, SublimeText

## VSCode Plugins/Extensions:
- Angular v6 Snippets
- Angular 6 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout
- Bracket Pair Colorizer
- JavaScript (ES6) code snippets
- Live Server
- Node Security Project (nsp)
- Node.js Extension Pack
these are what u need for MERN dev
- EditorConfig for VS Code
- ESLint
- DotENV
- nginx.conf
- npm
- Project Manager
- Python
- TODO Highlights
- TODO Parser
- VS live share

npm global package:
npm i -g nodemon
npm i -g @angular/cli
https://www.npmjs.com/package/@angular/cli


### git bash for VSCode terminal
```
"terminal.integrated.shell.windows": "C:\\Users\\Algorithm\\AppData\\Local\\Programs\\Git\\bin\\bash.exe",
    "terminal.external.windowsExec": "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Node.js",
```

then you dont need to switch from one to another during your dev. process


---

## [Docker Node](https://medium.com/@guillaumejacquart/node-js-docker-workflow-12febcc0eed8)


---

## [How to Install Python 3.6.1 in Ubuntu 16.04 LTS](http://ubuntuhandbook.org/index.php/2017/07/install-python-3-6-1-in-ubuntu-16-04-lts/)

This quick tutorial is going to show you how to install the latest Python 3.6.1 in Ubuntu 16.04 LTS via PPA.

Ubuntu 16.04 comes with both Python 2.7 and Python 3.5 by default. You can install Python 3.6 along with them via a [third-party PPA](https://launchpad.net/~jonathonf/+archive/ubuntu/python-3.6) by doing following steps:

1. Open terminal via Ctrl+Alt+T or searching for “Terminal” from app launcher. When it opens, run command to add the PPA:

```
sudo add-apt-repository ppa:jonathonf/python-3.6
```

Type in your password (no visual feedback due to security reason) when it asks and hit Enter.

2. Then check updates and install Python 3.6 via commands:

```
sudo apt-get update

sudo apt-get install python3.6
```

Now you have three Python versions, use `python` command for version 2.7, `python3` for version 3.5, and/or `python3.6` for version 3.6.1.


3. To make `python3` use the new installed python 3.6 instead of the default 3.5 release, run following 2 commands:

```
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.5 1

sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 2
```

Finally switch between the two python versions for `python3` via command:

```
sudo update-alternatives --config python3
```

After selecting version 3.6:

```
python3 -V // or python3 --version
```

**UPDATE**: due to this [bug](https://bugs.launchpad.net/ubuntu/+source/python3.6/+bug/1631367), gnome-terminal won’t launch after step 3, a workaround is running following commands to recreate the symlink:

```
sudo rm /usr/bin/python3

sudo ln -s python3.5 /usr/bin/python3
```