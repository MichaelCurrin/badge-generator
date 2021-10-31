/**
 * Store module.
 */
import { reactive } from "vue";

/**
 * Global store.
 *
 * Store user input so values can be remembered by the app across views.
 */
const store = {
  debug: true,

  state: reactive({
    repositoryName: "badge-generator",
    ghUsername: "MichaelCurrin",
  }),

  /**
 * Store the repository username name. e.g. 'MyUsername'.
 */
  setGitHubUsername(value: string) {
    if (this.debug) {
      console.log(`Store repo username: ${value}`);
    }

    this.state.ghUsername = value;
  },

  /**
   * Store the repository name. e.g. 'my-repo'.
   */
  setRepositoryName(value: string) {
    if (this.debug) {
      console.log(`Store repo name: ${value}`);
    }

    this.state.repositoryName = value;
  },
};

export default store;
