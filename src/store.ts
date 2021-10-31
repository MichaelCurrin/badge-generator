import { reactive } from "vue";

/**
 * Global store.
 *
 * The store will keep track of the values
 * that the user enters on the existing
 * forms, and thus, can be reused across
 * several forms. For example, the GitHub
 * username and the repository name can be
 * reused when creating a package badge or
 * a repository badge.
 *
 */
const store = {
  debug: true,

  state: reactive({
    repositoryName: "badge-generator",
    ghUsername: "MichaelCurrin",
  }),

  /**
   * Overwrites the current repository name
   * with the passed value.
   *
   * @param newValue a string that represents
   * the new repository name
   */
  setRepositoryName(newValue: string) {
    if (this.debug) {
      console.log("Setting the repository name.");
    }

    this.state.repositoryName = newValue;
  },

  /**
   * Overwrites the current GitHub username
   * with the passed value.
   *
   * @param newValue a string that represents
   * the new repository name
   */
  setGitHubUsername(newValue: string) {
    if (this.debug) {
      console.log("Setting the GitHub Username");
    }

    this.state.ghUsername = newValue;
  },
};

export default store;
