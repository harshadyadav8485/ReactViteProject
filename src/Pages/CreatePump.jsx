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

const CreatePump = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
        <Box>
          {/* <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Create Pump
          </Typography> */}
          <h2> Create Pump</h2>
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
           <Typography variant="h6"sx={{ fontWeight: 600 }}>Pump</Typography>
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
                Impeller Size :
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

            {/* <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>
                Pump Capacity :
              </Typography>
              <Input
                fullWidth
                name="pumpCapacity"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box> */}

            {/* <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>
                System Capacity :
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
            </Box> */}
          </Box>
          <Divider />

          <Typography variant="h6" sx={{ fontWeight: 600 }}>Motor</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
              gap: 2, // Spacing between items
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Size :</Typography>
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
              <Typography sx={{ minWidth: "110px" }}>Volts/Phase :</Typography>
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

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Amperage :</Typography>
              <Input
                fullWidth
                name="amperage"
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
                fullWidth
                name="rpm"
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
           
          </Box>
          
        </Box>
        <Box display="flex" justifyContent="flex-end" sx={{mt:2}}>
              <Button
                variant="outlined"
                onClick={() => navigate("/allPump")}
                sx={{ mr: 2 }}
              >
                Back
              </Button>
              <Button variant="contained"  onClick={() => navigate("/allPump")}>Submit</Button>
            </Box>
      </Box>
    </>
  );
};

export default CreatePump;
