import React from 'react'
import {
    Box,
    Button,
    Typography,
    Input,
  } from "@mui/material";
  import { Divider } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import AddIcon from "@mui/icons-material/Add";

function EditFan() {
    const navigate = useNavigate();

  return (
    <>
     <Box sx={{ mt: 2, pl: 9, pr: 9 }}>

     <Box >
        <h2> Edit Fan</h2>
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
          mt:2,
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
             defaultValue="Fan Make 1"
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
            defaultValue="Model 1"
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
            <Typography sx={{ minWidth: "110px" }}>Fan Capacity :</Typography>
            <Input
            defaultValue="1000 CFM"
              fullWidth
              name="fanCapacity"
              sx={{
                border: "1px solid #ccc",
                padding: "5px",
                borderRadius: "4px",
              }}
            />
          </Box>

          <Box display="flex" alignItems="center">
            <Typography sx={{ minWidth: "110px" }}>
              Outlet Capacity :
            </Typography>
            <Input
            defaultValue="500 CFM"
              fullWidth
              name="outletCapacity"
              sx={{
                border: "1px solid #ccc",
                padding: "5px",
                borderRadius: "4px",
              }}
            />
          </Box>

          <Box display="flex" alignItems="center">
            <Typography sx={{ minWidth: "110px" }}>
              Fan R.P.M. :
            </Typography>
            <Input
            defaultValue="3000 RPM"
              fullWidth
              name="fan R.P.M."
              sx={{
                border: "1px solid #ccc",
                padding: "5px",
                borderRadius: "4px",
              }}
            />
          </Box>
        </Box>
        <Divider />

        <Typography variant="h6" sx={{fontWeight:"semibold"}}>Motor:</Typography>
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
              name="make"
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
              name="model"
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
              name="impellerSize"
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
              name="pumpCapacity"
              sx={{
                border: "1px solid #ccc",
                padding: "5px",
                borderRadius: "4px",
              }}
            />
          </Box>

          <Box display="flex" alignItems="center">
            <Typography sx={{ minWidth: "110px" }}>Start AMP/TIME :</Typography>
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
          <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
            gap: 2, // Spacing between items
          }}>
          <Box display="flex" alignItems="center">
            <Typography sx={{ minWidth: "110px" }}>Static Pressure :</Typography>
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
            <Typography sx={{ minWidth: "110px" }}>Motor Sheave :</Typography>
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
            <Typography sx={{ minWidth: "110px" }}>Fan Sheave :</Typography>
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
            <Typography sx={{ minWidth: "110px" }}>Fan Sheave :</Typography>
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
            <Typography sx={{ minWidth: "110px" }}>Belt Quantity/Size :</Typography>
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

       
        <Box display="flex" justifyContent="flex-end">
          {/* <Button variant="outlined" startIcon={<AddIcon />}>
            Add Parameters
          </Button> */}
          <Box>
            <Button
              variant="outlined"
              onClick={() => navigate("/fan")}
              sx={{ mr: 2 }}
            >
              Back
            </Button>
            <Button variant="contained" onClick={() => navigate("/fan")}>Update</Button>
          </Box>
        </Box>
      </Box>
     </Box>
    </>
  )
}

export default EditFan