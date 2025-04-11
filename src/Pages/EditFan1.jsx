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

const CreateFan = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    make: "SWEAGON",
    model: "R15-H SMART",
    exhaustFanRpm: "550 L/s",
    exhaust: "0.42 HP",
    supply: "0.37 HP",
    size: "",
    voltsPhase: "115/1",
    supplyFanRpm: "550 L/s",
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
        Edit Fan
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
          Fan
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
                Supply Fan R.P.M :
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="supplyFanRpm"
                value={formData.supplyFanRpm}
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
                Exhaust Fan R.P.M :
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="exhaustFanRpm"
                value={formData.exhaustFanRpm}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
          Motor
        </Typography>

        <Typography variant="body1" fontWeight="semibold" sx={{ mb: 2 }}>
          Size
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
                Supply :
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="supply"
                value={formData.supply}
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
                Exhaust :
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="exhaust"
                value={formData.exhaust}
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
                Volts/ Phase :
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="voltsPhase"
                value={formData.voltsPhase}
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
          onClick={() => navigate("/editFan")}
          sx={{
            borderRadius: "10px",
            px: 3,
            bgcolor: "#f2f4f5",
            fontFamily: "Poppins",
            fontWeight: 500,
            border: "1px solid black",
            color: "black",
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

export default CreateFan;
