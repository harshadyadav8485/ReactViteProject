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

const CreateProject = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
        <Box>
          <h2> Create Project</h2>
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
              <Typography sx={{ minWidth: "110px" }}>Project Id :</Typography>
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
              <Typography sx={{ minWidth: "110px" }}>Project Name :</Typography>
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
                Customer Name :
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

export default CreateProject;
