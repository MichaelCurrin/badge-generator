import TextInput from "@/components/TextInput.vue";
import Markdown from "@/components/Markdown.vue";
import { shallowMount } from "@vue/test-utils";

describe("TextInput.vue", () => {
  it("renders label and text input", () => {
    const label = "Repository name";
    const wrapper = shallowMount(TextInput, {
      props: {
        label,
        modelValue: "my-repo",
      },
    });

    const input = wrapper.find("input[type='text']");

    expect(input.exists()).toBe(true);
    expect(wrapper.find("label").text()).toBe(label);
    expect(input.attributes("value")).toBe("my-repo");
  });

  it("shows a required marker when isRequired is true", () => {
    const wrapper = shallowMount(TextInput, {
      props: {
        label: "Username",
        modelValue: "",
        isRequired: true,
      },
    });

    expect(wrapper.find(".required").text()).toBe("*");
    expect(wrapper.find("input").attributes("required")).toBeDefined();
  });

  it("does not show a required marker when isRequired is false", () => {
    const wrapper = shallowMount(TextInput, {
      props: {
        label: "Optional field",
        modelValue: "",
      },
    });

    expect(wrapper.find(".required").exists()).toBe(false);
  });

  it("passes placeholder and disabled attributes to the input", () => {
    const wrapper = shallowMount(TextInput, {
      props: {
        label: "Branch",
        modelValue: "",
        placeholder: "main",
        disabled: true,
      },
    });

    const input = wrapper.find("input");

    expect(input.attributes("placeholder")).toBe("main");
    expect(input.attributes("disabled")).toBeDefined();
  });

  it("does not render a note element when note prop is omitted", () => {
    const wrapper = shallowMount(TextInput, {
      props: {
        label: "No note here",
        modelValue: "",
      },
    });

    expect(wrapper.find(".note").exists()).toBe(false);
  });

  it("renders note with Markdown component when provided", () => {
    const note = "This is a markdown note.";
    const wrapper = shallowMount(TextInput, {
      props: {
        label: "With note",
        modelValue: "",
        note,
      },
    });

    const markdown = wrapper.findComponent(Markdown);

    expect(wrapper.find(".note").exists()).toBe(true);
    expect(markdown.exists()).toBe(true);
    expect(markdown.props().content).toBe(note);
  });

  it("uses a slugified id and label for attribute", () => {
    const wrapper = shallowMount(TextInput, {
      props: {
        label: "Python Version",
        modelValue: "3.11",
      },
    });

    const inputId = wrapper.find("input").attributes("id");
    const labelFor = wrapper.find("label").attributes("for");

    expect(inputId).toBe("text-python-version-311");
    expect(labelFor).toBe(inputId);
  });

  it("emits update:modelValue when input changes", async () => {
    const wrapper = shallowMount(TextInput, {
      props: {
        label: "Edit me",
        modelValue: "old",
      },
    });

    await wrapper.find("input").setValue("new");

    expect(wrapper.emitted("update:modelValue")).toEqual([["new"]]);
  });
});
