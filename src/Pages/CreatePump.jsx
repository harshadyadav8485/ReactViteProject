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
                 pt: "30px",
                 pr: "24px",
                 boxSizing: "border-box",
                 overflow: "hidden",
               }}
             >
        
        <Typography
             variant="h5" component="h1" fontWeight="bold" sx={{ mb: 4 }}
           >
             Create Pump
           </Typography>

        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: "10px",
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 3, fontFamily: "Poppins" }}
          >
            Pump
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  sx={{
                    width: 100,
                    fontFamily: "Poppins",
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
                    fontFamily: "Poppins",
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
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  Impeller
                  <br />
                  Size :
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  name="impellerSize"
                  value={formData.impellerSize}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Stack>
            </Grid>
          </Grid>

          <Divider
            sx={{ my: 3, bgcolor: "#d1d1d1", height: 3, borderRadius: "5px" }}
          />

          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 3, fontFamily: "Poppins" }}
          >
            Motor
          </Typography>

          <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  sx={{
                    width: 100,
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  Manufacture :
                </Typography>
                <TextField
                  fullWidth
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
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  Size :
                </Typography>
                <TextField
                  fullWidth
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
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  Volts/
                  <br />
                  Phase :
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
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  sx={{
                    width: 100,
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  Amperage :
                </Typography>
                <TextField
                  fullWidth
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
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  R.P.M :
                </Typography>
                <TextField
                  fullWidth
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
            onClick={() => navigate("/createPumpCreation")}
            sx={{
              borderRadius: "10px",
              px: 3,
              py: 1,
              bgcolor: "#f2f4f5",
              fontFamily: "Poppins",
              fontWeight: 500,
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

export default CreatePump;
