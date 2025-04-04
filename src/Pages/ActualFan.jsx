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
import pump_report from '../assets/pump_report.pdf';

const ActualFan = () => {
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
    make: " MITSUBISHI ELECTRIC",
    model: "LGH-F470RVX2-E",
    supplyFanCapacity: '387 L/s',
    supplyOutletCapacity: '387 L/s',
    exhaustFanCapacitycity: '309 L/s',
    exhaustOutletCapacity: '309 L/s',
    size: "",
    volts: "575/3",
    supply: "0.37HP",
    exhaust: "0.42HP",
  });

  const handleChange = (field, value) => {
    setActualValues((prev) => ({ ...prev, [field]: value }));
  };

  const fanData = [
    { 
      field: "Make", 
      specified: "SWEGON", 
      actual: "MITSUBISHI ELECTRIC", 
      key: "make" 
    },
    {
      field: "Model",
      specified: "R15-H SMART",
      actual: "LGH-F470RVX2-E",
      key: "model",
    },
    {
      field: "Supply Fan Capacity",
      specified: "550 L/s",
      actual: '387 L/s"',
      key: "supplyFanCapacity",
    },
    {
      field: "Supply Outlet Capacity",
      specified: "552 L/s",
      actual: "387 L/s",
      key: "supplyOutletCapacity",
    },
    ,
    {
      field: "Exhaust Fan Capacity",
      specified: "550 L/s",
      actual: "309 L/s",
      key: "exhaustFanCapacitycity",
    },
    {
      field: "Exhaust Outlet Capacity",
      specified: "424 L/s",
      actual: "309 L/s",
      key: "exhaustOutletCapacity",
    },
    { 
      field: "Motor Size", 
      specified: "-", 
      actual: "-", 
      key: "size" 
    },
    { 
      field: "Supply", 
      specified: "-", 
      actual: "0.37 HP", 
      key: "supply" 
    },
    { 
      field: "Exhaust", 
      specified: "-", 
      actual: "0.42 HP", 
      key: "exhaust" 
    },
    { 
      field: "Volts/Phase",
      specified: "115/1", 
      actual: "115/1", 
      key: "volts" 
    },
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
            <MenuItem value="P-06-07A">ERV-1</MenuItem>
          </Select>
        </Box>
        <Tabs
          value={tabIndex}
          onChange={(e, newIndex) => setTabIndex(newIndex)}
          sx={{ mb: 1 }}
        >
          <Tab label="Actual Fan Data" />
          <Tab label="Fan Performance" />
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
                  {fanData.map((row) => (
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
                        Fan
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
                            Supply Fan R.P.M :
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
                            Exhaust Fan R.P.M :
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
                          
                        </Box>
        
                        <Typography variant="h8" sx={{ fontWeight: 600 }}>
                          Motor
                        </Typography>
                        <br></br>
                        <hr></hr>
        
                        <Box display="flex" alignItems="center">
                          <Typography sx={{ minWidth: "110px" }}>
                            Supply Amperage :
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
                            Exhaust Amperage :
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
                        
                        </Box>
        
                        <Box display="flex" alignItems="center">
                          <Typography sx={{ minWidth: "110px" }}>
                          Supply R.P.M :
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
                          Exhaust R.P.M :
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
                          
                        </Box>

                        <Typography variant="h8" sx={{ fontWeight: 600 }}>
                        STATIC PRESSURE (Pa)
                        </Typography><hr></hr><hr></hr>

                        <Typography variant="h8" sx={{ fontWeight: 550 }}>
                        Supply   
                        </Typography><hr></hr><hr></hr>
                        

                        <Box display="flex" alignItems="center">
                          <Typography sx={{ minWidth: "110px" }}>
                          Standard Static Pressure :
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
                          Differential Static Pressure :
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
                          Total Static Pressure :
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

                        <Typography variant="h8" sx={{ fontWeight: 550 }}>
                        Exhaust  
                        </Typography><hr></hr><hr></hr>

                        <Box display="flex" alignItems="center">
                          <Typography sx={{ minWidth: "110px" }}>
                          Standard Static Pressure :
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
                          Differential Static Pressure   :
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
                          Total Static Pressure :
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
                        SUPPLY FAN DRIVE INFORMATION
                        </Typography>
                        <br></br>
                        <hr></hr>
        
                        <Box display="flex" alignItems="center">
                          <Typography sx={{ minWidth: "110px" }}>
                            Motor Sheave :
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
                            Position :
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
                          Fan Sheave :
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
                            Centres :
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
                            Belt Quantity/ Size :
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
                        </Box>  

                        <Typography variant="h8" sx={{ fontWeight: 600 }}>
                        EXHAUST FAN DRIVE INFORMATION
                        </Typography>
                        <br></br>
                        <hr></hr>
        
                        <Box display="flex" alignItems="center">
                          <Typography sx={{ minWidth: "110px" }}>
                            Motor Sheave :
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
                            Position :
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
                          Fan Sheave :
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
                            Centres :
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
                            Belt Quantity/ Size :
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
    </Box>
  );
};

export default ActualFan;
