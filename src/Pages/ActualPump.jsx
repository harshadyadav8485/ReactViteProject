import React, { useState } from "react";
import { Box,Container,Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ActualPump = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  
  const [formData, setFormData] = useState({
    pumpOperatingHeadSP: "",
    pumpOperatingHeadDP: "",
    pumpOperatingHeadTP: "",
    pumpShutOffHeadSP: "",
    pumpShutOffHeadDP: "",
    pumpShutOffHeadTP: "",
    pumpSpeed: "",
    motorAmps: "",
    specifiedHead: "",
    
    pumpOperatingHeadSP1: "",
    pumpOperatingHeadDP1: "",
    pumpOperatingHeadTP1: "",
    pumpShutOffHeadSP1: "",
    pumpShutOffHeadDP1: "",
    pumpShutOffHeadTP1: "",
    pumpSpeed1: "",
    motorAmps1: "",
    specifiedHead1: "",
  });
  
 
  const handleChange1 = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };


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

  const testData = [
    { field: "PUMP OPERATING HEAD (PSI)", specified: "Little Giant", key: "make", showConverter: false },
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
          {/* <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Test Data
          </Typography> */}
          {/* <Typography>Here you can add test data...</Typography> */}
          {/* <TableContainer component={Paper}>
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
                {testData.map((row) => (
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
          </TableContainer> */}

<Container maxWidth="md">
  <Typography variant="h6" gutterBottom align="center" style={{ fontWeight: "bold", marginBottom: "20px" }}>
    SINGLE OPERATION FULL FLOW
  </Typography>
  <form onSubmit={handleSubmit}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h7" style={{ fontWeight: 500, marginTop: "10px" }}>
          PUMP OPERATING HEAD (PSI)
        </Typography>
      </Grid>
      {[
        { label: "Pump Operating Head (SP)", name: "pumpOperatingHeadSP" },
        { label: "Pump Operating Head (DP)", name: "pumpOperatingHeadDP" },
        { label: "Pump Operating Head (TP)", name: "pumpOperatingHeadTP" },
      ].map((field, index) => (
        <Grid item xs={4} key={index}>
          <TextField
            fullWidth
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange1}
            variant="outlined"
          />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Typography variant="h7" style={{ fontWeight: 500, marginTop: "10px" }}>
          PUMP SHUT OFF HEAD (PSI)
        </Typography>
      </Grid>
      {[
        { label: "Suction Pressure (SP)", name: "pumpShutOffHeadSP" },
        { label: "Discharge Pressure (DP)", name: "pumpShutOffHeadDP" },
        { label: "Total Pressure (TP)", name: "pumpShutOffHeadTP" },
      ].map((field, index) => (
        <Grid item xs={4} key={index}>
          <TextField
            fullWidth
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange1}
            variant="outlined"
          />
        </Grid>
      ))}
      {[
        { label: "Pump Speed", name: "pumpSpeed" },
        { label: "Motor Amps", name: "motorAmps" },
        { label: "Specified Head (PSI)", name: "specifiedHead" },
      ].map((field, index) => (
        <Grid item xs={4} key={index}>
          <TextField
            fullWidth
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange1}
            variant="outlined"
          />
        </Grid>
      ))}
    </Grid>
  </form>
</Container>

<Container maxWidth="md" style={{marginTop: "20px" }}>
  <Typography variant="h6" gutterBottom align="center" style={{ fontWeight: "bold", marginBottom: "20px" }}>
  SINGLE OPERATION BALANCED FLOW
  </Typography>
  <form onSubmit={handleSubmit}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h7" style={{ fontWeight: 500, marginTop: "10px" }}>
          PUMP OPERATING HEAD (PSI)
        </Typography>
      </Grid>
      {[
        { label: "Suction Pressure (SP)", name: "pumpOperatingHeadSP1" },
        { label: "Discharge Pressure (DP)", name: "pumpOperatingHeadDP1" },
        { label: "Total Pressure (TP)", name: "pumpOperatingHeadTP1" },
      ].map((field, index) => (
        <Grid item xs={4} key={index}>
          <TextField
            fullWidth
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange1}
            variant="outlined"
          />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Typography variant="h7" style={{ fontWeight: 500, marginTop: "10px" }}>
          PUMP SHUT OFF HEAD (PSI)
        </Typography>
      </Grid>
      {[
        { label: "Pump Shut Off Head (SP)", name: "pumpShutOffHeadSP" },
        { label: "Pump Shut Off Head (DP)", name: "pumpShutOffHeadDP" },
        { label: "Pump Shut Off Head (TP)", name: "pumpShutOffHeadTP" },
      ].map((field, index) => (
        <Grid item xs={4} key={index}>
          <TextField
            fullWidth
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange1}
            variant="outlined"
          />
        </Grid>
      ))}
      {[
        { label: "Pump Speed", name: "pumpSpeed1" },
        { label: "Motor Amps", name: "motorAmps1" },
        { label: "Specified Head (PSI)", name: "specifiedHead1" },
      ].map((field, index) => (
        <Grid item xs={4} key={index}>
          <TextField
            fullWidth
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange1}
            variant="outlined"
          />
        </Grid>
      ))}
    </Grid>
  </form>
</Container>

<Container maxWidth="md" style={{ marginTop: "20px" }}>
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <TextField
        fullWidth
        label="Pump Balancing Valve Position"
        variant="outlined"
      />
    </Grid>
    <Grid item xs={6}>
      <TextField
        fullWidth
        label="System Differential Pressure Setpoint				"
        variant="outlined"
      />
    </Grid>
  </Grid>
</Container>


        </>
      )}
      <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => navigate("/home")}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ActualPump;
