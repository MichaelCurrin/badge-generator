/**
 * Appearance module.
 *
 * Info that applies across the app and not to any specific badge.
 */
// Same as CSS in App.vue module.
export const APP_THEME_COLOR = "42b983";

export const DESCRIPTION = "Magically generate Markdown badges for your docs";

export const STYLES = {
  FOR_THE_BADGE: "for-the-badge",
  SOCIAL: "social",
};

// Note that a "green" badge with white text has poor contrast. But green hex from GitHub reads much
// better and fits in well on a GitHub README.md file.
export enum COLOR {
  Default = "blue",
  Green = "2ea44f",
  LogoDefault = "white",
}
