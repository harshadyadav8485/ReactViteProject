import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import pump_report from "../assets/pump_report.pdf";
 

const PumpPerformance = () => {
  const [tabValue, setTabValue] = useState(2);
  const [showFlowMeter, setShowFlowMeter] = useState(false);
  const [showBHP, setShowBHP] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSubmit = () => {
    setOpenSnackbar(true);
    setTimeout(() => {
      // navigate("/sampleTestData");
    }, 2000);
  };
 
  // Data for form fields
  const pumpData = {
    projectName: "UBC School of Biomedical Engineering",
    pumpNumber: "P-06-07A",
  };

  return (
    <Box
                        sx={{
                            bgcolor: "#f2f4f5",
                            minHeight: "100vh",
                        py: 4,
                        pl: "70px",
                        pt: "30px",
                            pr: "24px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        }}
            >
                        <Typography
                        variant="h5" component="h1" fontWeight="bold" sx={{ mb: 4 }}
                    >
            Project Name : {pumpData.projectName}
          </Typography>

          <Typography variant="h5" fontWeight="bold" mb={3}>
            Pump Number{" "}
            <Typography component="span" variant="body1">
              &nbsp;&nbsp;: {pumpData.pumpNumber}
            </Typography>
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 1 }}>
              <Tab label="Actual Pump Data" />
              <Tab label="Test Data" />
              <Tab label="Pump Performance" />
            </Tabs>
            <Divider
              sx={{
                mb: 2,
                bgcolor: tabValue === 2 ? "#99caff" : "#d9d9d9",
                height: 3,
                width: tabValue === 2 ? 185 : 101,
                ml: tabValue === 2 ? 31 : 17,
              }}
            />
          </Box>

          <Paper
            elevation={4}
            sx={{
              borderRadius: "10px",
              p: 3,
              mb: 4,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <ExpandMoreIcon
                sx={{ position: "absolute", right: 25, top: 0 }}
              />

              <Typography variant="h6" fontWeight="bold" mb={3}>
                Pump
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={2.5}>
                  <Typography variant="body1" fontWeight="medium">
                    Pump Capacity :
                  </Typography>
                </Grid>
                <Grid item xs={2.5}>
                  <TextField
                    fullWidth
                     defaultValue="34.700"
                    size="small"
                    placeholder="Specified Value"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={2.5}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Actual Value"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={2.5}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#a4cffe",
                      color: "black",
                      textTransform: "none",
                      width : "50%"
                    }}
                  >
                    Convert
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={2.5}>
                  <Typography variant="body1" fontWeight="medium">
                    System Capacity :
                  </Typography>
                </Grid>
                <Grid item xs={2.5}>
                  <TextField
                    fullWidth
                    defaultValue="187.629"
                    size="small"
                    placeholder="Specified Value"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={2.5}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Actual Value"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={2.5}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#a4cffe",
                      color: "black",
                      textTransform: "none",
                       width : "50%"
                    }}
                  >
                    Convert
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={2.5}>
                  <Typography variant="body1" fontWeight="medium">
                    Pump Balancing <br />
                    Valve Position :
                  </Typography>
                </Grid>
                <Grid item xs={2.5}>
                  <TextField fullWidth size="small" variant="outlined" />
                </Grid>
                <Grid item xs={2.5}>
                  <Typography variant="body1" fontWeight="medium">
                    System Differential
                    <br />
                    Pressure Setpoint :
                  </Typography>
                </Grid>
                <Grid item xs={2.5}>
                  <TextField fullWidth size="small" variant="outlined" />
                </Grid>
              </Grid>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                Motor
              </Typography>

              <Typography variant="body1" fontWeight="semibold" mb={2}>
                BHP SINGLE OPERATION
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={2.5}>
                  <Typography variant="body1" fontWeight="medium">
                    System Capacity :
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Specified Value"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={2.5}>
                  <Typography variant="body1" fontWeight="medium">
                    Balanced position :
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Specified Value"
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Typography variant="body1" fontWeight="semibold" mt={3} mb={2}>
                BHP PARALLEL OPERATION
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={2.5}>
                  <Typography variant="body1" fontWeight="medium">
                    System Capacity :
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Specified Value"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={2.5}>
                  <Typography variant="body1" fontWeight="medium">
                    Balanced position :
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Specified Value"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={8}>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showFlowMeter}
                    onChange={(e) => setShowFlowMeter(e.target.checked)}
                  />
                }
                label="Flow meter"
              />
              </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showBHP}
                    onChange={(e) => setShowBHP(e.target.checked)}
                  />
                }
                label="Three Phase BHP Calculator"
              />
            </Grid>
</Grid>
            <Grid container spacing={3} sx={{ mt: 1 }}>
            {showFlowMeter && (
               <Grid item xs={showFlowMeter && !showBHP ? 12 : 6}>
                <Paper elevation={4} sx={{ p: 3, borderRadius: "10px" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Typography variant="body2" fontWeight="medium">
                        Type :
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField fullWidth size="small" />
                    </Grid>

                    <Grid item xs={3}>
                      <Typography variant="body2" fontWeight="medium">
                        Size :
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField fullWidth size="small" />
                    </Grid>

                    <Grid item xs={3}>
                      <Typography variant="body2" fontWeight="medium">
                        Signal <br />
                        (FT) :
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField fullWidth size="small" />
                    </Grid>

                    <Grid item xs={3}>
                      <Typography variant="body2" fontWeight="medium">
                        Measured <br />
                        (GPM) :
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField fullWidth size="small" />
                    </Grid>

                    <Grid item xs={3}>
                      <Typography variant="body2" fontWeight="medium">
                        Position :
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            )}

{showBHP && (
              <Grid item xs={showBHP && !showFlowMeter ? 12 : 6}>
                <Paper elevation={4} sx={{ p: 3, borderRadius: "10px" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Typography variant="body2" fontWeight="medium">
                        Efficiency :
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField fullWidth size="small" />
                    </Grid>

                    <Grid item xs={3}>
                      <Typography variant="body2" fontWeight="medium">
                      Measured
                        <br />
                        Amperage :
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField fullWidth size="small" />
                    </Grid>

                    <Grid item xs={3}>
                      <Typography variant="body2" fontWeight="medium">
                      Measured
                        <br />
                        Voltage :
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField fullWidth size="small" />
                    </Grid>

                    <Grid item xs={3}>
                      <Typography variant="body2" fontWeight="medium">
                        Power <br />
                        Factor :
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField fullWidth size="small" />
                    </Grid>

                    <Grid item xs={12}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={2}>
                          <Typography variant="body2" fontWeight="bold">
                            EFM
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="medium">
                            BHP :
                          </Typography>
                        </Grid>
                        <Grid item xs={2.5}>
                          <TextField fullWidth size="small" />
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body2" fontWeight="medium">
                            BKW :
                          </Typography>
                        </Grid>
                        <Grid item xs={2.5}>
                          <TextField fullWidth size="small" />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
)}
            </Grid>
          </Paper>

          <Box sx={{ mb: 5 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Comments :
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              placeholder="Enter your comments"
              variant="outlined"
              sx={{
                bgcolor: "#f2f4f5",
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                },
              }}
            />
            <Typography variant="body1" color="text.secondary" mb={1}>
              *Represents[Your meaning 1]
            </Typography>
            <Typography variant="body1" color="text.secondary">
              **Represents[Your meaning 2]
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            sx={{ mt: 4 }}
          >
            <Button
              variant="outlined"
              sx={{
                bgcolor: "#f2f4f5",
                borderColor: "black",
                color: "black",
                borderRadius: "10px",
                px: 3,
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                bgcolor: "#99caff",
                color: "black",
                borderRadius: "10px",
                px: 3,
              }}
            >
               <a
                    href={pump_report}
                    download="pump_report"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Submit & Generate Report
                  </a>
            </Button>
          </Stack>
        </Box>
   
  );
};

export default PumpPerformance;

