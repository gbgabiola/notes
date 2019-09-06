# Node <!-- omit in toc -->

- [Install and Update NVM](#install-and-update-nvm)
- [Verify nvm has been installed](#verify-nvm-has-been-installed)
- [Install nodejs](#install-nodejs)
- [List available node.js versions](#list-available-nodejs-versions)
- [Show current node js version in use](#show-current-node-js-version-in-use)
- [Set default version](#set-default-version)
- [Properly upgrade node using nvm](#properly-upgrade-node-using-nvm)
- [NPM list of globally installed packages](#npm-list-of-globally-installed-packages)

## Install and Update NVM

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

## Verify nvm has been installed

It should output `nvm`. If it doesn't, close and re-open your terminal.

```sh
command -v nvm

nvm --version # to check the installed version of nvm
```

If you get an error, you can manually set the NVM source in your profile by adding the following to your `~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc` file.
```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## Install nodejs

To download and install the latest release of node
```sh
nvm install node # "node" is an alias for the latest version which is 12.9.1 currently
```

To install a specific version of node:
```sh
nvm install 6.14.4 # or 10.10.0, 8.9.1, etc
```

## List available node.js versions

```sh
nvm ls
->     v10.16.3
default -> 10.16.3 (-> v10.16.3)
node -> stable (-> v12.7.0) (default)
stable -> 12.7 (-> v12.7.0) (default)
iojs -> N/A (default)
```

## Show current node js version in use

```sh
nvm current
v10.16.3
```

## Set default version

Use format nvm alias:
```sh
nvm alias default 10.16.3
default -> 10.16.3 (-> v10.16.3)
```


## Properly upgrade node using nvm

**Latest version:**
```sh
nvm install node --reinstall-packages-from=node
nvm install node --latest-npm --reinstall-packages-from=node # with latest npm
```

**Stable (LTS) version:**
```sh 
nvm install lts/* --reinstall-packages-from=node
nvm install --lts --latest-npm --reinstall-packages-from='lts/*' # with latest npm
```

This will install the appropriate version and reinstall all packages from the currently used node version. This saves you from manually handling the specific versions.


## NPM list of globally installed packages

```sh
npm list -g --depth 0
```

- `list -g` display a tree of every package found in the user’s folders (without the -g option it only shows the current directory’s packages)
- `--depth 0` / `--depth=0` avoid including every package’s dependencies in the tree view