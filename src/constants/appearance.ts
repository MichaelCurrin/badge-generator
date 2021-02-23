export const DESCRIPTION =
  "Magically generate custom badges that you can paste in your docs";

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

export const NODE_VERSION_BADGE = {
  IS_LARGE: false,
};
