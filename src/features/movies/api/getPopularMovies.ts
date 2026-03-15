import { MovieListResponse } from "@/features/movies/types/trending";
import { fetchTMDB } from "@/lib/tmdb";

export const getPopularMovies = async (): Promise<MovieListResponse> =>
  fetchTMDB<MovieListResponse>("/movie/popular");