import Markdown from "@/components/Markdown.vue";
import { shallowMount } from "@vue/test-utils";

describe("Markdown.vue", () => {
  it("renders markdown as HTML", () => {
    const wrapper = shallowMount(Markdown, {
      propsData: {
        content: "# Hello"
      },
    });
    expect(wrapper.html()).toMatch("<h1>Hello</h1>\n");
  });
});
