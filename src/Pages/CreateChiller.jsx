import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Tabs,
  Tab,
  Input,
} from "@mui/material";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const CreateChiller = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
        <Box>
          {/* <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Create Pump
          </Typography> */}
          <h2> Create Chiller</h2>
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
              gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
              gap: 2, // Spacing between items
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Make :</Typography>
              <Input
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
                Serial Number :
              </Typography>
              <Input
                fullWidth
                name="serialNumber"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>
                Voltage :
              </Typography>
              <Input
                fullWidth
                name="voltage"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Evaporator Entering Temperature (°C) :</Typography>
              <Input
                fullWidth
                name="evaporatorEnteringTemperature"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Evaporator Leaving Temperature (°C) :</Typography>
              <Input
                fullWidth
                name="evaporatorLeavingTemperature"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Evaporator Pressure Drop :</Typography>
              <Input
                fullWidth
                name="evaporatorPressureDrop"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Evaporator Flow Rate :</Typography>
              <Input
                fullWidth
                name="evaporatorFlowRate"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Condenser Pressure :</Typography>
              <Input
                fullWidth
                name="condenserPressure"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end" sx={{mt:2}}>
              <Button
                variant="outlined"
                onClick={() => navigate("/chillerCreation")}
                sx={{ mr: 2 }}
              >
                Back
              </Button>
              <Button variant="contained"  onClick={() => navigate("/actualChiller")}>Submit</Button>
            </Box>
      </Box>
    </>
  );
};

export default CreateChiller;
