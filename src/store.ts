/**
 * Store module.
 */
import { IS_PROD } from "@/constants/";
import { DEFAULT_REPO_INPUTS } from "@/constants/badgeValues";
import { reactive } from "vue";

/**
 * Global store.
 *
 * Store user input so values can be remembered by the app across views.
 */
const store = {
  debug: !IS_PROD,

  state: reactive({
    repoUsername: DEFAULT_REPO_INPUTS.username,
    repoName: DEFAULT_REPO_INPUTS.repoName,
  }),

  /**
   * Store a repository username. e.g. 'MyUsername'.
   */
  setRepoUsername(value: string) {
    if (this.debug) {
      console.debug(`Storing repo username: ${value}`);
    }

    this.state.repoUsername = value;
  },

  /**
   * Store a repository name. e.g. 'my-repo'.
   */
  setRepoName(value: string) {
    if (this.debug) {
      console.debug(`Storing repo name: ${value}`);
    }

    this.state.repoName = value;
  },
};

export default store;
