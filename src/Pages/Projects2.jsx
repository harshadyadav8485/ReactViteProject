import AddIcon from "@mui/icons-material/Add";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router-dom";

const Projects2 = () => {
  const navigate = useNavigate();
  // Status card data
  const statusCards = [
    { title: "Not Started", count: 5 },
    { title: "In Progress", count: 10 },
    { title: "Completed", count: 50 },
  ];

  // Pump data
  const pumpData = [
    { id: "P-06-07A", type: "Pump" },
    { id: "P-06-07B", type: "Pump" },
    { id: "P-06-07C", type: "Pump" },
  ];

  // Fan data
  const fanData = [
    { id: "F-06-07A", type: "Fan" },
    { id: "F-06-07B", type: "Fan" },
    { id: "F-06-07C", type: "Fan" },
  ];

  // Render equipment card
  const renderEquipmentCard = (item) => {
    const isFan = item.type === "Fan";

    return (
      <Card
        key={item.id}
        sx={{
          height: 265,
          border: 1,
          borderColor: "black",
          borderRadius: "10px",
        }}
      >
        <CardContent>
        <Typography
              variant="subtitle1" 
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "18px", 
                mb: 2,
                mt: 1,
              }}
            >
              {item.id}
            </Typography>


          <Stack spacing={3}>
            <Box>
              <Typography
                sx={{
                  fontFamily:"Poppins, sans-serif",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Actual Data
              </Typography>
              <LinearProgress
                variant="determinate"
                value={100}
                sx={{
                  height: 5,
                  borderRadius: "10px",
                  bgcolor: "#e9ecef",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "#28a745",
                  },
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily:"Poppins, sans-serif",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Test Data
              </Typography>
              <LinearProgress
                variant="determinate"
                value={100}
                sx={{
                  height: 5,
                  borderRadius: "10px",
                  bgcolor: "#e9ecef",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "#ffc107",
                  },
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily:"Poppins, sans-serif",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                {isFan ? "Fan" : "Pump"} Performance
              </Typography>
              <LinearProgress
                variant="determinate"
                value={100}
                sx={{
                  height: 5,
                  borderRadius: "10px",
                  bgcolor: "#e9ecef",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "#dc3545",
                  },
                }}
              />
            </Box>
          </Stack>
        </CardContent>
      </Card>
    );
  };

  return (
      <Box
            sx={{
              bgcolor: "#f2f4f5",
              minHeight: "100vh",
              py: 4,
              pl: "70px",
              pt: "30px",
              pr: "24px",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
      
        <Typography
          variant="h5" component="h1" fontWeight="bold" sx={{ mb: 4 }}
        >
          Project Name : UBC School of Biomedical Engineering
        </Typography>

        {/* Status Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {statusCards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  p: 2,
                  borderRadius: "10px",
                  position: "relative",
                }}
              >
                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                <Typography
                                    variant="h7"
                                    component="div"
                                    fontWeight="500"
                                    fontFamily="Poppins, sans-serif"
                                  >
                  {card.title}
                </Typography>
                {/* <FiberManualRecordIcon color={card.color} fontSize="small" /> */}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily:"Poppins, sans-serif",
                    fontWeight: 700,
                    mt: 1,
                  }}
                >
                  {card.count}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    top: 29,
                    right: 20,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    bgcolor:
                      index === 0
                        ? "error.main"
                        : index === 1
                          ? "warning.main"
                          : "success.main",
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Search Bar */}
        <Autocomplete
  freeSolo
  options={[]}
  sx={{ width: "50%", mb: 4 }} // set width here
  renderInput={(params) => (
    <TextField
      {...params}
      placeholder="Search by equipments..."
      variant="outlined"
      sx={{
        bgcolor: "#f2f4f5",
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          borderColor: "#939393",
        },
      }}
    />
  )}
/>

        {/* Hydronics Section */}
        <Typography
          variant="h5"
          sx={{
            fontFamily:"Poppins, sans-serif",
            fontWeight: 700,
            mb: 2,
          }}
        >
          Hydronics
        </Typography>

        <Paper
          elevation={4}
          sx={{
            p: 4,
            mb: 4,
            bgcolor: "#fcfcfc",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily:"Poppins, sans-serif",
                fontWeight: 700,
              }}
            >
              Pump
            </Typography>
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              onClick={() => navigate("/createPumpCreation")} 
              sx={{
                bgcolor: "#99caff",
                color: "black",
                borderRadius: "10px",
                fontFamily:"Poppins, sans-serif",
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#7ab8ff",
                },
              }}
            >
              Create Pump
            </Button>
          </Box>

          <Grid container spacing={3}>
            {pumpData.map((pump) => (
              <Grid item xs={12} md={4} key={pump.id}>
                {renderEquipmentCard(pump)}
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Air Section */}
        <Typography
          variant="h5"
          sx={{
            fontFamily:"Poppins, sans-serif",
            fontWeight: 700,
            mb: 2,
          }}
        >
          Air
        </Typography>

        <Paper
          elevation={4}
          sx={{
            p: 4,
            mb: 4,
            bgcolor: "#fcfcfc",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily:"Poppins, sans-serif",
                fontWeight: 700,
              }}
            >
              Fan
            </Typography>
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              sx={{
                bgcolor: "#99caff",
                color: "black",
                borderRadius: "10px",
                fontFamily:"Poppins, sans-serif",
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#7ab8ff",
                },
              }}
            >
              Create Fan
            </Button>
          </Box>

          <Grid container spacing={3}>
            {fanData.map((fan) => (
              <Grid item xs={12} md={4} key={fan.id}>
                {renderEquipmentCard(fan)}
              </Grid>
            ))}
          </Grid>
        </Paper>
      
    </Box>
  );
};

export default Projects2;
