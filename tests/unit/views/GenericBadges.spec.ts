import { shallowMount } from "@vue/test-utils";

import GenericBadges from "@/views/GenericBadges.vue";
import { INITIAL_RESULT } from "@/constants/text";

describe("GenericBadges.vue", () => {
  it("updates output when a valid form field changes", async () => {
    const wrapper = shallowMount(GenericBadges);

    await wrapper.setData({ message: "Updated" });
    await wrapper.find("form").trigger("change");

    expect(wrapper.vm.result).toContain("Updated");
  });

  it("clears output when the form is incomplete", () => {
    const wrapper = shallowMount(GenericBadges);
    wrapper.vm.result = "Previous output";

    wrapper.vm.updateResults({
      currentTarget: { checkValidity: () => false },
    } as unknown as Event);

    expect(wrapper.vm.result).toBe(INITIAL_RESULT);
  });
});
