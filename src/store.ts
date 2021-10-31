/**
 * Store module.
 */
import { reactive } from "vue";

const DEFAULT_USERNAME = "MichaelCurrin";
const DEFAULT_REPO_NAME = "badge-generator";

/**
 * Global store.
 *
 * Store user input so values can be remembered by the app across views.
 */
const store = {
  debug: true,

  state: reactive({
    repoUsername: DEFAULT_USERNAME,
    repoName: DEFAULT_REPO_NAME,
  }),

  /**
   * Store a repository username. e.g. 'MyUsername'.
   */
  setRepoUsername(value: string) {
    if (this.debug) {
      console.log(`Storing repo username: ${value}`);
    }

    this.state.repoUsername = value;
  },

  /**
   * Store a repository name. e.g. 'my-repo'.
   */
  setRepoName(value: string) {
    if (this.debug) {
      console.log(`Storing repo name: ${value}`);
    }

    this.state.repoName = value;
  },
};

export default store;
