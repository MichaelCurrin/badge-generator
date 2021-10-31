import store from "@/store";

describe("store", () => {
  describe("defaults", () => {
    it("has default values on initialization", () => {
      expect(store.state.ghUsername).toBe('MichaelCurrin')
      expect(store.state.repoName).toBe('badge-generator')
    });
  })

  describe("#setGitHubUsername", () => {
    it("can set and persist username", () => {
      expect(store.state.ghUsername).toBe('MichaelCurrin')

      store.setGitHubUsername('FooBar')
      expect(store.state.ghUsername).toBe('FooBar')
    });
  })

  describe("#setRepoName", () => {
    it("can set and perist repo name", () => {
      expect(store.state.repoName).toBe('badge-generator')

      store.setRepoName('fizz-buzz')
      expect(store.state.repoName).toBe('fizz-buzz')
    });
  })
});
