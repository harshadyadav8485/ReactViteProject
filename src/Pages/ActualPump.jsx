import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Tabs,
  Menu,
  MenuItem,
  TextField,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import pump_report from "../assets/pump_report.pdf";

const pumpData = [
  { field: "Make", specifiedValue: "BELL & GOSSETT", actualValue: "TACO" },
  {
    field: "Model",
    specifiedValue: "e-805C 5x5x11",
    actualValue: "K56011D-4-PM",
  },
  { field: "Impeller Size", specifiedValue: "", actualValue: "2.5" },
  { field: "Manufacturer", specifiedValue: "", actualValue: "" },
  { field: "Motor Size", specifiedValue: "20 HP", actualValue: "25 HP" },
  { field: "Volts/Phase", specifiedValue: "575/3", actualValue: "575/3" },
  { field: "Amperage", specifiedValue: "23,60", actualValue: "As Below" },
  { field: "R.P.M", specifiedValue: "", actualValue: "" },
];

const ActualPump = () => {
  const [tabValue, setTabValue] = useState(0);
  const [comments, setComments] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPump, setSelectedPump] = useState("P-06-07A");
  const [showFlowMeter, setShowFlowMeter] = useState(false);
  const [showBHP, setShowBHP] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (pumpName) => {
    if (pumpName) {
      setSelectedPump(pumpName);
    }
    setAnchorEl(null);
  };

  const handleSubmit = () => {
    setOpenSnackbar(true);
    setTimeout(() => {
      // navigate("/sampleTestData");
    }, 2000);
  };

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
          py: 4,
          pl: "70px",
          pt: "30px",
          pr: "24px",
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Project Name : UBC School of Biomedical Engineering
        </Typography>

        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="semibold">
            Pump Number :
          </Typography>
          <Typography variant="body1" ml={2}>
            {selectedPump}
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
          <MenuItem onClick={() => handleClose("P-06-07B")}>P-06-07A</MenuItem>
          <MenuItem onClick={() => handleClose("P-06-07B")}>P-06-07B</MenuItem>
          <MenuItem onClick={() => handleClose("P-06-07C")}>P-06-07C</MenuItem>
        </Menu>

        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{ mb: 2 }}
          TabIndicatorProps={{ sx: { bgcolor: "#99caff", height: 3 } }}
        >
          <Tab label="Actual Pump Data" sx={{ fontWeight: 500 }} />
          <Tab label="Test Data" sx={{ fontWeight: 500 }} />
          <Tab label="Pump Performance" sx={{ fontWeight: 500 }} />
        </Tabs>

        {tabValue === 0 && (
          <>
            <TableContainer
              component={Paper}
              sx={{ mb: 2, borderRadius: "10px 10px 0 0" }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#99caff" }}>
                    <TableCell sx={{ px: 3 }}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography fontWeight="bold">Fields</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography fontWeight="bold">
                          Specified Value
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography fontWeight="bold">Actual Value</Typography>
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pumpData.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ borderBottom: "1px solid #cbcbcb" }}
                    >
                      <TableCell sx={{ py: 2 }}>
                        <Typography fontWeight="medium">{row.field}</Typography>
                      </TableCell>
                      <TableCell sx={{ py: 2 }}>
                        <Typography fontWeight="medium">
                          {row.specifiedValue}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ py: 2 }}>
                        <TextField
                          variant="outlined"
                          size="small"
                          value={row.actualValue}
                          sx={{
                            width: "200px",
                            bgcolor: "white",
                            width: "200px", // 👉 Set the width you want
                            bgcolor: "white", // 👉 Set background color to white
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "5px",
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#9d9d9d",
                              },
                            },
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="h6" fontWeight="bold" mb={2}>
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
            <Stack direction="row" spacing={1} justifyContent="flex-end">
              <Button
                variant="outlined"
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
          </>
        )}
        {tabValue === 1 && (
          <Box>
            <Paper elevation={4} sx={{ p: 3, borderRadius: "10px", mb: 5 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                SINGLE OPERATION FULL FLOW
              </Typography>

              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                PUMP OPERATING HEAD (KPA)
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Suction{"\n"}Pressure (SP) :
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
                    Discharge{"\n"}Pressure (DP) :
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
                    Total{"\n"}Pressure (TP) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                PUMP SHUT OFF HEAD(KPA)
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Suction{"\n"}Pressure (SP) :
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
                    Discharge{"\n"}Pressure (DP) :
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
                    Total{"\n"}Pressure (TP) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography sx={{ mr: 1, minWidth: "100px" }}>
                    Pump Speed :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography sx={{ mr: 1, minWidth: "100px" }}>
                    Motor Amps :
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
                    Specified{"\n"}Head (KPA) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              {/* Comments */}
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
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

              <Typography color="text.secondary" sx={{ mb: 0.5 }}>
                *Represents[Your meaning 1]
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                **Represents[Your meaning 2]
              </Typography>
              <Box display="flex" justifyContent="flex-end" gap={2}>
                <Button
                  variant="outlined"
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
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#99caff",
                    color: "black",
                    px: 3,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Paper>
            <Paper elevation={4} sx={{ p: 3, borderRadius: "10px", mb: 5 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                SINGLE OPERATION BALANCED FLOW
              </Typography>

              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                PUMP OPERATING HEAD (KPA)
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Suction{"\n"}Pressure (SP) :
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
                    Discharge{"\n"}Pressure (DP) :
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
                    Total{"\n"}Pressure (TP) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                PUMP SHUT OFF HEAD(KPA)
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Suction{"\n"}Pressure (SP) :
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
                    Discharge{"\n"}Pressure (DP) :
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
                    Total{"\n"}Pressure (TP) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography sx={{ mr: 1, minWidth: "100px" }}>
                    Pump Speed :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography sx={{ mr: 1, minWidth: "100px" }}>
                    Motor Amps :
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
                    Specified{"\n"}Head (KPA) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              {/* Comments */}
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
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

              <Typography color="text.secondary" sx={{ mb: 0.5 }}>
                *Represents[Your meaning 1]
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                **Represents[Your meaning 2]
              </Typography>
              <Box display="flex" justifyContent="flex-end" gap={2}>
                <Button
                  variant="outlined"
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
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#99caff",
                    color: "black",
                    px: 3,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Paper>
            <Paper elevation={4} sx={{ p: 3, borderRadius: "10px", mb: 5 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                PARALLEL OPERATION FULL FLOW
              </Typography>

              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                PUMP OPERATING HEAD (KPA)
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Suction{"\n"}Pressure (SP) :
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
                    Discharge{"\n"}Pressure (DP) :
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
                    Total{"\n"}Pressure (TP) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                PUMP SHUT OFF HEAD(KPA)
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Suction{"\n"}Pressure (SP) :
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
                    Discharge{"\n"}Pressure (DP) :
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
                    Total{"\n"}Pressure (TP) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography sx={{ mr: 1, minWidth: "100px" }}>
                    Pump Speed :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography sx={{ mr: 1, minWidth: "100px" }}>
                    Motor Amps :
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
                    Specified{"\n"}Head (KPA) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              {/* Comments */}
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
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

              <Typography color="text.secondary" sx={{ mb: 0.5 }}>
                *Represents[Your meaning 1]
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                **Represents[Your meaning 2]
              </Typography>
              <Box display="flex" justifyContent="flex-end" gap={2}>
                <Button
                  variant="outlined"
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
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#99caff",
                    color: "black",
                    px: 3,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Paper>
            <Paper elevation={4} sx={{ p: 3, borderRadius: "10px", mb: 5 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                SINGLE OPERATION BALANCED FLOW
              </Typography>

              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                PUMP OPERATING HEAD (KPA)
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Suction{"\n"}Pressure (SP) :
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
                    Discharge{"\n"}Pressure (DP) :
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
                    Total{"\n"}Pressure (TP) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                PUMP SHUT OFF HEAD(KPA)
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography
                    sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                  >
                    Suction{"\n"}Pressure (SP) :
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
                    Discharge{"\n"}Pressure (DP) :
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
                    Total{"\n"}Pressure (TP) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography sx={{ mr: 1, minWidth: "100px" }}>
                    Pump Speed :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography sx={{ mr: 1, minWidth: "100px" }}>
                    Motor Amps :
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
                    Specified{"\n"}Head (KPA) :
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "200px", backgroundColor: "white" }}
                  />
                </Box>
              </Stack>

              {/* Comments */}
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
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

              <Typography color="text.secondary" sx={{ mb: 0.5 }}>
                *Represents[Your meaning 1]
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                **Represents[Your meaning 2]
              </Typography>
              <Box display="flex" justifyContent="flex-end" gap={2}>
                <Button
                  variant="outlined"
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
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#99caff",
                    color: "black",
                    px: 3,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Paper>
          </Box>
        )}

        {tabValue === 2 && (
          <Box>
            <Paper
              elevation={4}
              sx={{
                borderRadius: "10px",
                p: 3,
                mb: 4,
              }}
            >
              <Box sx={{ position: "relative" }}>
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
                        width: "50%",
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
                        width: "50%",
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
                    <TextField fullWidth size="small" variant="outlined" />
                  </Grid>
                  <Grid item xs={2.5}>
                    <Typography variant="body1" fontWeight="medium">
                      Balanced position :
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField fullWidth size="small" variant="outlined" />
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
                    <TextField fullWidth size="small" variant="outlined" />
                  </Grid>
                  <Grid item xs={2.5}>
                    <Typography variant="body1" fontWeight="medium">
                      Balanced position :
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField fullWidth size="small" variant="outlined" />
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
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
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
        )}
      </Box>
    </Box>
  );
};

export default ActualPump;
