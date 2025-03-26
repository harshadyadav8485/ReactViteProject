import React, { useState } from "react";
import { Box,Container,Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Tabs, Tab, Divider,Select,MenuItem  } from "@mui/material";
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
  
    // const handleChange = (event) => {
    //   setPump(event.target.value);
    
  return (
    <Box sx={{ pl: 9, pr: 9, mt: 2 }}>
       <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: "10px" }}>
    Project Name:UBC School of Biomedical Engineering 
  </Typography>
        <Box display="flex" alignItems="center">
    <Typography variant="h6" style={{ fontWeight: "bold", marginRight: "10px" }}>
      Pump Number:
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





        </>

        
      )}

<Container maxWidth="xl" sx={{ marginTop: "40px" }}>
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <Container>
        <Typography variant="h6" gutterBottom align="center" style={{ fontWeight: "bold", marginBottom: "20px" }}>
          SINGLE OPERATION FULL FLOW
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ fontWeight: 500, marginTop: "10px" }}>
                PUMP OPERATING HEAD (KPA)
              </Typography>
            </Grid>
            {[
              { label: "SP", name: "pumpOperatingHeadSP" },
              { label: "DP", name: "pumpOperatingHeadDP" },
              { label: "TP", name: "pumpOperatingHeadTP" },
            ].map((field, index) => (
              <Grid item xs={4} key={index}>
                <label >{field.label}    :   </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ fontWeight: 500, marginTop: "10px" }}>
                PUMP SHUT OFF HEAD (KPA)
              </Typography>
            </Grid>
            {[
              { label: "SP", name: "pumpShutOffHeadSP" },
              { label: "DP", name: "pumpShutOffHeadDP" },
              { label: "TP", name: "pumpShutOffHeadTP" },
            ].map((field, index) => (
              <Grid item xs={4} key={index}>
                <label>{field.label}    :   </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </Grid>
            ))}
            {[
              { label: "Pump Speed", name: "pumpSpeed" },
              { label: "Motor Amps", name: "motorAmps" },
              { label: "Specified Head (KPA)", name: "specifiedHead" },
            ].map((field, index) => (
              <Grid item xs={4} key={index}>
                <label>{field.label}    :   </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </Grid>
            ))}
          </Grid>
        </form>
      </Container>
    </Grid>

    <Grid item xs={6}>
      <Container>
        <Typography variant="h6" gutterBottom align="center" style={{ fontWeight: "bold", marginBottom: "20px" }}>
          SINGLE OPERATION BALANCED FLOW
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ fontWeight: 500, marginTop: "10px" }}>
                PUMP OPERATING HEAD (KPA)
              </Typography>
            </Grid>
            {[
              { label: "SP", name: "pumpOperatingHeadSP1" },
              { label: "DP", name: "pumpOperatingHeadDP1" },
              { label: "TP", name: "pumpOperatingHeadTP1" },
            ].map((field, index) => (
              <Grid item xs={4} key={index}>
                <label>{field.label}    :   </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ fontWeight: 500, marginTop: "10px" }}>
                PUMP SHUT OFF HEAD (KPA)
              </Typography>
            </Grid>
            {[
              { label: "SP", name: "pumpShutOffHeadSP1" },
              { label: "DP", name: "pumpShutOffHeadDP1" },
              { label: "TP", name: "pumpShutOffHeadTP1" },
            ].map((field, index) => (
              <Grid item xs={4} key={index}>
                <label>{field.label}    :   </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </Grid>
            ))}
            {[
              { label: "Pump Speed", name: "pumpSpeed1" },
              { label: "Motor Amps", name: "motorAmps1" },
              { label: "Specified Head (KPA)", name: "specifiedHead1" },
            ].map((field, index) => (
              <Grid item xs={4} key={index}>
                <label>{field.label}    :   </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </Grid>
            ))}
          </Grid>
        </form>
      </Container>
    </Grid>
  </Grid>
</Container>

<br></br><hr></hr>

<Container maxWidth="xl" sx={{ marginTop: "25px" }}>
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <Container>
        <Typography variant="h6" gutterBottom align="center" style={{ fontWeight: "bold", marginBottom: "20px" }}>
        PARALLEL OPERATION FULL FLOW
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ fontWeight: 500, marginTop: "10px" }}>
                PUMP OPERATING HEAD (KPA)
              </Typography>
            </Grid>
            {[
              { label: "SP", name: "pumpOperatingHeadSP2" },
              { label: "DP", name: "pumpOperatingHeadDP2" },
              { label: "TP", name: "pumpOperatingHeadTP2" },
            ].map((field, index) => (
              <Grid item xs={4} key={index}>
                <label >{field.label}    :   </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ fontWeight: 500, marginTop: "10px" }}>
                PUMP SHUT OFF HEAD (KPA)
              </Typography>
            </Grid>
            {[
              { label: "SP", name: "pumpShutOffHeadSP2" },
              { label: "DP", name: "pumpShutOffHeadDP2" },
              { label: "TP", name: "pumpShutOffHeadTP2" },
            ].map((field, index) => (
              <Grid item xs={4} key={index}>
                <label>{field.label}    :   </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </Grid>
            ))}
            {[
              { label: "Pump Speed", name: "pumpSpeed2" },
              { label: "Motor Amps", name: "motorAmps2" },
              { label: "Specified Head (KPA)", name: "specifiedHead2" },
            ].map((field, index) => (
              <Grid item xs={4} key={index}>
                <label>{field.label}    :   </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </Grid>
            ))}
          </Grid>
        </form>
      </Container>
    </Grid>

    <Grid item xs={6}>
      <Container>
        <Typography variant="h6" gutterBottom align="center" style={{ fontWeight: "bold", marginBottom: "20px" }}>
        PARALLEL OPERATION BALANCED FLOW
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ fontWeight: 500, marginTop: "10px" }}>
                PUMP OPERATING HEAD (KPA)
              </Typography>
            </Grid>
            {[
              { label: "SP", name: "pumpOperatingHeadSP3" },
              { label: "DP", name: "pumpOperatingHeadDP3" },
              { label: "TP", name: "pumpOperatingHeadTP3" },
            ].map((field, index) => (
              <Grid item xs={4} key={index}>
                <label>{field.label}    :   </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ fontWeight: 500, marginTop: "10px" }}>
                PUMP SHUT OFF HEAD (KPA)
              </Typography>
            </Grid>
            {[
              { label: "SP", name: "pumpShutOffHeadSP3" },
              { label: "DP", name: "pumpShutOffHeadDP3" },
              { label: "TP", name: "pumpShutOffHeadTP3" },
            ].map((field, index) => (
              <Grid item xs={4} key={index}>
                <label>{field.label}    :   </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </Grid>
            ))}
            {[
              { label: "Pump Speed", name: "pumpSpeed3" },
              { label: "Motor Amps", name: "motorAmps3" },
              { label: "Specified Head (KPA)", name: "specifiedHead3" },
            ].map((field, index) => (
              <Grid item xs={4} key={index}>
                <label>{field.label}    :   </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </Grid>
            ))}
          </Grid>
        </form>
      </Container>
    </Grid>
  </Grid>
</Container>

<Container maxWidth="md" style={{ marginTop: "20px" }}>
  <Grid container spacing={2}>
    <Grid item xs={6}>
      
        <label>Pump Balancing Valve Position    :   </label>
        <input
            type="text"
            name="Pump Balancing Valve Position"
            value=""
            onChange={handleChange1}
            style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />

    </Grid>
    <Grid item xs={6}>
      
      <label>System Differential Pressure Setpoint    :   </label>
        <input
            type="text"
            name="System Differential Pressure Setpoint"
            value=""
            onChange={handleChange1}
            style={{ width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
    </Grid>
  </Grid>
</Container>

<br></br><hr></hr>

<Container maxWidth="xl" sx={{ marginTop: "25px" }}>
  <Grid container >
    <Grid item xs={6}>
      <Container>
        <Typography variant="h6" gutterBottom align="center" sx={{ fontWeight: "bold", mb: 2 }}>
          ****
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* PUMP Section */}
            <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 1 }}>
            PUMP
          </Typography>
          </Grid >
            {[
              { label: "Pump Capacity", name: "pumpOperatingHeadSP2" },
              { label: "System Capacity", name: "pumpOperatingHeadDP2" },
            ].map((field, index) => (
              <Grid item xs={6} key={index}>
                <label>{field.label} :</label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",}}
                />
              </Grid>
            ))}

            {/* MOTOR Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 1 }}>
                MOTOR
              </Typography>
            </Grid>

            {/* BHP SINGLE OPERATION */}
            <Grid item xs={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 500, mt: 1 }}>
                BHP SINGLE OPERATION
              </Typography>
            </Grid>
            {[
              { label: "Full Flow", name: "pumpShutOffHeadDP2" },
              { label: "Balanced Position", name: "pumpShutOffHeadTP2" },
            ].map((field, index) => (
              <Grid item xs={6} key={index}>
                <label>{field.label} :</label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",}}
                />
              </Grid>
            ))}

            {/* BHP PARALLEL OPERATION */}
            <Grid item xs={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 500, mt: 1 }}>
                BHP PARALLEL OPERATION
              </Typography>
            </Grid>
            {[
              { label: "Full Flow", name: "pumpShutOffHeadDP2" },
              { label: "Balanced Position", name: "pumpShutOffHeadTP2" },
            ].map((field, index) => (
              <Grid item xs={6} key={index}>
                <label>{field.label} :</label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange1}
                  style={{width: "80%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",}}
                />
              </Grid>
            ))}
          </Grid>
        </form>
      </Container>
    </Grid>
  </Grid>
</Container>


<br></br><hr></hr>

<Container maxWidth="md" style={{ marginTop: "25px"}}>
  {/* <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
    Comments Section
  </Typography> */}
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
