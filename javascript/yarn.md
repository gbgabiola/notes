# Yarn

## Table of Contents <!-- omit in toc -->

- [Yarn Basics](#yarn-basics)
- [yarn install: Couldn't find package "package-name" on the "npm" registry](#yarn-install-couldnt-find-package-package-name-on-the-npm-registry)


## Yarn Basics

Get version:

```sh
$ yarn -v # yarn --version
```

Get help:

```sh
$ yarn help
```

Create `package.json`:

```sh
$ yarn init
$ yarn init -y # Use defaults
```

Set default configs:

```sh
$ yarn config set init-license ISC
```

Get default configs:

```sh
$ yarn config get init-license
```

Remove default config:

```sh
$ yarn delete init-license
```

Installing local packages:

```sh
$ yarn add lodash
$ yarn add moment
```

Install from `package.json`:

```sh
(add "gulp":"*")
$ yarn install
```

Removing packages:

```sh
$ yarn remove lodash
```

Install certain versions:

```sh
$ yarn add lodash@4.17.3
```

Find outdated versions:

```sh
$ yarn outdated lodash
$ yarn outdated
```

Upgrade packages versions:

```sh
$ yarn upgrade lodash
$ yarn upgrade
```

Install global packages (global must be put right after yarn):

```sh
$ yarn global add nodemon
```

Find root folder:

```sh
$ yarn global bin
```

Remove global packages:

```sh
$ yarn global remove nodemon
```

Listing packages:

```sh
$ yarn list
$ yarn list --depth=0
$ yarn list --depth=1
$ yarn list --pattern gulp
```

Installing as dev dependency:

```sh
$ yarn add gulp -D or --dev
```

Remove dev dependency:

```sh
$ yarn remove gulp
```

Verify that versions  match lock file:

```sh
$ yarn check
```

Create `yarn.lock` file:

```sh
$ yarn import
```

Add script:

```json
"scripts": {
    "dev": "nodemon index.js"
},
```

Run script:

```sh
$ yarn run dev
```

Get licenses:

```sh
$ yarn license
```

Create gzip archive of dependencies:

```sh
$ yarn pack
$ yarn pack mydep
```

List global cache packages:

```sh
$ yarn cache list
$ yarn cache list --pattern lodash
```


## [yarn install: Couldn't find package "package-name" on the "npm" registry](https://github.com/yarnpkg/yarn/issues/6029)

```sh
$ npm login # or yarn --registry https://registry.npmjs.org
```
