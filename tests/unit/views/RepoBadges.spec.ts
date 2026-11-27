import Checkbox from "@/components/Checkbox.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";
import RepoBadges from "@/views/RepoBadges.vue";
import store from "@/store";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";

const downloadStorageKeys = [
  "addDownloadSource",
  "addDownloadReleaseAsset",
  "downloadBranch",
  "downloadArchiveFormat",
  "downloadReleaseName",
  "downloadAssetFilename",
];

describe("RepoBadges.vue download inputs", () => {
  beforeEach(() => {
    downloadStorageKeys.forEach((key) => localStorage.removeItem(key));
  });

  it("uses persisted defaults and leaves the existing output unchanged", async () => {
    const wrapper = mount(RepoBadges);
    const results = wrapper.findComponent(Results);
    const branchInput = wrapper
      .findAllComponents(TextInput)
      .find((input) => input.props("note") === "Branch name to download.");
    const releaseNameInput = wrapper
      .findAllComponents(TextInput)
      .find((input) => input.props("label") === "Release name (tag)");
    const assetInput = wrapper
      .findAllComponents(TextInput)
      .find((input) => input.props("label") === "Asset filename");

    expect(store.getDownloadBranch()).toBe("main");
    expect(branchInput?.props("modelValue")).toBe("main");
    expect(branchInput?.props("isRequired")).toBe(false);
    expect(branchInput?.props("disabled")).toBe(true);
    expect(releaseNameInput?.props("disabled")).toBe(true);
    expect(assetInput?.props("isRequired")).toBe(false);
    expect(assetInput?.props("disabled")).toBe(true);
    expect(wrapper.find("#download-archive-format").element).toHaveProperty(
      "disabled",
      true
    );

    await wrapper.vm.submit();

    expect(results.props("result")).not.toContain("_Downloads_");
    expect(results.props("result")).toContain("_System dependencies_");
  });

  it("requires the branch and release asset fields only when enabled", async () => {
    const wrapper = mount(RepoBadges);
    const checkbox = (label: string) =>
      wrapper
        .findAllComponents(Checkbox)
        .find((item) => item.props("label") === label);

    await checkbox("Download source from branch")?.find("input").setValue(true);
    await checkbox("Download release asset")?.find("input").setValue(true);
    await nextTick();

    const input = (label: string) =>
      wrapper
        .findAllComponents(TextInput)
        .find(
          (item) =>
            item.props("label") === label &&
            (label !== "Branch" ||
              item.props("note") === "Branch name to download.")
        );
    const branchInput = input("Branch");
    const releaseNameInput = input("Release name (tag)");
    const assetInput = input("Asset filename");

    for (const field of [branchInput, releaseNameInput, assetInput]) {
      expect(field?.props("isRequired")).toBe(true);
      expect(field?.find("input").attributes("required")).toBeDefined();
      expect(field?.find(".required").text()).toBe("*");
    }
    expect(
      (wrapper.find("form").element as HTMLFormElement).checkValidity()
    ).toBe(false);

    await branchInput?.find("input").setValue("main");
    await releaseNameInput?.find("input").setValue("v1.2.3");
    await assetInput?.find("input").setValue("helloworld.abc");
    expect(
      (wrapper.find("form").element as HTMLFormElement).checkValidity()
    ).toBe(true);

    await checkbox("Download source from branch")
      ?.find("input")
      .setValue(false);
    await branchInput?.find("input").setValue("");
    expect(branchInput?.props("isRequired")).toBe(false);
    expect(
      (wrapper.find("form").element as HTMLFormElement).checkValidity()
    ).toBe(true);

    await checkbox("Download release asset")?.find("input").setValue(false);
    expect(releaseNameInput?.props("isRequired")).toBe(false);
    expect(assetInput?.props("isRequired")).toBe(false);
  });

  it("persists inputs and appends the selected badges", async () => {
    const wrapper = mount(RepoBadges);
    const checkbox = (label: string) =>
      wrapper
        .findAllComponents(Checkbox)
        .find((item) => item.props("label") === label);
    const input = (label: string) =>
      wrapper
        .findAllComponents(TextInput)
        .find(
          (item) =>
            item.props("label") === label &&
            (label !== "Branch" ||
              item.props("note") === "Branch name to download.")
        );

    await checkbox("Download source from branch")?.find("input").setValue(true);
    await checkbox("Download release asset")?.find("input").setValue(true);
    await wrapper.find("#download-archive-format").setValue("tar.gz");
    await input("Branch")?.find("input").setValue("master");
    await input("Release name (tag)")?.find("input").setValue("v1.2.3");
    await input("Asset filename")?.find("input").setValue("helloworld.abc");
    await nextTick();

    expect(store.getAddDownloadSource()).toBe(true);
    expect(store.getAddDownloadReleaseAsset()).toBe(true);
    expect(store.getDownloadBranch()).toBe("master");
    expect(store.getDownloadArchiveFormat()).toBe("tar.gz");
    expect(store.getDownloadReleaseName()).toBe("v1.2.3");
    expect(store.getDownloadAssetFilename()).toBe("helloworld.abc");

    wrapper.unmount();
    const restoredWrapper = mount(RepoBadges);
    expect(restoredWrapper.vm.addDownloadSource).toBe(true);
    expect(restoredWrapper.vm.addDownloadReleaseAsset).toBe(true);
    expect(restoredWrapper.vm.downloadBranch).toBe("master");
    expect(restoredWrapper.vm.downloadArchiveFormat).toBe("tar.gz");
    expect(restoredWrapper.vm.downloadReleaseName).toBe("v1.2.3");
    expect(restoredWrapper.vm.downloadAssetFilename).toBe("helloworld.abc");

    await restoredWrapper.vm.submit();

    const result = restoredWrapper
      .findComponent(Results)
      .props("result") as string;
    expect(result).toContain(
      "[![Download code as tar.gz | master](https://img.shields.io/badge/Download_code_as_tar.gz-master-blue?style=for-the-badge)](https://github.com/MichaelCurrin/badge-generator/archive/master.tar.gz)"
    );
    expect(result).toContain(
      "[![Download | helloworld.abc](https://img.shields.io/badge/Download-helloworld.abc-blue?style=for-the-badge)](https://github.com/MichaelCurrin/badge-generator/releases/download/v1.2.3/helloworld.abc)"
    );
  });
});
