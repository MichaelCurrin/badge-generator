export type StrMap = { [key: string]: string };

export type RepoMetric = "stars" | "forks";

export type GenericBadge = {
  label?: string;
  message: string;
  color: string;
};

// Simpler than Repo class and useful for functions used within Repo class methods where Repo type
// can't be used. Plus, if you pass Repo type to a function expecting GHRepo, it still works.
export type GHRepo = {
  username: string;
  repoName: string;
};
