import React, { useState } from "react";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  TextField,
  Button,
  Typography,
  Tabs,
  Tab,
  Input,
} from "@mui/material";

const Pump = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ pl: 9, pr: 9, mt: 2 }}>
        <Box sx={{ pb: 1 }}>
          <Typography variant="h5">Pump</Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Pump Name: Little Giant 0.5
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Search Pump..."
            sx={{ width: "50%" }}
            InputProps={{
              sx: { height: "40px" },
            }}
          />
          <Button variant="contained" onClick={() => navigate("/createPump")}>
            Create New
          </Button>
        </Box>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 1100,
            margin: "auto",
            padding: 3,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Make :</Typography>
              <Input
                defaultValue="Little Giant"
                fullWidth
                name="make"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Model :</Typography>
              <Input
                defaultValue="VCMA-20 Series"
                fullWidth
                name="model"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>
                Impeller Size :
              </Typography>
              <Input
                defaultValue="200 mm"
                fullWidth
                name="impellerSize"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>
                Pump Capacity :
              </Typography>
              <Input
                defaultValue="0.5 L/s"
                fullWidth
                name="pumpCapacity"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>
                System Capacity :
              </Typography>
              <Input
                defaultValue="0.5 L/s"
                fullWidth
                name="systemCapacity"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>
          </Box>
          <Divider />

          <Typography variant="h6">Motor</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Size :</Typography>
              <Input
                defaultValue="1 HP "
                fullWidth
                name="make"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Volts/Phase :</Typography>
              <Input
                defaultValue="230V"
                fullWidth
                name="model"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Amperage :</Typography>
              <Input
                defaultValue="7.5 Amps"
                fullWidth
                name="impellerSize"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>R.P.M :</Typography>
              <Input
                defaultValue="1725 RPM"
                fullWidth
                name="pumpCapacity"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Button variant="outlined" startIcon={<AddIcon />}>
              Add Parameters
            </Button>
            <Button variant="contained">Save</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Pump;
