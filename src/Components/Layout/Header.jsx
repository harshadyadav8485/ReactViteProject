import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
// import { Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <AppBar position="static" className="bg-blue-500">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
          {/* <Menu /> */}
        </IconButton>
        <Typography variant="h6">My Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
