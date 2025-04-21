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
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Projects2 from "./Projects2";

{
  /* <Select
  value={pumpType}
  onChange={(e) => setPumpType(e.target.value)}

></Select> */
}

const CreatePumpCreation = () => {
  const navigate = useNavigate();
  const [pumpType, setPumpType] = useState("");
  const [pumpRunningMates, setPumpRunningMates] = useState([
    { id: 1, name: "" },
    { id: 2, name: "" },
  ]);

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
  // const handleRemovePumpMate = (index) => {
  //   const updatedPumpMates = [...pumpRunningMates];
  //   updatedPumpMates.splice(index, 1);
  //   setPumpRunningMates(updatedPumpMates);
  // };
  const handleRemovePumpMate = (index) => {
    const updatedPumpMates = pumpRunningMates.filter((_, i) => i !== index);
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
        minHeight: "100vh",
        py: 4,
        pl: "70px",
        pt: "12px",
        pr: "24px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Typography variant="h5" component="h1" fontWeight="bold" sx={{ mb: 1 }}>
        Pump Creation
      </Typography>

      {/* <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
        Pump Types :
      </Typography>

      <Select
        variant="outlined"
        displayEmpty
        value={pumpType}
        onChange={(e) => setPumpType(e.target.value)}
        IconComponent={KeyboardArrowDownIcon}
        sx={{
          mb: 3,
          bgcolor: "#fff",
          borderRadius: "10px",
          height: "50px",
          width: "50%",
        }}
      >
        <MenuItem value="">
          <p style={{ color: "#9e9e9e" }}>Select Pump Type</p>
        </MenuItem>

        <MenuItem value="parallel">Parallel</MenuItem>
        <MenuItem value="standby">Stand By</MenuItem>
        <MenuItem value="standalone">Stand Alone</MenuItem>
        <MenuItem value="leadlag">Lead/Lag</MenuItem>
      </Select> */}

      <Paper
        elevation={4}
        sx={{
          p: 2,
          borderRadius: "10px",
          mb: 4,
        }}
      >
        <Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
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
              {/* <Select
                variant="outlined"
                displayEmpty
                value={pumpType}
                onChange={(e) => setPumpType(e.target.value)}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  bgcolor: "#fff",
                  height: "40px",
                  width: "100%",
                }}
              >
                <MenuItem value="">
                  <p style={{ color: "black" }}>Parallel</p>
                </MenuItem>
                <MenuItem value="standby">Stand By</MenuItem>
                <MenuItem value="standalone">Stand Alone</MenuItem>
                <MenuItem value="leadlag">Lead/Lag</MenuItem>
              </Select> */}
              <Select
                variant="outlined"
                displayEmpty
                value={pumpType}
                onChange={(e) => setPumpType(e.target.value)}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  bgcolor: "#fff",
                  height: "40px",
                  width: "100%",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#000", // black border
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#000", // keep black when focused
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#000", // black on hover too
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
                <MenuItem value="">
                  <p style={{ color: "black" }}>Parallel</p>
                </MenuItem>
                <MenuItem value="standby">Stand By</MenuItem>
                <MenuItem value="standalone">Stand Alone</MenuItem>
                <MenuItem value="leadlag">Lead/Lag</MenuItem>
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
                Pump No. <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter Pump No."
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
                placeholder="Enter Location"
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
              />{" "}
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
                placeholder="Enter System Served"
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
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }}>
          <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
            Pump Running Mates <span style={{ color: "red" }}>*</span>
          </Typography>

          {/* <Grid container spacing={4}>
            {pumpRunningMates.map((pump) => (
              <Grid item xs={12} md={6} key={pump.id}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={pump.name}
                    onChange={(e) =>
                      handlePumpMateChange(index, e.target.value)
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#868686",
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
              </Grid>
            ))}
          </Grid> */}
          <Grid container spacing={4}>
            {pumpRunningMates.map((pump, index) => (
              <Grid item xs={12} md={6} key={pump.id}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Pump Running Mate Number"
                    size="small"
                    value={pump.name}
                    onChange={(e) =>
                      handlePumpMateChange(index, e.target.value)
                    } // Pass the correct index here
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
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            endIcon={<AddIcon />}
            onClick={handleAddPumpMate}
            sx={{
              mt: 2,
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
        {/* <Box sx={{ mt: 5 }}>
          <Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
            Pump Running Mates <span style={{ color: "red" }}>*</span>
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={2}>
            {pumpRunningMates.map((pump, index) => (
              <Box
                key={pump.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  // maxWidth: 600,
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder={pump.name}
                  onChange={(e) =>
                    handlePumpMateChange(index, {
                      ...pump,
                      name: e.target.value,
                    })
                  }
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

          <Button
            variant="contained"
            endIcon={<AddIcon />}
            onClick={handleAddPumpMate} // 🔥 Add this
            sx={{
              mt: 3,
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
        </Box> */}
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
          onClick={() => navigate("/createPump")}
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

export default CreatePumpCreation;
