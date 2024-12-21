import { Add, FilterList, Search } from "@mui/icons-material";
import {
  Box,
  Button,
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
  TextField,
  Typography,
} from "@mui/material";

const Finance = () => {
  return (
    <>
      <div className="max-w-full p-4">
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
              paddingBottom: "5px",
              borderBottom: "2px solid lightgray",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Finance Management
            </Typography>
            <Box>
              <TextField
                size="small"
                placeholder="Search Transactions"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <Search />
                    </IconButton>
                  ),
                }}
                sx={{ mr: 2 }}
              />
              <Button
                variant="contained"
                startIcon={<FilterList />}
                sx={{ mr: 2 }}
              >
                Filter
              </Button>
              <Button variant="contained" startIcon={<Add />} color="primary">
                Add Transaction
              </Button>
            </Box>
          </Box>

          {/* Summary Cards */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Income</Typography>
                  <Typography variant="h5" color="primary">
                    ₹50,000
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Expenses</Typography>
                  <Typography variant="h5" color="error">
                    ₹15,000
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Pending Commissions</Typography>
                  <Typography variant="h5" color="warning">
                    ₹10,000
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Net Profit</Typography>
                  <Typography variant="h5" color="success">
                    ₹25,000
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Transactions Table */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Recent Transactions
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-12-15</TableCell>
                    <TableCell>Commission Payout</TableCell>
                    <TableCell>Income</TableCell>
                    <TableCell>₹2,000</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-12-14</TableCell>
                    <TableCell>Office Supplies</TableCell>
                    <TableCell>Expense</TableCell>
                    <TableCell>₹500</TableCell>
                    <TableCell>Pending</TableCell>
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

export default Finance;
