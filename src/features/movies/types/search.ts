import { Movie } from "@/features/movies/types/movie";
import { TMDBListResponse } from "@/features/movies/types/common";

export type SearchMovieResponse = TMDBListResponse<Movie>;