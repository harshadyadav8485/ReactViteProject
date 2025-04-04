import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function EditFan() {
  const navigate = useNavigate();

  const [pumpRunningMates, setPumpRunningMates] = useState(["", ""]);

  // State for dropdown selection
  const [pumpType, setPumpType] = useState("");

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
          <h2>Edit Fan</h2>
        </Box>

        {/* Dropdown for Pump Type */}
        {/* <Box sx={{ mb: 2 }}>
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
        </Box> */}

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
                defaultValue="ERV-1"
                // readOnly
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
                defaultValue="KITCHEN AREA "
                // readOnly
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography sx={{ minWidth: "110px" }}>Area Served :</Typography>
              <Input
                fullWidth
                name="systemServed"
                defaultValue="ENTIRE SPACE"
                // readOnly
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
            onClick={() => navigate("/projects")}
            sx={{ mr: 2 }}
          >
            Back
          </Button>
          <Button variant="contained" onClick={() => navigate("/editFan1")}>
            Next{" "}
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default EditFan;
