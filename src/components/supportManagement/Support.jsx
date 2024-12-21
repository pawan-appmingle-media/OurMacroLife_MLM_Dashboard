import { Search, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CommonHeader from "../commonHeader/CommonHeader";

const Support = () => {
  return (
    <>
      <div className="max-w-full mx-auto p-4">
        <CommonHeader name="Support" />
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
            <Typography variant="h4">Customer Support</Typography>
            <TextField
              size="small"
              placeholder="Search Tickets"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <Search />
                  </IconButton>
                ),
              }}
            />
          </Box>

          {/* Support Ticket Form */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Submit a New Ticket
              </Typography>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField
                  label="Customer Name"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <TextField
                  label="Issue Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  size="small"
                />
                <Button
                  variant="contained"
                  startIcon={<Send />}
                  color="primary"
                >
                  Submit Ticket
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Tickets Table */}
          <Typography variant="h6" gutterBottom>
            Recent Tickets
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Ticket ID</TableCell>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Issue</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>#12345</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john.doe@example.com</TableCell>
                  <TableCell>Login Issue</TableCell>
                  <TableCell>Open</TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small" color="primary">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>#12346</TableCell>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>jane.smith@example.com</TableCell>
                  <TableCell>Payment Failed</TableCell>
                  <TableCell>Resolved</TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small" color="primary">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
};

export default Support;
