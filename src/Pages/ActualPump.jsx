import React, { useState } from "react";
import { Box,Container,Grid, Typography, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, TextField, Button, Tabs, Tab, Divider,Select,MenuItem, Input  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";


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

    pumpOperatingHeadSP2: "",
    pumpOperatingHeadDP2: "",
    pumpOperatingHeadTP2: "",
    pumpShutOffHeadSP2: "",
    pumpShutOffHeadDP2: "",
    pumpShutOffHeadTP2: "",
    pumpSpeed2: "",
    motorAmps2: "",
    specifiedHead2: "",

    pumpOperatingHeadSP3: "",
    pumpOperatingHeadDP3: "",
    pumpOperatingHeadTP3: "",
    pumpShutOffHeadSP3: "",
    pumpShutOffHeadDP3: "",
    pumpShutOffHeadTP3: "",
    pumpSpeed3: "",
    motorAmps3: "",
    specifiedHead3: "",
  });
  
  const [comments, setComments] = useState("");

  const handleConvert = (fieldKey) => {
    setActualValues((prev) => {
      const value = parseFloat(prev[fieldKey]); // Get actual value input
      if (isNaN(value)) {
        alert("Please enter a valid number for conversion.");
        return prev;
      }
  
      let convertedValue;
      switch (fieldKey) {
        case "pumpCapacity":
        case "systemCapacity":
          // Check the format and convert accordingly
          if (prev[fieldKey].includes("L/s")) {
            convertedValue = (value * 15.85).toFixed(2) + " GPM"; // Convert L/s to GPM
          } else {
            convertedValue = (value * 0.0631).toFixed(2) + " L/s"; // Convert GPM to L/s
          }
          break;
        default:
          convertedValue = value; // If no conversion is needed
      }
  
      return { ...prev, [fieldKey]: convertedValue };
    });
  };
  
  const handleChange1 = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
  const pumpData = [
    { field: "Make", specified: "BELL & GOSSETT", key: "make", showConverter: false },
    { field: "Model", specified: "e-80SC 5x5x11", key: "model", showConverter: false },
    { field: "Impeller Size", specified: "", key: "impellerSize", showConverter: true },
    { field: "Manufacturer ", specified: "", key: "manufacturer ", showConverter: true },
    // { field: "Pump Capacity", specified: "0.5 L/s", key: "pumpCapacity", showConverter: true },
    // { field: "System Capacity", specified: "0.5 L/s", key: "systemCapacity", showConverter: true },
    { field: "Motor Size", specified: "20 HP ", key: "size", showConverter: true },
    { field: "Volts/Phase", specified: "575/3", key: "volts", showConverter: true },
    { field: "Amperage", specified: "23.60", key: "amperage", showConverter: true },
    { field: "R.P.M", specified: "", key: "rpm", showConverter: true }
  ];

  const testData = [
    { field: "PUMP OPERATING HEAD (KPA)", specified: "Little Giant", key: "make", showConverter: false },
    { field: "Model", specified: "VCMA-20 Series", key: "model", showConverter: false },
    { field: "Impeller Size", specified: "200 mm", key: "impellerSize", showConverter: true },
    { field: "Pump Capacity", specified: "0.5 L/s", key: "pumpCapacity", showConverter: true },
    { field: "System Capacity", specified: "0.5 L/s", key: "systemCapacity", showConverter: true },
    { field: "Motor Size", specified: "1 HP", key: "size", showConverter: true },
    { field: "Volts/Phase", specified: "230V", key: "volts", showConverter: true },
    { field: "Amperage", specified: "7.5 Amps", key: "amperage", showConverter: true },
    { field: "R.P.M", specified: "1725 RPM", key: "rpm", showConverter: true }
  ];

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    console.log("Comments:", comments);
  };

  
    const [pump, setPump] = useState("P-06-07A");
  
  return (
    <Box >
       <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
       <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: "10px" }}>
    Project Name : UBC School of Biomedical Engineering 
  </Typography>
        <Box display="flex" alignItems="center">
    <Typography variant="h6" style={{ fontWeight: "bold", marginRight: "10px" }}>
      Pump Number :
    </Typography>
    <Select
      value={pump}
      onChange={handleChange}
      variant="standard"
      style={{
        fontSize: "1.2rem", // Smaller font size
        fontWeight: "bold",
        borderBottom: "none",
      }}
    >
      <MenuItem value="P-06-07A">P-06-07A</MenuItem>
      <MenuItem value="P-06-07B">P-06-07B</MenuItem>
      <MenuItem value="P-06-07C">P-06-07C</MenuItem>
    </Select>
  </Box>
      <Tabs value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)} sx={{mb:1}}>
        <Tab label="Actual Pump Data" />
        <Tab label="Test Data" />
        <Tab label="Pump Performance" />
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
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
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
                        <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleConvert(row.key)}
                        >
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
      </Box>
      {tabIndex === 1 && (
        <>
        <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 1100,
                margin: "auto",
                padding: 3,
                boxShadow: 3,
                borderRadius: 2,
              }}
            >

              <Typography variant="h6" sx={{ fontWeight: 600 }}>SINGLE OPERATION FULL FLOW</Typography>
              <Typography variant="h8" sx={{ fontWeight: 550 }}>PUMP OPERATING HEAD (KPA)</Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)", // 2 columns
                  gap: 2, // Spacing between items
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Suction Pressure(SP) :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Discharge Pressure(DP) :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Total Pressure(TP) :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Typography variant="h8" sx={{ fontWeight: 600 }}>PUMP SHUT OFF HEAD (KPA)</Typography><br></br><hr></hr>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Suction Pressure(SP) :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Discharge Pressure(DP) :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Total Pressure(TP) :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Pump Speed :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Motor Amps :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Specified Head(KPA) :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <TextField
                  fullWidth
                  label="Enter your comments"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={comments}
                  onChange={handleCommentChange}
                  placeholder="Use '*' for some meaning and '**' for another meaning..."
                />
                <Typography variant="body2" color="textSecondary" style={{ marginTop: "10px" }}>
                  * Represents [Your Meaning 1] <br />
                  ** Represents [Your Meaning 2]
                </Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end" sx={{mt:2}}>
                    <Button
                      variant="outlined"
                      // onClick={() => navigate("/allPump")}
                      sx={{ mr: 2 }}
                    >
                    Back
                    </Button>
                      <Button variant="contained"  onClick={() => navigate("/sampleTestData")}>Submit</Button>
                </Box>
            </Box>
          </Box>

        <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 1100,
                margin: "auto",
                padding: 3,
                boxShadow: 3,
                borderRadius: 2,
              }}
            >

              <Typography variant="h6" sx={{ fontWeight: 600 }}>SINGLE OPERATION BALANCED FLOW</Typography>
              <Typography variant="h8" sx={{ fontWeight: 550 }}>PUMP OPERATING HEAD (KPA)</Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)", // 2 columns
                  gap: 2, // Spacing between items
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Suction Pressure(SP) :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Discharge Pressure(DP) :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Total Pressure(TP) :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Typography variant="h8" sx={{ fontWeight: 600 }}>PUMP SHUT OFF HEAD (KPA)</Typography><br></br><hr></hr>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Suction Pressure(SP) :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Discharge Pressure(DP) :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Total Pressure(TP) :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Pump Speed :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Motor Amps :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Specified Head(KPA) :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <TextField
                  fullWidth
                  label="Enter your comments"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={comments}
                  onChange={handleCommentChange}
                  placeholder="Use '*' for some meaning and '**' for another meaning..."
                />
                <Typography variant="body2" color="textSecondary" style={{ marginTop: "10px" }}>
                  * Represents [Your Meaning 1] <br />
                  ** Represents [Your Meaning 2]
                </Typography>
              </Box>

              <Box display="flex" justifyContent="flex-end" sx={{mt:2}}>
                    <Button
                      variant="outlined"
                      // onClick={() => navigate("/allPump")}
                      sx={{ mr: 2 }}
                    >
                    Back
                    </Button>
                      <Button variant="contained"  onClick={() => navigate("/sampleTestData")}>Submit</Button>
                </Box>
              
            </Box>
        </Box>

        <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 1100,
                margin: "auto",
                padding: 3,
                boxShadow: 3,
                borderRadius: 2,
              }}
            >

              <Typography variant="h6" sx={{ fontWeight: 600 }}>PARALLEL OPERATION FULL FLOW</Typography>
              <Typography variant="h8" sx={{ fontWeight: 550 }}>PUMP OPERATING HEAD (KPA)</Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)", // 2 columns
                  gap: 2, // Spacing between items
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Suction Pressure(SP) :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Discharge Pressure(DP) :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Total Pressure(TP) :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Typography variant="h8" sx={{ fontWeight: 600 }}>PUMP SHUT OFF HEAD (KPA)</Typography><br></br><hr></hr>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Suction Pressure(SP) :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Discharge Pressure(DP) :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Total Pressure(TP) :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Pump Speed :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Motor Amps :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Specified Head(KPA) :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

              <TextField
                fullWidth
                label="Enter your comments"
                multiline
                rows={4}
                variant="outlined"
                value={comments}
                onChange={handleCommentChange}
                placeholder="Use '*' for some meaning and '**' for another meaning..."
              />
              <Typography variant="body2" color="textSecondary" style={{ marginTop: "10px" }}>
                * Represents [Your Meaning 1] <br />
                ** Represents [Your Meaning 2]
              </Typography>
              
              </Box>
              <Box display="flex" justifyContent="flex-end" sx={{mt:2}}>
                    <Button
                      variant="outlined"
                      // onClick={() => navigate("/allPump")}
                      sx={{ mr: 2 }}
                    >
                    Back
                    </Button>
                      <Button variant="contained"  onClick={() => navigate("/sampleTestData")}>Submit</Button>
                </Box>
              
            </Box>
            </Box>

        <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 1100,
                margin: "auto",
                padding: 3,
                boxShadow: 3,
                borderRadius: 2,
              }}
            >

              <Typography variant="h6" sx={{ fontWeight: 600 }}>PARALLEL OPERATION BALANCED FLOW</Typography>
              <Typography variant="h8" sx={{ fontWeight: 550 }}>PUMP OPERATING HEAD (KPA)</Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)", // 2 columns
                  gap: 2, // Spacing between items
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Suction Pressure(SP) :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Discharge Pressure(DP) :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Total Pressure(TP) :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Typography variant="h8" sx={{ fontWeight: 600 }}>PUMP SHUT OFF HEAD (KPA)</Typography><br></br><hr></hr>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Suction Pressure(SP) :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Discharge Pressure(DP) :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Total Pressure(TP) :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Pump Speed :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Motor Amps :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Specified Head(KPA) :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>
                <TextField
                  fullWidth
                  label="Enter your comments"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={comments}
                  onChange={handleCommentChange}
                  placeholder="Use '*' for some meaning and '**' for another meaning..."
                />
                <Typography variant="body2" color="textSecondary" style={{ marginTop: "10px" }}>
                  * Represents [Your Meaning 1] <br />
                  ** Represents [Your Meaning 2]
                </Typography>

              </Box>
              <Box display="flex" justifyContent="flex-end" sx={{mt:2}}>
                    <Button
                      variant="outlined"
                      // onClick={() => navigate("/allPump")}
                      sx={{ mr: 2 }}
                    >
                    Back
                    </Button>
                      <Button variant="contained"  onClick={() => navigate("/sampleTestData")}>Submit</Button>
                </Box>
              
            </Box>
        </Box>

        </>

      )}
      {tabIndex === 2 && (
        <>

          <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 1100,
                margin: "auto",
                padding: 3,
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6"sx={{ fontWeight: 600 }}>Pump</Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
                  gap: 2, // Spacing between items
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Pump Capacity :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Sysytem Capacity :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Pump Balancing Valve Position :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>System Differential Pressure Setpoint :</Typography>
                  <Input
                    fullWidth
                    name="rpm"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

              </Box>
              <Divider />

              <Typography variant="h6" sx={{ fontWeight: 600 }}>Motor</Typography>
              <Typography variant="h8" sx={{ fontWeight: 600 }}>BHP SINGLE OPERATION</Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
                  gap: 2, // Spacing between items
                }}
              >
                
                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Full Flow :</Typography>
                  <Input
                    fullWidth
                    name="size"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Balanced Position :</Typography>
                  <Input
                    fullWidth
                    name="volts"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>
                <Typography variant="h8" sx={{ fontWeight: 600 }}>BHP PARALLEL OPERATION</Typography><br></br>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Full Flow :</Typography>
                  <Input
                    fullWidth
                    name="amperage"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>Balanced Position :</Typography>
                  <Input
                    fullWidth
                    name="rpm"
                    sx={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  />
                </Box>
              </Box>
              
            </Box>
          </Box>
        </>
)}

        <Container maxWidth="md" style={{ marginTop: "25px"}}>
          <h3>Comments Section</h3>
          <TextField
            fullWidth
            label="Enter your comments"
            multiline
            rows={4}
            variant="outlined"
            value={comments}
            onChange={handleCommentChange}
            placeholder="Use '*' for some meaning and '**' for another meaning..."
          />
          <Typography variant="body2" color="textSecondary" style={{ marginTop: "10px" }}>
            * Represents [Your Meaning 1] <br />
            ** Represents [Your Meaning 2]
          </Typography>
        </Container>

<Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
        <Button variant="outlined"sx={{ mr: 2 }} onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => navigate("/appPump")}>
          Submit
        </Button>
      </Box>


    </Box>
  );
};

export default ActualPump;
