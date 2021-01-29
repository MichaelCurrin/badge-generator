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

export function _statusBadgeUrl(ghURL: string, workflowName: string) {
  return `${ghURL}/workflows/${workflowName.replace(" ", "%20")}/badge.svg`;
}

export function statusData(repoFields: TRepo, workflowName: string) {
  // The URL encoded target comes from search in the UI like 'workflow:"Deno CI"'.

  const repo = new Repo(repoFields.username, repoFields.repoName);
  const ghURL = repo.ghURL();

  return {
    altText: workflowName,
    imgUrl: _statusBadgeUrl(ghURL, workflowName),
    target: `${ghURL}/actions?query=workflow%3A%22${workflowName.replace(
      " ",
      "+"
    )}%22`,
  };
}
