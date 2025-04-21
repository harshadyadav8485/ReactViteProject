import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic would go here
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
      <Typography variant="h5" component="h1" fontWeight="bold" sx={{ mb: 2 }}>
        Create Project
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: "10px",
          mb: 3,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={3}>
                <Typography fontWeight="medium">
                  Project Id <span style={{ color: "red" }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  placeholder="Enter Project Id"
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
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={3}>
                <Typography fontWeight="medium">
                  Date <span style={{ color: "red" }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  placeholder="Enter Date"
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
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={3}>
                <Typography fontWeight="medium">
                  Project Name <span style={{ color: "red" }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  placeholder="Enter Project Name"
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
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={3}>
                <Typography fontWeight="medium">
                  Customer Name <span style={{ color: "red" }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  placeholder="Enter Customer Name"
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
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={3}>
                <Typography fontWeight="medium">
                  Tested By <span style={{ color: "red" }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  placeholder="Enter Tested By"
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <Button
          variant="outlined"
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
          onClick={() => {
            navigate("/project1");
          }}
        >
          Back
        </Button>

        <Button
          variant="contained"
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
          onClick={() => {
            navigate("/project1");
          }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateProject;
