// TODO combine link/target functions in a module.

export function markdownLink(altText: string, linkTarget: string) {
  return `[${altText}](${linkTarget})`;
}
