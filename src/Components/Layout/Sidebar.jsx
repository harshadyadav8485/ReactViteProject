import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/home" },
  { name: "Districts", path: "/districts" },
  { name: "SubDistricts", path: "/subDistricts" },
  { name: "Villages", path: "/villages" },
  { name: "Projects", path: "/projects" },
];

const Sidebar = ({ open, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    // <Drawer anchor="left" open={open} onClose={toggleSidebar}>
    <Box
      sx={{
        width: 240,
        bgcolor: "white",
        color: "black",
        height: "100vh",
        p: 2,
        boxShadow: 3,
      }}
    >
      {/* <Typography
        variant="h6"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
      >
        Sidebar
      </Typography> */}

      <List>
        {menuItems.map(({ name, path }) => (
          <ListItem
            key={path}
            button
            sx={{
              backgroundColor: "inherit",
              "&:hover": { backgroundColor: "#E0E0E0" },
              cursor: "pointer",
              borderRadius: "5px",
              marginBottom: "5px",
            }}
            onClick={() => {
              navigate(path);
              toggleSidebar();
            }}
          >
            <ListItemText primary={name} sx={{ textAlign: "center" }} />
          </ListItem>
        ))}
      </List>
    </Box>
    // </Drawer>
  );
};

export default Sidebar;
