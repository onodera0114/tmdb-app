"use client";

import { Box, Container, Typography, Link, Stack } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center">

          {/* Navigation */}
          <Stack direction="row" spacing={3}>
            <Link href="/movies" underline="hover" color="inherit">
              Movies
            </Link>
            <Link href="/tv" underline="hover" color="inherit">
              TV Shows
            </Link>
            <Link href="/trending" underline="hover" color="inherit">
              Trending
            </Link>
          </Stack>

          {/* TMDB attribution */}
          <Typography variant="body2" color="text.secondary" textAlign="center">
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </Typography>

          {/* Tech stack */}
          <Typography variant="body2" color="text.secondary">
            Built with Next.js & TypeScript
          </Typography>

        </Stack>
      </Container>
    </Box>
  );
};