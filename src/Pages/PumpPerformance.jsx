import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const PumpPerformance = () => {
  const [tabValue, setTabValue] = React.useState(2);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Data for form fields
  const pumpData = {
    projectName: "UBC School of Biomedical Engineering",
    pumpNumber: "P-06-07A",
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
          Project Name : {pumpData.projectName}
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ display: "flex", alignItems: "center", mb: 2 }}
        >
          Pump Number
          <Typography variant="body1" component="span" sx={{ ml: 1 }}>
            : {pumpData.pumpNumber}
          </Typography>
          <ArrowDropDownIcon sx={{ ml: 1 }} />
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#99caff",
                height: 4,
              },
            }}
          >
            <Tab label="Actual Pump Data" />
            <Tab label="Test Data" />
            <Tab label="Pump Performance" />
          </Tabs>
        </Box>

        <Paper
          elevation={4}
          sx={{
            borderRadius: "10px",
            mb: 4,
            overflow: "hidden",
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Pump
            </Typography>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={2.5}>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Pump Capacity :
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Specified Value"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Actual Value"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#a4cffe",
                    color: "black",
                    "&:hover": { bgcolor: "#8bbffd" },
                  }}
                >
                  Convert
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={2.5}>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  System Capacity :
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Specified Value"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Actual Value"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#a4cffe",
                    color: "black",
                    "&:hover": { bgcolor: "#8bbffd" },
                  }}
                >
                  Convert
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={2.5}>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Pump Balancing <br />
                  Valve Position :
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField size="small" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  System Differential <br />
                  Pressure Setpoint :
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField size="small" fullWidth variant="outlined" />
              </Grid>
            </Grid>
          </Box>

          <Divider />

          <Box sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Motor
            </Typography>

            <Typography variant="body1" fontWeight="600" sx={{ mb: 2 }}>
              BHP SINGLE OPERATION
            </Typography>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={2.5}>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  System Capacity :
                </Typography>
              </Grid>
              <Grid item xs={3.5}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Specified Value"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Balanced position :
                </Typography>
              </Grid>
              <Grid item xs={3.5}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Specified Value"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Typography variant="body1" fontWeight="600" sx={{ mb: 2 }}>
              BHP PARALLEL OPERATION
            </Typography>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={2.5}>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  System Capacity :
                </Typography>
              </Grid>
              <Grid item xs={3.5}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Specified Value"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Balanced position :
                </Typography>
              </Grid>
              <Grid item xs={3.5}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Specified Value"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>

          <Divider />

          <Box sx={{ p: 3 }}>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Flow meter"
                  sx={{ "& .MuiTypography-root": { fontSize: "0.875rem" } }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Three Phase BHP Calculator"
                  sx={{ "& .MuiTypography-root": { fontSize: "0.875rem" } }}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>

        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Comments :
        </Typography>

        <TextField
          fullWidth
          multiline
          rows={6}
          placeholder="Enter your comments"
          variant="outlined"
          sx={{
            mb: 2,
            bgcolor: "#f2f4f5",
            "& .MuiOutlinedInput-root": {
              borderRadius: "5px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            },
          }}
        />

        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
          *Represents[Your meaning 1]
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          **Represents[Your meaning 2]
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button
            variant="outlined"
            sx={{
              borderRadius: "10px",
              width: 91,
              height: 42,
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              bgcolor: "#99caff",
              color: "black",
              "&:hover": { bgcolor: "#7bbcff" },
              width: 250,
              height: 42,
            }}
          >
            Submit & Generate Report
          </Button>
        </Stack>
      </Box>
  );
};

export default PumpPerformance;

