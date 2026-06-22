import Results from "@/components/Results.vue";
import Code from "@/components/Code.vue";
import Markdown from "@/components/Markdown.vue";
import { shallowMount } from "@vue/test-utils";

describe("Results.vue", () => {
  it("renders output headings", () => {
    const wrapper = shallowMount(Results, {
      props: {
        result: "![badge](https://img.shields.io/badge/test-blue)",
      },
    });

    const headings = wrapper.findAll("h2, h3").map((node) => node.text());

    expect(headings).toEqual(["Output values", "Preview", "Code"]);
  });

  it("passes result to Markdown preview and Code components", () => {
    const result = "![badge](https://img.shields.io/badge/test-blue)";
    const wrapper = shallowMount(Results, {
      props: { result },
    });

    const markdown = wrapper.findComponent(Markdown);
    const code = wrapper.findComponent(Code);

    expect(markdown.props().content).toBe(result);
    expect(code.props().code).toBe(result);
  });
});
