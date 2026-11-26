import ThemeToggle from "@/components/ThemeToggle.vue";
import store from "@/store";
import { shallowMount } from "@vue/test-utils";

/**
 * Mock window.matchMedia for theme preference tests.
 *
 * @param prefersDark Whether the browser prefers dark mode.
 */
function mockMatchMedia(prefersDark: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches: prefersDark,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

describe("ThemeToggle.vue", () => {
  beforeEach(() => {
    localStorage.removeItem("user-theme");
    document.documentElement.className = "";
  });

  it("renders a theme toggle checkbox", () => {
    mockMatchMedia(false);

    const wrapper = shallowMount(ThemeToggle);

    expect(wrapper.find("input[type='checkbox']").exists()).toBe(true);
  });

  it("sets dark theme from browser preference on mount", () => {
    mockMatchMedia(true);

    shallowMount(ThemeToggle);

    expect(store.getUserTheme()).toBe("dark-theme");
  });

  it("sets light theme from browser preference on mount", () => {
    mockMatchMedia(false);

    shallowMount(ThemeToggle);

    expect(store.getUserTheme()).toBe("light-theme");
  });

  it("toggles between light and dark themes on change", async () => {
    mockMatchMedia(false);

    const wrapper = shallowMount(ThemeToggle);
    expect(store.getUserTheme()).toBe("light-theme");

    await wrapper.find("input").trigger("change");
    expect(store.getUserTheme()).toBe("dark-theme");

    await wrapper.find("input").trigger("change");
    expect(store.getUserTheme()).toBe("light-theme");
  });
});
