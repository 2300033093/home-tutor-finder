import React, { useState } from "react";
import { Box, Card, TextField, Button, Typography, MenuItem, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:8085/api/auth/signup", {
        name,
        email,
        password,
        role,
        status: "active",
      });
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert("Signup failed: " + (err.response?.data || err.message));
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Violet Fill */}
      <Box
        sx={{
          flex: 1,
          background: "linear-gradient(to right, #667eea, #764ba2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 5
        }}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Typography variant="h2" fontWeight="bold" color="#fff" textAlign="center">
            Join HomeTutor Finder
          </Typography>
          <Typography variant="h6" color="#e0e0e0" mt={2} textAlign="center">
            Create your account and start your journey
          </Typography>
        </motion.div>
      </Box>

      {/* Right - Form */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f5",
          p: 5
        }}
      >
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Card sx={{ p: 6, width: "100%", maxWidth: 450, borderRadius: 4, boxShadow: 15 }}>
            <Typography variant="h4" mb={2} fontWeight="bold" textAlign="center">
              Signup
            </Typography>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              select
              label="Role"
              fullWidth
              margin="normal"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="tutor">Tutor</MenuItem>
            </TextField>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, py: 1.5 }}
              onClick={handleSignup}
            >
              Signup
            </Button>
            <Typography mt={2} textAlign="center">
              Already have an account?{" "}
              <Link href="/login" underline="hover">
                Login
              </Link>
            </Typography>
          </Card>
        </motion.div>
      </Box>
    </Box>
  );
}
