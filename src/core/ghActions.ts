/**
 * Generate a status badge around GH Actions.
 *
 * In GitHub on the Actions tab, go to a workflow run and under options on the right choose "Create status badge".
 * This is added to this generator project for convenience. Plus with a smart target URL added.
 */

import { Repo } from "./Repo";

// TODO Move to related file or to a lib file that can be shared.
type TRepo = {
  username: string;
  repoName: string;
};

/**
 * Create URL for a GH Actions CI status badge.
 */
export function _statusBadgeUrl(ghURL: string, workflowName: string) {
  const encodedName = workflowName.replace(" ", "%20");

  return `${ghURL}/workflows/${encodedName}/badge.svg`;
}

/**
 * Create URL to view runs for a workflow name.
 *
 * The URL encoded target comes from search in the UI like 'workflow:"Deno CI"'.
 *
 * TODO refactor use to clean URL and then apply encoding to it.
 */
export function _statusTargetUrl(ghURL: string, workflowName: string) {
  const encodedName = workflowName.replace(" ", "+");

  return `${ghURL}/actions?query=workflow%3A%22${encodedName}%22`;
}

/**
 * Return data needed to make a GH Actions CI badge.
 */
export function statusData(repoFields: TRepo, workflowName: string) {
  const repo = new Repo(repoFields.username, repoFields.repoName);
  const ghURL = repo.ghURL();

  return {
    altText: workflowName,
    imgUrl: _statusBadgeUrl(ghURL, workflowName),
    target: _statusTargetUrl(ghURL, workflowName),
  };
}
