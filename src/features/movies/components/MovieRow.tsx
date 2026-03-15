"use client"

import { useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MovieCard from "@/features/movies/components/MovieCard";
import { Movie } from "@/features/movies/types/movie";

type Props = {
  title: string;
  movies: Movie[];
};

export default function MovieRow({ title, movies }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState<boolean>(false)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth"
    })
  }

  return (
    <Box sx={{ mb: 5 }}>

      <Typography variant="h5" sx={{ mb: 2 }}>
        {title}
      </Typography>

      <Box
        sx={{ position: "relative" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* 左ボタン */}
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "rgba(0,0,0,0.5)",
            color: "white",
            transition: "opacity 0.3s",
            opacity: hover ? 1 : 0,
            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
            display: { xs: "none", md: "flex" }
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* 右ボタン */}
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "rgba(0,0,0,0.5)",
            color: "white",
            transition: "opacity 0.3s",
            opacity: hover ? 1 : 0,
            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
            display: { xs: "none", md: "flex" }
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        {/* 左フェード */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 50,
            pointerEvents: "none",
            background: "linear-gradient(to right, rgba(0,0,0,0.7), transparent)"
          }}
        />

        {/* 右フェード */}
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 50,
            pointerEvents: "none",
            background: "linear-gradient(to left, rgba(0,0,0,0.7), transparent)"
          }}
        />

        {/* 映画リスト */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            overflowY: "hidden",
            pb: 2,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" }
          }}
        >
          {movies.slice(0, 20).map((movie) => (
            <Box key={movie.id} sx={{ flexShrink: 0 }}>
              <MovieCard movie={movie} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}