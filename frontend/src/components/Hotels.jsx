import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const serverURL = import.meta.env.PUBLIC_API_URL;

export default function Hotels() {
  const [hoteslInfoState, setHotelsInfoState] = useState([]);
  const [isHotelDataLoading, setIsHotelDataLoading] = useState(true);
  const [pageSize, setPageSize] = useState(5);

  async function fetchHotelsInfo() {
    console.log("[DEBUG] FETCHING INFO");
    const hotelsInfoRes = await fetch(`${serverURL}hotels/`, {
      headers: {
        Accept: "json",
      },
      method: "GET",
    });

    const hotelsInfoText = await hotelsInfoRes.json();

    setHotelsInfoState(...hoteslInfoState, hotelsInfoText);
    setIsHotelDataLoading(false);
  }
  useEffect(() => {
    console.log("[DEBUG] Loading component");
    fetchHotelsInfo();
  }, []);

  useEffect(() => {
    console.log("[DEBUG] UPDATED STATE ", hoteslInfoState);
  }, [hoteslInfoState]);

  return (
    <>
      <a>Test App</a>

      {/* <a> {`${doc.title}`} </a> */}
      {!isHotelDataLoading ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {hoteslInfoState.map((doc, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {`${doc.title}`}
                      </Typography>
                      <Typography variant="h6" component="div">
                        {`${doc.name}`}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {`${doc.address}`}
                      </Typography>
                      <Typography variant="body2">
                        {`${doc.url}`}
                        <br />
                        {'"Lorem Ipsum"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <div>
          <a>Loading hotels...</a>
        </div>
      )}
    </>
  );
}
