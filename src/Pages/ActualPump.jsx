import React, { useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ActualPump = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  
  const [actualValues, setActualValues] = useState({
    make: "",
    model: "",
    impellerSize: "",
    pumpCapacity: "",
    systemCapacity: "",
    size: "",
    volts: "",
    amperage: "",
    rpm: ""
  });

  const handleChange = (field, value) => {
    setActualValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleConvert = (field) => {
    console.log(`Convert ${field} unit`);
  };

  const pumpData = [
    { field: "Make", specified: "Little Giant", key: "make", showConverter: false },
    { field: "Model", specified: "VCMA-20 Series", key: "model", showConverter: false },
    { field: "Impeller Size", specified: "200 mm", key: "impellerSize", showConverter: true },
    { field: "Pump Capacity", specified: "0.5 L/s", key: "pumpCapacity", showConverter: true },
    { field: "System Capacity", specified: "0.5 L/s", key: "systemCapacity", showConverter: true },
    { field: "Motor Size", specified: "1 HP", key: "size", showConverter: true },
    { field: "Volts/Phase", specified: "230V", key: "volts", showConverter: true },
    { field: "Amperage", specified: "7.5 Amps", key: "amperage", showConverter: true },
    { field: "R.P.M", specified: "1725 RPM", key: "rpm", showConverter: true }
  ];

  return (
    <Box sx={{ pl: 9, pr: 9, mt: 2 }}>
     <h2>Pump Name: Little Giant 0.5</h2>
      <Tabs value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)}>
        <Tab label="Actual Pump Data" />
        <Tab label="Test Data" />
      </Tabs>
      {tabIndex === 0 && (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#1976d2" }}>
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Field</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Specified Value</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actual Value</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Convert</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pumpData.map((row) => (
                  <TableRow key={row.field}>
                    <TableCell>{row.field}</TableCell>
                    <TableCell>{row.specified}</TableCell>
                    <TableCell>
                      <TextField
                        variant="outlined"
                        size="small"
                        value={actualValues[row.key]}
                        onChange={(e) => handleChange(row.key, e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      {row.showConverter && (
                        <Button variant="contained" size="small" onClick={() => handleConvert(row.field)}>
                          Convert
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      {tabIndex === 1 && (
        <>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Test Data
          </Typography>
          <Typography>Here you can add test data...</Typography>
        </>
      )}
      <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => console.log(actualValues)}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ActualPump;
