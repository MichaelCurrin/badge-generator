import { BADGE_DEFAULTS, BADGE_DETAILS } from "../constants/catalogue";
import { genericBadge } from "./genericBadge";

export function renderBadges() {
  return BADGE_DETAILS.map((badge) => {
    const isLarge =
      typeof badge.isLarge === "undefined"
        ? BADGE_DEFAULTS.IS_LARGE
        : badge.isLarge;

    return genericBadge(
      badge.label,
      badge.message,
      BADGE_DEFAULTS.COLOR,
      isLarge,
      badge.target,
      badge.logo,
      badge.logo ? BADGE_DEFAULTS.LOGO_COLOR : "",
      false,
      badge.altText
    );
  });
}
