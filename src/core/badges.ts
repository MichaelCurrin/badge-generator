import { StrMap } from "./types.d";

/**
 * Serialize a URL with given query params.
 *
 * @param url Protocol, domain and path. This must have a protocol or it will be considered invalid.
 * @param queryParams Key-value pairs to be used as URL query parameters.
 */
export function buildUrl(url: string, queryParams: StrMap): string {
  const urlObj = new URL(url);

  for (const [key, value] of Object.entries(queryParams)) {
    urlObj.searchParams.append(key, value);
  }
  return decodeURI(urlObj.href);
}

export function formatTitle(label: string, message: string) {
  return label ? [label, message].join(" - ") : message;
}
