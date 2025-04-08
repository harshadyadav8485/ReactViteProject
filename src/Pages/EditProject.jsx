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

const EditProject = () => {
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
        pt: "30px",
        pr: "24px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Typography variant="h5" component="h1" fontWeight="bold" sx={{ mb: 2 }}>
        Edit Project
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
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography fontWeight="medium">Project Id :</Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                defaultValue="P001"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography fontWeight="medium">Project Name :</Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                defaultValue="UBC School Of Biomedical Engineering"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography fontWeight="medium" sx={{ whiteSpace: "pre-line" }}>
                Customer{"\n"} Name :
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                defaultValue="Smith Sheet Metal Works Ltd"
              />
            </Stack>
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
            border: "1px solid black",
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

export default EditProject;
