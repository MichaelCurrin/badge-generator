import Code from "@/components/Code.vue";
import { shallowMount } from "@vue/test-utils";
import hljs from "highlight.js";

describe("Code.vue", () => {
  it("renders a Markdown codeblock as Markdown code, with highlighting", () => {
    const wrapper = shallowMount(Code, {
      props: {
        code: "## Foo bar",
      },
    });
    const expected =
      '<pre><code class="markdown hljs"><span class="hljs-section">## Foo bar</span></code></pre>';

    expect(wrapper.html()).toContain(expected);
  });

  it("renders a Markdown codeblock as HTML code, with highlighting", () => {
    const wrapper = shallowMount(Code, {
      props: {
        code: "## Foo bar",
      },
      data() {
        return {
          asHtml: true,
        };
      },
    });
    const expected = `\
<pre><code class="markdown hljs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span></span>Foo bar<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span></span>
</code></pre>`;

    expect(wrapper.html()).toContain(expected);
  });

  it("renders a show HTML checkbox", () => {
    const wrapper = shallowMount(Code, {
      props: {
        code: "## Foo bar",
      },
    });
    const expected = `\
<div>
  <checkbox-stub label="Show HTML" modelvalue="false"></checkbox-stub><br><pre><code class="markdown hljs"><span class="hljs-section">## Foo bar</span></code></pre>
</div>`;

    expect(wrapper.html()).toBe(expected);
  });

  it("highlights code on mount", () => {
    const spy = jest.spyOn(hljs, "highlightElement");

    shallowMount(Code, {
      props: {
        code: "## Foo bar",
      },
    });

    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });

  it("highlights code again after update", async () => {
    const spy = jest.spyOn(hljs, "highlightElement");
    const wrapper = shallowMount(Code, {
      props: {
        code: "## Foo bar",
      },
    });

    await wrapper.setProps({ code: "### Updated" });

    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockRestore();
  });

  it("updates asHtml via checkbox v-model event", async () => {
    const wrapper = shallowMount(Code, {
      props: {
        code: "## Foo bar",
      },
    });

    await wrapper
      .findComponent({ name: "Checkbox" })
      .vm.$emit("update:modelValue", true);

    expect((wrapper.vm as unknown as { asHtml: boolean }).asHtml).toBe(true);
  });
});
