import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

const Header = ({ toggleSidebar }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#3B82F6",
        zIndex: 1100,
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={toggleSidebar}
        ></IconButton>
        <Typography variant="h6">Tab Reporting</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
