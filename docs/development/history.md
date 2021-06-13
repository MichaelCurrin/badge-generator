# Change history

Description of decisions in this project which were complex and worth recording. Including failed attempts or successes around installing and upgrading packages or structuring the app.

This guide is not meant to be complete or like a detailed changelog. But it is used for understanding _why_ and _how_ changes were made and why certain approaches were not feasible. This is meant to help me avoid repeating mistakes by tracking my learning and activity.

For a fuller description features and fixes, see [Releases](https://github.com/MichaelCurrin/badge-generator/releases) or merged PRs.

See changes below, with most recent changes at the top.


## June 2021

### Add HTML view

Added a button to the `Code.vue` element to allow viewing HTML source.

This is useful when you want to add an badge image inside a centered `div` on Jekyll site, but it ends up rendering as literal HTML, unless you first generate the HTML and then paste that in.

And also if you are just curious as to what the HTML equivalent is.


## May 2021

### Vue 3 upgrade

For [PR #108](https://github.com/MichaelCurrin/badge-generator/pull/108).

This was done to use latest code in tutorial docs and libraries and to help with avoiding vulnerabilities.

My [vue-router-ts-quickstart][] repo was used as a base. It was generated using Vue UI tool, using mostly the same packages here.

I decided to use a generated app instead of using the [Vue 3 migration guide][] which covers each plugin and how it has to change.

Note that `vue-jest` gives a warning when installing packages that Babel-related packages are missing as peer dependencies. But since the generated app is setup to work fine like this and I'll see if my app continue to work without Babel, then this is fine.

### Remove syntax highlighting in Vue upgrade

Trying to use like this is as a minimum:

```
<template>
  <highlightjs language="markdown" :code="code" />
</template>
```

Using like this doesn't work even with the CSS, maybe because it doesn't actually run without the tag in use.

```
<template>
  <pre><code class="markdown">{{ code }}</code></pre>
</template>
```

I had a TS issue where I could do not pass the highlighter.

```
TS2345: Argument of type 'HLJSApi' is not assignable to parameter of type 'Plugin_2'.
  Property 'install' is missing in type 'HLJSApi' but required in type '{ install: PluginInstallFunction; }'.
     6 | const app = createApp(App);
     7 | app.use(router)
  >  8 | app.use(hljs);
```

It looks like works, though gives a deprecation warning and errors.

```javascript
import hljs from "highlight.js";

// ...
app.use(hljs.vuePlugin);
```

Later, I found I was getting the warning, but still got errors that `render` and `createElement` functions are missing - so maybe it just lacks Vue 3 support.

I discovered a link on the highlight.js repo README which points to [Highlight.js plugin for
Vue.js][] repo, but I don't see a need to use it and `markdown-it` works great already and covers
both my Markdown and highlighting needs.

I tried this anyway it case it works, using Vue Plugin docs. But got an error on lack of type definitions.

```javascript
import hljs from "highlight.js/lib/common";
import vuePlugin from "@highlightjs/vue-plugin";
```

Ideally use this as it has smaller footprint, no loading all languages. But, it is missing type declarations.

```javascript
import hljs from 'highlight.js/lib/core';
```

The easiest was to take out the highlighter CSS and JS and consider putting it back later if I still want it. Maybe using a plain HTML tag and with language added as `markdown`, without having to enable as a component.

### Restore syntax highlighting after Vue upgrade

See [PR #109](https://github.com/MichaelCurrin/badge-generator/pull/109).

I found an approach was recommended in the [Highlight.js usage docs][] as a generic approach and I've adapted for use with Vue. Running `hljs.highlightAll();` on the `update` function of the `Code.vue` component works.

It is preferable to target an element - in case there are multiple triggers running on the page at once. The docs say you can pass an element like this:

```javascript
hljs.highlightBlock(block);
```

_Update: That method is deprecated and so `.highlightElement` is used now._

I used `$refs` as per [Template Refs](https://v3.vuejs.org/guide/component-template-refs.html) doc to target the element.

I thought maybe running _once_ on mounting an element or loading a route could be fine. Actually, using `mount` does not work I see because it works initially and then the highlighting gets lost. I guess it because the highlighting determines on the actual text in the element, so it must be done on the `update` call.

In order to give the initial default code block highlighting too, I decided to run on both `mount` and `update`.

Note that `highlight.js` does not have to be added as a dependency, as it is already covered by `markdown-it`.

[Highlight.js plugin for Vue.js]: https://github.com/highlightjs/vue-plugin
[Highlight.js usage docs]: https://highlightjs.org/usage/
[vue-router-ts-quickstart]: https://github.com/MichaelCurrin/vue-router-ts-quickstart
[Vue 3 migration guide]: https://cli.vuejs.org/migrating-from-v3/

### Remove Babel

- There is a Babel package which causes issues staying secure - see [issue #104][].
- I want fewer packages to manage.
- Only less than 5% of browsers would be affected.

[issue #104]: https://github.com/MichaelCurrin/badge-generator/issues/104


## March 2021

### Syntax highlighting

Added use of `highlightjs` tag and CSS, to provide syntax highlighting for the Markdown code output. This was on the `Code.vue` component.

See [PR #96](https://github.com/MichaelCurrin/badge-generator/pull/96/files).


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

### Vue

**Summary**

- I had issues using the `vue-markdown` package.
- The original is insecure - because of `highlight.js`.
- The fork of `vue-markdown` I used was complicated - it required permissions for network when running tests, the types are not available and adding type definitions in the project caused a break.
- So the easiest was to go with a low-level package called `markdown-it` and build a small custom component around that.

**2.8.0**

I installed `markdown-it`. See repo https://github.com/markdown-it/markdown-it and demo https://markdown-it.github.io/

I created [Markdown.vue](https://github.com/MichaelCurrin/badge-generator/blob/v2.8.0/src/components/Markdown.vue), which works great.

That gets used like this such as in `Help.vue`.

```vue
<template>
  <div>
      <Markdown :content="message"></Markdown>
  </div>
</template>
```

The `markdown-it` one already has things handled in `package.json` which it must used, like emojis, footnotes and highlighting code blocks. These can be enabled with `.use(plugin)` as per the README.

To use `highlightjs` as an HTML tag in Vue, I import the `highlight.js` NPM package and pass it to Vue with `Vue.use(hljs.vuePlugin);`. See [highlightjs.org](https://highlightjs.org/) homepage.

**2.6.0**

Later I went trying going with verbose with `@adapttive/vue-markdown` to keep `package.json` simpler. This also required imports to be updated. But the change caused a break - I found types need to be set too - using `@types/vue-markdown` worked before (though it would have drifted eventually) and doesn't work anymore. And there is no equivalent for the fork. I tried adding `vue-markdown.d.ts` with the declaration as per the TS CLI help. That then said I was using `VueMarkdown` as an interface rather than as a value, so that didn't work.

Also of interest is [markdown-it-vue](https://github.com/ravenq/markdown-it-vue/). That one and `vue-markdown` both handle more than I need them to.

**2.3.0**

The 3rd party package `vue-markdown` is no longer maintained. I started using a fork which is published by another author on NPM. I was added as a contributor. I decided to update my `package.json` file to use an alias.

## Nov 2020

Attempted to upgrade to Vue 3.

Abandoned because of fighting with Vue, Vue router, TS and maybe other packages.

See closed PR [#74](https://github.com/MichaelCurrin/badge-generator/pull/74).


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
