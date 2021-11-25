/**
 * Store module.
 */
import { DEBUG } from "@/constants/";
import { DEFAULT_REPO_INPUTS } from "@/constants/badgeValues";
import { reactive } from "vue";

/**
 * Global store.
 *
 * Store user input so values can be remembered by the app across views.
 */
const store = {
  state: reactive({
    repoUsername: DEFAULT_REPO_INPUTS.username,
    repoName: DEFAULT_REPO_INPUTS.repoName,
    asHtml: false,
  }),

  /**
   * Store a repository username. e.g. 'MyUsername'.
   */
  setRepoUsername(value: string) {
    if (DEBUG) {
      console.debug(`Storing repo username: ${value}`);
    }

    this.state.repoUsername = value;
  },

  /**
   * Store a repository name. e.g. 'my-repo'.
   */
  setRepoName(value: string) {
    if (DEBUG) {
      console.debug(`Storing repo name: ${value}`);
    }

    this.state.repoName = value;
  },

  /**
   * Store asHtml value. e.g. true or false.
   */
  setAsHTML(value: boolean){
    if (DEBUG) {
      console.debug(`Storing asHtml as: ${value}`);
    }

    this.state.asHtml = value;
  }
};

export default store;
