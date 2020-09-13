<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span> | </span>
      <router-link to="/badges">Badges</router-link>
      <span> | </span>
      <router-link to="/images">Images</router-link>
      <span> | </span>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
/**
 * Based on Vue styles
 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
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

/** GitHub Pages
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
  font-family: monospace, monospace;
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
.details-overlay[open] > summary::before {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 80;
  display: block;
  cursor: default;
  content: " ";
  background: transparent;
}
.details-overlay-dark[open] > summary::before {
  z-index: 99;
  background: rgba(27, 31, 35, 0.5);
}

.btn {
  cursor: pointer;
}

/**
 * Custom
 */
#nav,
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
</style>
