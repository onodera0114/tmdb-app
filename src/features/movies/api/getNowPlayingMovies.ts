import { MovieListResponse } from "@/features/movies/types/trending";
import { fetchTMDB } from "@/lib/tmdb";

export const getNowPlayingMovies = async (): Promise<MovieListResponse> =>
  fetchTMDB<MovieListResponse>("/movie/now_playing");