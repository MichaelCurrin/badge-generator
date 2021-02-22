export interface IMdImage {
  altText: string;
  imageTarget: string;
  hoverTitle?: string;
}

interface IMdImageWithLink extends IMdImage {
  linkTarget?: string;
}
