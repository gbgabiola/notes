# NPM

## Table of Contents <!-- omit in toc -->

- [NPM Basics](#npm-basics)
- [Semantic Versioning](#semantic-versioning)
- [Upgrading npm dependencies](#upgrading-npm-dependencies)
- [npm ERR! Unexpected end of JSON input while parsing...](#npm-err-unexpected-end-of-json-input-while-parsing)
- [Error: EACCES: permission denied Fix](#error-eacces-permission-denied-fix)


## NPM Basics

Check version:

```sh
$ npm -v # npm --version
```

Get help:

```sh
$ npm help # npm help
```

Create `package.json`:

```sh
$ npm init
$ npm init -y # npm init --yes (to default)
```

Package.json:

- manifest file with app info
- list dependencies (name & version)
- specify if versions should be updated
- create NPM scripts
- easily create with "**npm init**"

Set defaults:

```sh
$ npm config set init-author-name "YOUR NAME"
$ npm set init-license "MIT"
```

Get defaults:

```sh
$ npm config get init-author-name
$ npm get init-license
```

Remove defaults:

```sh
$ npm config delete init-author-name
$ npm delete init-license
```

Installing local packages:

```sh
$ npm install <packageName>
$ npm install -D <packageName> # dev-dependency
```

Install without dev-dependencies:

```sh
$ npm install --production # will not include dev-dependencies
```

Removing packages:

```sh
$ npm uninstall -D <packageName># or npm remove <packageName> --save-dev
```

Install certain versions:

```sh
$ npm install <packageName>@6.3.13
```

Update package:

```sh
$ npm update <packageName>
```

Install global packages:

```sh
$ npm install -g <packageName>
```

Find root folder:

```sh
$ npm root -g
```

Remove global packages:

```sh
$ npm remove -g <packageName>
```

Listing packages:

```sh
$ npm list
$ npm list --depth 0
$ npm list --depth 1
```

NPM script:

```json
"scripts": {
    "start": "node index.js",
    "dev": "live-server"
},
```

Shortcodes:

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


## [Upgrading npm dependencies](https://www.carlrippon.com/upgrading-npm-dependencies/)

Check the dependencies that are out of date

```sh
$ npm outdated
```

All the dependencies can be safely updated to the minor _wanted_ version using:

```sh
$ npm update
```

Updating all dependencies with major changes, multiple packages can be listed also:

```sh
$ npm install <packagename>@latest <packagename>@latest
```

Update all dependencies, including major version changes using npm-check-updates package:

```sh
$ npm install -g npm-check-updates # install ncu
$ ncu # check new dependencies
$ ncu -u # update package.json
$ npm install # install new versions
```

Check and update global packages:

```sh
$ ncu -g
$ ncu -g -u # update global packages
```


## [npm ERR! Unexpected end of JSON input while parsing...](https://github.com/trufflesuite/ganache-cli/issues/505)

```sh
$ rm -rf node_modules package-lock.json
$ npm cache clean --force
$ npm cache verify
```


## Error: EACCES: permission denied Fix

Lets say for example you trying to install webpack

```sh
$ sudo npm install -g webpack@4.25.1
```

and get an error `Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/webpack/node_modules/fsevents/build'`

then try again to install it but with this at the end `--unsafe-perm=true --allow-root`

```sh
$ sudo npm install -g webpack@4.25.1 --unsafe-perm=true --allow-root
```
