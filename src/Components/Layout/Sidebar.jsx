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

// import React from "react";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import LogoutIcon from "@mui/icons-material/Logout";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import { useNavigate, useLocation } from "react-router-dom";
// import ReportIcon from "@mui/icons-material/Report";

// import {
//   Box,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Paper,
//   Typography,
// } from "@mui/material";
// import { ExpandLess, ExpandMore } from "@mui/icons-material";
// import GroupIcon from "@mui/icons-material/Group";
// import SecurityIcon from "@mui/icons-material/Security";
// import Collapse from "@mui/material/Collapse";


// const menuItems = [
//   {
//     text: "Dashboard",
//     icon: <DashboardIcon />,
//     path: "/dashboard",
//   },
//   {
//     text: "Projects",
//     icon: <AssignmentIcon />,
//     path: "/project1",
//   },
//   {
//     text: "Reports",
//     icon: <ReportIcon />,
//     path: "/reports",
//   },
//   {
//     text: "User Management",
//     icon: <GroupIcon />,
//     children: [
//       { text: "Create User", path: "/create-user" },
//       { text: "Manage User", path: "/manage-user" },
//     ],
//   },
//   {
//     text: "Authorization",
//     icon: <SecurityIcon />,
//     children: [
//       { text: "Create Role", path: "/create-role" },
//       { text: "Manage Role", path: "/manage-role" },
//       { text: "Assign Role to User", path: "/assign-role" },
//       { text: "Assign Project to User", path: "/assign-project" },
//       { text: "Assign Equipment to User", path: "/assign-equipment" },
//     ],
//   },
// ];

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [openUserMgmt, setOpenUserMgmt] = React.useState(false);
// const [openAuth, setOpenAuth] = React.useState(false);

// const toggleUserMgmt = () => setOpenUserMgmt(!openUserMgmt);
// const toggleAuth = () => setOpenAuth(!openAuth);

//   const handleMenuItemClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <Paper
//       elevation={4}
//       sx={{
//         width: {
//           xs: "180px", // 📱 small screens like tablets
//           sm: "220px", // 🧾 slightly larger screens
//           md: "270px", // 🖥️ default (desktop)
//         },
//         height: "100vh",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: 1200,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         transition: "width 0.3s ease",
//         transition: "width 0.3s ease", // 🔁 smooth resizing
//       }}
//     >
//       <Box>
//         <Box
//           sx={{
//             mt: 3,
//             ml: 4,
//             fontFamily: "Poppins-Bold, Helvetica",
//             fontWeight: 700,
//             fontSize: "18px", // 🔹 reduced size for all screens
//           }}
//         >
//           <img
//             src="src/assets/syborg-techLogo.png"
//             style={{ width: "150px", height: "auto" }}
//           />
//         </Box>
//         <List sx={{ mt: 3, px: 1 }}>
//           {menuItems.map((item,index) => (
//             <ListItem
//               key={item.text}
//               onClick={() => handleMenuItemClick(item.path)}
//               sx={{
//                 borderRadius: "10px",
//                 mb: 1,
//                 bgcolor:
//                   location.pathname === item.path ? "#d1d4d2" : "transparent",
//                 height: "52px",
//                 "&:hover": {
//                   bgcolor:
//                     location.pathname === item.path ? "#d1d4d2" : "#f5f5f5",
//                   cursor: "pointer",
//                 },
//               }}
//             >
//               <ListItemIcon
//                 sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}
//               >
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText
//                 primary={item.text}
//                 primaryTypographyProps={{
//                   fontFamily: "Poppins-Medium, Helvetica",
//                   fontWeight: 500,
//                   fontSize: "15px", // 🎯 slight font size tweak
//                 }}
//               />

//             </ListItem>
            
//           ))}
//         </List>
//       </Box>

//       <Box>
//         <ListItem
//           onClick={() => handleMenuItemClick("/logout")}
//           sx={{
//             mb: 3,
//             "&:hover": {
//               bgcolor: "#f5f5f5",
//               cursor: "pointer",
//             },
//           }}
//         >
//           <ListItemIcon sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}>
//             <LogoutIcon />
//           </ListItemIcon>
//           <ListItemText
//             primary="Log Out"
//             primaryTypographyProps={{
//               fontFamily: "Poppins-Medium, Helvetica",
//               fontWeight: 500,
//               fontSize: "15px",
//             }}
//           />
//         </ListItem>
//       </Box>
//     </Paper>
//   );
// };

// export default Sidebar;

import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import GroupIcon from "@mui/icons-material/Group";
import SecurityIcon from "@mui/icons-material/Security";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Collapse,
} from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [openUserMgmt, setOpenUserMgmt] = React.useState(false);
  const [openAuth, setOpenAuth] = React.useState(false);

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        width: {
          xs: "180px",
          sm: "220px",
          md: "270px",
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
        {/* Logo */}
        <Box
          sx={{
            mt: 3,
            ml: 4,
            fontFamily: "Poppins-Bold, Helvetica",
            fontWeight: 700,
            fontSize: "18px",
          }}
        >
          <img
            src="src/assets/syborg-techLogo.png"
            style={{ width: "150px", height: "auto" }}
          />
        </Box>

        {/* Menu Items */}
        <List sx={{ mt: 3, px: 1 }}>
          {/* Dashboard */}
          <ListItem
            onClick={() => handleMenuItemClick("/dashboard")}
            sx={{
              borderRadius: "10px",
              mb: 1,
              bgcolor:
                location.pathname === "/dashboard" ? "#d1d4d2" : "transparent",
              height: "52px",
              "&:hover": {
                bgcolor:
                  location.pathname === "/dashboard"
                    ? "#d1d4d2"
                    : "#f5f5f5",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
          </ListItem>

          {/* Projects */}
          <ListItem
            onClick={() => handleMenuItemClick("/project1")}
            sx={{
              borderRadius: "10px",
              mb: 1,
              bgcolor:
                location.pathname === "/project1" ? "#d1d4d2" : "transparent",
              height: "52px",
              "&:hover": {
                bgcolor:
                  location.pathname === "/project1"
                    ? "#d1d4d2"
                    : "#f5f5f5",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText
              primary="Projects"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
          </ListItem>

          {/* Reports */}
          <ListItem
            onClick={() => handleMenuItemClick("/reports")}
            sx={{
              borderRadius: "10px",
              mb: 1,
              bgcolor:
                location.pathname === "/reports" ? "#d1d4d2" : "transparent",
              height: "52px",
              "&:hover": {
                bgcolor:
                  location.pathname === "/reports"
                    ? "#d1d4d2"
                    : "#f5f5f5",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}>
              <ReportIcon />
            </ListItemIcon>
            <ListItemText
              primary="Reports"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
          </ListItem>

          {/* User Management Dropdown */}
          <ListItem
            onClick={() => setOpenUserMgmt(!openUserMgmt)}
            sx={{
              borderRadius: "10px",
              mb: 1,
              height: "52px",
              "&:hover": {
                bgcolor: "#f5f5f5",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText
              primary="User Management"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
            {openUserMgmt ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openUserMgmt} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              <ListItem
                onClick={() => handleMenuItemClick("/create-user")}
                sx={{ height: 40, mb: 0.5, "&:hover": { bgcolor: "#f5f5f5" } }}
              >
                <ListItemText primary="Create User" />
              </ListItem>
              <ListItem
                onClick={() => handleMenuItemClick("/manage-user")}
                sx={{ height: 40, "&:hover": { bgcolor: "#f5f5f5" } }}
              >
                <ListItemText primary="Manage User" />
              </ListItem>
            </List>
          </Collapse>

          {/* Authorization Dropdown */}
          <ListItem
            onClick={() => setOpenAuth(!openAuth)}
            sx={{
              borderRadius: "10px",
              mb: 1,
              height: "52px",
              "&:hover": {
                bgcolor: "#f5f5f5",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}>
              <SecurityIcon />
            </ListItemIcon>
            <ListItemText
              primary="Authorization"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
            {openAuth ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openAuth} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              <ListItem
                onClick={() => handleMenuItemClick("/create-role")}
                sx={{ height: 40, mb: 0.5, "&:hover": { bgcolor: "#f5f5f5" } }}
              >
                <ListItemText primary="Create Role" />
              </ListItem>
              <ListItem
                onClick={() => handleMenuItemClick("/manage-role")}
                sx={{ height: 40, mb: 0.5, "&:hover": { bgcolor: "#f5f5f5" } }}
              >
                <ListItemText primary="Manage Role" />
              </ListItem>
              <ListItem
                onClick={() => handleMenuItemClick("/assign-role")}
                sx={{ height: 40, mb: 0.5, "&:hover": { bgcolor: "#f5f5f5" } }}
              >
                <ListItemText primary="Assign Role to User" />
              </ListItem>
              <ListItem
                onClick={() => handleMenuItemClick("/assign-project")}
                sx={{ height: 40, mb: 0.5, "&:hover": { bgcolor: "#f5f5f5" } }}
              >
                <ListItemText primary="Assign Project to User" />
              </ListItem>
              <ListItem
                onClick={() => handleMenuItemClick("/assign-equipment")}
                sx={{ height: 40, "&:hover": { bgcolor: "#f5f5f5" } }}
              >
                <ListItemText primary="Assign Equipment to User" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>

      {/* Logout Button */}
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

