"use client"

import HeroMovie from "@/features/movies/components/HeroMovie";
import MovieRow from "@/features/movies/components/MovieRow";

import { useTrendingMovies } from "@/features/movies/hooks/useTrendingMovies"
import { usePopularMovies } from "@/features/movies/hooks/usePopularMovies"
import { useNowPlayingMovies } from "@/features/movies/hooks/useNowPlayingMovies";

export default function Page() {
  const { data: trending } = useTrendingMovies()
  const { data: popular } = usePopularMovies()
  const { data: nowPlaying } = useNowPlayingMovies()

  return (
    <>
      <HeroMovie />

      {trending && (
        <MovieRow
          title="注目作品"
          movies={trending.results}
        />
      )}

      {popular && (
        <MovieRow
          title="人気作品"
          movies={popular.results}
        />
      )}

      {nowPlaying && (
        <MovieRow
          title="上映中作品"
          movies={nowPlaying.results}
        />
      )}
    </>
  )
}