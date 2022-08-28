import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function HotelCard(info) {
  const doc = info.props;
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`${doc.title}`}
          </Typography>
          <Typography variant="h6" component="div">
            {`${doc.name}`}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {`${doc.address}`}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5 }}>
            Url: {`${doc.url}`}
            <br />
            Price: {`${doc.price}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
