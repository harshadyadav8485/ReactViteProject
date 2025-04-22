import Add from "@mui/icons-material/Add";

import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

import Delete from "@mui/icons-material/Delete";
import { useState } from "react";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavigateNext from "@mui/icons-material/NavigateNext";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Tooltip } from "@mui/material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Pagination,
  PaginationItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import pump_report from "../assets/pump_report.pdf";

const projectData = [
  {
    id: "P001",

    name: "USB SCHOOL OF BIOMEDICAL\nENGINEERING",

    equipment: "Pump",

    tooltip: "Click to view project details",
  },

  {
    id: "P002",

    name: "BOILED FEED PUMP",

   equipment:"Fan",

    tooltip: "Click to view project details",
  },
];

const Reports = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
   const [projectName, setProjectName] = useState("USB SCHOOL OF BIOMEDICAL ENGINEERING");
   const [equipmentName,setEquipmentName] = useState("Pump");

  return (
    <Box
      sx={{
        bgcolor: "#f2f4f5",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "#f2f4f5",
          minHeight: "100vh",
          width: "100vw",
          py: 4,
          pl: "70px",
          pt: "12px",
          pr: "24px",
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Reports
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 3 }}
          justifyContent="space-between"
        >
          <TextField
            placeholder="Search by Project Id, Project Name & Customer Name..."
            variant="outlined"
            sx={{
              width: "50%",
              bgcolor: "#fff",
              height: "50px",
              borderRadius: "10px",

              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#333", 
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#000", 
                },
              },
            }}
          />
        </Stack>

        <TableContainer
          component={Paper}
          sx={{ mb: 4, borderRadius: "10px 10px 0 0" }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#99caff" }}>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography fontWeight="bold">Project Id</Typography>
                    <ArrowDropDown />
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography fontWeight="bold">Project Name</Typography>
                    <ArrowDropDown />
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography fontWeight="bold">Equipment Name</Typography>
                    <ArrowDropDown />
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Action</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projectData.map((project) => (
                <TableRow key={project.id} hover>
                  <TableCell>
                    <Typography fontWeight="bold">{project.id}</Typography>
                  </TableCell>
                  <TableCell>
                    {/* <Tooltip title={project.tooltip} arrow> */}
                      <Typography
                        fontWeight="medium"
                        // sx={{
                        //   whiteSpace: "pre-line",
                        //   cursor: "pointer",
                        //   textDecoration: "none",
                        //   color: "#000000",
                        // }}
                        // onClick={() => navigate("/project2")}
                      >
                        {project.name}
                      </Typography>
                    {/* </Tooltip> */}
                  </TableCell>

                  <TableCell>
                    <Typography
                      fontWeight="medium"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {project.equipment}
                    </Typography>
                  </TableCell>
                  <TableCell>
  <Stack direction="row" spacing={1}>
    <Tooltip title="View Report">
      <IconButton
        variant="contained"
                         onClick={() => {
                           window.open(pump_report, "_blank");
                         }}
                         sx={{
                           borderRadius: "10px",
                           bgcolor: "#99CAFF",
                           color: "black",
                           px: 3,
                           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                           "&:hover": {
                             bgcolor: "#7bb8ff",
                           },
                         }}
                       >
        <VisibilityIcon />
      </IconButton>
    </Tooltip>

    <Tooltip title="Download Report">
      <IconButton
        size="small"
        color="secondary"
        onClick={() => {
          // implement download logic here
        }}
      >
        <FileDownloadIcon />
      </IconButton>
    </Tooltip>
  </Stack>
</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Paper
        elevation={4}
        sx={{
          p: 2,
          borderRadius: "10px",
          mb: 4,
        }}
      >
      <Grid container spacing={16} alignItems="center">
  {/* Project Name */}
  <Grid item xs={12} md={4}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        variant="body1"
        fontWeight="500"
        sx={{ mr: 2, minWidth: "100px" }}
      >
        Project <br /> Name <span style={{ color: "red" }}>*</span>
      </Typography>

      <Select
        variant="outlined"
        displayEmpty
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        IconComponent={KeyboardArrowDownIcon}
        sx={{
          bgcolor: "#fff",
          height: "40px",
          width: "100%",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "#fff",
            },
          },
        }}
      >
        <MenuItem value="USB SCHOOL OF BIOMEDICAL ENGINEERING">USB SCHOOL OF BIOMEDICAL ENGINEERING</MenuItem>
        <MenuItem value="BOILED FEED PUMP">BOILED FEED PUMP</MenuItem>
        <MenuItem value="CHILLED WATER SYSTEM">CHILLED WATER SYSTEM</MenuItem>
        <MenuItem value="BOILED FEED PUMP1">BOILED FEED PUMP1</MenuItem>
      </Select>
    </Box>
  </Grid>

  {/* Equipment Name */}
  <Grid item xs={12} md={4}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        variant="body1"
        fontWeight="500"
        sx={{ mr: 2, minWidth: "120px" }}
      >
        Equipment Name <span style={{ color: "red" }}>*</span>
      </Typography>
      <Select
        variant="outlined"
        displayEmpty
        value={equipmentName}
        onChange={(e) => setEquipmentName(e.target.value)}
        IconComponent={KeyboardArrowDownIcon}
        sx={{
          bgcolor: "#fff",
          height: "40px",
          width: "100%",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "#fff",
            },
          },
        }}
      >
        <MenuItem value="Pump">Pump</MenuItem>
        <MenuItem value="Fan">Fan</MenuItem>
      </Select>
    </Box>
  </Grid>

  {/* Action Column */}
  <Grid item xs={12} md={4}>
    <Stack direction="row" spacing={2} alignItems="center">
      {/* View Report */}
      <Button
                        variant="contained"
                        onClick={() => {
                          window.open(pump_report, "_blank");
                        }}
                        sx={{
                          borderRadius: "10px",
                          bgcolor: "#99CAFF",
                          color: "black",
                          px: 3,
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                          "&:hover": {
                            bgcolor: "#7bb8ff",
                          },
                        }}
                      >
                        View Report
                      </Button>


      {/* Download Report */}
      <Button
        variant="outlined"
        color="secondary"
        sx={{ textTransform: "none", borderColor: "#90caf9", color: "#000" }}
        >
         <a
                    href={pump_report}
                    download="pump_report"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                     Download
                  </a> 
      </Button>
    </Stack>
  </Grid>
</Grid>


      </Paper>
      </Box>
    </Box>
  );
};

export default Reports;



