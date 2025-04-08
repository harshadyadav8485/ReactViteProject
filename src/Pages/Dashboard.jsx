import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const statusData = [
  {
    title: "Not Started",
    count: 5,
    bgColor: "#DC3545",
  },
  {
    title: "In Progress",
    count: 4,
    bgColor: "#FFC107",
  },
  {
    title: "Completed",
    count: 50,
    bgColor: "#28A745",
  },
];

const Dashboard = () => {
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
      <Typography variant="h5" component="h1" fontWeight="bold" sx={{ mb: 2 }}>
        Project Status
      </Typography>

      <Grid container spacing={3}>
        {statusData.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "10px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                position: "relative",
                p: 2,
              }}
            >
              <CardContent sx={{ position: "relative", p: 2 }}>
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
                    {item.title}
                  </Typography>
                  <FiberManualRecordIcon
                    sx={{ color: item.bgColor }}
                    fontSize="small"
                  />
                </Box>
                <Typography
                  variant="h4"
                  component="div"
                  fontWeight="bold"
                  fontFamily="Poppins, sans-serif"
                  sx={{ mt: 1 }}
                >
                  {item.count}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
