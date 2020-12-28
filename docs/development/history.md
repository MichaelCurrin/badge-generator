# History

Notable changes in the project. Including attempts and successes in installing and upgrade packages. The most recent changes are first.


## Dec 2020

### Jest plugin

In Dec 2020, the [@vue/cli-plugin-unit-jest](https://www.npmjs.com/package/@vue/cli-plugin-unit-jest) had a vulnerability so had to be upgraded.

On the initial upgrade, the tests failed because of a lack of `babel-jest` and `@babel/core`. On running `yarn upgrade`, that issue was fixed.

### Add tests

The Vue Jest plugin was added to the project.

See release [2.2.0](https://github.com/MichaelCurrin/badge-generator/releases/tag/v2.2.0).

The followed dev dependencies were added:

- `@types/jest"`
- `@vue/cli-plugin-unit-jest`
- `@vue/test-utils`

### VueMarkdown

**Summary**

I had issues using the `vue-markdown` package. The original is insecure. The fork is complex - it requires permissions for network when running tests, the types are not available and adding type definitions in the project caused a break. So the easiest was to go with a low level package - `markdown-it`.

**2.3.0**

The 3rd party package `vue-markdown` is no longer maintained. I started using a fork which is published by another author on NPM. I was added as a contributor. I decided to update my `package.json` file to use an alias.

**2.6.0**

Later I went trying going with verbose with `@adapttive/vue-markdown` to keep `package.json` simpler. This also required imports to be updated. But the change caused a break - I found types need to be set too - using `@types/vue-markdown` worked before (though it would have drifted eventually) and doesn't work anymore. And there is no equivalent for the fork. I tried adding `vue-markdown.d.ts` with the declaration as per the TS CLI help. That then said I was using `VueMarkdown` as an interface rather than as a value, so that didn't work.

I decided then to go to the core code and use [markdown-it](https://github.com/markdown-it/markdown-it) package and my own [Markdown.vue](/src/components/Markdown.vue) component. That works great.

Also of interest is [markdown-it-vue](https://github.com/ravenq/markdown-it-vue/). That and `vue-markdown` both handle many things I don't need like code fence blocks, emojis and Katex. The `markdown-it` docs explain how to use highlighting which I haven't figured out even from looking at `vue-markdown`, but I don't need highlighting for this project so I am fine without it.


## Mid 2020

### Add TypeScript support

The Vue TypeScript plugin was added to the project, which added some base files and added packages.

See release [2.0.0](https://github.com/MichaelCurrin/badge-generator/releases/tag/v2.0.0).

The following dev dependencies were added:

- `@types/vue-markdown`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `@vue/cli-plugin-typescript`
- `@vue/eslint-config-typescript`
- `eslint` (downgraded from `7.X`)
- `typescript`

### Lint plugin

I attempted to upgrade these outdated packages as follows:

```
yarn add @typescript-eslint/eslint-plugin@4.9.1 @typescript-eslint/parser@4.9.1 @vue/eslint-config-typescript@7.0.0 eslint-plugin-vue@7.2.0
```

But got a warning because of ESLint being less than 7.

Though the `@vue/cli-plugin-eslint` actually needs ESLint to be less than 7 otherwise it gives a warning. So I am waiting on a newer version of that.

```
warning "@vue/cli-plugin-eslint > eslint-loader@2.2.1" has incorrect peer dependency "eslint@>=1.6.0 <7.0.0".
```

Note that `eslint-plugin-vue@7.3.0` works with ESLint `6.2.0` and `7.0.0`.


## Converting to Vue site

### Installing VueMarkdown
> Notes from setting up VueMarkdown for the first time

Update: This may note have been necessary to add as an explicit dependencies as doing a fresh install solves this.

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

### Base dev dependencies

Copied from my [Vue Quickstart](https://github.com/MichaelCurrin/vue-quickstart) for Vue 2, here are standard dev dependencies that come with a Vue project. This helps explain why they exist in [package.json](/package.json).

```json
{
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.6",
    "@vue/cli-plugin-eslint": "~4.5.6",
    "@vue/cli-service": "~4.5.6",
    "@vue/eslint-config-prettier": "^6.0.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-vue": "^6.2.2",
    "prettier": "^2.1.1",
    "vue-template-compiler": "^2.6.11"
  }
}
```
