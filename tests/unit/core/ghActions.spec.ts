import { statusData } from "@/core/ghActions";

describe("#statusData", () => {
  it("returns a valid CI badge with a link", () => {
    const repo = {
      username: "MichaelCurrin",
      repoName: "deno-project-template",
    };
    // This be the `name` field at the top of your YAML file. The file name is irrelevant.
    const workflowName = "Deno CI";

    const expected = {
      altText: "Deno CI",
      imgUrl:
        "https://github.com/MichaelCurrin/deno-project-template/workflows/Deno%20CI/badge.svg",
      target:
        "https://github.com/MichaelCurrin/deno-project-template/actions?query=workflow%3A%22Deno+CI%22",
    };

    expect(statusData(repo, workflowName)).toStrictEqual(expected);
  });
});
