/**
 * Generate a status badge around GH Actions.
 *
 * In GitHub on the Actions tab, go to a workflow run and under options on the right choose "Create status badge".
 * This is added to this generator project for convenience. Plus with a smart target URL added.
 */
// TODO Move to related file or to a lib file that can be shared.
type Repo = {
  username: string;
  repoName: string;
};

export function statusData(repo: Repo, workflowName: string) {
  // The URL encoded target comes from search in the UI like 'workflow:"Deno CI"'.
  return {
    altText: workflowName,
    imgUrl: `https://github.com/MichaelCurrin/deno-project-template/workflows/${workflowName.replace(
      " ",
      "%20"
    )}/badge.svg`,
    target: `https://github.com/MichaelCurrin/deno-project-template/actions?query=workflow%3A%22${workflowName.replace(
      " ",
      "+"
    )}%22`,
  };
}
