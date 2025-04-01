import React from "react";
import {
  Box,
  Input,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateDomesticHotWater = () => {
  return (
    <>
      <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
        <Box sx={{ mb: 1 }}>
          <h2> Create Domestic Hot Water </h2>
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
            marginBottom: "6px",
          }}
        >
          <Typography variant="h7" sx={{ fontWeight: 600 }}>
            Main Floor
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Location :</Typography>
              <Input
                fullWidth
                name="location"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Temperature :</Typography>
              <Input
                fullWidth
                name="temp"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Position :</Typography>
              <Input
                fullWidth
                name="position"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            {/* <Box>
              <Button variant="outlined" startIcon={<AddIcon />}>
                Add Parameters
              </Button>
            </Box> */}
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="outlined"
                onClick={() => navigate("/projects")}
                sx={{ mr: 2 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate("/createpump")}
              >
                Submit
              </Button>
            </Box>
          </Box>
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
            marginBottom: "6px",
          }}
        >
          <Typography variant="h7" sx={{ fontWeight: 600 }}>
            Second Floor
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Location :</Typography>
              <Input
                fullWidth
                name="location"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Temperature :</Typography>
              <Input
                fullWidth
                name="temp"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Position :</Typography>
              <Input
                fullWidth
                name="position"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            {/* <Box>
              <Button variant="outlined" startIcon={<AddIcon />}>
                Add Parameters
              </Button>
            </Box> */}
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="outlined"
                onClick={() => navigate("/projects")}
                sx={{ mr: 2 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate("/createpump")}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
        <Box marginTop="6px">
          <Button variant="outlined" startIcon={<AddIcon />}>
            Add Floor
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateDomesticHotWater;
