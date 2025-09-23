import React from "react";
import { Box, Typography, Card, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function StudentDashboard() {
  const cards = [
    { title: "Browse Tutors", action: "Browse Tutors" },
    { title: "My Sessions", action: "View Sessions" },
    { title: "Profile", action: "Edit Profile" },
    { title: "Messages", action: "Check Messages" }
  ];

  return (
    <Box sx={{ minHeight: '100vh', p: 5, background: 'linear-gradient(to right, #43e97b, #38f9d7)' }}>
      <Typography variant="h3" mb={5} fontWeight="bold" color="#fff" textAlign="center">
        Welcome, Student!
      </Typography>

      <Grid container spacing={4}>
        {cards.map((card, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }}>
              <Card sx={{ p: 4, borderRadius: 3, boxShadow: 10, textAlign: 'center', backgroundColor: '#fff' }}>
                <Typography variant="h6" mb={2}>{card.title}</Typography>
                <Button variant="contained" color="primary">{card.action}</Button>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
