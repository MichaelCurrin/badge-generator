import { shallowMount } from "@vue/test-utils";
import { beforeEach } from "@jest/globals";
import PackageBadges from "@/views/PackageBadges.vue";

describe("PackageBadges.vue", () => {
  beforeEach(() => localStorage.clear());

  const createWrapper = () => shallowMount(PackageBadges);

  it("omits all badges when the package name is empty", () => {
    const wrapper = createWrapper();
    wrapper.vm.$data.pkgName = "  ";

    expect(() => wrapper.vm.submit()).not.toThrow();
    expect(wrapper.vm.$data.result.trim()).toBe("");
  });

  it.each([
    ["username", ""],
    ["repoName", ""],
  ])("omits the NPM version badge when %s is empty", (field, value) => {
    const wrapper = createWrapper();
    wrapper.vm.$data.username = "owner";
    wrapper.vm.$data.repoName = "repo";
    wrapper.vm.$data[field] = value;

    wrapper.vm.submit();

    expect(wrapper.vm.$data.result).toContain("dependency - vue");
    expect(wrapper.vm.$data.result).not.toContain("github/package-json");
  });
});
