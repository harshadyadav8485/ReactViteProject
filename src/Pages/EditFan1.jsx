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
    supplyFanCapacity: "550 L/s",
    supplyOutletCapacity: "552 L/s",
    exhaustFanCapacity: "550 L/s",
    exhaustOutletCapacity: "424 L/s",
    supplyFanRpm: "Not Listed",
    exhaustFanRpm: "Not Listed",
    exhaust: "",
    supply: "",
    size: "",
    voltsPhase: "115/1",
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
      <Typography variant="h5" component="h1" fontWeight="bold" sx={{ mb: 2 }}>
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
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Fan
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={2} alignItems="center">
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
                size="small"
                name="make"
                value={formData.make}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
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
                size="small"
                name="model"
                value={formData.model}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Supply Fan Capacity <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="supplyFanRpm"
                value={formData.supplyFanCapacity}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Supply Outlet Capacity <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="exhaustFanRpm"
                value={formData.supplyOutletCapacity}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Exhaust Fan Capacity <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="supplyFanRpm"
                value={formData.exhaustFanCapacity}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Exhaust Outlet Capacity <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="supplyFanRpm"
                value={formData.exhaustOutletCapacity}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Supply Fan R.P.M <span style={{ color: "red" }}>*</span>
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

          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                sx={{
                  width: 100,
                  fontWeight: 500,
                }}
              >
                Exhaust Fan R.P.M <span style={{ color: "red" }}>*</span>
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

        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Motor
        </Typography>
        <Grid container spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <Grid item xs={12} md={1}>
            <Typography variant="body1" fontWeight="bold">
              Size <span style={{ color: "red" }}>*</span>
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                sx={{
                  width: 60,
                  fontWeight: 500,
                }}
              >
                Supply :
              </Typography>
              <TextField
                size="small"
                name="supply"
                value={formData.supply}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                sx={{
                  width: 60,
                  fontWeight: 500,
                }}
              >
                Exhaust :
              </Typography>
              <TextField
                size="small"
                name="supply"
                value={formData.supply}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                sx={{
                  width: 110,
                  fontWeight: 500,
                }}
              >
                Volts/
                <br /> Phase <span style={{ color: "red" }}>*</span>
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
