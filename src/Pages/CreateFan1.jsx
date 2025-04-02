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

const CreateFan1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
        <Box>
          {/* <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Create Pump
          </Typography> */}
          <h2> Create Fan</h2>
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
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Fan
          </Typography>
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
          </Box>
          <Divider />

          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Motor
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)", // 2 columns
              gap: 2, // Spacing between items
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Size :</Typography>
              <Typography sx={{ minWidth: "60px" }}>Supply :</Typography>
              <Input
                name="supply"
                fullWidth
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                  marginRight: "8px",
                }}
              />
              <Typography sx={{ minWidth: "60px" }}>Exhaust :</Typography>
              <Input
                name="exhaust"
                fullWidth
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

            {/* <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>
                {" "}
                Supply Amperage :
              </Typography>
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
              <Typography sx={{ minWidth: "110px" }}>
                Exhaust Amperage :
              </Typography>
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
            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>
                {" "}
                Supply R.P.M :
              </Typography>
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
            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>
                {" "}
                Exhaust R.P.M :
              </Typography>
              <Input
                fullWidth
                name="rpm"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box> */}
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Button variant="outlined" startIcon={<AddIcon />}>
                Add Parameters
              </Button>
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            onClick={() => navigate("/createPumpCreation")}
            sx={{ mr: 2 }}
          >
            Back
          </Button>
          <Button variant="contained" onClick={() => navigate("/projects")}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateFan1;
