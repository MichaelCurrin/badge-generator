import Code from "@/components/Code.vue";
import { shallowMount } from "@vue/test-utils";

describe("Code.vue", () => {
  it("renders code", () => {
    const wrapper = shallowMount(Code, {
      props: {
        code: "## Foo bar",
      },
    });
    expect(wrapper.html()).toBe(
      '<pre><code>## Foo bar</code></pre>'
    );
  });
});
