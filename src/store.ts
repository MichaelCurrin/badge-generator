/**
 * Store module.
 */
import { DEBUG } from "@/constants/";
import { DEFAULT_REPO_INPUTS } from "@/constants/badgeValues";
import { DownloadArchiveFormat } from "@/core/Repo.d";

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

  /**
   * Retrieve the Python version badge branch.
   */
  getPythonBranch() {
    return getItem("pythonBranch", "main");
  },

  /**
   * Store the Python version badge branch.
   */
  setPythonBranch(value: string) {
    if (DEBUG) {
      console.debug(`Storing pythonBranch: ${value}`);
    }
    localStorage.setItem("pythonBranch", value);
  },

  /**
   * Retrieve the Python version badge query type.
   */
  getPythonQueryType() {
    return getItem("pythonQueryType", "PROJECT");
  },

  /**
   * Store the Python version badge query type.
   */
  setPythonQueryType(value: string) {
    if (DEBUG) {
      console.debug(`Storing pythonQueryType: ${value}`);
    }
    localStorage.setItem("pythonQueryType", value);
  },

  /**
   * Retrieve whether Python version badge is enabled.
   */
  getAddPythonVersion() {
    const value = localStorage.getItem("addPythonVersion");
    return value === "true";
  },

  /**
   * Store whether Python version badge is enabled.
   */
  setAddPythonVersion(value: boolean) {
    if (DEBUG) {
      console.debug(`Storing addPythonVersion: ${value}`);
    }
    localStorage.setItem("addPythonVersion", value.toString());
  },

  getAddDownloadSource() {
    return getItem("addDownloadSource", "false") === "true";
  },

  setAddDownloadSource(value: boolean) {
    localStorage.setItem("addDownloadSource", value.toString());
  },

  getAddDownloadReleaseAsset() {
    return getItem("addDownloadReleaseAsset", "false") === "true";
  },

  setAddDownloadReleaseAsset(value: boolean) {
    localStorage.setItem("addDownloadReleaseAsset", value.toString());
  },

  getDownloadBranch() {
    return getItem("downloadBranch", "main");
  },

  setDownloadBranch(value: string) {
    localStorage.setItem("downloadBranch", value);
  },

  getDownloadArchiveFormat(): DownloadArchiveFormat {
    const value = getItem("downloadArchiveFormat", "zip");
    return value === "tar.gz" ? value : "zip";
  },

  setDownloadArchiveFormat(value: DownloadArchiveFormat) {
    localStorage.setItem("downloadArchiveFormat", value);
  },

  getDownloadReleaseName() {
    return getItem("downloadReleaseName", "");
  },

  setDownloadReleaseName(value: string) {
    localStorage.setItem("downloadReleaseName", value);
  },

  getDownloadAssetFilename() {
    return getItem("downloadAssetFilename", "");
  },

  setDownloadAssetFilename(value: string) {
    localStorage.setItem("downloadAssetFilename", value);
  },
};

export default store;
