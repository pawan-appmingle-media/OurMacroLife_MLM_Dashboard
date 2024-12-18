import {
  Button,
  Chip,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import CommonHeader from "../commonHeader/CommonHeader.jsx";

const PaymentManagement = () => {
  const [filters, setFilters] = useState({
    status: "all",
    level: "all",
    dateRange: "",
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const transactions = [
    {
      id: "TXN12345",
      user: "John Doe",
      level: 2,
      coins: 50,
      date: "2024-12-15",
      status: "Success",
    },
    {
      id: "TXN67890",
      user: "Jane Smith",
      level: 1,
      coins: -20,
      date: "2024-12-14",
      status: "Failed",
    },
    {
      id: "TXN54321",
      user: "Alice Brown",
      level: 3,
      coins: 100,
      date: "2024-12-12",
      status: "Pending",
    },
  ];

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredTransactions = transactions.filter((txn) => {
    const matchesStatus =
      filters.status === "all" || txn.status.toLowerCase() === filters.status;
    const matchesLevel =
      filters.level === "all" || txn.level === parseInt(filters.level);
    // Additional filter logic for dateRange can go here
    return matchesStatus && matchesLevel;
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <CommonHeader name="Payments" />

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <TextField
          label="Date Range"
          type="date"
          size="small"
          onChange={(e) => handleFilterChange("dateRange", e.target.value)}
        />

        <Select
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          size="small"
          displayEmpty
        >
          <MenuItem value="all">All Status</MenuItem>
          <MenuItem value="success">Success</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="failed">Failed</MenuItem>
        </Select>

        <Select
          value={filters.level}
          onChange={(e) => handleFilterChange("level", e.target.value)}
          size="small"
          displayEmpty
        >
          <MenuItem value="all">All Levels</MenuItem>
          <MenuItem value="1">Level 1</MenuItem>
          <MenuItem value="2">Level 2</MenuItem>
          <MenuItem value="3">Level 3</MenuItem>
        </Select>

        <Button
          variant="contained"
          startIcon={<FaFilter />}
          className="bg-blue-600 text-white"
        >
          Apply Filters
        </Button>
      </div>

      {/* Transactions Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Level</TableCell>
              <TableCell>Coins</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTransactions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell>{txn.id}</TableCell>
                  <TableCell>{txn.user}</TableCell>
                  <TableCell>{txn.level}</TableCell>
                  <TableCell>{txn.coins}</TableCell>
                  <TableCell>{txn.date}</TableCell>
                  <TableCell>
                    <Chip
                      label={txn.status}
                      color={
                        txn.status === "Success"
                          ? "success"
                          : txn.status === "Pending"
                          ? "warning"
                          : "error"
                      }
                    />
                  </TableCell>
                  <TableCell>
                    {txn.status === "Failed" ? (
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        className="mr-2"
                      >
                        Retry
                      </Button>
                    ) : null}
                    <Button variant="outlined" size="small">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {/* Table Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredTransactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default PaymentManagement;
