import { StrMap } from "./types.d";

/**
 * Create a serialized string from a base URL and query params.
 *
 * @param url Protocol, domain and path. This must have a protocol or it will be considered invalid.
 * @param queryParams Object of key-value pairs. This will be outputted in the form: '?foo=bar'.
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
