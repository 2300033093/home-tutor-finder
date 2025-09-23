import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";

export default function TutorDashboard() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ background: "linear-gradient(135deg, #ff758c, #ff7eb3)", p: 3 }}
    >
      <Card sx={{ p: 5, borderRadius: 3, boxShadow: 10, textAlign: "center" }}>
        <Typography variant="h4" mb={2} fontWeight="bold">
          Welcome, Tutor!
        </Typography>
        <Typography variant="body1" mb={3} color="gray">
          Manage your sessions, track students, and update your profile.
        </Typography>
        <Button variant="contained" color="primary">
          Manage Sessions
        </Button>
      </Card>
    </Box>
  );
}
