import Code from "@/components/Code.vue";
import { shallowMount } from "@vue/test-utils";

describe("Code.vue", () => {
  // Note that we do not care about convering Markdown to HTML here. That is supposed to be
  // triggered but doesn't seem to happen in tests.
  it("renders a codeblock with highlighting", () => {
    const wrapper = shallowMount(Code, {
      props: {
        code: "## Foo bar",
      },
    });
    const expected = "<pre><code class=\"markdown hljs\"><span class=\"hljs-section\">## Foo bar</span></code></pre>"
    expect(wrapper.html()).toBe(expected);
  });
});
