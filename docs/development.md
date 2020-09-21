# Development
> Notes for developers of this project


## Roadmap

- [ ] Add tests
- [ ] Refactor JS to be DRY and OO
- [X] Make into multi-page JS app - possibly with Vue, React or Preact, or Jekyll and mustache
- [X] Split view into left and right (or top and bottom) optionally mobile friendly


## Project structure

Overview of code in [src](/src/):

- The overall app navigation and CSS is handled in [App.vue](/src/App.vue)
- Routing is handled in [router/index.js](/src/router/index.js) and using the [vue-router][] package. To keep the navigation bar in sync with routes, the `App.vue` file actually builds a navbar based on what is defined in the router config.
- The `.vue` pages are handed in [views](/src/views).
- The `.vue` components are [components](/src/components) and used in the views.
- The plain `.js` files are in [core](/src/core). These handle processing arguments and returning badges as strings. There is no Vue logic in here but the exported objects get used in the Vue directories covered above.

[vue-router]: https://router.vuejs.org/

### Components
> Notes on the components

#### Checkbox

[Checkbox.vue](/src/components/Checkbox.vue)

Bind to given variable in parent's v-model.

Use `:checked="foo"` in addition to `v-model="foo"`, so you can set default state.

#### TextInput

[TextInput.vue](/src/components/TextInput.vue)

Allow a given variable from the parent to be used here and push changes back
up using events.

Quickstart:

```vue
<TextInput label="" v-model="" placeholder="" note="" />
```


## How to run locally

See the install and usage docs.

For plain development, just run the _serve_ task from the CLI or from the Tasks Explorer in VS Code.

For **debugging**, start the server and then launch the Firefox task under **Debugger** pane. This will open a new window and attach to the server, so you can set breakpoints.


## Setting results

On setting `this.result` on pages:

- This shouldn't be a Vue component or template as that adds overhead. It doesn't even need to be a function or method (the indentation fits better but then its another function to maintain).
- Also this just needs to be plain text and not HTML. It gets converted to HTML and a code block.
- Making it an `x-template` is **not** good practice according to the docs. And it might not play well with `vue-markdown` tag.


## Formatting

### Markdown to code

To convert the markdown badges to code to be copied, just use `<pre><code>{{ result }}</code></pre>`.


### Markdown to HTML

This project uses [VueMarkdown](https://github.com/miaolz123/vue-markdown) to render the markdown text as HTML. When this is needed, this is imported in a `.vue` file and then added under `components: {VueMarkdown}`. Then it is used as a `<vue-markdown>` tag. 

Setting `:source` as the attribute is useful for updating based on user input. Simply using `<vue-markdown>{{ value }}</vue-markdown>` gives _static_ output and this is noted in the VueMarkdown docs.

#### Installing VueMarkdown
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

So tried this using the top-level name and not the full name. And that fixed the error.

```sh
yarn add -D babel-runtime
```
