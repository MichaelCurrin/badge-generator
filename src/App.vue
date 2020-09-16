<template>
  <div id="app">
    <div class="container-lg">
      <span id="logo">Badge Generator</span>

      <div id="nav">
        <!-- Build menu based on configured app routes. -->
        <span v-for="(item, index) in routes" v-bind:key="item.path">
          <span>
            {{ index !== 0 ? " | " : "" }}
          </span>
          <router-link :to="item.path">
            {{ item.name }}
          </router-link>
        </span>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
import { routes } from "@/router/index.js";

export default {
  data() {
    return { routes };
  },
};
</script>

<style>
/**
 * Based on Vue quickstart styles.
 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  padding-top: 10px;
}

#nav {
  padding-top: 10px;
}

/* Cleanup menu to remove default of underline and then add it back on hover. */

#nav a {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
}

#nav a:hover {
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}

/**
 * GitHub Pages
 *
 * Based on GitHub Pages built markdown site (without Jekyll)
 */
.container-lg {
  max-width: 1012px;
  margin-right: auto;
  margin-left: auto;
}

pre {
  padding: 16px;
  overflow: auto;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;

  margin-top: 0;
  margin-bottom: 0;

  /* This is allows the text to wrap and prevents it from stretching out and causing the flexbox to reflow when not desired.
     Using nowrap to go off the screen unfortunately flatten it all to one line and reflows flexbox. */
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
  font-size: 1em;
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

/* Most of these don't seem to make a visible difference, but cursor here is the most useful. */
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
 * Custom
 */
#logo {
  font-weight: bold;
  font-size: 3em;
}

#nav {
  float: right;
}

.hero {
  text-align: center;
}

.btn {
  border-radius: 12px;
  color: white;
  font-size: 21px;
  background: linear-gradient(to bottom, #42b983, #3aa776);
  padding: 10px 20px 10px 20px;
}

.btn:hover {
  background: linear-gradient(to top, #42b983, #3aa776);
}

/* Flexbox - based on GH pages, Bootstrap and the GH Readme Generator. */
.row {
  display: flex;
  flex-wrap: wrap;
}

.col-6 {
  flex: 1;
  padding: 8px;
}

.col-12 {
  width: 100%;
}

.note {
  color: #666;
}
</style>
