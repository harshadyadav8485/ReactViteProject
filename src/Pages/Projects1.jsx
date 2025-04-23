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
  Chip,
  IconButton,
  Pagination,
  PaginationItem,
  Paper,
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

const projectData = [
  {
    id: "P001",

    name: "USB SCHOOL OF BIOMEDICAL\nENGINEERING",

    customer: "Smith Sheet Metal\nWorks Ltd",

    status: "Completed",
    tooltip: "Click to view project details",
  },

  {
    id: "P002",

    name: "BOILER FEED PUMP",

    customer: "Smith Sheet Metal\nWorks Ltd",

    status: "In progress",
    tooltip: "Click to view project details",
  },

  {
    id: "P003",

    name: "CHILLED WATER SYSTEM",

    customer: "Smith Sheet Metal\nWorks Ltd",

    status: "Not Started",
    tooltip: "Click to view project details",
  },
  {
    id: "P004",

    name: "BOILER FEED PUMP1",

    customer: "Smith Sheet Metal\nWorks Ltd",

    status: "Completed",
    tooltip: "Click to view project details",
  },
];

const Projects1 = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState(5); // default value
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    if (value) {
      setSelectedValue(value);
    }
    setAnchorEl(null);
  };
  const getStatusChip = (status) => {
    let bgColor = "#e0e0e0";

    if (status === "Completed") bgColor = "#28A745";
    else if (status === "In progress") bgColor = "#FFC107";
    else if (status === "Not Started") bgColor = "#DC3545";
    return (
      <Chip
        label={status}
        sx={{
          borderRadius: "20px",
          color: "white",
          fontWeight: 500,
          minWidth: "132px",
          textAlign: "center",
          backgroundColor: bgColor,
        }}
      />
    );
  };

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
          minHeight: "88vh",
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
          Projects
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
            // fullWidth
            sx={{
              width: "50%",
              // bgcolor: "#f2f4f5",
              bgcolor: "#fff",
              height: "50px",
              borderRadius: "10px",

              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#333", // Dark border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#000", // Even darker border color when focused
                },
              },
            }}
          />

          <Button
            variant="contained"
            endIcon={<Add />}
            sx={{
              bgcolor: "#99caff",
              width: "190px",
              color: "black",
              borderRadius: "10px",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                bgcolor: "#88b9ee",
              },
            }}
            onClick={() => {
              navigate("/createProject");
            }}
          >
            Create Project
          </Button>
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
                    <Typography fontWeight="bold">Customer Name</Typography>
                    <ArrowDropDown />
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ ml: 3 }}
                  >
                    <Typography fontWeight="bold">Status</Typography>
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
                    <Tooltip title={project.tooltip} arrow>
                      <Typography
                        fontWeight="medium"
                        sx={{
                          whiteSpace: "pre-line",
                          cursor: "pointer",
                          textDecoration: "none",
                          color: "#000000",
                        }}
                        onClick={() => navigate("/project2")}
                      >
                        {project.name}
                      </Typography>
                    </Tooltip>
                  </TableCell>

                  <TableCell>
                    <Typography
                      fontWeight="medium"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {project.customer}
                    </Typography>
                  </TableCell>
                  <TableCell>{getStatusChip(project.status)}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => {
                          navigate("/editProject");
                        }}
                      >
                        <BorderColorIcon />
                      </IconButton>
                      {/* <IconButton size="small" color="error">
                        <Delete />
                      </IconButton> */}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Pagination
            count={10}
            shape="rounded"
            renderItem={(item) => {
              if (item.type === "previous") {
                return (
                  <PaginationItem
                    component={IconButton}
                    sx={{
                      border: "1px solid #a7a6a6",

                      borderRadius: "5px",

                      bgcolor: "#f2f4f5",

                      mx: 0.5,
                    }}
                    {...item}
                    icon={<NavigateBefore fontSize="small" />}
                  />
                );
              }

              if (item.type === "next") {
                return (
                  <PaginationItem
                    component={IconButton}
                    sx={{
                      border: "1px solid #a7a6a6",

                      borderRadius: "5px",

                      bgcolor: "#f2f4f5",

                      mx: 0.5,
                    }}
                    {...item}
                    icon={<NavigateNext fontSize="small" />}
                  />
                );
              }

              return (
                <PaginationItem
                  {...item}
                  sx={{
                    border: "1px solid #a7a6a6",

                    borderRadius: "5px",

                    bgcolor: item.selected ? "#99caff" : "#f2f4f5",

                    mx: 0.5,

                    color: item.selected ? "black" : "#747474",
                  }}
                />
              );
            }}
          />
          {/* <Button
            variant="outlined"
            size="small"
            sx={{
              ml: 1,

              border: "1px solid #a7a6a6",

              borderRadius: "5px",

              bgcolor: "#f2f4f5",

              color: "#747474",

              fontSize: "10px",

              textTransform: "none",
            }}
          >
            10 / Pages <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
          </Button> */}
          <Box>
            <Button
              variant="outlined"
              size="small"
              onClick={handleClick}
              sx={{
                ml: 1,
                border: "1px solid #a7a6a6",
                borderRadius: "5px",
                bgcolor: "#f2f4f5",
                color: "#747474",
                fontSize: "10px",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {selectedValue} / Pages{" "}
              <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
            </Button>

            <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()}>
              <MenuItem onClick={() => handleClose(10)}>5/page</MenuItem>
              <MenuItem onClick={() => handleClose(20)}>10/page</MenuItem>
              <MenuItem onClick={() => handleClose(50)}>15/page</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects1;
