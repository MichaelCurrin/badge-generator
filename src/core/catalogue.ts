import { genericBadge } from "@/core/badges";
import { COLOR } from "../constants/appearance";
import { BADGE_DETAILS, DEFAULT_IS_LARGE } from "../constants/catalogue";

// Added here as I couldn't add a named export in the Catalogue.vue file.
export function renderBadges() {
  return BADGE_DETAILS.map((badge) =>
    genericBadge(
      badge.label,
      badge.message,
      COLOR.Default,
      badge.isLarge || DEFAULT_IS_LARGE,
      badge.target,
      badge.logo || "",
      badge.logo ? COLOR.LogoDefault : ""
    )
  );
}
