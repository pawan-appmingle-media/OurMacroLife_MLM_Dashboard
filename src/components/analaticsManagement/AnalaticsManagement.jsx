import { BarChart, PieChart, Refresh, ShowChart } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import CommonHeader from "../commonHeader/CommonHeader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalaticsManagement = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 3000, 5000, 20000, 30000],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };
  return (
    <>
      <div className="max-w-full mx-auto p-4">
        <CommonHeader name="Analatics Management" />

        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h4">Analytics Management</Typography>
            <IconButton color="primary">
              <Refresh />
            </IconButton>
          </Box>

          {/* Overview Cards */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Revenue</Typography>
                  <Typography variant="h4" color="primary">
                    $120,000
                  </Typography>
                  <BarChart color="primary" fontSize="large" />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Users</Typography>
                  <Typography variant="h4" color="secondary">
                    25,000
                  </Typography>
                  <ShowChart color="secondary" fontSize="large" />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Sales</Typography>
                  <Typography variant="h4" color="success">
                    8,000
                  </Typography>
                  <PieChart color="success" fontSize="large" />
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Chart Section */}
          <Box sx={{ mt: 4, width: "40%" }}>
            <Typography variant="h6" gutterBottom>
              Revenue Trends
            </Typography>
            <Line data={data} />
          </Box>

          {/* Data Table */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Key Metrics
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Metric</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Change</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Monthly Revenue</TableCell>
                    <TableCell>$20,000</TableCell>
                    <TableCell>+15%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>New Users</TableCell>
                    <TableCell>5,000</TableCell>
                    <TableCell>+10%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Customer Retention</TableCell>
                    <TableCell>80%</TableCell>
                    <TableCell>-5%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default AnalaticsManagement;
