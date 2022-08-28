import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import HotelCard from "./HotelCard.jsx";

const serverURL = import.meta.env.PUBLIC_API_URL;

export default function Hotels() {
  const [hoteslInfoState, setHotelsInfoState] = useState([]);
  const [isHotelDataLoading, setIsHotelDataLoading] = useState(true);

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
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        List of available hotels
      </Typography>
      {!isHotelDataLoading ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {hoteslInfoState.map((doc, index) => (
              <Grid item xs="auto" sm="auto" md={6} key={index}>
                <HotelCard props={doc}></HotelCard>
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
