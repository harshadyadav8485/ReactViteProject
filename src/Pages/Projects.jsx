import { Card, CardContent, Typography, Grid, Container, LinearProgress, IconButton, Tooltip, Button, Box } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  const projectTitle = "UBC School of Biomedical Engineering";

  const sections = [
    {
      id: "pump",
      title: "Pump",
      cards: [
        {
          id: 1,
        subCards: [
            {
              id: "1a",
              name: "P-06-07A",
              progressList: [
                { label: "Actual Data", value: 100, color: "primary" },
                { label: "Test Data", value: 100, color: "secondary" },
                { label: "Pump Performance", value: 100, color: "success" },
              ],
            },
            { id: "1b", name: "P-06-07B",
              progressList: [
                { label: "Actual Data", value: 0, color: "primary" },
                { label: "Test Data", value: 0, color: "secondary" },
                { label: "Pump Performance", value: 0, color: "success" },
              ],
             },
            { id: "1c", name: "P-06-07C", 
              progressList: [
                { label: "Actual Data", value: 0, color: "primary" },
                { label: "Test Data", value: 0, color: "secondary" },
                { label: "Pump Performance", value: 0, color: "success" },
              ],
             },
          ],
        },
        { id: 2, 
            subCards: [
                {
                  id: "1a",
                  name: "P-06-08A",
                  progressList: [
                    { label: "Actual Data", value: 0, color: "primary" },
                    { label: "Test Data", value: 0, color: "secondary" },
                    { label: "Pump Performance", value: 0, color: "success" },
                  ],
                },
                { id: "1b", name: "P-06-08B",
                  progressList: [
                    { label: "Actual Data", value: 0, color: "primary" },
                    { label: "Test Data", value: 0, color: "secondary" },
                    { label: "Pump Performance", value: 0, color: "success" },
                  ],
                 },
              ],
        },
      ],
    },
    // {
    //   id: "hydraulic",
    //   title: "Hydraulic",
    //   cards: [
    //     { id: 4, 
    //        subCards: [
    //       {
    //         id: "1a",
    //         name: "P-06-07A",
    //         progressList: [
    //           { label: "Actual Data", value: 75, color: "primary" },
    //           { label: "Test Data", value: 60, color: "secondary" },
    //           { label: "Pump Performance", value: 85, color: "success" },
    //         ],
    //       },
    //       { id: "1b", name: "P-06-07B",
    //           progressList: [
    //               { label: "Actual Data", value: 75, color: "primary" },
    //               { label: "Test Data", value: 60, color: "secondary" },
    //               { label: "Pump Performance", value: 85, color: "success" },
    //             ],
    //        },
    //       { id: "1c", name: "P-06-07C", 
    //           progressList: [
    //               { label: "Actual Data", value: 75, color: "primary" },
    //               { label: "Test Data", value: 60, color: "secondary" },
    //               { label: "Pump Performance", value: 85, color: "success" },
    //             ],
    //        },
    //     ],
    //   },
    //   { id: 5, 
    //       subCards: [
    //           {
    //             id: "1a",
    //             name: "P-06-08A",
    //             progressList: [
    //               { label: "Actual Data", value: 75, color: "primary" },
    //               { label: "Test Data", value: 60, color: "secondary" },
    //               { label: "Pump Performance", value: 85, color: "success" },
    //             ],
    //           },
    //           { id: "1b", name: "P-06-08B",
    //               progressList: [
    //                   { label: "Actual Data", value: 75, color: "primary" },
    //                   { label: "Test Data", value: 60, color: "secondary" },
    //                   { label: "Pump Performance", value: 85, color: "success" },
    //                 ],
    //            },
    //         ], 
    //       },
    //   ],
    // },
    // {
    //   id: "air",
    //   title: "Air",
    //   cards: [
    //     { id: 7, name: "Air Project 1", description: "Description of project 1" },
    //     { id: 8, name: "Air Project 2", description: "Description of project 2" },
    //   ],
    // },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom>
        Project Name : {projectTitle}
      </Typography>
      {sections.map((section) => (
        <div key={section.id} style={{ marginBottom: "2rem" }}>
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={() => navigate("/createPumpCreation")}>
              Create Pump
            </Button>
          </Box>
          <Typography variant="h6" gutterBottom>
            {section.title}
          </Typography>
          <Grid container spacing={3}>
            {section.cards.map((card) => (
              <Grid item xs={12} sm={6} key={card.id}>
                <Card sx={{ p: 2, boxShadow: 3 }}>
                  <CardContent>
                    {card.subCards && (
                      <Grid container spacing={1}>
                        {card.subCards.map((subCard) => (
  <Grid item xs={12} sm={4} key={subCard.id}>
    <Tooltip title={`Click here to fill actual data for ${subCard.name}`}>
      <Card
        sx={{ p: 1, boxShadow: 1, cursor: "pointer", position: "relative" }}
        onClick={() => navigate(`/actualPump?id=${subCard.id}`)}
      >
        <CardContent>
          <Typography
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            {subCard.name}
            <Tooltip title="Edit Pump Data">
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/pumpCreation?id=${subCard.id}`);
                }}
              >
                <Edit fontSize="small" />
              </IconButton>
            </Tooltip>
          </Typography>

          {/* Show an underline for each data type */}
          {subCard.progressList.map((progressItem) => (
            <Typography
              key={progressItem.label}
              variant="body2"
              sx={{
                borderBottom: `3px solid ${
                  progressItem.label === "Actual Data" && progressItem.value > 0 ? "green" : "red"
                }`,
                display: "inline-block",
                width: "100%",
                mt: 1,
                pb: 0.5, // Space between text and underline
              }}
            >
              {progressItem.label}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Tooltip>
  </Grid>
))}

                        
                      </Grid>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
}
