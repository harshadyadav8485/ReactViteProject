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

const ActualChiller = () => {
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
    // { field: "Make", specified: "BELL & GOSSETT", actual: "TACO", key: "make" },
    // {
    //   field: "Model",
    //   specified: "e-80SC 5x5x11",
    //   actual: "KS6011D-4P-PM",
    //   key: "model",
    // },
    // {
    //   field: "Impeller Size",
    //   specified: "",
    //   actual: '9.5"',
    //   key: "impellerSize",
    // },
    // {
    //   field: "Manufacturer ",
    //   specified: "",
    //   actual: "WEG",
    //   key: "manufacturer ",
    // },

    // { field: "Motor Size", specified: "20 HP ", actual: "25 HP", key: "size" },
    // { field: "Volts/Phase", specified: "575/3", actual: "575/3", key: "volts" },
    // {
    //   field: "Amperage",
    //   specified: "23.60",
    //   actual: "As Below",
    //   key: "amperage",
    // },
    // { field: "R.P.M", specified: "", actual: "", key: "rpm" },
  ];

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

  const [pump, setPump] = useState("ACC-1");
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
            System :
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
            <MenuItem value="ACC-1">ACC-1</MenuItem>
            {/* <MenuItem value="P-06-07B">P-06-07B</MenuItem>
            <MenuItem value="P-06-07C">P-06-07C</MenuItem> */}
          </Select>
        </Box>
        <Tabs
          value={tabIndex}
          onChange={(e, newIndex) => setTabIndex(newIndex)}
          sx={{ mb: 1 }}
        >
          <Tab label="Actual Chiller Data" />  
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
    </Box>
  );
};

export default ActualChiller;
