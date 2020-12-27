# History

Notable changes in the project. Including attempts and successes in installing and upgrade packages.


## Dec 2020

### Jest plugin

In Dec 2020, the [@vue/cli-plugin-unit-jest](https://www.npmjs.com/package/@vue/cli-plugin-unit-jest) had a vulnerability so had to be upgraded.

On the initial upgrade, the tests failed because of a lack of `babel-jest` and `@babel/core`. On running `yarn upgrade`, that issue was fixed.

### VueMarkdown

This 3rd party package is no longer maintained. I started using a fork which is published by another author on NPM. I was added as a contributor.

I decided to update my `package.json` file to use an alias. An alternative is to make the import statements more verbose with `@author/vue-markdown` instead of just `vue-markdown`.


## Mid 2020

### Lint plugin

I attempted to upgrade these outdated packages as follows:

```
yarn add @typescript-eslint/eslint-plugin@4.9.1 @typescript-eslint/parser@4.9.1 @vue/eslint-config-typescript@7.0.0 eslint-plugin-vue@7.2.0
```

But got a warning because of ESLint being less than 7.

But the `@vue/cli-plugin-eslint` actually needs ESLint to be less than 7 otherwise it gives a warning. So I am waiting on a newer version of that.

```
warning "@vue/cli-plugin-eslint > eslint-loader@2.2.1" has incorrect peer dependency "eslint@>=1.6.0 <7.0.0".
```


## Converting to Vue site - installing VueMarkdown
> Notes from setting up VueMarkdown for the first time

VueMarkdown has dev dependencies, which are noted in a compile error:

- `babel-runtime/core-js/get-iterator`
- `babel-runtime/core-js/object/keys`

```
These dependencies were not found:

* babel-runtime/core-js/get-iterator in ./node_modules/vue-markdown/dist/vue-markdown.common.js
* babel-runtime/core-js/object/keys in ./node_modules/vue-markdown/dist/vue-markdown.common.js

To install them, you can run: npm install --save babel-runtime/core-js/get-iterator babel-runtime/core-js/object/keys
```

Trying to install them gave errors:

```
npm install -D babel-runtime/core-js/get-iterator babel-runtime/core-js/object/keys
npm ERR! code ENOLOCAL
npm ERR! Could not install from "babel-runtime/core-js/get-iterator" as it does not contain a package.json file.
```

So I tried using the top-level name and not the full name. And that fixed the error.

```sh
yarn add -D babel-runtime
```
