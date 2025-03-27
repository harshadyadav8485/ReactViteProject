import { Card, CardContent, Typography, Grid, Container, LinearProgress, IconButton, Tooltip,Button, Box } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate(); // Initialize navigation

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
                { label: "Actual Data", value: 0, color: "primary" },
                { label: "Test Data", value: 0, color: "secondary" },
                { label: "Pump Performance", value: 0, color: "success" },
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
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => navigate("/createPump")}
              >
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
                            <Tooltip title={subCard.name === "P-06-07A" ? "Click here to fill actual data" : ""}>
                              <Card
                                sx={{
                                  p: 1,
                                  boxShadow: 1,
                                  cursor: "pointer",
                                  position: "relative",
                                }}
                                onClick={() => navigate(`/actualPump?id=${subCard.id}`)}
                              >
                                <CardContent>
                                  <Typography variant="subtitle2" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    {subCard.name}
                                    {/* Add Edit Button with Tooltip for P-06-07A */}
                                    {subCard.name === "P-06-07A" && (
                                      <Tooltip title="Edit Pump Data">
                                        <IconButton
                                          size="small"
                                          onClick={(e) => {
                                            e.stopPropagation(); // Prevent card click
                                            navigate(`/pumpCreation?id=${subCard.id}`);
                                          }}
                                        >
                                          <Edit fontSize="small" />
                                        </IconButton>
                                      </Tooltip>
                                    )}
                                  </Typography>
                                  {subCard.progressList.map((progressItem) => (
                                    <div key={progressItem.label}>
                                      <Typography variant="body2" color="text.secondary">
                                        {progressItem.label}
                                      </Typography>
                                      <LinearProgress
                                        variant="determinate"
                                        value={progressItem.value}
                                        color="error" // Set all progress bars to red
                                        sx={{ mb: 1 }}
                                      />
                                    </div>
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
