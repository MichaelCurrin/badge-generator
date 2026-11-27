export type TagTypes = "release" | "tag";

export type DownloadArchiveFormat = "zip" | "tar.gz";

export type DownloadBadgeOptions = {
  source?: {
    branch: string;
    format: DownloadArchiveFormat;
  };
  releaseAsset?: {
    releaseName: string;
    filename: string;
  };
};

export type DownloadBadge =
  | {
      kind: "source";
      branch: string;
      format: DownloadArchiveFormat;
      markdown: string;
    }
  | {
      kind: "releaseAsset";
      releaseName: string;
      filename: string;
      markdown: string;
    };
