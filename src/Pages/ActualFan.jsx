import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  FormControlLabel,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Grid,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ActualFan = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [selectedFan, setSelectedFan] = useState("ERV-1");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showGrille, setShowGrille] = useState(false);
  const [showOutdoorAir, setShowOutdoorAir] = useState(false);
  const [showDuctRound, setShowDuctRound] = useState(false);
  const [showDuctSquare, setShowDuctSquare] = useState(false);
  const [showHoodOutlet, setShowHoodOutlet] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubmit = () => {
    setOpenSnackbar(true);
    setTimeout(() => {
      // navigate("/sampleTestData");
    }, 2000);
  };

  const fanSpecifications = [
    {
      field: "Make",
      specifiedValue: "SWEGOAN",
      actualValue: "MISTUBISHI ELECTRIC",
    },
    {
      field: "Model",
      specifiedValue: "R15-H SMART",
      actualValue: "LGH-F470RVX2-E",
    },
    {
      field: "Supply Fan Capacity",
      specifiedValue: "550 L/s",
      actualValue: "387 L/s",
    },
    {
      field: "Supply Outlet Capacity",
      specifiedValue: "552 L/s",
      actualValue: "387 L/s",
    },
    {
      field: "Exhaust Fan Capacity",
      specifiedValue: "550 L/s",
      actualValue: "309 L/s",
    },
    {
      field: "Exhaust Outlet Capacity",
      specifiedValue: "424 L/s",
      actualValue: "309 L/s",
    },
    { field: "Motor Size", specifiedValue: "", actualValue: "" },
    { field: "Supply", specifiedValue: "", actualValue: "0.37HP" },
    { field: "Exhaust", specifiedValue: "", actualValue: "0.42HP" },
    { field: "Volts/Phase", specifiedValue: "115 L/s", actualValue: "575/3" },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#f2f4f5",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "#f2f4f5",
          minHeight: "100vh",
          width: "100vw",
          // py: 4,
          pl: "70px",
          pt: "12px",
          pr: "24px",
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
          Project Name : UBC School of Biomedical Engineering
        </Typography>

        {/* <Box display="flex" alignItems="center" > */}
        <Typography variant="h6" fontWeight="semibold">
          System : ERV-1
        </Typography>
        {/* <Typography variant="body1" ml={2}>
            {selectedFan}
          </Typography>
          <KeyboardArrowDownIcon
            fontSize="small"
            sx={{ ml: 1, cursor: "pointer" }}
            onClick={handleClick}
          />
          </Box>
          
          <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClose()}
        >
          <MenuItem onClick={() => handleClose("ERV-1")}>ERV-1</MenuItem>
          <MenuItem onClick={() => handleClose("FC-1A-1")}>P-06-07B</MenuItem>
          <MenuItem onClick={() => handleClose("P-06-07C")}>P-06-07C</MenuItem>
        </Menu> */}

        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{ mb: 2 }}
          TabIndicatorProps={{ sx: { bgcolor: "#99caff", height: 3 } }}
        >
          <Tab label="Actual Fan Data" sx={{ fontWeight: 500 }} />
          <Tab label="Fan Performance" sx={{ fontWeight: 500 }} />
        </Tabs>

        {tabValue === 0 && (
          <>
            <TableContainer
              component={Paper}
              sx={{
                mb: 4,
                borderRadius: "10px 10px 0 0",
                // overflow: "hidden"
              }}
            >
              <Table sx={{ tableLayout: "fixed", width: "100%" }}>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#99caff" }}>
                    <TableCell sx={{ px: 3, py: 1 }}>
                      <Typography fontWeight="bold">Fields</Typography>
                    </TableCell>
                    <TableCell sx={{ py: 1 }}>
                      <Typography fontWeight="bold">Specified Value</Typography>
                    </TableCell>
                    <TableCell sx={{ py: 1 }}>
                      <Typography fontWeight="bold">Actual Value</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fanSpecifications.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        borderBottom: "1px solid #cbcbcb",
                        "& td": { py: 1 },
                      }}
                    >
                      <TableCell sx={{ px: 3 }}>
                        <Typography fontWeight="medium" fontSize="0.9rem">
                          {row.field}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography fontWeight="medium" fontSize="0.9rem">
                          {row.specifiedValue}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          variant="outlined"
                          size="small"
                          value={row.actualValue}
                          sx={{
                            bgcolor: "white",
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "5px",
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#9d9d9d",
                              },
                              fontSize: "0.9rem",
                            },
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="body1" fontWeight="bold" mb={1}>
              Comments :
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={5}
              placeholder="Enter your comments..."
              sx={{
                mb: 2,
                backgroundColor: "white",
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  "& fieldset": {
                    borderColor: "#9d9d9d",
                  },
                },
              }}
            />
            <Typography variant="body1" color="text.secondary" mb={1}>
              *Represents[Your meaning 1]
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={2}>
              **Represents[Your meaning 2]
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="flex-end" mb={2}>
              <Button
                variant="outlined"
                onClick={() => navigate("/project2")}
                sx={{
                  backgroundColor: "#f2f4f5",
                  borderRadius: "10px",
                  borderColor: "black",
                  color: "black",
                  textTransform: "none",
                  minWidth: "91px",
                  height: "42px",
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#99caff",
                  borderRadius: "10px",
                  color: "black",
                  textTransform: "none",
                  minWidth: "101px",
                  height: "42px",
                  "&:hover": {
                    backgroundColor: "#7bb8ff",
                  },
                }}
              >
                Submit
              </Button>
            </Stack>
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

        {tabValue === 1 && (
          <Box>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                mb: 2,
                borderRadius: "10px",
              }}
            >
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                Fan
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={1.2}>
                  <Typography variant="body1" fontWeight="medium">
                    Supply Fan
                    <br />
                    R.P.M :
                  </Typography>
                </Grid>
                <Grid item xs={2.5}>
                  <TextField fullWidth size="small" variant="outlined" />
                </Grid>
                <Grid item xs={1.2}>
                  <Typography variant="body1" fontWeight="medium">
                    Exhaust Fan
                    <br />
                    R.P.M :
                  </Typography>
                </Grid>
                <Grid item xs={2.5}>
                  <TextField fullWidth size="small" variant="outlined" />
                </Grid>
              </Grid>
              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                Motor
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={1.2}>
                  <Typography variant="body1" fontWeight="medium">
                    Supply <br />
                    Amperage :
                  </Typography>
                </Grid>
                <Grid item xs={2.5}>
                  <TextField
                    fullWidth
                    defaultValue="4.1"
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
              </Grid>

              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={1.2}>
                  <Typography variant="body1" fontWeight="medium">
                    Exhaust
                    <br />
                    Amperage :
                  </Typography>
                </Grid>
                <Grid item xs={2.5}>
                  <TextField
                    fullWidth
                    defaultValue="4.1"
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
              </Grid>

              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={1.2}>
                  <Typography variant="body1" fontWeight="medium">
                    Supply
                    <br />
                    R.P.M :
                  </Typography>
                </Grid>
                <Grid item xs={2.5}>
                  <TextField
                    fullWidth
                    defaultValue="Not Listed"
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
              </Grid>

              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={1.2}>
                  <Typography variant="body1" fontWeight="medium">
                    Exhaust
                    <br />
                    R.P.M :
                  </Typography>
                </Grid>
                <Grid item xs={2.5}>
                  <TextField
                    fullWidth
                    defaultValue="Not Listed"
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
              </Grid>

              {/* <Grid container spacing={3} sx={{ mt: 1 }}>
                              <Grid item xs={1.5}>
                                <Typography variant="body1" fontWeight="medium">
                                Supply<br />
                                R.P.M :
                                </Typography>
                              </Grid>
                              <Grid item xs={2.5}>
                                <TextField fullWidth size="small" variant="outlined" />
                              </Grid>
                              <Grid item xs={1.5}>
                                <Typography variant="body1" fontWeight="medium">
                                Exhaust<br />
                                R.P.M :
                                </Typography>
                              </Grid>
                              <Grid item xs={2.5}>
                                <TextField fullWidth size="small" variant="outlined" />
                              </Grid>
                            </Grid> */}

              <Divider sx={{ my: 3 }} />

              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                Supply
              </Typography>
              <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Suction Static {"\n"}Pressure(SSP):
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Discharge Static {"\n"} Pressure(DSP) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Total Static {"\n"} Pressure(TSP):
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                Exhaust
              </Typography>
              <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Suction Static {"\n"} Pressure(DSP) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Discharge Static {"\n"} Pressure(DSP) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Total Static {"\n"} Pressure(TSP):
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>
              <Divider sx={{ my: 3 }} />

              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                SUPPLY FAN DRIVE INFORMATION
              </Typography>
              <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Motor Sheave :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Position :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Fan Sheave :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>
              <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Centres :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Belt Quality /{"\n"} Size :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                EXHAUST FAN DRIVE INFORMATION
              </Typography>
              <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Motor Sheave :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Position :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Fan Sheave :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>
              <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Centres :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Belt Quality / {"\n"}Size :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>
              <Divider sx={{ my: 3 }} />

              <Grid container spacing={2}>
                {/* Grille */}
                <Grid item xs={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showGrille}
                        onChange={(e) => setShowGrille(e.target.checked)}
                      />
                    }
                    label="Grille"
                  />
                  {showGrille && (
                    <Paper
                      elevation={4}
                      sx={{ p: 3, borderRadius: "10px", mt: 2, minHeight: 317 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={3}>
                              <Typography variant="body2" fontWeight="bold">
                                Grille Size :
                              </Typography>
                            </Grid>
                            <Grid item xs="auto">
                              <Typography variant="body2" fontWeight="medium">
                                Length :
                              </Typography>
                            </Grid>
                            <Grid item>
                              <TextField size="small" sx={{ width: 40 }} />
                            </Grid>
                            <Grid item xs="auto">
                              <Typography variant="body2" fontWeight="medium">
                                Height :
                              </Typography>
                            </Grid>
                            <Grid item>
                              <TextField size="small" sx={{ width: 40 }} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="medium">
                            Free
                            <br />
                            Area % :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="medium">
                            Factor :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="medium">
                            Measured <br />
                            Velocity
                            <br />
                            (FPM) :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="medium">
                            Measured <br />
                            Volume <br />
                            (L/s) :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>
                      </Grid>
                    </Paper>
                  )}
                </Grid>

                {/* Outdoor Air */}
                <Grid item xs={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showOutdoorAir}
                        onChange={(e) => setShowOutdoorAir(e.target.checked)}
                      />
                    }
                    label="OA Calculator"
                  />
                  {showOutdoorAir && (
                    <Paper
                      elevation={4}
                      sx={{ p: 3, borderRadius: "10px", mt: 2 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Grid container spacing={1} alignItems="center">
                            <Grid item xs={4}>
                              <Typography variant="body2" fontWeight="bold">
                                Unit Volume
                                <br />
                                Meas. :
                              </Typography>
                            </Grid>
                            <Grid item xs="auto">
                              <Typography variant="body2" fontWeight="medium">
                                Length :
                              </Typography>
                            </Grid>
                            <Grid item xs={1.8}>
                              <TextField fullWidth size="small" />
                            </Grid>
                            <Grid item xs="auto">
                              <Typography variant="body2" fontWeight="medium">
                                Height :
                              </Typography>
                            </Grid>
                            <Grid item xs={1.8}>
                              <TextField fullWidth size="small" />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" fontWeight="medium">
                            100% OA <br />
                            Louver Velocity :
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={6}>
                          <Typography variant="body2" fontWeight="medium">
                            Factor :
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={6}>
                          <Typography variant="body2" fontWeight="medium">
                            Req. OA volume/velocity:
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={6}>
                          <Typography variant="body2" fontWeight="medium">
                            Measured <br />
                            Velocity(FPM) :
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={6}>
                          <Typography variant="body2" fontWeight="medium">
                            Measured <br />
                            Volume(L/s) :
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField fullWidth size="small" />
                        </Grid>
                      </Grid>
                    </Paper>
                  )}
                </Grid>

                {/* Duct Round */}
                <Grid item xs={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showDuctRound}
                        onChange={(e) => setShowDuctRound(e.target.checked)}
                      />
                    }
                    label="Duct Traverse Round"
                  />
                  {showDuctRound && (
                    <Paper
                      elevation={4}
                      sx={{ p: 3, borderRadius: "10px", mt: 2, minHeight: 317 }}
                    >
                      <Grid container spacing={2}>
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
                            Factor :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="medium">
                            Measured <br />
                            Velocity
                            <br />
                            (FPM) :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="medium">
                            Measured <br />
                            Volume
                            <br />
                            (L/s) :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>
                      </Grid>
                    </Paper>
                  )}
                </Grid>
                {/* Duct Square */}
                <Grid item xs={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showDuctSquare}
                        onChange={(e) => setShowDuctSquare(e.target.checked)}
                      />
                    }
                    label="Duct Traverse Square"
                  />
                  {showDuctSquare && (
                    <Paper
                      elevation={4}
                      sx={{ p: 3, borderRadius: "10px", mt: 2 }}
                    >
                      <Grid container spacing={2}>
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
                            Factor :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="medium">
                            Measured <br />
                            Velocity
                            <br />
                            (FPM) :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="medium">
                            Measured <br />
                            Volume
                            <br />
                            (L/s) :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>
                      </Grid>
                    </Paper>
                  )}
                </Grid>
                {/* Hood Outlet */}
                <Grid item xs={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showHoodOutlet}
                        onChange={(e) => setShowHoodOutlet(e.target.checked)}
                      />
                    }
                    label="Measured With Hood Outlet"
                  />
                  {showHoodOutlet && (
                    <Paper
                      elevation={4}
                      sx={{ p: 3, borderRadius: "10px", mt: 2, minHeight: 243 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="medium">
                            Factor :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="medium">
                            Hood Reading :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>

                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="medium">
                            Measured <br />
                            Volume <br />
                            (L/s) :
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <TextField fullWidth size="small" />
                        </Grid>
                      </Grid>
                    </Paper>
                  )}
                </Grid>
              </Grid>
            </Paper>

            <Typography variant="body1" fontWeight="bold" mb={1}>
              Comments :
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={5}
              placeholder="Enter your comments..."
              sx={{
                mb: 2,
                backgroundColor: "white",
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  "& fieldset": {
                    borderColor: "#9d9d9d",
                  },
                },
              }}
            />

            <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
              *Represents[Your meaning 1]
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              **Represents[Your meaning 2]
            </Typography>

            <Stack direction="row" spacing={1} justifyContent="flex-end" mb={2}>
              <Button
                variant="outlined"
                onClick={() => navigate("/project2")}
                sx={{
                  borderRadius: "10px",
                  border: "1px solid black",
                  color: "black",
                  px: 3,
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#99caff",
                  borderRadius: "10px",
                  color: "black",
                  textTransform: "none",
                  minWidth: "101px",
                  height: "42px",
                  "&:hover": {
                    backgroundColor: "#7bb8ff",
                  },
                }}
              >
                Submit & Generate Report
                {/* <a
                                            href={fan_report}
                                            download="fan_report"
                                            style={{ color: "inherit", textDecoration: "none" }}
                                          >
                                            Submit & Generate Report
                                          </a> */}
              </Button>
            </Stack>
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
        )}
      </Box>
    </Box>
  );
};

export default ActualFan;
