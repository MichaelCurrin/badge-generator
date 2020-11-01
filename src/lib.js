/**
 * Lib helper functions for Vue app.
 */

export function stripLeadingSlash(value) {
  return value.replace(/^\/+/, "");
}

export function slugify(...values) {
  const value = values.join("-");

  return value
    .replace(/^\s+|\s+$/g, "") // Trim
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-") // Collapse whitespace
    .replace(/-+/g, "-"); // Collapse dashes
}
