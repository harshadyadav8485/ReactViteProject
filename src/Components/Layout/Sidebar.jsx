import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    // <Drawer anchor="left" open={open} onClose={toggleSidebar}>
    <Box
      sx={{
        width: 240,
        height: "100%",
        bgcolor: "primary.main", // MUI theme primary color (adjust in theme)
        color: "white",
        p: 2,
      }}
    >
      <List>
        {["Home", "Profile", "Settings"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    // </Drawer>
  );
};

export default Sidebar;
