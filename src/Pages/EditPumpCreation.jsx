import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditPumpCreation = () => {
  const navigate = useNavigate();
  const [pumpRunningMates, setPumpRunningMates] = useState([
    { id: 1, name: "P-06-07B" },
    { id: 2, name: "P-06-07C" },
  ]);

  // State for dropdown selection
  const [pumpType, setPumpType] = useState("Parallel");

  // Handle dropdown change
  const handlePumpTypeChange = (event) => {
    setPumpType(event.target.value);
  };
  // Handle adding a new pump running mate field
  const handleAddPumpMate = () => {
    const newId = pumpRunningMates.length + 1;
    setPumpRunningMates([...pumpRunningMates, { id: newId, name: "" }]);
  };

  // Handle removing a pump running mate field
  const handleRemovePumpMate = (index) => {
    const updatedPumpMates = [...pumpRunningMates];
    updatedPumpMates.splice(index, 1);
    setPumpRunningMates(updatedPumpMates);
  };

  // Handle input change
  const handlePumpMateChange = (index, value) => {
    const updatedPumpMates = [...pumpRunningMates];
    updatedPumpMates[index] = value;
    setPumpRunningMates(updatedPumpMates);
  };

  return (
    <Box
      sx={{
        bgcolor: "#f2f4f5",
        minHeight: "88vh",
        py: 4,
        pl: "70px",
        pt: "12px",
        pr: "24px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Typography variant="h5" component="h1" fontWeight="bold" sx={{ mb: 2 }}>
        Edit Pump Creation
      </Typography>

      {/* <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
        Pump Types :
      </Typography>
 
      <Select
        // fullWidth
        variant="outlined"
        displayEmpty
        value={pumpType}
        onChange={handlePumpTypeChange}
        IconComponent={KeyboardArrowDownIcon}
        sx={{
          mb: 3,
          bgcolor: "#fff",
          borderRadius: "10px",
          height: "50px",
          width: "50%",
        }}
      >
        <MenuItem value="Parallel">Parallel</MenuItem>
        <MenuItem value="Stand By">Stand By</MenuItem>
        <MenuItem value="Stand Alone">Stand Alone</MenuItem>
        <MenuItem value="Stand Alone">Lead/Lag</MenuItem>
      </Select> */}

      <Paper
        elevation={4}
        sx={{
          p: 2,
          borderRadius: "10px",
          mb: 4,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                fontWeight="500"
                sx={{ mr: 2, minWidth: "80px" }}
              >
                Planned <br /> Inspection Date{" "}
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                defaultValue="22/04/2025"
                placeholder="Enter Planned Inspection Date"
                variant="outlined"
                size="small"
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
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                fontWeight="500"
                sx={{ mr: 2, minWidth: "80px" }}
              >
                Actual <br /> Inspection Date{" "}
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                defaultValue="24/04/2025"
                placeholder="Enter Actual Inspection Date"
                variant="outlined"
                size="small"
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
              />{" "}
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1, mt: 2 }}>
          Pump Identification
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                fontWeight="500"
                sx={{ mr: 2, minWidth: "80px" }}
              >
                Pump <br /> Type <span style={{ color: "red" }}>*</span>
              </Typography>
              {/* <TextField
                fullWidth
                defaultValue="Parallel"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#333", // Dark border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#000", // Even darker border color when focused
                    },
                  },
                }}
              /> */}

              <Select
                // fullWidth
                variant="outlined"
                displayEmpty
                value={pumpType}
                onChange={handlePumpTypeChange}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  bgcolor: "#fff",
                  height: "40px",
                  width: "100%",
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.25)", // bottom shadow
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // remove border
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none", // keep border off on focus
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none", // no border on hover
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: "#fff", // optional: to match your select background
                    },
                  },
                }}
              >
                <MenuItem value="Parallel">Parallel</MenuItem>
                <MenuItem value="Stand By">Stand By</MenuItem>
                <MenuItem value="Stand Alone">Stand Alone</MenuItem>
                <MenuItem value="Stand Alone">Lead/Lag</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                fontWeight="500"
                sx={{ mr: 2, minWidth: "80px" }}
              >
                Pump No <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                defaultValue="P-06-07A"
                variant="outlined"
                size="small"
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
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                fontWeight="500"
                sx={{ mr: 2, minWidth: "80px" }}
              >
                Location <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                defaultValue="Mechanical Penthouse"
                variant="outlined"
                size="small"
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
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <Typography
                variant="body1"
                fontWeight="500"
                sx={{ mr: 2, minWidth: "80px" }}
              >
                System
                <br />
                Served <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                defaultValue="Secondary Chilled Water Pump"
                variant="outlined"
                size="small"
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
            </Box>
          </Grid>
        </Grid>

        {/* <Box sx={{ mt: 2 }}>
          <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
            Pump Running Mates <span style={{ color: "red" }}>*</span>
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {pumpRunningMates.map((pump, index) => (
              <Box
                key={pump.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "100%", sm: "calc(50% - 8px)" }, // Two per row
                  // mb: 1,
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={pump.name}
                  onChange={(e) =>
                    handlePumpMateChange(index, {
                      ...pump,
                      name: e.target.value,
                    })
                  }
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#333", // Dark border color
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#000", // Even darker border color when focused
                      },
                    },
                  }}
                />
                <IconButton
                  sx={{
                    ml: 1,
                    border: "1px solid #dc3545",
                    borderRadius: "5px",
                    color: "#df4958",
                    height: "35px",
                    width: "35px",
                  }}
                  onClick={() => handleRemovePumpMate(index)}
                >
                  <RemoveIcon />
                </IconButton>
              </Box>
            ))}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: { xs: "100%", sm: "calc(50% - 8px)" },
                mb: 1,
              }}
            >
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                onClick={handleAddPumpMate}
                sx={{
                  bgcolor: "#99caff",
                  color: "black",
                  borderRadius: "5px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  width: "50%",
                  "&:hover": {
                    bgcolor: "#7bb8ff",
                  },
                }}
              >
                Add Pump Running Mates
              </Button>
            </Box>
          </Box>
        </Box> */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
            Pump Running Mates <span style={{ color: "red" }}>*</span>
          </Typography>

          {/* Wrapper for the list of dynamic fields */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {pumpRunningMates.map((pump, index) => (
              <Box
                key={pump.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "100%", sm: "calc(50% - 8px)" },
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={pump.name}
                  onChange={(e) =>
                    handlePumpMateChange(index, {
                      ...pump,
                      name: e.target.value,
                    })
                  }
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
                <IconButton
                  sx={{
                    ml: 1,
                    border: "1px solid #dc3545",
                    borderRadius: "5px",
                    color: "#df4958",
                    height: "35px",
                    width: "35px",
                  }}
                  onClick={() => handleRemovePumpMate(index)}
                >
                  <RemoveIcon />
                </IconButton>
              </Box>
            ))}
          </Box>

          {/* Separated button for consistent position */}
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              onClick={handleAddPumpMate}
              sx={{
                bgcolor: "#99caff",
                color: "black",
                borderRadius: "5px",
                textTransform: "uppercase",
                fontWeight: 500,
                px: 2,
                py: 1,
                "&:hover": {
                  bgcolor: "#7bb8ff",
                },
              }}
            >
              Add Pump Running Mates
            </Button>
          </Box>
        </Box>
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
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
          onClick={() => navigate("/editPump")}
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
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default EditPumpCreation;
