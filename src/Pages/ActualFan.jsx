import React from 'react'

function ActualFan() {
  return (
    <>
     <Box sx={{ mt: 2, pl: 9, pr: 9}}>
     <Box >
        <h2>Create New Fan</h2>
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
            <Typography sx={{ minWidth: "110px" }}>Fan Capacity :</Typography>
            <Input
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
              fullWidth
              name="outletCapacity"
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
                  
        <Box display="flex" justifyContent="space-between">
          <Button variant="outlined" startIcon={<AddIcon />}>
            Add Parameters
          </Button>
          <Box>
            <Button
              variant="outlined"
              onClick={() => navigate("/fan")}
              sx={{ mr: 2 }}
            >
              Back
            </Button>
            <Button variant="contained" onClick={() => navigate("/fan")}>Submit</Button>
          </Box>
        </Box>
      </Box>
     </Box>
    </>
  )
}

export default ActualFan