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

  it("does not render a note element when note prop is omitted", () => {
    const wrapper = shallowMount(Checkbox, {
      props: {
        label: "No note here",
      },
    });

    expect(wrapper.find(".note").exists()).toBe(false);
  });

  it("reflects modelValue: true as a checked checkbox", () => {
    const wrapper = shallowMount(Checkbox, {
      props: {
        label: "Pre-checked",
        modelValue: true,
      },
    });

    const checkbox = wrapper.find("input[type='checkbox']");
    expect((checkbox.element as HTMLInputElement).checked).toBe(true);
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

  it("uses a slugified id and label for attribute", () => {
    const label = "Enable Python Version";
    const wrapper = shallowMount(Checkbox, {
      props: {
        label,
      },
    });

    const inputId = wrapper.find("input").attributes("id");
    const labelFor = wrapper.find("label").attributes("for");

    expect(inputId).toBe("box-enable-python-version");
    expect(labelFor).toBe(inputId);
  });

  it("emits update:modelValue when checkbox changes", async () => {
    const wrapper = shallowMount(Checkbox, {
      props: {
        label: "Toggle me",
        modelValue: false,
      },
    });

    await wrapper.find("input").setValue(true);

    expect(wrapper.emitted("update:modelValue")).toEqual([[true]]);
  });
});
