import React, { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AllPump = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([
    { id: "P001", name: "UBC School of Biomedical Engineering", customerName: "Smith Sheet Metal Works Ltd" },
    { id: "P002", name: "Boiler Feed Pump", customerName: "Smith Sheet Metal Works Ltd" },
    { id: "P003", name: "Chilled Water System", customerName: "Smith Sheet Metal Works Ltd" },
  ]);

  const handleEdit = (id) => {
    navigate(`/editProject?id=${id}`);
  };

  const handleDelete = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  return (
    <Box sx={{ pl: 9, pr: 9, mt: 2 }}>
      <h2>Projects</h2>
      <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search Project..."
          sx={{ width: "50%" }}
          InputProps={{
            sx: { height: "40px" },
          }}
        />
        <Button variant="contained" onClick={() => navigate("/createProject")}>
          Create New
        </Button>
      </Box>

      {/* Table for Pump Projects */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Project ID</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Project Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Customer Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.id}</TableCell>
                
                {/* Tooltip on Project Name */}
                <TableCell>
                  <Tooltip title="Click to view project details" arrow>
                    <Button
                      variant="text"
                      color="primary"
                      onClick={() => navigate(`/projects?id=${project.id}`)}
                    >
                      {project.name}
                    </Button>
                  </Tooltip>
                </TableCell>

                <TableCell>{project.customerName}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => handleEdit(project.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(project.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllPump;
