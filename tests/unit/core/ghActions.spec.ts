import { statusData } from "@/core/ghActions";

describe("#statusData", () => {
  it("returns a valid CI badge with a link", () => {
    const repo = {
      username: "MichaelCurrin",
      repoName: "deno-project-template",
    };
    // This comes from the `name` field at the top of your YAML file. The file name is irrelevant.
    const workflowName = "Deno CI";

    const expected = {
      altText: "Deno CI",
      imgUrl:
        "https://github.com/MichaelCurrin/deno-project-template/workflows/Deno%20CI/badge.svg",
      target:
        'https://github.com/MichaelCurrin/deno-project-template/actions?query=workflow:"Deno+CI"',
    };

    expect(statusData(repo, workflowName)).toStrictEqual(expected);
  });

  it("returns a valid CI badge with a link", () => {
    const repo = {
      username: "foo",
      repoName: "bar",
    };
    // This comes from the `name` field at the top of your YAML file. The file name is irrelevant.
    const workflowName = "Bazz CI";

    const expected = {
      altText: "Bazz CI",
      imgUrl: "https://github.com/foo/bar/workflows/Bazz%20CI/badge.svg",
      target:
        'https://github.com/foo/bar/actions?query=workflow:"Bazz+CI"',
    };

    expect(statusData(repo, workflowName)).toStrictEqual(expected);
  });
});
