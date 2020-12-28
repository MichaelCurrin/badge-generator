import Help from "@/components/Help.vue";
import { shallowMount } from "@vue/test-utils";

describe("Help.vue", () => {
  it("renders props.message when passed", () => {
    const wrapper = shallowMount(Help, {
      propsData: {
        message: "Help text",
      },
    });

    expect(wrapper.html()).toContain("Help text");
  });
});
