import store from "@/store";

describe("store", () => {
  describe("defaults", () => {
    it("has default values on initialization", () => {
      expect(store.state.repoUsername).toBe('MichaelCurrin')
      expect(store.state.repoName).toBe('badge-generator')
    });
  })

  describe("#setRepoUsername", () => {
    it("can set and persist username", () => {
      expect(store.state.repoUsername).toBe('MichaelCurrin')

      store.setRepoUsername('FooBar')
      expect(store.state.repoUsername).toBe('FooBar')
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
