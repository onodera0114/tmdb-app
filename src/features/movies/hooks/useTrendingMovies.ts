"use client"

import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "@/features/movies/api/getTrendingMovies"
import { MovieListResponse } from "@/features/movies/types/trending"

export const useTrendingMovies = () => {
  return useQuery<MovieListResponse>({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
  });
};