import React, { useState } from "react";
import { Box, Input, Button, Typography, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function PumpCreation() {
  const navigate = useNavigate();
  
  // State for pump running mates
  const [pumpRunningMates, setPumpRunningMates] = useState(["P-06-07B", "P-06-07C"]);
  
  // State for dropdown selection
  const [pumpType, setPumpType] = useState("Parallel");

  // Handle dropdown change
  const handlePumpTypeChange = (event) => {
    setPumpType(event.target.value);
  };

  // Handle adding a new pump running mate field
  const handleAddPumpMate = () => {
    setPumpRunningMates([...pumpRunningMates, ""]);
  };

  // Handle removing a pump running mate field
  const handleRemovePumpMate = (index) => {
    const updatedPumpMates = [...pumpRunningMates];
    updatedPumpMates.splice(index, 1);
    setPumpRunningMates(updatedPumpMates);
  };

  // Handle input change
  const handlePumpMateChange = (index, value) => {
    const updatedPumpMates = [...pumpRunningMates];
    updatedPumpMates[index] = value;
    setPumpRunningMates(updatedPumpMates);
  };

  return (
    <>
      <Box sx={{ pl: 9, pr: 9, mt: 1 }}>
        <Box sx={{ mb: 1 }}>
          <h2>Pump Creation</h2>
        </Box>

        {/* Dropdown for Pump Type */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontWeight: "bold" }}>Pump Type:</Typography>
                <Select
                    value={pumpType}
                    onChange={handlePumpTypeChange}
                    fullWidth
                    sx={{
                        border: "1px solid #ccc",
                        padding: "2px", 
                        borderRadius: "4px",
                        mt: 1,
                        height: "40px", 
                        fontSize: "14px", 
                    }}
                    >
                    <MenuItem value="Parallel">Parallel</MenuItem>
                    <MenuItem value="Stand By">Stand By</MenuItem>
                    <MenuItem value="Stand Alone">Stand Alone</MenuItem>
                    <MenuItem value="Stand Alone">Lead/Lag</MenuItem>
                    </Select>

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
              <Typography sx={{ minWidth: "110px" }}>Pump No. :</Typography>
              <Input
                defaultValue="P-06-07A"
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
                defaultValue="Mechanical Penthouse"
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
                defaultValue="Secondary Chilled Water Pump"
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

          {/* Pump Running Mates Section */}
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ fontWeight: "bold" }}>Pump Running Mates</Typography>
            {pumpRunningMates.map((mate, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 1,
                }}
              >
                <Input
                  placeholder={`Pump Running Mate ${index + 1}`}
                  fullWidth
                  value={mate}
                  onChange={(e) => handlePumpMateChange(index, e.target.value)}
                  sx={{
                    border: "1px solid #ccc",
                    padding: "5px",
                    borderRadius: "4px",
                  }}
                />
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => handleRemovePumpMate(index)}
                  disabled={pumpRunningMates.length === 1} // Prevent removing last field
                >
                  <RemoveIcon />
                </Button>
              </Box>
            ))}
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ mt: 1 }}
              onClick={handleAddPumpMate}
            >
              <AddIcon /> Add Pump Running Mate
            </Button>
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
          <Button variant="contained" onClick={() => navigate("/pump")}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default PumpCreation;
