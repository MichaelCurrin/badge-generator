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
 *
 * Note that "+" does not work in place of a space, so "%20" must be used.
 */
export function _statusBadgeUrl(ghURL: string, workflowName: string) {
  const encodedName = encodeURIComponent(workflowName);

  return `${ghURL}/workflows/${encodedName}/badge.svg`;
}

/**
 * Create URL to view runs for a workflow name.
 *
 * Note that this URL does not need encoding - GitHub handles the unescaped colon and quotes fine.
 */
export function _statusTargetUrl(ghURL: string, workflowName: string) {
  const encodedName = workflowName.replace(/ /g, "+");

  return `${ghURL}/actions?query=workflow:"${encodedName}"`;
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
