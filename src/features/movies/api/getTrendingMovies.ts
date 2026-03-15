import { MovieListResponse } from "@/features/movies/types/trending";
import { fetchTMDB } from "@/lib/tmdb";

export const getTrendingMovies = async (): Promise<MovieListResponse> =>
  fetchTMDB<MovieListResponse>("/trending/movie/week");