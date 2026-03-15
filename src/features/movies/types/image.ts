export type Image = {
  file_path: string;
  width: number;
  height: number;
};

export type ImageResponse = {
  backdrops: Image[];
  posters: Image[];
};