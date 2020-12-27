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

To convert the markdown badges to code to be copied, just use `<pre><code>{{ result }}</code></pre>`.

### Markdown to HTML

This project a fork of the VueMarkdown package to render the markdown text as HTML. When this is needed, this is imported in a `.vue` file and then added under `components: { VueMarkdown }`. Then it is used as a `<vue-markdown>` tag.

Setting `:source` as the attribute is useful for updating based on user input. Simply using `<vue-markdown>{{ value }}</vue-markdown>` gives _static_ output and this is noted in the VueMarkdown docs.
