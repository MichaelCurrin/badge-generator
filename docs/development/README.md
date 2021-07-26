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

For plain development, just run the _serve_ task from the CLI or from the Tasks Explorer in VS Code.

For **debugging**, start the server and then launch the Firefox task under **Debugger** pane. This will open a new window and attach to the server, so you can set breakpoints.


## Formatting

### Markdown to code

To convert the Markdown badges to code to be copied, use [Code.vue](/src/components/Code.vue).

### Markdown to HTML

To convert Markdown to rendered HTML, use [Markdown.vue](/src/components/Markdown.vue), which relies on MarkdownIt.

The VueMarkdown package was used before for a component, but it has vulnerabilities and was not maintained. And a fork proved to be not so good.
