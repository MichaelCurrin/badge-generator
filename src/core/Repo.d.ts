export type TagTypes = "release" | "tag";

export type DownloadArchiveFormat = "zip" | "tar.gz";

export type DownloadReference = {
  type: "branch" | "tag";
  value: string;
};

export type DownloadBadgeOptions = {
  source?: {
    reference: DownloadReference;
    format: DownloadArchiveFormat;
  };
  latestRelease?: DownloadArchiveFormat;
  releaseAsset?: {
    filename: string;
    format: DownloadArchiveFormat;
  };
};

export type DownloadBadge =
  | {
      kind: "source";
      reference: DownloadReference;
      format: DownloadArchiveFormat;
      markdown: string;
    }
  | {
      kind: "latestRelease";
      format: DownloadArchiveFormat;
      markdown: string;
    }
  | {
      kind: "releaseAsset";
      filename: string;
      format: DownloadArchiveFormat;
      markdown: string;
    };
