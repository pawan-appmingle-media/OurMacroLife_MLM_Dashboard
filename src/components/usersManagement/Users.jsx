import {
  Box,
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CommonHeader from "../commonHeader/CommonHeader";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      level: 1,
      totalPurchases: 350,
      coinsEarned: 35,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+0987654321",
      level: 2,
      totalPurchases: 200,
      coinsEarned: 20,
    },
    {
      id: 3,
      name: "Emily Brown",
      email: "emily.brown@example.com",
      phone: "+1122334455",
      level: 3,
      totalPurchases: 500,
      coinsEarned: 50,
    },
    {
      id: 4,
      name: "Michael Green",
      email: "michael.green@example.com",
      phone: "+1231231234",
      level: 4,
      totalPurchases: 600,
      coinsEarned: 60,
    },
    // Add more sample users as needed
  ];

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box p={4}>
      <CommonHeader name="Users" />

      <Box py={4}>
        {/* Search Bar */}
        <Box mb={2}>
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </Box>

        {/* Users Table */}
        <Paper>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Level</TableCell>
                  <TableCell>Total Purchases</TableCell>
                  <TableCell>Coins Earned</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => (
                    <TableRow key={user.id} hover>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>Level {user.level}</TableCell>
                      <TableCell>₹{user.totalPurchases}</TableCell>
                      <TableCell>{user.coinsEarned} Coins</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => setSelectedUser(user)}
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>

      {/* Single User Preview Modal */}
      <SingleUserPreview
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </Box>
  );
};

const SingleUserPreview = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <Modal open={Boolean(user)} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          User Details
        </Typography>
        <Typography>
          <strong>Name:</strong> {user.name}
        </Typography>
        <Typography>
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography>
          <strong>Phone:</strong> {user.phone}
        </Typography>
        <Typography>
          <strong>Level:</strong> {user.level}
        </Typography>
        <Typography>
          <strong>Total Purchases:</strong> ₹{user.totalPurchases}
        </Typography>
        <Typography>
          <strong>Coins Earned:</strong> {user.coinsEarned} Coins
        </Typography>
        <Box mt={2} textAlign="right">
          <Button variant="contained" color="primary" onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Users;
