/**
 * Generate a status badge around GH Actions.
 *
 * In GitHub on the Actions tab, go to a workflow run and under options on the right choose "Create status badge".
 * This is added to this generator project for convenience. Plus with a smart target URL added.
 */
type Repo = {
  username: string
  repoName: string
}

export function statusData(repo: Repo, workflowName: string) {
  return {
    altText: 'Deno CI',
    imgUrl: 'https://github.com/MichaelCurrin/deno-project-template/workflows/Deno%20CI/badge.svg',
    target: 'https://github.com/MichaelCurrin/deno-project-template/actions?query=workflow%3A%22Deno+CI%22'
  }
}
