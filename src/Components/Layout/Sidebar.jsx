// import React from "react";
// import { List, ListItem, ListItemText, ListItemIcon, Box } from "@mui/material";
// import { useNavigate, useLocation } from "react-router-dom";

// import HomeIcon from "@mui/icons-material/Home";
// import LocationCityIcon from "@mui/icons-material/LocationCity";
// import DomainIcon from "@mui/icons-material/Domain";
// import PublicIcon from "@mui/icons-material/Public";
// import WorkIcon from "@mui/icons-material/Work";
// import GridViewIcon from "@mui/icons-material/GridView";
// const menuItems = [
//   { name: "Projects", path: "/allPump", icon: <GridViewIcon /> },
//   // { name: "Fan", path: "/fan", icon: <GridViewIcon /> },
//   // { name: "Chiller", path: "/chillerCreation", icon: <GridViewIcon /> },
//   // { name: "Villages", path: "/villages", icon: <PublicIcon /> },
//   // { name: "Projects", path: "/projects", icon: <WorkIcon /> },
//   // { name: "Flow Meter", path: "/createFlowMeter", icon: <PublicIcon /> },
//   // {
//   //   name: "Domestic Hot Water",
//   //   path: "/createDomesticHotWater",
//   //   icon: <WorkIcon />,
//   // },
// ];

// const Sidebar = ({ open, toggleSidebar }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <Box
//       sx={{
//         width: 220,
//         bgcolor: "white",
//         position: "fixed",
//         left: 0,
//         top: "64px",
//         height: "calc(100vh - 64px)",
//         color: "black",
//         height: "100vh",
//         p: 2,
//         boxShadow: 3,
//       }}
//     >
//       <h2> Equipment Library</h2>
//       <List>
//         {menuItems.map(({ name, path, icon }) => (
//           <ListItem
//             key={path}
//             button
//             sx={{
//               backgroundColor:
//                 location.pathname === path ? "#E0E0E0" : "inherit",
//               "&:hover": { backgroundColor: "#E0E0E0" },
//               cursor: "pointer",
//               borderRadius: "5px",
//               marginBottom: "5px",
//             }}
//             onClick={() => {
//               navigate(path);
//               toggleSidebar();
//             }}
//           >
//             <ListItemIcon sx={{ color: "black" }}>{icon}</ListItemIcon>
//             <ListItemText primary={name} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default Sidebar;

// Sidebar.js

import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    text: "Projects",
    icon: <AssignmentIcon />,
    path: "/project1",
  },
  // {
  //   text: "Pump Performance",
  //   icon: <AssignmentIcon />,
  //   path: "/pumpPerformance",
  // },
  // {
  //   text: "Projects",
  //   icon: <AssignmentIcon />,
  //   path: "/actualPump",
  // },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        width: {
          xs: "180px", // 📱 small screens like tablets
          sm: "220px", // 🧾 slightly larger screens
          md: "270px", // 🖥️ default (desktop)
        },
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "width 0.3s ease",
      }}
    >
      <Box>
        <Box
          sx={{
            mt: 3,
            ml: 7,
            fontFamily: "Poppins-Bold, Helvetica",
          }}
        >
          <img
            src="src/assets/syborg-techLogo.png"
            style={{ width: "150px", height: "auto" }}
          />
        </Box>
        <List sx={{ mt: 6, px: 1 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              onClick={() => handleMenuItemClick(item.path)}
              sx={{
                borderRadius: "10px",
                mb: 1,
                bgcolor:
                  location.pathname === item.path ? "#d1d4d2" : "transparent",
                height: "52px",
                "&:hover": {
                  bgcolor:
                    location.pathname === item.path ? "#d1d4d2" : "#f5f5f5",
                  cursor: "pointer",
                },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontFamily: "Poppins-Medium, Helvetica",
                  fontWeight: 500,
                  fontSize: "15px", // 🎯 slight font size tweak
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box>
        <ListItem
          onClick={() => handleMenuItemClick("/logout")}
          sx={{
            mb: 3,
            "&:hover": {
              bgcolor: "#f5f5f5",
              cursor: "pointer",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Log Out"
            primaryTypographyProps={{
              fontFamily: "Poppins-Medium, Helvetica",
              fontWeight: 500,
              fontSize: "15px",
            }}
          />
        </ListItem>
      </Box>
    </Paper>
  );
};

export default Sidebar;
