<template>
  <div>
    <header>
      <div class="container-lg">
        <a id="logo" :href="baseUrl">Badge Generator</a>

        <div id="nav">
          <!-- Build menu based on configured app routes. -->
          <!-- Keep router-link on one line for underlining -->
          <span v-for="(item, index) in routes" :key="item.path">
            <span>{{ index !== 0 ? " | " : "" }}</span>
            <router-link :to="item.path">{{ item.name }}</router-link>
          </span>
          <span class="toggle">
            <ThemeToggle />
          </span>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script lang="ts">
import ThemeToggle from "@/components/ThemeToggle.vue";
import { routes } from "@/router/index";
import "highlight.js/styles/github-gist.css";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    ThemeToggle,
  },
  data() {
    return {
      routes,
      baseUrl: process.env.BASE_URL,
    };
  },
});
</script>

<style>
:root {
  --green: #42b983;
  --green-dark: #3aa776;
  --grey: #2c3e50;
  --white: #f3f3f3;
  --element-size: 2.5rem;
  color: var(--text-primary-color);
  background-color: var(--background-color-primary);
}

:root.light-theme {
  --background-color-primary: #ffffff;
  --background-color-secondary: #eeeeee;
  --accent-color: var(--grey);
  --text-primary-color: #222;
}

:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #3f3f3f;
  --accent-color: #e4e4e4;
  --text-primary-color: var(--white);
}

/**
 * Standard Vue base styles.
 *
 * Based on the Vue quickstart app's styles.
 */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding-top: 10px;
}

/* Clean-up menu to remove default of underline and then add it back on hover. */

#nav a {
  font-weight: bold;
  color: var(--green);
  text-decoration: none;
}

#nav a:hover {
  text-decoration: underline;
  color: var(--green-dark);
}

#nav a.router-link-exact-active {
  text-decoration: underline;
  color: var(--green);
}

.toggle {
  display: inline-block;
  margin-left: 5px;
}

a {
  font-weight: bold;
  color: var(--green-dark);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/**
 * GitHub Pages styles base.
 *
 * Based on a Markdown site built on GitHub Pages without Jekyll.
 */

/* Center app. */
.container-lg {
  max-width: 1012px;
  margin-right: auto;
  margin-left: auto;
}

pre {
  padding: 12px;
  overflow: auto;
  line-height: 1.45;
  border-radius: 3px;

  margin-top: 0;
  margin-bottom: 0;

  /* This is allows the text to wrap and prevents it from stretching out and causing the flexbox to
    reflow when not desired. Using nowrap to go off the screen unfortunately flatten it all to one
    line and reflows flexbox. */
  white-space: break-spaces;
}

pre code {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

code,
kbd,
pre {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  font-size: 0.9em;
  background-color: #f6f8fa;
}

kbd {
  display: inline-block;
  padding: 3px 5px;
  font-size: 11px;
  line-height: 10px;
  color: #444d56;
  vertical-align: middle;
  background-color: #fafbfc;
  border: solid 1px #c6cbd1;
  border-bottom-color: #959da5;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #959da5;
}

/* Most of these don't seem to make a visible difference, but, `cursor` here is
the most useful. */
[hidden][hidden] {
  display: none !important;
}

details summary {
  cursor: pointer;
}

details:not([open]) > *:not(summary) {
  display: none !important;
}

summary {
  display: list-item;
}

.btn {
  cursor: pointer;
}

/**
 * Header.
 */
body {
  margin: 0px;
}

header {
  width: 100%;
  padding: 7px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  color: var(--white);
  background: var(--grey);
}

#logo {
  font-weight: bold;
  font-size: 3em;

  text-decoration: none;
  color: var(--white);
}

#logo:hover {
  text-decoration: underline;
}

#nav {
  float: right;
}

.hero {
  text-align: center;
}

/**
 * Flexbox
 *
 * Based on GH pages, Bootstrap and the GH Readme Generator. There is a better
 * way to do this using `@media` instead of min-width values (the min-width
 * goes off-screen on a really small resolution when tested on desktop but
 * this could be unrealistic).
 *
 * Setting row width as 100% was my own setup to avoid having the col-12 element
 * look to narrow on mobile at min-width 200px, unless I set a min-width like
 * 300px Setting row width also means min-width can be left off and the col-12
 * will still look good instead of very squashed to the left.
 *
 * In another app I looked at, there was 100% width on the container rather than
 * the row, but that did not help here.
 */
.row {
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;

  width: 100%;
}

.col-6 {
  flex: 1;
  padding: 8px;
  min-width: 200px;
}

.col-12 {
  width: 100%;
  min-width: 200px;
}

/**
 * Forms.
 */

input {
  /* Prevent user-agent stylesheet from making this too small, such as in
  Chrome. */
  font-size: initial;
}

input:disabled {
  cursor: not-allowed;
}

.required {
  color: red;
}

.btn {
  color: var(--white);
  font-size: 21px;
  background: linear-gradient(to bottom, var(--green), var(--green-dark));
  padding: 10px 20px 10px 20px;
}

.btn:hover {
  background: linear-gradient(to top, var(--green), var(--green-dark));
}

.note,
.disabled-text {
  color: #666;
}

/**
 * Custom - output.
 */

/* Prevent highlight.js CSS from adding white background to `code` when `pre`
   already has grey background. */
code {
  background: none !important;
}
</style>
