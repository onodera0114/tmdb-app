"use client"

import { Box, Typography, Button, Container } from "@mui/material"
import { useTrendingMovies } from "../hooks/useTrendingMovies"

export function HeroMovie() {
  const { data, isLoading, error } = useTrendingMovies()

  if (isLoading) return <div>Loading...</div>

  if (error || !data) return <div>Error loading movie</div>

  const movie = data.results[0]

  const backdropUrl =
    "https://image.tmdb.org/t/p/original" + movie.backdrop_path

  return (
    <Box
      sx={{
        position: "relative",
        height: 500,
        backgroundImage: `url(${backdropUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h3" gutterBottom>
          {movie.title}
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: 600 }}>
          {movie.overview}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          ⭐ {movie.vote_average}
        </Typography>

        <Button variant="contained" sx={{ mt: 2 }}>
          Details
        </Button>
      </Container>
    </Box>
  )
}