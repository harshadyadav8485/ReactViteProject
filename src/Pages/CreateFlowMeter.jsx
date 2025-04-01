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

const CreateFlowMeter = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
        <Box>
          <h2> Create Flow Meter</h2>
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
              <Typography sx={{ minWidth: "110px" }}>Meter :</Typography>
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
              <Typography sx={{ minWidth: "110px" }}>Service :</Typography>
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
                Make :
              </Typography>
              <Input
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
                Size :
              </Typography>
              <Input
                fullWidth
                name="size"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>
                Position :
              </Typography>
              <Input
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
          {/* <Divider /> */}
          <Typography variant="h6" sx={{ fontWeight: 600 }}>Specified</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
              gap: 2, // Spacing between items
            }}
          >
             <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Flow :</Typography>
              <Input
                fullWidth
                name="size"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 600 }}>Operating</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
              gap: 2, // Spacing between items
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Signal :</Typography>
              <Input
                fullWidth
                name="size"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Flow :</Typography>
              <Input
                fullWidth
                name="volts"
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
                // onClick={() => navigate("/createPumpCreation")}
                sx={{ mr: 2 }}
              >
                Back
              </Button>
              <Button variant="contained" 
            //    onClick={() => navigate("/projects")}
               >Submit</Button>
            </Box>
      </Box>
    </>
  );
};

export default CreateFlowMeter;
