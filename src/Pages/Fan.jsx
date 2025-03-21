import React, { useState } from "react";
import { TextField, Button, Typography, Box, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Fan = () => {
  const navigate = useNavigate();

  // State to hold fans data
  const [fans, setFans] = useState([
    { make: 'Fan Make 1', model: 'Model 1', fanCapacity: '1000 CFM', outletCapacity: '500 CFM', fanRPM: '3000 RPM' },
    { make: 'Fan Make 2', model: 'Model 2', fanCapacity: '2000 CFM', outletCapacity: '1000 CFM', fanRPM: '4000 RPM' }
  ]);

  // Function to delete a fan
  const handleDelete = (id) => {
    setFans(fans.filter((fan, index) => index !== id));
  };

  return (
    <>
      <Box sx={{ pl: 9, pr: 9 }}>
        <Box sx={{ mt: 2, mb: 2 }}>
          <h2>Fans</h2>
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Search Fan..."
            sx={{ width: "50%" }}
            InputProps={{
              sx: { height: "40px" },
            }}
          />
          <Button variant="contained" onClick={() => navigate("/createFan")}>
            Create New
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{
                    backgroundColor: "#f4f4f4",
                    fontWeight: "bold",
                    width: "25%",
                  }}
                >
                  Field
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    backgroundColor: "#f4f4f4",
                    fontWeight: "bold",
                    width: "25%",
                  }}
                >
                  Specified
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    backgroundColor: "#f4f4f4",
                    fontWeight: "bold",
                    width: "25%",
                  }}
                >
                  Actual
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fans.map((fan, index) => (
                <>
                  <TableRow key={`make-${index}`}>
                    <TableCell align="left">Make</TableCell>
                    <TableCell align="left">{fan.make}</TableCell>
                    <TableCell align="left"> {/* Actual Value can go here */} </TableCell>
                  </TableRow>
                  <TableRow key={`model-${index}`}>
                    <TableCell align="left">Model</TableCell>
                    <TableCell align="left">{fan.model}</TableCell>
                    <TableCell align="left"> {/* Actual Value can go here */} </TableCell>
                  </TableRow>
                  <TableRow key={`fanCapacity-${index}`}>
                    <TableCell align="left">Fan Capacity</TableCell>
                    <TableCell align="left">{fan.fanCapacity}</TableCell>
                    <TableCell align="left"> {/* Actual Value can go here */} </TableCell>
                  </TableRow>
                  <TableRow key={`outletCapacity-${index}`}>
                    <TableCell align="left">Outlet Capacity</TableCell>
                    <TableCell align="left">{fan.outletCapacity}</TableCell>
                    <TableCell align="left"> {/* Actual Value can go here */} </TableCell>
                  </TableRow>
                  <TableRow key={`fanRPM-${index}`}>
                    <TableCell align="left">Fan R.P.M.</TableCell>
                    <TableCell align="left">{fan.fanRPM}</TableCell>
                    <TableCell align="left"> {/* Actual Value can go here */} </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Fan;
