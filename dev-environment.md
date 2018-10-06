# Windows Subsystem Linux Setup for Development

- [How to Install Zsh and Oh My Zsh on Windows 10](https://evdokimovm.github.io/windows/zsh/shell/syntax/highlighting/ohmyzsh/hyper/terminal/2017/02/24/how-to-install-zsh-and-oh-my-zsh-on-windows-10.html)
- [Shell Configuration: Hack Your ZSH](https://blog.apptension.com/2018/08/30/shell-configuration-hack-your-zsh/?utm_source=reddit.com&utm_medium=social&utm_campaign=reddit_zsh)
- [[Guide] Developing on Windows 10 using WSL](https://discourse.roots.io/t/guide-developing-on-windows-10-using-wsl/9380)
- [Webdev on Windows with WSL and VS Code](https://daverupert.com/2018/04/developing-on-windows-with-wsl-and-visual-studio-code/)
- [My Windows 10 Dev Setup](https://medium.com/@dariuszparys/my-windows-10-dev-setup-67d7aecb63a6)
- [How to set up the perfect modern dev environment on Windows](https://char.gd/blog/2017/how-to-set-up-the-perfect-modern-dev-environment-on-windows)
- [Using WSL and MobaXterm to Create a Linux Dev Environment on Windows](https://nickjanetakis.com/blog/using-wsl-and-mobaxterm-to-create-a-linux-dev-environment-on-windows)
- [My WSL Setup for Development](https://github.com/lloydstubber/my-wsl-setup)
- [Hyper.js + Oh My ZSH as Ubuntu on Windows (WSL) Terminal](https://medium.com/@ssharizal/hyper-js-oh-my-zsh-as-ubuntu-on-windows-wsl-terminal-8bf577cdbd97)
- [WSL / Ubuntu / ZSH and Hyper Terminal](https://fcbrossard.net/blog/wsl-ubuntu-zsh-hyper-terminal)
- [Running oh my zsh on Windows 10](https://winsmarts.com/running-oh-my-zsh-on-windows-10-6fcb0fbc736b)
- [Windows Subsystem for Linux w/ zsh, tmux & Docker](https://blog.questionable.services/article/windows-subsystem-linux-zsh-tmux-docker/)
- [Setting up Windows Subsystem for Linux with zsh + oh-my-zsh + ConEmu](https://blog.joaograssi.com/windows-subsystem-for-linux-with-oh-my-zsh-conemu/)
- [How to Use Zsh (or Another Shell) in Windows 10](https://www.howtogeek.com/258518/how-to-use-zsh-or-another-shell-in-windows-10/)
- [How to Set up Bash on Ubuntu on Windows, Zsh, and Hyper Terminal](https://davidtranscend.com/blog/windows-terminal-workflow-guide/)
- []()

- [Epic Development Environment using Windows Subsystem for Linux](https://medium.com/@johnwoodruff91/epic-dev-environment-with-wsl-dc81e234ae61)

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


## Get your terminal
- Download Hyper.js [here](https://hyper.is/)

## Automatically open the terminal in Bash
- Open up Hyper and type `Ctrl` + `,`
- Scroll down to shell and change it to `shell: 'C:\\Windows\\System32\\bash.exe' then `shellArgs: ['--login']` or `shell: 'wsl.exe'` then `shellArgs: []`

## Install Zsh
- Run `sudo apt-get install zsh`
- Open bash profile `nano ~/.bashrc`
- Set ZSH as default:
```sh
# Launch zsh
if [ -t 1 ]; then
exec zsh
fi
```
or `bash -c zsh`

## Install a framework for ZSH
- Install Oh My Zsh with `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
   - Read docs [here](https://github.com/robbyrussell/oh-my-zsh) on how to add more plugins and change themes (I went with their out of the box 'robbyrussell').

## Add plugins in zsh
- open .zshrc file `nano ~/.zshrc`
- It will look like this `plugins=(git colored-man-pages zsh-syntax-highlighting zsh-autosuggestions)`

## Fix the ls and cd colours
Out of the box when you `ls` or `cd` + `Tab` you get a ugly background colours on the directories. To fix this, open ~/.zshrc file and add this to the end:
```sh
#Change ls colours
LS_COLORS="ow=01;36;40" && export LS_COLORS

#make cd use the ls colours
zstyle ':completion:*' list-colors "${(@s.:.)LS_COLORS}"
autoload -Uz compinit
compinit
```

## Install Git
- Run this `sudo apt update`
- Then run `sudo apt install git`

## Setup a SSH key and link to your Github
- Follow the Linux steps [here](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-linux) to create a key and add it to your SSH agent
- Then type `cat ~/.ssh/id_rsa.pub`
- Copy your key from the terminal and paste it into your Github keys

## Install Node Version Manager
 It is a little slow but is a known issue. To make the startup time a little faster:
 ```sh
 # Defer initialization of nvm until nvm, node or a node-dependent command is
# run. Ensure this block is only run once if .bashrc gets sourced multiple times
# by checking whether __init_nvm is a function.
if [ -s "$HOME/.nvm/nvm.sh" ] && [ ! "$(whence -w __init_nvm)" = function ]; then
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"
  declare -a __node_commands=('nvm' 'node' 'npm' 'yarn' 'gulp' 'grunt' 'webpack')
  function __init_nvm() {
    for i in "${__node_commands[@]}"; do unalias $i; done
    . "$NVM_DIR"/nvm.sh
    unset __node_commands
    unset -f __init_nvm
  }
  for i in "${__node_commands[@]}"; do alias $i='__init_nvm && '$i; done
fi
```


## How to Uninstall (or Reinstall) Windows 10’s Ubuntu Bash Shell
### How to Uninstall the Ubuntu Environment and Keep Your Home Folder
To remove the downloaded Bash environment, open a Command Prompt window and run the following command. This will uninstall and delete the Ubuntu user environment from your system, including any Linux applications you downloaded and installed with apt-get or by compiling them from source.

`lxrun /uninstall`

![uninstall](https://www.howtogeek.com/wp-content/uploads/2016/06/ximg_5775b6e48c76c.png.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.8WCVcHMC-F.png)

This command won’t delete your home folder and the files in it. If you’d like to completely wipe the Linux system, see the next section.

### How to Uninstall the Ubuntu Environment and Delete Your Home Folder
The above command won’t delete your Ubuntu user account’s home folder. The home folder contains user preferences and files. If you install a new Ubuntu user space image, the files in your home folder will be preserved and carried over.

If you want to prevent this from happening, you’ll need to remove the downloaded Bash environment and completely wipe your home folder. To do so, run the following command:

`lxrun /uninstall /full`

You’ll be asked to confirm your choice. To automatically accept the confirmation, run the `lxrun /uninstall /y /full` command instead.

![uninstall full](https://www.howtogeek.com/wp-content/uploads/2016/06/ximg_5775d5727fb2a.png.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.JTG6PTaTpY.png)

### How to Reinstall the Ubuntu Environment
To reinstall the Bash environment, you can just run the bash command again, as you did when installing Bash the first time. If a Ubuntu user space image isn’t installed, it will automatically download and install it.

You can also run the following command yourself. This is the same command that bash.exe automatically runs if you launch it without a Ubuntu user space image installed.

`lxrun /install`

Whether you run `bash` or `lxrun /install`, the command will ask you to confirm your choice and enter a username and password for the user account in the Bash environment.

To skip this process, you can run the following command instead. This command will automatically agree to the prompts, setting the “root” account as the default user account without a password. This is helpful if you want to automate the process of installing Bash in a script.

`lxrun /install /y`

![install](https://www.howtogeek.com/wp-content/uploads/2016/06/ximg_5775b6a54bc16.png.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.O7ApTrPisX.png)

### How to Remove Windows 10’s Bash Tools Completely
If you’d like to remove the bash.exe tool and the Windows Subsystem for Linux from your computer completely, you’ll need to revisit the “Turn Windows Features On or Off” dialog in the Control Panel.

To find it, open the Control Panel and head to Programs > Turn Windows Features On or Off.

Uncheck the “Windows Subsystem for Linux” option here and click OK. Windows will uninstall the Windows Subsystem for Linux, bash.exe, and lxrun.exe commands. You can always revisit the Windows Features dialog to reinstall them in the future.

![remove completely](https://www.howtogeek.com/wp-content/uploads/2016/06/ximg_5775d5a6d9307.png.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic._PkHXdKHls.png)

