import Checkbox from "@/components/Checkbox.vue";
import Results from "@/components/Results.vue";
import TextInput from "@/components/TextInput.vue";
import RepoBadges from "@/views/RepoBadges.vue";
import store from "@/store";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";

const downloadStorageKeys = [
  "addDownloadSource",
  "addDownloadLatestRelease",
  "addDownloadReleaseAsset",
  "downloadReferenceType",
  "downloadReference",
  "downloadArchiveFormat",
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
      .find((input) => input.props("note") === "Git branch to download.");
    const assetInput = wrapper
      .findAllComponents(TextInput)
      .find((input) => input.props("label") === "Asset filename");

    expect(store.getDownloadReference()).toBe("main");
    expect(branchInput?.props("modelValue")).toBe("main");
    expect(branchInput?.props("isRequired")).toBe(false);
    expect(branchInput?.props("disabled")).toBe(true);
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

  it("requires the reference and asset fields only when their options are enabled", async () => {
    const wrapper = mount(RepoBadges);
    const sourceCheckbox = wrapper
      .findAllComponents(Checkbox)
      .find((checkbox) => checkbox.props("label") === "Source archive badge");
    const assetCheckbox = wrapper
      .findAllComponents(Checkbox)
      .find((checkbox) => checkbox.props("label") === "Release asset badge");

    await sourceCheckbox?.find("input").setValue(true);
    await assetCheckbox?.find("input").setValue(true);
    await nextTick();
    expect(wrapper.vm.addDownloadSource).toBe(true);

    const branchInput = wrapper
      .findAllComponents(TextInput)
      .find((input) => input.props("note") === "Git branch to download.");
    const assetInput = wrapper
      .findAllComponents(TextInput)
      .find((input) => input.props("label") === "Asset filename");

    expect(branchInput?.props("isRequired")).toBe(true);
    expect(branchInput?.find("input").attributes("required")).toBeDefined();
    expect(branchInput?.find(".required").text()).toBe("*");
    expect(assetInput?.props("isRequired")).toBe(true);
    expect(assetInput?.find("input").attributes("required")).toBeDefined();
    expect(assetInput?.find(".required").text()).toBe("*");
    expect(
      (wrapper.find("form").element as HTMLFormElement).checkValidity()
    ).toBe(false);

    await assetInput?.find("input").setValue("release.zip");
    expect(
      (wrapper.find("form").element as HTMLFormElement).checkValidity()
    ).toBe(true);
    await branchInput?.find("input").setValue("");
    expect(
      (wrapper.find("form").element as HTMLFormElement).checkValidity()
    ).toBe(false);

    await sourceCheckbox?.find("input").setValue(false);

    expect(branchInput?.props("isRequired")).toBe(false);
    expect(
      (wrapper.find("form").element as HTMLFormElement).checkValidity()
    ).toBe(true);

    await assetCheckbox?.find("input").setValue(false);
    expect(assetInput?.props("isRequired")).toBe(false);
    expect(
      (wrapper.find("form").element as HTMLFormElement).checkValidity()
    ).toBe(true);
  });

  it("persists inputs and appends selected badges using the shared format", async () => {
    const wrapper = mount(RepoBadges);
    const checkbox = (label: string) =>
      wrapper
        .findAllComponents(Checkbox)
        .find((item) => item.props("label") === label);

    await checkbox("Source archive badge")?.find("input").setValue(true);
    await checkbox("Latest release badge")?.find("input").setValue(true);
    await checkbox("Release asset badge")?.find("input").setValue(true);
    await wrapper.find("#download-reference-tag").setValue(true);
    await wrapper.find("#download-archive-format").setValue("tar.gz");

    const tagInput = wrapper
      .findAllComponents(TextInput)
      .find((input) => input.props("label") === "Tag");
    await tagInput?.find("input").setValue("v2.0");

    const assetInput = wrapper
      .findAllComponents(TextInput)
      .find((input) => input.props("label") === "Asset filename");
    await assetInput?.find("input").setValue("hello world.tar.gz");
    await nextTick();

    expect(store.getAddDownloadSource()).toBe(true);
    expect(store.getAddDownloadLatestRelease()).toBe(true);
    expect(store.getAddDownloadReleaseAsset()).toBe(true);
    expect(store.getDownloadReferenceType()).toBe("tag");
    expect(store.getDownloadReference()).toBe("v2.0");
    expect(store.getDownloadArchiveFormat()).toBe("tar.gz");
    expect(store.getDownloadAssetFilename()).toBe("hello world.tar.gz");

    wrapper.unmount();
    const restoredWrapper = mount(RepoBadges);
    expect(restoredWrapper.vm.addDownloadSource).toBe(true);
    expect(restoredWrapper.vm.addDownloadLatestRelease).toBe(true);
    expect(restoredWrapper.vm.addDownloadReleaseAsset).toBe(true);
    expect(restoredWrapper.vm.downloadReference).toBe("v2.0");
    expect(restoredWrapper.vm.downloadArchiveFormat).toBe("tar.gz");
    expect(restoredWrapper.vm.downloadAssetFilename).toBe("hello world.tar.gz");

    await restoredWrapper.vm.submit();

    const result = restoredWrapper
      .findComponent(Results)
      .props("result") as string;
    expect(result).toContain(
      "[![Download tag tar.gz](https://img.shields.io/badge/Download-tag_tar.gz-blue?style=for-the-badge)](https://github.com/MichaelCurrin/badge-generator/archive/refs/tags/v2.0.tar.gz)"
    );
    expect(result).toContain(
      "[![Download latest release tar.gz](https://img.shields.io/badge/dynamic/json?label=download+tar.gz&query=%24.tag_name&url=https%3A%2F%2Fapi.github.com%2Frepos%2FMichaelCurrin%2Fbadge-generator%2Freleases%2Flatest&style=for-the-badge)](https://github.com/MichaelCurrin/badge-generator/releases/latest)"
    );
    expect(result).toContain(
      "[![Download release asset tar.gz](https://img.shields.io/badge/Download-release_asset-blue?style=for-the-badge)](https://github.com/MichaelCurrin/badge-generator/releases/latest/download/hello%20world.tar.gz)"
    );
  });
});
