/*
 * Based on GenericBadge function inputs. But everything is optional here and uppercase.
 */
export type genericBadgeBase = {
  label?: string;
  message?: string;
  color?: string;
  isLarge: boolean;
  target?: string;
  logo?: string;
  logoColor?: string;
  altText?: string;
};
