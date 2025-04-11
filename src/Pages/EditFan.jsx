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

const EditFan = () => {
  const navigate = useNavigate();
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
        Edit Fan Creation
      </Typography>

      <Paper
        elevation={4}
        sx={{
          p: 4,
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
                System :
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                defaultValue="ERV-1"
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
                Location :
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                defaultValue="KITCHEN AREA "
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
                Area <br></br> Served :
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                defaultValue="ENTIRE SPACE"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button
          variant="outlined"
          onClick={() => navigate("/project2")}
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
          onClick={() => navigate("/editFan1")}
          sx={{
            borderRadius: "10px",
            bgcolor: "#99caff",
            color: "black",
            px: 3,
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

export default EditFan;
