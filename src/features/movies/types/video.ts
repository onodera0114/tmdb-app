export type Video = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
};

export type VideoResponse = {
  id: number;
  results: Video[];
};