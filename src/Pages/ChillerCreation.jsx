import React, { useState } from "react";
import { Box, Input, Button, Typography, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function ChillerCreation() {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
        <Box sx={{ mb: 1 }}>
          <h2>Chiller Creation</h2>
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
              <Typography sx={{ minWidth: "110px" }}>System :</Typography>
              <Input
                fullWidth
                name="pumpNumber"
                readOnly
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Location :</Typography>
              <Input
                fullWidth
                name="location"
                readOnly
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>
                System Served :
              </Typography>
              <Input
                fullWidth
                name="systemServed"
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
                          onClick={() => navigate("/home")}
                          sx={{ mr: 2 }}
                        >
                          Back
                        </Button>
          <Button variant="contained" onClick={() => navigate("/createChiller")}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ChillerCreation;