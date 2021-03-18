# Markdown


## Library

Handling of Markdown to HTML is done using a library called `markdown-it`.

Links:

- [Docs homepage](https://markdown-it.github.io/markdown-it/)
- [MarkdownIt.new](https://markdown-it.github.io/markdown-it/#MarkdownIt.new) doc.

As covered in [History](history.md) doc, a higher-level library was used, but it did too much and did not use a secure version of a package. So I now use `markdown-it` directly. The downside was that I had to make my own component, but this was easy enough and keeps dependencies simpler.


## Usage

See use in [Markdown.vue](/src/components/Markdown.vue) component.


## HTML safety

Note we pass `html: true` to the constructor.

Not so important for this app as it has no persistence layer, but maybe research one day.

The docs say:

> Be careful! That's not safe! You may need external sanitizer to protect output from XSS. It's better to extend features via plugins, instead of enabling HTML.
