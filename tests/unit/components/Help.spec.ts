import Help from "@/components/Help.vue";
import { shallowMount } from "@vue/test-utils";

describe("Help.vue", () => {
  it("renders props.message when passed", () => {
    const message = "Help text";
    const wrapper = shallowMount(Help, {
      propsData: { message },
    });

    expect(wrapper.text()).toMatch(message);
  });
});
