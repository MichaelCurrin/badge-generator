import store from "@/store";

describe("store", () => {
  describe("defaults", () => {
    it("has default values on initialization", () => {
      expect(store.getRepoUsername()).toBe("MichaelCurrin");
      expect(store.getRepoName()).toBe("badge-generator");
    });
  });

  describe("#setRepoUsername", () => {
    it("can set and persist username", () => {
      expect(store.getRepoUsername()).toBe("MichaelCurrin");

      store.setRepoUsername("FooBar");
      expect(store.getRepoUsername()).toBe("FooBar");
    });
  });

  describe("#setRepoName", () => {
    it("can set and perist repo name", () => {
      expect(store.getRepoName()).toBe("badge-generator");

      store.setRepoName("fizz-buzz");
      expect(store.getRepoName()).toBe("fizz-buzz");
    });
  });
});
