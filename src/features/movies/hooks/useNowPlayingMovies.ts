"use client"

import { useQuery } from "@tanstack/react-query"
import { getNowPlayingMovies } from "@/features/movies/api/getNowPlayingMovies";
import { MovieListResponse } from "@/features/movies/types/trending";

export const useNowPlayingMovies = () => {
  return useQuery<MovieListResponse>({
    queryKey: ["nowPlayingMovies"],
    queryFn: getNowPlayingMovies,
  })
}