import Pre from "@/components/Pre.vue";
import { shallowMount } from "@vue/test-utils";

describe("Pre.vue", () => {
  it("renders preformatted code", () => {
    const wrapper = shallowMount(Pre, {
      slots: {
        default: "Foo bar",
      },
    });
    expect(wrapper.html()).toBe("<pre><code>Foo bar</code></pre>");
  });
});
