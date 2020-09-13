<template>
  <div id="app">
    <div id="nav" class="center">
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

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial;
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

/**
 * Custom
 */
#nav,
.hero {
  text-align: center;
}
</style>
