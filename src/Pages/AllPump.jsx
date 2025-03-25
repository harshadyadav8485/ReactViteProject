import React, { useState } from "react";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AllPump = () => {
  const navigate = useNavigate();

  // Sample data for projects
  const [projects, setProjects] = useState([
    { id: "P001", name: "Cooling Tower System", pumpNumber: "P-06-07A" },
    { id: "P002", name: "Boiler Feed Pump", pumpNumber: "P-08-09B" },
    { id: "P003", name: "Chilled Water System", pumpNumber: "P-10-11C" },
  ]);

  // Handle edit (navigate to pumpCreation with project ID)
  const handleEdit = (id) => {
    navigate(`/pumpCreation?id=${id}`);
  };

  // Handle inspect (navigate to ActualPump with project ID)
  const handleInspect = (id) => {
    navigate(`/actualPump?id=${id}`);
  };

  // Handle delete
  const handleDelete = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  return (
    <Box sx={{ pl: 9, pr: 9, mt: 2 }}>
      <h2>Pump Projects</h2>
      <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search Pump..."
          sx={{ width: "50%" }}
          InputProps={{
            sx: { height: "40px" },
          }}
        />
        <Button variant="contained" onClick={() => navigate("/createPump")}>
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
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Pump Number</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.id}</TableCell>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.pumpNumber}</TableCell>
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
                    color="success"
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => handleInspect(project.id)}
                  >
                    Inspect
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
