import { MovieListResponse } from "@/features/movies/types/trending";
import { fetchTMDB } from "@/lib/tmdb";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function getTrendingMovies(): Promise<MovieListResponse> {
  return fetchTMDB<MovieListResponse>(
    "/trending/movie/week"
  )
}