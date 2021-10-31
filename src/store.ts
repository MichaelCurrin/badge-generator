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
    repoUsername: "MichaelCurrin",
    repoName: "badge-generator",
  }),

  /**
   * Store a repository username. e.g. 'MyUsername'.
   */
  setRepoUsername(value: string) {
    if (this.debug) {
      console.log(`Store repo username: ${value}`);
    }

    this.state.repoUsername = value;
  },

  /**
   * Store a repository name. e.g. 'my-repo'.
   */
  setRepoName(value: string) {
    if (this.debug) {
      console.log(`Store repo name: ${value}`);
    }

    this.state.repoName = value;
  },
};

export default store;
