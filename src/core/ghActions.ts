/**
 * Generate a status badge around GH Actions.
 *
 * In GitHub on the Actions tab, go to a workflow run and under options on the
 * right choose "Create status badge". This is added to this generator project
 * for convenience. Plus with a smart target URL added.
 */
import { TGHWorkflow } from "./ghActions.d";
import { mdImageWithLink } from "./markdown";
import { Repo } from "./Repo";

/**
 * Create URL for a GH Actions CI status badge.
 *
 * Note that "+" does not work in place of a space, so "%20" must be used.
 */
export function _statusBadgeUrl({ ghURL, workflowName }: TGHWorkflow) {
  const encodedName = encodeURIComponent(workflowName);

  return `${ghURL}/workflows/${encodedName}/badge.svg`;
}

/**
 * Create URL to view runs for a workflow name.
 *
 * Note that this  not need encoding - GitHub handles the unescaped
 * colon and quotes fine.
 */
export function _statusTargetUrl({ ghURL, workflowName }: TGHWorkflow) {
  const encodedName = workflowName.replace(/ /g, "+");

  return `${ghURL}/actions?query=workflow:"${encodedName}"`;
}

/**
 * Return data needed to make a GH Actions CI badge.
 */
export function _statusData({ ghURL, workflowName }: TGHWorkflow) {
  return {
    altText: workflowName,
    imageTarget: _statusBadgeUrl({ ghURL, workflowName }),
    linkTarget: _statusTargetUrl({ ghURL, workflowName }),
  };
}

/**
 * Return markdown text for a GH Actions status badge.
 *
 * Workflow names comes from the `name` value at the top of your YAML file. The
 * actual filename is irrelevant.
 */
export function statusBadge(repo: Repo, workflowName: string) {
  const ghURL = repo.ghURL();
  const fields = _statusData({ ghURL, workflowName });

  return mdImageWithLink(fields);
}
