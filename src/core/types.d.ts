type StrMap = { [key: string]: string };

export type CounterType = "stars" | "forks";

export type GenericBadge = {
  label?: string;
  message: string;
  color: string;
};

export type GHRepo = {
  username: string;
  repoName: string;
};
