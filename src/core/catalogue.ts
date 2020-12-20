import { genericBadge } from "@/core/badges";
import {
  CATALOGUE_BADGES,
  DEFAULT_COLOR,
  DEFAULT_LOGO_COLOR,
} from "@/core/constants";

const DEFAULT_IS_LARGE = false;

// Added here as I couldn't add a named export in the Catalogue.vue file.
export function renderBadges() {
  return CATALOGUE_BADGES.map((badge) =>
    genericBadge(
      badge.label,
      badge.message,
      DEFAULT_COLOR,
      badge.isLarge || DEFAULT_IS_LARGE,
      badge.target,
      badge.logo || "",
      badge.logo ? DEFAULT_LOGO_COLOR : ""
    )
  );
}
