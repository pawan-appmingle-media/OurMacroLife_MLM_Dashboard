// import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
// import React from "react";
// import { FaUser } from "react-icons/fa";
// import { PiHandCoinsBold } from "react-icons/pi";

// import CommonHeader from "../commonHeader/CommonHeader";

// const teamsData = [
//   { id: 1, teamName: "Team 1", coins: 1200, members: 5 },
//   { id: 2, teamName: "Team 2", coins: 950, members: 4 },
//   { id: 3, teamName: "Team 3", coins: 500, members: 3 },
//   { id: 4, teamName: "Team 4", coins: 1300, members: 6 },
// ];

// const Teams = () => {
//   return (
//     <div className="p-4">
//       <CommonHeader name="Teams" />
//       <Box sx={{ padding: 2 }}>
//         <Grid container spacing={3}>
//           {teamsData.map((team) => (
//             <Grid item xs={12} sm={6} md={3} key={team.id}>
//               <Card
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <CardContent>
//                   <Typography
//                     variant="h6"
//                     component="div"
//                     sx={{ display: "flex", alignItems: "center" }}
//                   >
//                     <FaUser style={{ marginRight: 8 }} /> {team.teamName}
//                   </Typography>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                       marginTop: 2,
//                     }}
//                   >
//                     <Typography variant="body2" color="text.secondary">
//                       <PiHandCoinsBold style={{ marginRight: 8 }} /> Coins:{" "}
//                       {team.coins}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Members: {team.members}
//                     </Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default Teams;
// import React, { useState } from "react";

// const Teams = () => {
//   const [expandedTeamId, setExpandedTeamId] = useState(null);

//   const teams = [
//     {
//       id: 1,
//       name: "Team Alpha",
//       leader: "John Doe",
//       members: [
//         {
//           id: 1,
//           name: "Jane Smith",
//           level: 2,
//           email: "jane.smith@example.com",
//         },
//         {
//           id: 2,
//           name: "Emily Brown",
//           level: 3,
//           email: "emily.brown@example.com",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Team Beta",
//       leader: "Alice Johnson",
//       members: [
//         {
//           id: 3,
//           name: "Michael Scott",
//           level: 2,
//           email: "michael.scott@example.com",
//         },
//         {
//           id: 4,
//           name: "Pam Beesly",
//           level: 3,
//           email: "pam.beesly@example.com",
//         },
//         {
//           id: 5,
//           name: "Dwight Schrute",
//           level: 1,
//           email: "dwight.schrute@example.com",
//         },
//       ],
//     },
//   ];

//   const toggleExpand = (teamId) => {
//     setExpandedTeamId(expandedTeamId === teamId ? null : teamId);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6">MLM Teams</h1>
//       <div className="space-y-4">
//         {teams.map((team) => (
//           <div
//             key={team.id}
//             className="bg-white p-4 rounded-md shadow-md border"
//           >
//             {/* Team Header */}
//             <div className="flex justify-between items-center">
//               <div>
//                 <h2 className="text-xl font-bold">{team.name}</h2>
//                 <p className="text-gray-600">Leader: {team.leader}</p>
//               </div>
//               <button
//                 className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                 onClick={() => toggleExpand(team.id)}
//               >
//                 {expandedTeamId === team.id ? "Collapse" : "Expand"}
//               </button>
//             </div>

//             {/* Members List */}
//             {expandedTeamId === team.id && (
//               <div className="mt-4 space-y-2">
//                 <h3 className="text-lg font-semibold">Team Members</h3>
//                 <ul className="list-disc pl-6">
//                   {team.members.map((member) => (
//                     <li key={member.id} className="flex justify-between">
//                       <span>
//                         {member.name} (Level {member.level})
//                       </span>
//                       <span className="text-gray-500">{member.email}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Teams;

import {
  Box,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { FaUser } from "react-icons/fa";
import { PiHandCoinsBold } from "react-icons/pi";

import CommonHeader from "../commonHeader/CommonHeader";

const teamsData = [
  {
    id: 1,
    teamName: "Team 1",
    coins: 1200,
    members: [
      { name: "John Doe", email: "john.doe@example.com" },
      { name: "Jane Smith", email: "jane.smith@example.com" },
    ],
  },
  {
    id: 2,
    teamName: "Team 2",
    coins: 950,
    members: [
      { name: "Alice Johnson", email: "alice.johnson@example.com" },
      { name: "Bob Brown", email: "bob.brown@example.com" },
    ],
  },
  {
    id: 3,
    teamName: "Team 3",
    coins: 500,
    members: [{ name: "Emily Davis", email: "emily.davis@example.com" }],
  },
  {
    id: 4,
    teamName: "Team 4",
    coins: 1300,
    members: [
      { name: "Michael Scott", email: "michael.scott@example.com" },
      { name: "Pam Beesly", email: "pam.beesly@example.com" },
      { name: "Dwight Schrute", email: "dwight.schrute@example.com" },
    ],
  },
];

const Teams = () => {
  return (
    <div className="p-4">
      <CommonHeader name="Teams" />
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={3}>
          {teamsData.map((team) => (
            <Grid item xs={12} key={team.id}>
              <Card>
                <CardContent>
                  {/* Team Name */}
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <FaUser style={{ marginRight: 8 }} /> {team.teamName}
                  </Typography>

                  {/* Coins and Member Count */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      <PiHandCoinsBold style={{ marginRight: 8 }} /> Coins:{" "}
                      {team.coins}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Members: {team.members.length}
                    </Typography>
                  </Box>

                  {/* Members Table */}
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <strong>Name</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Email</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {team.members.map((member, index) => (
                        <TableRow key={index}>
                          <TableCell>{member.name}</TableCell>
                          <TableCell>{member.email}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Teams;
