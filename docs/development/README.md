# Documentation
> Notes for developers of this project


## Roadmap

- [ ] Refactor JS to be DRY
- [ ] Use interfaces and types
- [x] Add tests
- [x] Add TS support
- [x] Make into multi-page JS app - possibly with Vue, React or Preact, or Jekyll and mustache
- [x] Split view into left and right (or top and bottom) optionally mobile friendly


## How to run locally

See the [Installation](/docs/installation.md) and [Usage](/docs/usage.md) docs.

You need Node 16 or higher.

Install Yarn globally.

```sh
$ npm install -g yarn
```

Then run this in the project root:

```sh
$ yarn install
$ yarn serve
```


## Formatting

### Markdown to code

To convert the Markdown badges to code to be copied, use [Code.vue](/src/components/Code.vue).

### Markdown to HTML

To convert Markdown to rendered HTML, use [Markdown.vue](/src/components/Markdown.vue), which relies on `MarkdownIt`.

The `VueMarkdown` package was used before for a component, but it has vulnerabilities and was not maintained. And a fork proved to not be so good.
