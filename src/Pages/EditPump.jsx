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

const EditPump = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    make: "BELL & GOSSETT",
    model: "e-80SC 5x5x11",
    impellerSize: "",
    size: "20",
    voltsPhase: "575/3",
    amperage: "23.60",
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
        pt: "30px",
        pr: "24px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Typography variant="h5" component="h1" fontWeight="bold" sx={{ mb: 4 }}>
        Edit Pump
      </Typography>

      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: "10px",
          mb: 4,
        }}
      >
        <Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
          Pump
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Make :
              </Typography>
              <TextField
                fullWidth
                defaultValue="BELL & GOSSETT"
                size="small"
                name="make"
                value={formData.make}
                onChange={handleChange}
                variant="outlined"
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
                Model :
              </Typography>
              <TextField
                fullWidth
                defaultValue="e-80SC 5x5x11"
                size="small"
                name="model"
                value={formData.model}
                onChange={handleChange}
                variant="outlined"
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
                Impeller
                <br />
                Size :
              </Typography>
              <TextField
                fullWidth
                defaultValue=""
                size="small"
                name="impellerSize"
                value={formData.impellerSize}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderRadius: "5px" }} />

        <Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
          Motor
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Manufacture :
              </Typography>
              <TextField
                fullWidth
                defaultValue=""
                size="small"
                name="size"
                value={formData.size}
                onChange={handleChange}
                variant="outlined"
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
                Size :
              </Typography>
              <TextField
                fullWidth
                defaultValue="20 "
                size="small"
                name="size"
                value={formData.size}
                onChange={handleChange}
                variant="outlined"
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
                Volts/
                <br />
                Phase :
              </Typography>
              <TextField
                fullWidth
                defaultValue="575/3"
                size="small"
                name="voltsPhase"
                value={formData.voltsPhase}
                onChange={handleChange}
                variant="outlined"
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
                Amperage :
              </Typography>
              <TextField
                fullWidth
                defaultValue="23.60"
                size="small"
                name="amperage"
                value={formData.amperage}
                onChange={handleChange}
                variant="outlined"
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
                R.P.M :
              </Typography>
              <TextField
                fullWidth
                defaultValue=""
                size="small"
                name="rpm"
                value={formData.rpm}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button
          variant="outlined"
          onClick={() => navigate("/editPumpCreation")}
          sx={{
            borderRadius: "10px",
            border: "1px solid black",
            color: "black",
            bgcolor: "#f2f4f5",
            px: 3,
            "&:hover": {
              bgcolor: "#e5e7e8",
              border: "1px solid black",
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
            px: 3,
            py: 1,
            bgcolor: "#99caff",
            color: "black",
            fontFamily: "Poppins",
            fontWeight: 500,
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

export default EditPump;
