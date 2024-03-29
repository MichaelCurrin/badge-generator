<template>
  <div>
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span>🌙</span>
      <span>☀️</span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import store from "@/store";

const LIGHT_THEME = "light-theme";
const DARK_THEME = "dark-theme";

function browserPreferedTheme() {
  const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return preferDark ? DARK_THEME : LIGHT_THEME;
}

export default defineComponent({
  name: "ThemeToggle",
  mounted() {
    const defaultTheme = browserPreferedTheme();
    store.setUserTheme(defaultTheme);
  },
  methods: {
    toggleTheme() {
      const currentValue = store.getUserTheme();
      const newValue = currentValue === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

      store.setUserTheme(newValue);
    },
  },
});
</script>

<style scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  font-size: calc(var(--element-size) * 0.3);
  width: var(--element-size);
  height: calc(var(--element-size) * 0.35);
  padding: calc(var(--element-size) * 0.1);
  border-radius: var(--element-size);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  background: var(--text-primary-color);
  transition: background 0.5s ease;
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.07);
  left: calc(var(--element-size) * 0.07);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}
</style>
