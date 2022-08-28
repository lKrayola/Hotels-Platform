import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

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
      {!isHotelDataLoading ? (
        hoteslInfoState.map((doc, index) => {
          return (
            <div key={index} className="flex items-start">
              {/* <a> {`${doc.title}`} </a> */}
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
              <a> -------- </a>
            </div>
          );
        })
      ) : (
        <div>
          <a>Loading hotels...</a>
        </div>
      )}
    </>
  );
}
