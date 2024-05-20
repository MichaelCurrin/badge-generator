export interface IMdLink {
  altText: string;
  linkTarget: string;
  hoverTitle?: string;
}

export interface IMdImage {
  altText: string;
  imageTarget: string;
  hoverTitle?: string;
}

interface IMdImageWithLink extends IMdImage {
  linkTarget?: string;
}
