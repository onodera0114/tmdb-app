"use client"

import { useQuery } from "@tanstack/react-query"
import { fetchTMDB } from "@/lib/tmdb"
import { MovieListResponse } from "@/features/movies/types/trending";

export const usePopularMovies = () => {
  return useQuery<MovieListResponse>({
    queryKey: ["popularMovies"],
    queryFn: () => fetchTMDB("/movie/popular"),
  });
};