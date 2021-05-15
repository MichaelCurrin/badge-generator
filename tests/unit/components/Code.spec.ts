import Code from "@/components/Code.vue";
import { shallowMount } from "@vue/test-utils";

describe("Code.vue", () => {
  // Note that we do not care about convering Markdown to HTML here. It doesn't get rendered when
  // doing the highlightjs component or using the plain style.
  it("renders a codeblock with highlighting", () => {
    const wrapper = shallowMount(Code, {
      props: {
        code: "## Foo bar",
      },
    });
    const expected =
      '<pre><code class="markdown hljs"><span class="hljs-section">## Foo bar</span></code></pre>';
    expect(wrapper.html()).toBe(expected);
  });
});
