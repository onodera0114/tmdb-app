import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">TMDB App</Typography>
      </Toolbar>
    </AppBar>
  )
}