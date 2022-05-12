import store from "@/store";

describe("store", () => {
  describe("#getRepoUsername", () => {
    it("can get the default username", () => {
      expect(store.getRepoUsername()).toBe("MichaelCurrin");
    });
  });

  describe("#setRepoUsername", () => {
    it("can set and persist username", () => {
      expect(store.getRepoUsername()).toBe("MichaelCurrin");

      store.setRepoUsername("FooBar");
      expect(store.getRepoUsername()).toBe("FooBar");
    });
  });

  describe("#getRepoName", () => {
    it("can get the default repo name", () => {
      expect(store.getRepoName()).toBe("badge-generator");
    });
  });

  describe("#setRepoName", () => {
    it("can set and perist repo name", () => {
      expect(store.getRepoName()).toBe("badge-generator");

      store.setRepoName("fizz-buzz");
      expect(store.getRepoName()).toBe("fizz-buzz");
    });
  });

  describe("#getUserTheme", () => {
    it("can get the default user theme as null", () => {
      expect(store.getUserTheme()).toBe(null);
    });
  });

  describe("#setUserTheme", () => {
    it("can set and perist user theme", () => {
      expect(store.getUserTheme()).toBe(null);

      store.setUserTheme("dark-theme");
      expect(store.getUserTheme()).toBe("dark-theme");
    });
  });
});
