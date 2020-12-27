# Vue notes

## Setting results

On setting the `this.result` value on pages:

- This shouldn't be a Vue component or template as that adds overhead. It doesn't even need to be a function or method (the indentation fits better but then its another function to maintain).
- Also this just needs to be plain text and not HTML. It gets converted to HTML and a code block.
- Making it an `x-template` is **not** good practice according to the docs. And it might not play well with `vue-markdown` tag.


## Vue components

Note that in [Image.vue](/src/views/Image.vue) that _return types_ had to be set explicitly on the `computed` functions. This has been recommended in the Vue TS docs.

Without this, I found that getting attributes as `this.imgSrc` failed compilation check. It was possible to use `this.$attrs.imgSrc` but this gave issues when it came to updating `this.results`. Since `this.$attrs` is read-only.
