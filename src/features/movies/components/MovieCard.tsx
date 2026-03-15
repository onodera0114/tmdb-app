"use client"

import {
  Card,
  CardMedia,
  Box,
  Typography,
  Button
} from "@mui/material";

import { Movie } from "@/features/movies/types/movie";

type Props = {
  movie: Movie
}

export default function MovieCard({ movie }: Props) {

  const poster =
    "https://image.tmdb.org/t/p/w500" + movie.poster_path

  return (
    <Card
      sx={{
        width: {
          xs: 140,
          sm: 160,
          md: 180
        },
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform .3s",

        "&:hover": {
          transform: "scale(1.08)"
        },

        "&:hover .overlay": {
          opacity: 1
        }
      }}
    >
      <CardMedia
        component="img"
        height="270"
        image={poster}
        alt={movie.title}
      />

      {/* Hover Overlay */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.85)",
          color: "white",
          opacity: 0,
          transition: "opacity .3s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 2
        }}
      >
        <Typography variant="subtitle1">
          {movie.title}
        </Typography>

        <Typography variant="caption">
          ⭐ {movie.vote_average}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            mt: 1,
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical"
          }}
        >
          {movie.overview}
        </Typography>

        <Button
          size="small"
          variant="contained"
          sx={{ mt: 1 }}
        >
          Details
        </Button>
      </Box>
    </Card>
  )
}