import Code from "@/components/Code.vue";
import { shallowMount } from "@vue/test-utils";

describe("Code.vue", () => {
  it("renders highlighted code with default settings", () => {
    const wrapper = shallowMount(Code, {
      propsData: {
        code: "## Foo bar",
      },
    });
    expect(wrapper.html()).toBe(
      '<highlightjs-stub code="## Foo bar" language="markdown"></highlightjs-stub>'
    );
  });

  it("renders highlighted code with a given language", () => {
    const wrapper = shallowMount(Code, {
      propsData: {
        code: "console.log('Foo, bar')",
        language: "javascript",
      },
    });
    expect(wrapper.html()).toBe(
      '<highlightjs-stub code="console.log(\'Foo, bar\')" language="javascript"></highlightjs-stub>'
    );
  });
});
