import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Typography,
  Input,
} from "@mui/material";

const EditProject = () => {
  const navigate = useNavigate(); 
  return (
    <>
      <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
        <Box sx={{ mb: 1 }}>
          <h2>Edit Project</h2>
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
                defaultValue="P001"
                fullWidth
                name="make"
                readOnly
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
                defaultValue="UBC School of Biomedical Engineering"
                fullWidth
                name="model"
                readOnly
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Customer Name :</Typography>
              <Input
                defaultValue="Smith Sheet Metal Works Ltd"
                fullWidth
                name="model"
                readOnly
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>
          </Box>
          
          
        </Box>
        <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
             <Button
              variant="outlined"
              onClick={() => navigate("/allPump")}
              sx={{ mr: 2 }}
            >
              Back
            </Button>
            <Button variant="contained" onClick={() => navigate("/allPump")}>Submit</Button>
          </Box>
      </Box>
    </>
  );
};

export default EditProject;
