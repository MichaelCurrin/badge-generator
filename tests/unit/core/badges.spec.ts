import { markdownLink } from '@/core/badges';

describe("#markdownLink", () => {
  it("returns a valid markdown link", () => {
    expect(
      markdownLink('Alt text', 'foo.md'))
      .toMatch('[Alt text](foo.md)');

    expect(
      markdownLink('Example', 'https://example.com'))
      .toMatch('[Example](https://example.com)');
  });
});
