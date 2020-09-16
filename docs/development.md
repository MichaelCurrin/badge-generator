# Development


## Roadmap

- [ ] Add tests
- [ ] Refactor JS to be DRY and OO
- [ ] Make into multi-page JS app - possibly with Vue, React or Preact, or Jekyll and mustache
- [ ] Split view into left and right (or top and bottom) optionally mobile friendly


## Run locally

Start a server. Preferably one with hot-reloading.

Open the `/badge_generator.html` page on localhost.


### Notes

- The markdown files get styling added on GitHub and are kept light here without Jekyll theming for now.
- The badge generator HTML file has no frontmatter, so the brackets are not parsed at build time, leaving them to be processed by mustache.
- Dependencies are loaded in the HTML to keep the built process light for now.
-  We use the approach here to render markdown to HTML, but after Mustache is run. https://stackoverflow.com/questions/52562508/using-markdown-in-javascript-template-engine

On setting `this.result` on Image and Badge pages.

- This shouldn't be a Vue component or template as that adds overhead. It doesn't even need to be a function
or method (the indentation fits better but then its another function to maintain).
- Also this just needs to be plain text and not HTML. It gets converted to HTML and a code block.
- Making it an x-template is not good practice according to the docs. And it might not play well with vue-markdown tag.


## Packages

### Markdown

[VueMarkdown](https://github.com/miaolz123/vue-markdown)

This has dev dependencies which are noted in a compile error:

- `babel-runtime/core-js/get-iterator`
- `babel-runtime/core-js/object/keys`


    These dependencies were not found:

    * babel-runtime/core-js/get-iterator in ./node_modules/vue-markdown/dist/vue-markdown.common.js
    * babel-runtime/core-js/object/keys in ./node_modules/vue-markdown/dist/vue-markdown.common.js

    To install them, you can run: npm install --save babel-runtime/core-js/get-iterator babel-runtime/core-js/object/keys

That gave errors:

    npm install -D babel-runtime/core-js/get-iterator babel-runtime/core-js/object/keys
    npm ERR! code ENOLOCAL
    npm ERR! Could not install from "babel-runtime/core-js/get-iterator" as it does not contain a package.json file.

So tried this which fixed the error.

    yarn add -D babel-runtime
