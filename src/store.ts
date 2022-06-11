/**
 * Store module.
 */
import { DEBUG } from "@/constants/";
import { DEFAULT_REPO_INPUTS } from "@/constants/badgeValues";

/**
 * Return a value from localStorage or a default if key is not set.
 */
function getItem(key: string, defaultValue: string) {
  const value = localStorage.getItem(key);

  return value !== null ? value : defaultValue;
}

/**
 * Global store.
 *
 * Store user input so values can be remembered by the app when switching to
 * views that use the same data, switching back to the previous view, and
 * returning to the app after closing it.
 */
const store = {
  /**
   * Retrieve a repository username. e.g. 'MyUsername'.
   */
  getRepoUsername() {
    return getItem("repoUsername", DEFAULT_REPO_INPUTS.username);
  },

  /**
   * Store a repository username. e.g. 'MyUsername'.
   */
  setRepoUsername(value: string) {
    if (DEBUG) {
      console.debug(`Storing repoUsername: ${value}`);
    }
    localStorage.setItem("repoUsername", value);
  },

  /**
   * Retrieve a repository name. e.g. 'my-repo'.
   */
  getRepoName() {
    return getItem("repoName", DEFAULT_REPO_INPUTS.repoName);
  },

  /**
   * Store a repository name. e.g. 'my-repo'.
   */
  setRepoName(value: string) {
    if (DEBUG) {
      console.debug(`Storing repoName: ${value}`);
    }
    localStorage.setItem("repoName", value);
  },

  /**
   * Retrieve the theme.
   */
  getUserTheme() {
    return localStorage.getItem("user-theme");
  },

  /**
   * Set the theme on the store and the root element - for use in CSS in
   * App.vue module.
   */
  setUserTheme(value: string) {
    if (DEBUG) {
      console.debug(`Storing user-theme: ${value}`);
    }
    localStorage.setItem("user-theme", value);
    document.documentElement.className = value;
  },
};

export default store;
