import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  Grid2,
  CircularProgress,
} from "@mui/material";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        const financialData = response.data.products
          .slice(0, 3)
          .map((product) => ({
            title: product.title,
            amount: `$${product.price * 1000}`, // Converting product price into revenue
          }));
        setReports(financialData);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching reports:", error));
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Reports Overview
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid2 container spacing={3}>
          {reports.map((report, index) => (
            <Grid2 item xs={12} sm={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{report.title}</Typography>
                  <Typography variant="h4">{report.amount}</Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      )}
    </div>
  );
};

export default Reports;
