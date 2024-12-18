import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { FaUser } from "react-icons/fa";
import { PiHandCoinsBold } from "react-icons/pi";

import CommonHeader from "../commonHeader/CommonHeader";

const teamsData = [
  { id: 1, teamName: "Team 1", coins: 1200, members: 5 },
  { id: 2, teamName: "Team 2", coins: 950, members: 4 },
  { id: 3, teamName: "Team 3", coins: 500, members: 3 },
  { id: 4, teamName: "Team 4", coins: 1300, members: 6 },
];

const Teams = () => {
  return (
    <div className="p-4">
      <CommonHeader name="Teams" />
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={3}>
          {teamsData.map((team) => (
            <Grid item xs={12} sm={6} md={3} key={team.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <FaUser style={{ marginRight: 8 }} /> {team.teamName}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      <PiHandCoinsBold style={{ marginRight: 8 }} /> Coins:{" "}
                      {team.coins}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Members: {team.members}
                    </Typography>
                  </Box>
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
