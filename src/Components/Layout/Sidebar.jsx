import React from "react";
import { List, ListItem, ListItemText, ListItemIcon, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DomainIcon from "@mui/icons-material/Domain";
import PublicIcon from "@mui/icons-material/Public";
import WorkIcon from "@mui/icons-material/Work";
import GridViewIcon from "@mui/icons-material/GridView";
const menuItems = [
  { name: "Pump", path: "/pump", icon: <GridViewIcon /> },
  { name: "Fan", path: "/fan", icon: <GridViewIcon /> },
  { name: "Chiller", path: "/chiller", icon: <GridViewIcon /> },
  // { name: "Villages", path: "/villages", icon: <PublicIcon /> },
  // { name: "Projects", path: "/projects", icon: <WorkIcon /> },
];

const Sidebar = ({ open, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 220,
        bgcolor: "white",
        color: "black",
        height: "100vh",
        p: 2,
        boxShadow: 3,
      }}
    >
      <h2> Equipment Library</h2>
      <List>
        {menuItems.map(({ name, path, icon }) => (
          <ListItem
            key={path}
            button
            sx={{
              backgroundColor:
                location.pathname === path ? "#E0E0E0" : "inherit",
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
            <ListItemIcon sx={{ color: "black" }}>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
