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
  Radio,
  RadioGroup,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import React, { useState, useRef, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import pump_report from "../assets/pump_report.pdf";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { useOutletContext } from "react-router-dom";

const ActualPump = () => {
  const [tabValue, setTabValue] = useState(0);
  const [comments, setComments] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPump, setSelectedPump] = useState("P-06-07A");
  const [showFlowMeter, setShowFlowMeter] = useState(false);
  const [showBHP, setShowBHP] = useState(false);
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [pumpData, setPumpData] = useState([
    { field: "Make", specifiedValue: "BELL & GOSSETT", actualValue: "TACO" },
    {
      field: "Model",
      specifiedValue: "e-805C 5x5x11",
      actualValue: "K56011D-4-PM",
    },
    { field: "Impeller Size", specifiedValue: "", actualValue: "9.5''" },
    { field: "Manufacturer", specifiedValue: "-", actualValue: "WEG" },
    { field: "Motor Size", specifiedValue: "20 HP", actualValue: "25 HP" },
    { field: "Volts/Phase", specifiedValue: "575/3", actualValue: "575/3" },
    { field: "Amperage", specifiedValue: "23.60", actualValue: "As Below" },
    { field: "R.P.M", specifiedValue: "", actualValue: "-" },
  ]);

  const scrollableRef = useRef(null);
  const { setParentScroll } = useOutletContext();

  useEffect(() => {
    const el = scrollableRef.current;
    if (el) {
      requestAnimationFrame(() => {
        const isOverflowing = el.scrollHeight > el.clientHeight;
        setParentScroll(!isOverflowing);
      });
    }
  }, [setParentScroll]);

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

  const handleFirstSubmit = () => {
    setOpenSnackbar(true);

    setTabValue(1);
  };
  const handleSecondSubmit = () => {
    setOpenSnackbar(true);

    setTabValue(2);
  };

  const handleSubmit = () => {
    setOpenSnackbar(true);
  };

  const [selectedForm, setSelectedForm] = useState("form1"); // Default selected form

  const handleRadioChange = (event) => {
    setSelectedForm(event.target.value); // Update the selected form based on radio button
  };

  const renderForm = () => {
    switch (selectedForm) {
      case "form1":
        return (
          <Paper elevation={4} sx={{ p: 3, borderRadius: "10px", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              SINGLE OPERATION FULL FLOW
            </Typography>

            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              PUMP OPERATING HEAD (KPA)
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Suction{"\n"}Pressure (SP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="60"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Discharge{"\n"}Pressure (DP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="218"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Total{"\n"}Pressure (TP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="158"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              PUMP SHUT OFF HEAD(KPA)
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Suction{"\n"}Pressure (SP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="**"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Discharge{"\n"}Pressure (DP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="**"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Total{"\n"}Pressure (TP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="-"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography sx={{ mr: 1, minWidth: "100px" }}>
                  Pump Speed <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="60Hz"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography sx={{ mr: 1, minWidth: "100px" }}>
                  Motor Amps <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="19"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Specified{"\n"}Head (KPA){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="254"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            {/* Comments */}
            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              Comments <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              multiline
              defaultValue="** No CBV installed for measuring the flow accurately"
              rows={3}
              placeholder="Enter your comments..."
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                  "& fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused": {
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                  },
                },
              }}
            />

            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button
                variant="outlined"
                onClick={() => navigate("/project2")}
                sx={{
                  borderRadius: "10px",
                  bgcolor: "#f2f4f5",
                  px: 3,
                  color: "black",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  border: "none", // 👈 override outlined variant's default border
                  "&:hover": {
                    bgcolor: "#e5e7e8",
                    border: "none", // 👈 make sure hover state also has no border
                  },
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  borderRadius: "10px",
                  bgcolor: "#99CAFF",
                  color: "black",
                  px: 3,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow added here
                  "&:hover": {
                    bgcolor: "#7bb8ff",
                  },
                }}
              >
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
          </Paper>
        );
      case "form2":
        return (
          <Paper elevation={4} sx={{ p: 3, borderRadius: "10px", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              SINGLE OPERATION BALANCED FLOW
            </Typography>

            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              PUMP OPERATING HEAD (KPA)
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Suction{"\n"}Pressure (SP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="72"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Discharge{"\n"}Pressure (DP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="167"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Total{"\n"}Pressure (TP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="95"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              PUMP SHUT OFF HEAD(KPA)
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Suction{"\n"}Pressure (SP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="**"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Discharge{"\n"}Pressure (DP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="**"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Total{"\n"}Pressure (TP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="-"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography sx={{ mr: 1, minWidth: "100px" }}>
                  Pump Speed <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="90Hz"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography sx={{ mr: 1, minWidth: "100px" }}>
                  Motor Amps <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="20.70"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Specified{"\n"}Head (KPA){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="254"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            {/* Comments */}
            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              Comments :
            </Typography>
            <TextField
              fullWidth
              multiline
              defaultValue="** No CBV installed for measuring the flow accurately"
              rows={3}
              placeholder="Enter your comments..."
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                  "& fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused": {
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                  },
                },
              }}
            />

            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button
                variant="outlined"
                onClick={() => navigate("/project2")}
                sx={{
                  borderRadius: "10px",
                  bgcolor: "#f2f4f5",
                  px: 3,
                  color: "black",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  border: "none", // 👈 override outlined variant's default border
                  "&:hover": {
                    bgcolor: "#e5e7e8",
                    border: "none", // 👈 make sure hover state also has no border
                  },
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  borderRadius: "10px",
                  bgcolor: "#99CAFF",
                  color: "black",
                  px: 3,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow added here
                  "&:hover": {
                    bgcolor: "#7bb8ff",
                  },
                }}
              >
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
          </Paper>
        );
      case "form3":
        return (
          <Paper elevation={4} sx={{ p: 3, borderRadius: "10px", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              PARALLEL OPERATION FULL FLOW
            </Typography>

            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              PUMP OPERATING HEAD (KPA)
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Suction{"\n"}Pressure (SP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="48"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Discharge{"\n"}Pressure (DP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="239"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Total{"\n"}Pressure (TP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="191"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              PUMP SHUT OFF HEAD(KPA)
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Suction{"\n"}Pressure (SP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="**"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Discharge{"\n"}Pressure (DP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="**"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Total{"\n"}Pressure (TP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="-"
                  size="small"
                  sx={{
                    width: "200px",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography sx={{ mr: 1, minWidth: "100px" }}>
                  Pump Speed <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="60Hz"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography sx={{ mr: 1, minWidth: "100px" }}>
                  Motor Amps <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="19"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Specified{"\n"}Head (KPA){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue="254"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            {/* Comments */}
            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              Comments :
            </Typography>
            <TextField
              fullWidth
              multiline
              defaultValue="** No CBV installed for measuring the flow accurately"
              rows={3}
              placeholder="Enter your comments..."
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                  "& fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused": {
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                  },
                },
              }}
            />

            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button
                variant="outlined"
                onClick={() => navigate("/project2")}
                sx={{
                  borderRadius: "10px",
                  bgcolor: "#f2f4f5",
                  px: 3,
                  color: "black",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  border: "none", // 👈 override outlined variant's default border
                  "&:hover": {
                    bgcolor: "#e5e7e8",
                    border: "none", // 👈 make sure hover state also has no border
                  },
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  borderRadius: "10px",
                  bgcolor: "#99CAFF",
                  color: "black",
                  px: 3,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow added here
                  "&:hover": {
                    bgcolor: "#7bb8ff",
                  },
                }}
              >
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
          </Paper>
        );
      case "form4":
        return (
          <Paper elevation={4} sx={{ p: 3, borderRadius: "10px", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              SINGLE OPERATION BALANCED FLOW
            </Typography>

            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              PUMP OPERATING HEAD (KPA)
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Suction{"\n"}Pressure (SP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  defaultValue=""
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Discharge{"\n"}Pressure (DP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Total{"\n"}Pressure (TP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              PUMP SHUT OFF HEAD(KPA)
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Suction{"\n"}Pressure (SP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Discharge{"\n"}Pressure (DP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Total{"\n"}Pressure (TP){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography sx={{ mr: 1, minWidth: "100px" }}>
                  Pump Speed <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography sx={{ mr: 1, minWidth: "100px" }}>
                  Motor Amps <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Typography
                  sx={{ mr: 1, whiteSpace: "pre-line", minWidth: "100px" }}
                >
                  Specified{"\n"}Head (KPA){" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "200px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            {/* Comments */}
            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              Comments :
            </Typography>
            <TextField
              fullWidth
              multiline
              // defaultValue= "** No CBV installed for measuring the flow accurately"
              rows={3}
              placeholder="Enter your comments..."
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                  "& fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused": {
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                  },
                },
              }}
            />

            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button
                variant="outlined"
                onClick={() => navigate("/project2")}
                sx={{
                  borderRadius: "10px",
                  bgcolor: "#f2f4f5",
                  px: 3,
                  color: "black",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  border: "none", // 👈 override outlined variant's default border
                  "&:hover": {
                    bgcolor: "#e5e7e8",
                    border: "none", // 👈 make sure hover state also has no border
                  },
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleSecondSubmit}
                sx={{
                  borderRadius: "10px",
                  bgcolor: "#99CAFF",
                  color: "black",
                  px: 3,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow added here
                  "&:hover": {
                    bgcolor: "#7bb8ff",
                  },
                }}
              >
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
          </Paper>
        );
      // default:
      //   return null;
    }
  };

  return (
    <Box
      ref={scrollableRef}
      sx={{
        bgcolor: "#f2f4f5",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          bgcolor: "#f2f4f5",
          // minHeight: "100vh",
          width: "100vw",
          pl: "70px",
          mt: "12px",
          pr: "24px",
          boxSizing: "border-box",
          overflow: "auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            bgcolor: "#f2f4f5",
            width: "100%",
            height: "150px",
            position: "sticky",
            top: 0,
            right: 0,
            paddingTop: 0,
            paddingBottom: 0,
            zIndex: 1,
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            fontWeight="bold"
            sx={{ mb: 1 }}
          >
            Project Name : UBC School of Biomedical Engineering
          </Typography>

          <Box display="flex" alignItems="center">
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
            <MenuItem onClick={() => handleClose("P-06-07A")}>
              P-06-07A
            </MenuItem>
            <MenuItem onClick={() => handleClose("P-06-07B")}>
              P-06-07B
            </MenuItem>
            <MenuItem onClick={() => handleClose("P-06-07C")}>
              P-06-07C
            </MenuItem>
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
        </Box>

        <Box>
          {tabValue === 0 && (
            <>
              <TableContainer
                component={Paper}
                sx={{ mb: 2, borderRadius: "10px 10px 0 0" }}
              >
                <Table sx={{ tableLayout: "fixed", width: "100%" }}>
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#99caff" }}>
                      <TableCell sx={{ px: 3, py: 1 }}>
                        <Typography fontWeight="bold">Parameters</Typography>
                      </TableCell>
                      <TableCell sx={{ py: 1 }}>
                        <Typography fontWeight="bold">
                          Specified Value
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ py: 1 }}>
                        <Typography fontWeight="bold">Actual Value</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pumpData.map((row, index) => (
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
                            onChange={(e) => {
                              const newData = [...pumpData];
                              newData[index].actualValue = e.target.value;
                              setPumpData(newData);
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                                "& fieldset": {
                                  border: "none",
                                },
                                "&.Mui-focused": {
                                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
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

              <Typography variant="body1" fontWeight="bold" mb={1}>
                Comments <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Enter your comments..."
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                    "& fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused": {
                      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                    },
                  },
                }}
              />
              {/* <Typography variant="body1" color="text.secondary" mb={1}>
              *Represents[Your meaning 1]
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={2}>
              **Represents[Your meaning 2]
            </Typography> */}
              <Stack
                direction="row"
                spacing={1}
                justifyContent="flex-end"
                mb={2}
              >
                <Button
                  variant="outlined"
                  onClick={() => navigate("/project2")}
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#f2f4f5",
                    px: 3,
                    color: "black",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    border: "none", // 👈 override outlined variant's default border
                    "&:hover": {
                      bgcolor: "#e5e7e8",
                      border: "none", // 👈 make sure hover state also has no border
                    },
                  }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleFirstSubmit}
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#99CAFF",
                    color: "black",
                    px: 3,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow added here
                    "&:hover": {
                      bgcolor: "#7bb8ff",
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
              <RadioGroup
                row
                value={selectedForm}
                onChange={handleRadioChange}
                // sx={{ mb: 3 }}
              >
                <FormControlLabel
                  value="form1"
                  control={<Radio />}
                  label="Single Operation Full Flow"
                />
                <FormControlLabel
                  value="form2"
                  control={<Radio />}
                  label="Single Operation Balanced Flow"
                />
                <FormControlLabel
                  value="form3"
                  control={<Radio />}
                  label="Parallel Operation Full Flow"
                />
                <FormControlLabel
                  value="form4"
                  control={<Radio />}
                  label="Parallel Operation Balanced Flow"
                />
              </RadioGroup>

              {/* Render the corresponding form based on the selected radio button */}
              {renderForm()}
            </Box>
          )}

          {tabValue === 2 && (
            <Box>
              <Paper
                elevation={4}
                sx={{
                  borderRadius: "10px",
                  p: 3,
                  mb: 2,
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    Pump
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={1.5}>
                      <Typography variant="body1" fontWeight="medium">
                        Pump Capacity <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>

                    <Grid item xs={2.5}>
                      <TextField
                        fullWidth
                        defaultValue="34.700"
                        size="small"
                        // label="Specified Value"
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                            "& fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                            },
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={2.5}>
                      <TextField
                        fullWidth
                        size="small"
                        // label="Actual Value"
                        placeholder="Actual Value"
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                            "& fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                            },
                          },
                        }}
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

                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={1.5}>
                      <Typography variant="body1" fontWeight="medium">
                        System Capacity <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={2.5}>
                      <TextField
                        fullWidth
                        defaultValue="187.629"
                        size="small"
                        // label="Specified Value"
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                            "& fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={2.5}>
                      <TextField
                        fullWidth
                        size="small"
                        // label="Actual Value"
                        placeholder="Actual Value"
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                            "& fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                            },
                          },
                        }}
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

                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={1.5}>
                      <Typography variant="body1" fontWeight="medium">
                        Pump Balancing <br />
                        Valve Position <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        placeholder="Enter Pump Balancing Valve Position"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                            "& fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={1.5}>
                      <Typography variant="body1" fontWeight="medium">
                        System Differential
                        <br />
                        Pressure Setpoint{" "}
                        <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={3.2}>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        placeholder="Enter System Differential Pressure Point"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                            "& fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                            },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    Motor
                  </Typography>

                  <Typography variant="body1" fontWeight="semibold" mb={2}>
                    BHP SINGLE OPERATION
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={1.5}>
                      <Typography variant="body1" fontWeight="medium">
                        Full Flow <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={2.5}>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        placeholder="Enter Full Flow"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                            "& fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={1.5}>
                      <Typography variant="body1" fontWeight="medium">
                        Balanced Position{" "}
                        <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={2.5}>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        placeholder="Enter Balanced Position"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                            "& fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                            },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Typography
                    variant="body1"
                    fontWeight="semibold"
                    mt={3}
                    mb={2}
                  >
                    BHP PARALLEL OPERATION
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={1.5}>
                      <Typography variant="body1" fontWeight="medium">
                        Full Flow <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={2.5}>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        placeholder="Enter Full Flow"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                            "& fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={1.5}>
                      <Typography variant="body1" fontWeight="medium">
                        Balanced Position{" "}
                        <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={2.5}>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        placeholder="Enter Balanced Position"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                            "& fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                            },
                          },
                        }}
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
                    <Grid item xs={6}>
                      <Paper elevation={4} sx={{ p: 3, borderRadius: "10px" }}>
                        <Grid container spacing={2}>
                          <Grid item xs={3}>
                            <Typography variant="body2" fontWeight="medium">
                              Type <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <TextField
                              fullWidth
                              size="small"
                              placeholder="Enter Type"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                                  "& fieldset": {
                                    border: "none",
                                  },
                                  "&.Mui-focused": {
                                    boxShadow:
                                      "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                                  },
                                },
                              }}
                            />
                          </Grid>

                          <Grid item xs={3}>
                            <Typography variant="body2" fontWeight="medium">
                              Size <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <TextField
                              fullWidth
                              size="small"
                              placeholder="Enter Size"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                                  "& fieldset": {
                                    border: "none",
                                  },
                                  "&.Mui-focused": {
                                    boxShadow:
                                      "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                                  },
                                },
                              }}
                            />
                          </Grid>

                          <Grid item xs={3}>
                            <Typography variant="body2" fontWeight="medium">
                              Signal <br />
                              (FT) <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <TextField
                              fullWidth
                              size="small"
                              placeholder="Enter Signal(FT)"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                                  "& fieldset": {
                                    border: "none",
                                  },
                                  "&.Mui-focused": {
                                    boxShadow:
                                      "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                                  },
                                },
                              }}
                            />
                          </Grid>

                          <Grid item xs={3}>
                            <Typography variant="body2" fontWeight="medium">
                              Measured <br />
                              (GPM) <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <TextField
                              fullWidth
                              size="small"
                              placeholder="Enter Measured(GPM)"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                                  "& fieldset": {
                                    border: "none",
                                  },
                                  "&.Mui-focused": {
                                    boxShadow:
                                      "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                                  },
                                },
                              }}
                            />
                          </Grid>

                          <Grid item xs={3}>
                            <Typography variant="body2" fontWeight="medium">
                              Position <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <TextField
                              fullWidth
                              size="small"
                              placeholder="Enter Position"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                                  "& fieldset": {
                                    border: "none",
                                  },
                                  "&.Mui-focused": {
                                    boxShadow:
                                      "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                                  },
                                },
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  )}

                  {showBHP && (
                    <Grid item xs={6} sx={{ marginLeft: "auto" }}>
                      <Paper elevation={4} sx={{ p: 3, borderRadius: "10px" }}>
                        <Grid container spacing={2}>
                          <Grid item xs={3}>
                            <Typography variant="body2" fontWeight="medium">
                              Efficiency <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <TextField
                              fullWidth
                              size="small"
                              placeholder="Enter Efficiency"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                                  "& fieldset": {
                                    border: "none",
                                  },
                                  "&.Mui-focused": {
                                    boxShadow:
                                      "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                                  },
                                },
                              }}
                            />
                          </Grid>

                          <Grid item xs={3}>
                            <Typography variant="body2" fontWeight="medium">
                              Measured
                              <br />
                              Amperage <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <TextField
                              fullWidth
                              size="small"
                              placeholder="Enter Measured Amperage"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                                  "& fieldset": {
                                    border: "none",
                                  },
                                  "&.Mui-focused": {
                                    boxShadow:
                                      "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                                  },
                                },
                              }}
                            />
                          </Grid>

                          <Grid item xs={3}>
                            <Typography variant="body2" fontWeight="medium">
                              Measured
                              <br />
                              Voltage <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <TextField
                              fullWidth
                              size="small"
                              placeholder="Enter Measured Voltage"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                                  "& fieldset": {
                                    border: "none",
                                  },
                                  "&.Mui-focused": {
                                    boxShadow:
                                      "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                                  },
                                },
                              }}
                            />
                          </Grid>

                          <Grid item xs={3}>
                            <Typography variant="body2" fontWeight="medium">
                              Power <br />
                              Factor <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <TextField
                              fullWidth
                              size="small"
                              placeholder="Enter Power Factor"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                                  "& fieldset": {
                                    border: "none",
                                  },
                                  "&.Mui-focused": {
                                    boxShadow:
                                      "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                                  },
                                },
                              }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={3}>
                                <Typography variant="body2" fontWeight="bold">
                                  EFM <span style={{ color: "red" }}>*</span>
                                </Typography>
                              </Grid>
                              <Grid item xs="auto">
                                <Typography variant="body2" fontWeight="medium">
                                  BHP
                                </Typography>
                              </Grid>
                              <Grid item xs={3}>
                                <TextField
                                  fullWidth
                                  size="small"
                                  sx={{
                                    "& .MuiOutlinedInput-root": {
                                      boxShadow:
                                        "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                                      "& fieldset": {
                                        border: "none",
                                      },
                                      "&.Mui-focused": {
                                        boxShadow:
                                          "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                                      },
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs="auto">
                                <Typography variant="body2" fontWeight="medium">
                                  BKW
                                </Typography>
                              </Grid>
                              <Grid item xs={3}>
                                <TextField
                                  fullWidth
                                  size="small"
                                  sx={{
                                    "& .MuiOutlinedInput-root": {
                                      boxShadow:
                                        "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                                      "& fieldset": {
                                        border: "none",
                                      },
                                      "&.Mui-focused": {
                                        boxShadow:
                                          "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                                      },
                                    },
                                  }}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  )}
                </Grid>
                <Box sx={{ mb: 1, mt: 2 }}>
                  <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                    Comments <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="Enter your comments..."
                    sx={{
                      mb: 2,
                      "& .MuiOutlinedInput-root": {
                        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                        "& fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused": {
                          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                        },
                      },
                    }}
                  />

                  {/* <Typography variant="body1" color="text.secondary" mb={1}>
                *Represents[Your meaning 1]
              </Typography>
              <Typography variant="body1" color="text.secondary">
                **Represents[Your meaning 2]
              </Typography> */}
                </Box>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="flex-end"
                  mb={1}
                >
                  <Button
                    variant="outlined"
                    onClick={() => navigate("/project2")}
                    sx={{
                      borderRadius: "10px",
                      bgcolor: "#f2f4f5",
                      px: 3,
                      color: "black",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      border: "none", // 👈 override outlined variant's default border
                      "&:hover": {
                        bgcolor: "#e5e7e8",
                        border: "none", // 👈 make sure hover state also has no border
                      },
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                      borderRadius: "10px",
                      bgcolor: "#99CAFF",
                      color: "black",
                      px: 3,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow added here
                      "&:hover": {
                        bgcolor: "#7bb8ff",
                      },
                    }}
                  >
                    Submit
                    {/* <a
                    href={pump_report}
                    download="pump_report"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Submit
                  </a> */}
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      window.open(pump_report, "_blank");
                    }}
                    sx={{
                      borderRadius: "10px",
                      bgcolor: "#99CAFF",
                      color: "black",
                      px: 3,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      "&:hover": {
                        bgcolor: "#7bb8ff",
                      },
                    }}
                  >
                    Generate & View Report
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
              </Paper>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ActualPump;
