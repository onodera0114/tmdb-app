import type { Metadata } from "next";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, Box } from "@mui/material";
import { QueryProvider } from "@/providers/QueryProvider"
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: "TMDB Movie App",
  description: "Movie information app using TMDB API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <AppRouterCacheProvider>
          <QueryProvider>
            <CssBaseline />
            <Box
              sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Header />

              <Box component="main" sx={{ flex: 1 }}>
                {children}
              </Box>

              <Footer />
            </Box>
          </QueryProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}