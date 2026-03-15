"use client"

import { Box, Typography, Button } from "@mui/material";
import { Movie } from "@/features/movies/types/movie";
import { useTrendingMovies } from "@/features/movies/hooks/useTrendingMovies";
import { useState, useEffect } from "react";

export default function HeroMovie() {
  const { data } = useTrendingMovies()
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    if (data?.results?.length) {
      // ランダムに1作品選ぶ
      const randomIndex = Math.floor(Math.random() * data.results.length)
      setMovie(data.results[randomIndex])
    }
  }, [data])

  if (!movie) return null

  const backdropUrl = "https://image.tmdb.org/t/p/original" + movie.backdrop_path

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 400, md: 600 },
        color: "white",
        backgroundImage: `url(${backdropUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "flex-end",
        p: { xs: 3, md: 6 },
      }}
    >
      {/* グラデーションオーバーレイ */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1))",
          zIndex: 1,
        }}
      />

      {/* テキスト & ボタン */}
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: { xs: "100%", md: "50%" } }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          {movie.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
          }}
        >
          {movie.overview}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ px: 3 }}
          >
            ▶ Play
          </Button>

          <Button
            variant="outlined"
            color="inherit"
            sx={{ px: 3, borderColor: "white", color: "white" }}
          >
            Details
          </Button>
        </Box>
      </Box>
    </Box>
  )
}