/*
 * Based on GenericBadge function inputs. Except, everything is optional here and
 * uppercase.
 */
export interface IGenericBadge {
  label?: string;
  message?: string;
  color?: string;
  isLarge: boolean;
  linkTarget?: string;
  logo?: string;
  logoColor?: string;
  altText?: string;
  hoverTitle?: string;
}
