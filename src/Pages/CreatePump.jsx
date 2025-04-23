import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePump = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    impellerSize: "",
    size: "",
    voltsPhase: "",
    amperage: "",
    rpm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    navigate("/project2");
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
        Create Pump
      </Typography>

      <Paper
        elevation={4}
        sx={{
          p: 2,
          borderRadius: "10px",
          mb: 4,
        }}
      >
        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
          Pump
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Make <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter Mak"
                size="small"
                name="make"
                value={formData.make}
                onChange={handleChange}
                variant="outlined"
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
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Model <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter Model"
                size="small"
                name="model"
                value={formData.model}
                onChange={handleChange}
                variant="outlined"
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
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Impeller
                <br />
                Size <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter Impeller Size"
                size="small"
                name="impellerSize"
                value={formData.impellerSize}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#333",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#000",
                    },
                  },
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Pump
                <br />
                Capacity <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter Pump Capacity"
                size="small"
                name="pumpCapacity"
                value={formData.pumpCapacity}
                onChange={handleChange}
                variant="outlined"
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
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                System
                <br />
                Capacity <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter System Capacity"
                size="small"
                name="systemCapacity"
                value={formData.systemCapacity}
                onChange={handleChange}
                variant="outlined"
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
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderRadius: "5px" }} />

        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
          Motor
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              sx={{
                width: 100,
                fontWeight: 500,
                whiteSpace: "nowrap", 
                display: "flex",     
                alignItems: "center", 
                gap: "2px",           
              }}
            >
              Manufacturer <span style={{ color: "red" }}>*</span>
            </Typography>

              <TextField
                fullWidth
                placeholder="Enter Manufacturer"
                size="small"
                name="size"
                value={formData.size}
                onChange={handleChange}
                variant="outlined"
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
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
               sx={{
                width: 100,
                fontWeight: 500,
                whiteSpace: "nowrap", 
                display: "flex",     
                alignItems: "center", 
                gap: "2px",           
              }}
              >
                Size <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter Size"
                size="small"
                name="size"
                value={formData.size}
                onChange={handleChange}
                variant="outlined"
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
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography
               sx={{
                width: 100,
                fontWeight: 500,
                whiteSpace: "nowrap", 
                display: "flex",     
                alignItems: "center", 
                gap: "2px",           
              }}
              >
                Volts/
                <br />
                Phase <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter Volts/Phase"
                size="small"
                name="voltsPhase"
                value={formData.voltsPhase}
                onChange={handleChange}
                variant="outlined"
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
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
               sx={{
                width: 100,
                fontWeight: 500,
                whiteSpace: "nowrap", 
                display: "flex",     
                alignItems: "center", 
                gap: "2px",           
              }}
              >
                Amperage <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter Amperage"
                size="small"
                name="amperage"
                value={formData.amperage}
                onChange={handleChange}
                variant="outlined"
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
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              sx={{ mb: 1 }}
            >
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                  whiteSpace: "nowrap", 
                  display: "flex",     
                  alignItems: "center", 
                  gap: "2px",           
                }}
              >
                R.P.M <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter R.P.M"
                size="small"
                name="rpm"
                value={formData.rpm}
                onChange={handleChange}
                variant="outlined"
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
            </Stack>
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ mb: 1 }}
            >
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Assign To <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter Engineer Name"
                size="small"
                name="rpm"
                value={formData.rpm}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#333",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#000",
                    },
                  },
                }}
              />
            </Stack>
          </Grid> */}
        </Grid>
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button
          variant="outlined"
          onClick={() => navigate("/createPumpCreation")}
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
    </Box>
  );
};

export default CreatePump;
