import store from "@/store";

describe("store", () => {
  describe("download inputs", () => {
    beforeEach(() => {
      [
        "addDownloadSource",
        "addDownloadReleaseAsset",
        "downloadBranch",
        "downloadArchiveFormat",
        "downloadReleaseName",
        "downloadAssetFilename",
      ].forEach((key) => localStorage.removeItem(key));
    });

    it("returns defaults for download inputs", () => {
      expect(store.getAddDownloadSource()).toBe(false);
      expect(store.getAddDownloadReleaseAsset()).toBe(false);
      expect(store.getDownloadBranch()).toBe("main");
      expect(store.getDownloadArchiveFormat()).toBe("zip");
      expect(store.getDownloadReleaseName()).toBe("");
      expect(store.getDownloadAssetFilename()).toBe("");
    });

    it("persists download input values", () => {
      store.setAddDownloadSource(true);
      store.setAddDownloadReleaseAsset(true);
      store.setDownloadBranch("master");
      store.setDownloadArchiveFormat("tar.gz");
      store.setDownloadReleaseName("v1.2.3");
      store.setDownloadAssetFilename("helloworld.abc");

      expect(store.getAddDownloadSource()).toBe(true);
      expect(store.getAddDownloadReleaseAsset()).toBe(true);
      expect(store.getDownloadBranch()).toBe("master");
      expect(store.getDownloadArchiveFormat()).toBe("tar.gz");
      expect(store.getDownloadReleaseName()).toBe("v1.2.3");
      expect(store.getDownloadAssetFilename()).toBe("helloworld.abc");
    });
  });

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

  describe("#getPythonBranch and #setPythonBranch", () => {
    it("gets default branch and persists a custom value", () => {
      localStorage.removeItem("pythonBranch");
      expect(store.getPythonBranch()).toBe("main");

      store.setPythonBranch("develop");
      expect(store.getPythonBranch()).toBe("develop");
    });
  });

  describe("#getPythonQueryType and #setPythonQueryType", () => {
    it("gets default query type and persists a custom value", () => {
      localStorage.removeItem("pythonQueryType");
      expect(store.getPythonQueryType()).toBe("PROJECT");

      store.setPythonQueryType("TOOL_POETRY");
      expect(store.getPythonQueryType()).toBe("TOOL_POETRY");
    });
  });

  describe("#getAddPythonVersion and #setAddPythonVersion", () => {
    it("returns false by default", () => {
      localStorage.removeItem("addPythonVersion");
      expect(store.getAddPythonVersion()).toBe(false);
    });

    it("stores true and false values", () => {
      store.setAddPythonVersion(true);
      expect(store.getAddPythonVersion()).toBe(true);

      store.setAddPythonVersion(false);
      expect(store.getAddPythonVersion()).toBe(false);
    });
  });
});
