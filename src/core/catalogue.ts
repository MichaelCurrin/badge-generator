import { BADGE_DEFAULTS, BADGE_DETAILS } from "../constants/catalogue";
import { genericBadge } from "./genericBadge";

export function renderBadges() {
  return BADGE_DETAILS.map((badge) =>
    genericBadge(
      badge.label,
      badge.message,
      BADGE_DEFAULTS.COLOR,
      badge.isLarge || BADGE_DEFAULTS.IS_LARGE,
      badge.target,
      badge.logo || "",
      badge.logo ? BADGE_DEFAULTS.LOGO_COLOR : ""
    )
  );
}
