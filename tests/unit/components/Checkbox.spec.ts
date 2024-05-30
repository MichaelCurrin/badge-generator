import Checkbox from "@/components/Checkbox.vue";
import Markdown from "@/components/Markdown.vue";
import { shallowMount } from "@vue/test-utils";

describe("Checkbox.vue", () => {
  it("renders label and checkbox", () => {
    const label = "This is a checkbox";
    const wrapper = shallowMount(Checkbox, {
      props: {
        label,
      },
    });

    const checkbox = wrapper.find("input[type='checkbox']");
    const labelText = wrapper.find("label").text();

    expect(checkbox.exists()).toBe(true);
    expect(labelText).toBe(label);
  });

  it("renders note with Markdown component when provided", () => {
    const label = "Checkbox with note";
    const note = "This is a markdown note.";
    const wrapper = shallowMount(Checkbox, {
      props: {
        label,
        note,
      },
    });

    const noteElement = wrapper.find(".note");
    const markdown = wrapper.findComponent(Markdown);

    expect(noteElement.exists()).toBe(true);
    expect(markdown.exists()).toBe(true);
    expect(markdown.props().content).toBe(note);
  });
});
