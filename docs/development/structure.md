# Structure

Overview of code in [src](/src/):

- The overall app navigation and CSS is handled in [App.vue](/src/App.vue)
- Routing is handled in [router/index.js](/src/router/index.js) and using the [vue-router][] package. To keep the navigation bar in sync with routes, the `App.vue` file actually builds a navbar based on what is defined in the router config.
- The `.vue` pages are handed in [views](/src/views).
- The `.vue` components are [components](/src/components) and used in the views.
- The plain `.js` files are in [core](/src/core). These handle processing arguments and returning badges as strings. There is no Vue logic in here but the exported objects get used in the Vue directories covered above.

[vue-router]: https://router.vuejs.org/

## Components
> Notes on the components

### Checkbox

[Checkbox.vue](/src/components/Checkbox.vue)

Bind to given variable in parent's v-model.

Use `:checked="foo"` in addition to `v-model="foo"`, so you can set default state.

### TextInput

[TextInput.vue](/src/components/TextInput.vue)

Allow a given variable from the parent to be used here and push changes back
up using events.

Quickstart:

```vue
<TextInput label="" v-model="" placeholder="" note="" />
```
