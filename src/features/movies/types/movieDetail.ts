import { Genre } from "@/features/movies/types/genre";

export type MovieDetail = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: Genre[];
  tagline: string;
  homepage: string | null;
};