import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      {["Users", "Revenue", "Orders", "Feedback"].map((title, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="h6">
                +{Math.floor(Math.random() * 500)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard; // ✅ Ensure the default export
