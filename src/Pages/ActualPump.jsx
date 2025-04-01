import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Tabs,
  Tab,
  Divider,
  Select,
  MenuItem,
  Input,
  Snackbar,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
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
    make: " TACO",
    model: "KS6011D-4P-PM",
    impellerSize: '9.5"',
    Manufacturer: "WEG",
    size: "25HP",
    volts: "575/3",
    amperage: "As Below",
    rpm: "",
  });

  const handleChange = (field, value) => {
    setActualValues((prev) => ({ ...prev, [field]: value }));
  };

  const pumpData = [
    { field: "Make", specified: "BELL & GOSSETT", actual: "TACO", key: "make" },
    {
      field: "Model",
      specified: "e-80SC 5x5x11",
      actual: "KS6011D-4P-PM",
      key: "model",
    },
    {
      field: "Impeller Size",
      specified: "",
      actual: '9.5"',
      key: "impellerSize",
    },
    {
      field: "Manufacturer ",
      specified: "",
      actual: "WEG",
      key: "manufacturer ",
    },
    // { field: "Pump Capacity", specified: "0.5 L/s", key: "pumpCapacity", showConverter: true },
    // { field: "System Capacity", specified: "0.5 L/s", key: "systemCapacity", showConverter: true },
    { field: "Motor Size", specified: "20 HP ", actual: "25 HP", key: "size" },
    { field: "Volts/Phase", specified: "575/3", actual: "575/3", key: "volts" },
    {
      field: "Amperage",
      specified: "23.60",
      actual: "As Below",
      key: "amperage",
    },
    { field: "R.P.M", specified: "", actual: "", key: "rpm" },
  ];
  // const pumpData = [
  //   { field: "Make", specified: "BELL & GOSSETT", actual: "TACO", key: "make", showConverter: false },
  //   { field: "Model", specified: "e-80SC 5x5x11", actual: "KS6011D-4P-PM", key: "model", showConverter: false },
  //   { field: "Impeller Size", specified: "", actual: '9.5"', key: "impellerSize", showConverter: false },
  //   { field: "Manufacturer ", specified: "", actual: "WEG", key: "manufacturer ", showConverter: false },
  //   // { field: "Pump Capacity", specified: "0.5 L/s", key: "pumpCapacity", showConverter: true },
  //   // { field: "System Capacity", specified: "0.5 L/s", key: "systemCapacity", showConverter: true },
  //   { field: "Motor Size", specified: "20 HP ", actual: "25 HP", key: "size", showConverter: false },
  //   { field: "Volts/Phase", specified: "575/3", actual: "575/3",  key: "volts", showConverter: false },
  //   { field: "Amperage", specified: "23.60", actual: "As Below", key: "amperage", showConverter: false },
  //   { field: "R.P.M", specified: "", actual: "",  key: "rpm", showConverter: false }
  // ];
  const testData = [
    {
      field: "PUMP OPERATING HEAD (KPA)",
      specified: "Little Giant",
      key: "make",
      showConverter: false,
    },
    {
      field: "Model",
      specified: "VCMA-20 Series",
      key: "model",
      showConverter: false,
    },
    {
      field: "Impeller Size",
      specified: "200 mm",
      key: "impellerSize",
      showConverter: true,
    },
    {
      field: "Pump Capacity",
      specified: "0.5 L/s",
      key: "pumpCapacity",
      showConverter: true,
    },
    {
      field: "System Capacity",
      specified: "0.5 L/s",
      key: "systemCapacity",
      showConverter: true,
    },
    {
      field: "Motor Size",
      specified: "1 HP",
      key: "size",
      showConverter: true,
    },
    {
      field: "Volts/Phase",
      specified: "230V",
      key: "volts",
      showConverter: true,
    },
    {
      field: "Amperage",
      specified: "7.5 Amps",
      key: "amperage",
      showConverter: true,
    },
    { field: "R.P.M", specified: "1725 RPM", key: "rpm", showConverter: true },
  ];

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = () => {
    setOpenSnackbar(true);
    setTimeout(() => {
      // navigate("/sampleTestData");
    }, 2000);
  };

  const handleCheckboxChange = (formName) => {
    setSelectedForms(
      (prev) =>
        prev.includes(formName)
          ? prev.filter((item) => item !== formName) // Remove if already selected
          : [...prev, formName] // Add if not selected
    );
  };

  const [pump, setPump] = useState("P-06-07A");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [selectedForms, setSelectedForms] = useState([]);

  return (
    <Box>
      <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", marginBottom: "10px" }}
        >
          Project Name : UBC School of Biomedical Engineering
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", marginRight: "10px" }}
          >
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
        <Tabs
          value={tabIndex}
          onChange={(e, newIndex) => setTabIndex(newIndex)}
          sx={{ mb: 1 }}
        >
          <Tab label="Actual Pump Data" />
          <Tab label="Test Data" />
          <Tab label="Pump Performance" />
        </Tabs>
        {tabIndex === 0 && (
          <>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableHead sx={{ backgroundColor: "#1976d2" }}>
                  <TableRow sx={{ height: "30px" }}>
                    <TableCell
                      sx={{ color: "white", fontWeight: "bold", px: 1 }}
                    >
                      Field
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", fontWeight: "bold", px: 1 }}
                    >
                      Specified Value
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        px: 1,
                        textAlign: "center",
                      }}
                    >
                      Actual Value
                    </TableCell>
                    {/* <TableCell sx={{ color: "white", fontWeight: "bold", px: 1, textAlign: "center" }}>Action</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pumpData.map((row) => (
                    <TableRow key={row.field} sx={{ height: "40px" }}>
                      <TableCell sx={{ py: 0.3, px: 1 }}>{row.field}</TableCell>
                      <TableCell sx={{ py: 0.3, px: 1 }}>
                        {row.specified}
                      </TableCell>
                      <TableCell sx={{ py: 0.3, px: 1, textAlign: "center" }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <TextField
                            variant="outlined"
                            size="small"
                            value={actualValues[row.key]}
                            onChange={(e) =>
                              handleChange(row.key, e.target.value)
                            }
                            sx={{
                              width: "100px",
                              "& .MuiInputBase-root": {
                                height: "30px",
                                fontSize: "0.75rem",
                              },
                            }}
                          />
                        </Box>
                      </TableCell>
                      {/* <TableCell sx={{ py: 0.3, px: 1, textAlign: "center" }}>
                      {row.showConverter && (
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleConvert(row.key)}
                          sx={{
                            minWidth: "60px",
                            height: "30px",
                            fontSize: "0.75rem",
                            padding: "2px 6px",
                          }}
                        >
                          Convert
                        </Button>
                      )}
                    </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box width="100%">
              <h3 style={{ alignSelf: "flex-start" }}>Comments :</h3>
              <TextField
                fullWidth
                label="Enter your comments"
                multiline
                rows={4}
                variant="outlined"
                value={comments}
                onChange={handleCommentChange}
                placeholder="Use '*' for some meaning and '**' for another meaning..."
                style={{ width: "100%" }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ marginTop: "10px", textAlign: "left" }}
              >
                * Represents [Your Meaning 1] <br />
                ** Represents [Your Meaning 2]
              </Typography>
            </Box>

            <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                sx={{ mr: 2 }}
                onClick={() => navigate("/allPump")}
              >
                Back
              </Button>
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>

            <Snackbar
              open={openSnackbar}
              autoHideDuration={2000}
              onClose={() => setOpenSnackbar(false)}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                onClose={() => setOpenSnackbar(false)}
                severity="success"
                variant="filled"
              >
                Data Submitted Successfully!
              </Alert>
            </Snackbar>
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
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                SINGLE OPERATION FULL FLOW
              </Typography>
              <Typography variant="h8" sx={{ fontWeight: 550 }}>
                PUMP OPERATING HEAD (KPA)
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)", // 2 columns
                  gap: 2, // Spacing between items
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>
                    Suction Pressure(SP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Discharge Pressure(DP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Total Pressure(TP) :
                  </Typography>
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

                <Typography variant="h8" sx={{ fontWeight: 600 }}>
                  PUMP SHUT OFF HEAD (KPA)
                </Typography>
                <br></br>
                <hr></hr>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>
                    Suction Pressure(SP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Discharge Pressure(DP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Total Pressure(TP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Pump Speed :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Motor Amps :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Specified Head(KPA) :
                  </Typography>
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
              </Box>

              <Box width="100%">
                <h3 style={{ alignSelf: "flex-start" }}>Comments :</h3>
                <TextField
                  fullWidth
                  label="Enter your comments"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={comments}
                  onChange={handleCommentChange}
                  placeholder="Use '*' for some meaning and '**' for another meaning..."
                  style={{ width: "100%" }}
                />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ marginTop: "10px", textAlign: "left" }}
                >
                  * Represents [Your Meaning 1] <br />
                  ** Represents [Your Meaning 2]
                </Typography>
              </Box>

              <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  sx={{ mr: 2 }}
                  onClick={() => navigate("/allPump")}
                >
                  Back
                </Button>
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </Box>

              <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <Alert
                  onClose={() => setOpenSnackbar(false)}
                  severity="success"
                  variant="filled"
                >
                  Data Submitted Successfully!
                </Alert>
              </Snackbar>
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
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                SINGLE OPERATION BALANCED FLOW
              </Typography>
              <Typography variant="h8" sx={{ fontWeight: 550 }}>
                PUMP OPERATING HEAD (KPA)
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)", // 2 columns
                  gap: 2, // Spacing between items
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>
                    Suction Pressure(SP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Discharge Pressure(DP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Total Pressure(TP) :
                  </Typography>
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

                <Typography variant="h8" sx={{ fontWeight: 600 }}>
                  PUMP SHUT OFF HEAD (KPA)
                </Typography>
                <br></br>
                <hr></hr>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>
                    Suction Pressure(SP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Discharge Pressure(DP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Total Pressure(TP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Pump Speed :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Motor Amps :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Specified Head(KPA) :
                  </Typography>
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
              </Box>

              <Box width="100%">
                <h3 style={{ alignSelf: "flex-start" }}>Comments :</h3>
                <TextField
                  fullWidth
                  label="Enter your comments"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={comments}
                  onChange={handleCommentChange}
                  placeholder="Use '*' for some meaning and '**' for another meaning..."
                  style={{ width: "100%" }}
                />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ marginTop: "10px", textAlign: "left" }}
                >
                  * Represents [Your Meaning 1] <br />
                  ** Represents [Your Meaning 2]
                </Typography>
              </Box>

              <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  sx={{ mr: 2 }}
                  onClick={() => navigate("/allPump")}
                >
                  Back
                </Button>
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </Box>

              <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <Alert
                  onClose={() => setOpenSnackbar(false)}
                  severity="success"
                  variant="filled"
                >
                  Data Submitted Successfully!
                </Alert>
              </Snackbar>
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
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                PARALLEL OPERATION FULL FLOW
              </Typography>
              <Typography variant="h8" sx={{ fontWeight: 550 }}>
                PUMP OPERATING HEAD (KPA)
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)", // 2 columns
                  gap: 2, // Spacing between items
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>
                    Suction Pressure(SP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Discharge Pressure(DP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Total Pressure(TP) :
                  </Typography>
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

                <Typography variant="h8" sx={{ fontWeight: 600 }}>
                  PUMP SHUT OFF HEAD (KPA)
                </Typography>
                <br></br>
                <hr></hr>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>
                    Suction Pressure(SP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Discharge Pressure(DP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Total Pressure(TP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Pump Speed :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Motor Amps :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Specified Head(KPA) :
                  </Typography>
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
              </Box>

              <Box width="100%">
                <h3 style={{ alignSelf: "flex-start" }}>Comments :</h3>
                <TextField
                  fullWidth
                  label="Enter your comments"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={comments}
                  onChange={handleCommentChange}
                  placeholder="Use '*' for some meaning and '**' for another meaning..."
                  style={{ width: "100%" }}
                />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ marginTop: "10px", textAlign: "left" }}
                >
                  * Represents [Your Meaning 1] <br />
                  ** Represents [Your Meaning 2]
                </Typography>
              </Box>

              <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  sx={{ mr: 2 }}
                  onClick={() => navigate("/allPump")}
                >
                  Back
                </Button>
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </Box>

              <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <Alert
                  onClose={() => setOpenSnackbar(false)}
                  severity="success"
                  variant="filled"
                >
                  Data Submitted Successfully!
                </Alert>
              </Snackbar>
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
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                PARALLEL OPERATION BALANCED FLOW
              </Typography>
              <Typography variant="h8" sx={{ fontWeight: 550 }}>
                PUMP OPERATING HEAD (KPA)
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)", // 2 columns
                  gap: 2, // Spacing between items
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>
                    Suction Pressure(SP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Discharge Pressure(DP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Total Pressure(TP) :
                  </Typography>
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

                <Typography variant="h8" sx={{ fontWeight: 600 }}>
                  PUMP SHUT OFF HEAD (KPA)
                </Typography>
                <br></br>
                <hr></hr>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>
                    Suction Pressure(SP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Discharge Pressure(DP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Total Pressure(TP) :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Pump Speed :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Motor Amps :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Specified Head(KPA) :
                  </Typography>
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
              </Box>

              <Box width="100%">
                <h3 style={{ alignSelf: "flex-start" }}>Comments :</h3>
                <TextField
                  fullWidth
                  label="Enter your comments"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={comments}
                  onChange={handleCommentChange}
                  placeholder="Use '*' for some meaning and '**' for another meaning..."
                  style={{ width: "100%" }}
                />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ marginTop: "10px", textAlign: "left" }}
                >
                  * Represents [Your Meaning 1] <br />
                  ** Represents [Your Meaning 2]
                </Typography>
              </Box>

              <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  sx={{ mr: 2 }}
                  onClick={() => navigate("/allPump")}
                >
                  Back
                </Button>
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </Box>

              <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <Alert
                  onClose={() => setOpenSnackbar(false)}
                  severity="success"
                  variant="filled"
                >
                  Data Submitted Successfully!
                </Alert>
              </Snackbar>
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
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Pump
              </Typography>
              <Box>
                <Box display="flex" alignItems="center" marginBottom="6px">
                  <Typography sx={{ minWidth: "150px" }}>
                    Pump Capacity:
                  </Typography>
                  <Box display="flex" alignItems="center" gap={2}>
                    {/* <TextField defaultValue="34.700 L/S"  fullWidth variant="outlined" />
              <TextField label="Actual Value" fullWidth variant="outlined" /> */}
                    <Input
                      fullWidth
                      name="text"
                      defaultValue="37.700 L/s"
                      readOnly
                      sx={{
                        border: "1px solid #ccc",
                        padding: "5px",
                        borderRadius: "4px",
                      }}
                    />
                    <Input
                      fullWidth
                      name="text"
                      placeholder="Actual Value"
                      sx={{
                        border: "1px solid #ccc",
                        padding: "5px",
                        borderRadius: "4px",
                      }}
                    />
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleConvert(row.key)}
                      sx={{
                        minWidth: "100px",
                        height: "30px",
                        fontSize: "0.75rem",
                        padding: "2px 6px",
                      }}
                    >
                      Convert
                    </Button>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "150px", gap: 2 }}>
                    System Capacity:
                  </Typography>
                  <Box display="flex" alignItems="center" gap={2}>
                    {/* <TextField defaultValue="187.629 L/S" fullWidth variant="outlined" />
              <TextField label="Actual Value" fullWidth variant="outlined" /> */}
                    <Input
                      fullWidth
                      name="text"
                      defaultValue="187.629 L/s"
                      readOnly
                      sx={{
                        border: "1px solid #ccc",
                        padding: "5px",
                        borderRadius: "4px",
                      }}
                    />
                    <Input
                      fullWidth
                      name="text"
                      placeholder="Actual Value"
                      sx={{
                        border: "1px solid #ccc",
                        padding: "5px",
                        borderRadius: "4px",
                      }}
                    />
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleConvert(row.key)}
                      sx={{
                        minWidth: "100px",
                        height: "30px",
                        fontSize: "0.75rem",
                        padding: "2px 6px",
                      }}
                    >
                      Convert
                    </Button>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
                  gap: 2, // Spacing between items
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>
                    Pump Balancing Valve Position :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    System Differential Pressure Setpoint :
                  </Typography>
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

              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Motor
              </Typography>
              <Typography variant="h8" sx={{ fontWeight: 600 }}>
                BHP SINGLE OPERATION
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
                  gap: 2, // Spacing between items
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>
                    Full Flow :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Balanced Position :
                  </Typography>
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
                <Typography variant="h8" sx={{ fontWeight: 600 }}>
                  BHP PARALLEL OPERATION
                </Typography>
                <br></br>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ minWidth: "110px" }}>
                    Full Flow :
                  </Typography>
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
                  <Typography sx={{ minWidth: "110px" }}>
                    Balanced Position :
                  </Typography>
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

              <Box display="flex" gap={52}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedForms.includes("Flow Meter")}
                      onChange={() => handleCheckboxChange("Flow Meter")}
                    />
                  }
                  label="Flow Meter"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedForms.includes(
                        "Three Phase BHP Calculator"
                      )}
                      onChange={() =>
                        handleCheckboxChange("Three Phase BHP Calculator")
                      }
                    />
                  }
                  label="Three Phase BHP Calculator"
                />
              </Box>

              {/* Grid Layout for Forms */}
              {selectedForms.length > 0 && (
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns:
                      selectedForms.length > 1
                        ? "repeat(2, 1fr)"
                        : "repeat(1, 1fr)",
                    gap: 2,
                  }}
                >
                  {/* Flow Meter Form */}
                  {selectedForms.includes("Flow Meter") && (
                    <Box
                      sx={{
                        border: "1px solid #ccc",
                        padding: 2,
                        borderRadius: 2,
                        boxShadow: 2,
                      }}
                    >
                      {/* <Typography variant="h6">Flow Meter</Typography> */}

                      <Box
                        display="flex"
                        alignItems="center"
                        marginBottom="16px"
                      >
                        <Typography sx={{ minWidth: "120px" }}>
                          Type :
                        </Typography>
                        <Input
                          name="type"
                          fullWidth
                          sx={{
                            // width: "50%",
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "4px",
                          }}
                        />
                      </Box>

                      <Box
                        display="flex"
                        alignItems="center"
                        marginBottom="16px"
                      >
                        <Typography sx={{ minWidth: "120px" }}>
                          Size :
                        </Typography>
                        <Input
                          name="size"
                          fullWidth
                          sx={{
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "4px",
                          }}
                        />
                      </Box>

                      <Box
                        display="flex"
                        alignItems="center"
                        marginBottom="16px"
                      >
                        <Typography sx={{ minWidth: "120px" }}>
                          Signal (FT) :
                        </Typography>
                        <Input
                          name="signal"
                          fullWidth
                          sx={{
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "4px",
                          }}
                        />
                      </Box>

                      <Box
                        display="flex"
                        alignItems="center"
                        marginBottom="16px"
                      >
                        <Typography sx={{ minWidth: "120px" }}>
                          Measured (GPM) :
                        </Typography>
                        <Input
                          name="gpm"
                          fullWidth
                          sx={{
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "4px",
                          }}
                        />
                      </Box>

                      <Box display="flex" alignItems="center">
                        <Typography sx={{ minWidth: "120px" }}>
                          Position :
                        </Typography>
                        <Input
                          name="position"
                          fullWidth
                          sx={{
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "4px",
                          }}
                        />
                      </Box>
                    </Box>
                  )}

                  {/* Three Phase BHP Calculator Form */}
                  {selectedForms.includes("Three Phase BHP Calculator") && (
                    <Box
                      sx={{
                        border: "1px solid #ccc",
                        padding: 2,
                        borderRadius: 2,
                        boxShadow: 2,
                      }}
                    >
                      {/* <Typography variant="h6">Flow Meter</Typography> */}

                      <Box
                        display="flex"
                        alignItems="center"
                        marginBottom="16px"
                      >
                        <Typography sx={{ minWidth: "120px" }}>
                          Efficiency :
                        </Typography>
                        <Input
                          name="efficiency"
                          fullWidth
                          sx={{
                            // width: "50%",
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "4px",
                          }}
                        />
                      </Box>

                      <Box
                        display="flex"
                        alignItems="center"
                        marginBottom="16px"
                      >
                        <Typography sx={{ minWidth: "120px" }}>
                          Meas. Amperage :
                        </Typography>
                        <Input
                          name="amperage"
                          fullWidth
                          sx={{
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "4px",
                          }}
                        />
                      </Box>

                      <Box
                        display="flex"
                        alignItems="center"
                        marginBottom="16px"
                      >
                        <Typography sx={{ minWidth: "120px" }}>
                          Meas. Voltage:
                        </Typography>
                        <Input
                          name="voltage"
                          fullWidth
                          sx={{
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "4px",
                          }}
                        />
                      </Box>

                      <Box
                        display="flex"
                        alignItems="center"
                        marginBottom="16px"
                      >
                        <Typography sx={{ minWidth: "120px" }}>
                          Power Factor :
                        </Typography>
                        <Input
                          name="powerFactor"
                          fullWidth
                          sx={{
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "4px",
                          }}
                        />
                      </Box>

                      <Box display="flex" alignItems="center">
                        <Typography
                          sx={{ minWidth: "110px", fontWeight: "bold" }}
                        >
                          EFM
                        </Typography>
                        <Typography sx={{ minWidth: "50px" }}>BHP :</Typography>
                        <Input
                          name="efm"
                          fullWidth
                          sx={{
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "4px",
                            marginRight: "8px",
                          }}
                        />
                        <Typography sx={{ minWidth: "50px" }}>BKW :</Typography>
                        <Input
                          name="efm"
                          fullWidth
                          sx={{
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "4px",
                          }}
                        />
                      </Box>
                    </Box>
                  )}
                </Box>
              )}

              <Divider />

              <Box width="100%">
                <h3 style={{ alignSelf: "flex-start" }}>Comments :</h3>
                <TextField
                  fullWidth
                  label="Enter your comments"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={comments}
                  onChange={handleCommentChange}
                  placeholder="Use '*' for some meaning and '**' for another meaning..."
                  style={{ width: "100%" }}
                />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ marginTop: "10px", textAlign: "left" }}
                >
                  * Represents [Your Meaning 1] <br />
                  ** Represents [Your Meaning 2]
                </Typography>
              </Box>

              <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  sx={{ mr: 2 }}
                  onClick={() => navigate("/allPump")}
                >
                  Back
                </Button>
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </Box>

              <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <Alert
                  onClose={() => setOpenSnackbar(false)}
                  severity="success"
                  variant="filled"
                >
                  Data Submitted Successfully!
                </Alert>
              </Snackbar>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ActualPump;
