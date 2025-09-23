import React, { useState } from "react";
import { Box, Card, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8085/api/auth/login", { email, password });
      if (!res.data) return alert("Invalid credentials");
      if (res.data.role === "student") navigate("/student");
      else if (res.data.role === "tutor") navigate("/tutor");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Half - Hero/Illustration */}
      <Box
        sx={{
          flex: 1,
          background: 'linear-gradient(to right, #667eea, #764ba2)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 5
        }}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Typography variant="h2" fontWeight="bold" mb={2} textAlign="center">
            Welcome Back!
          </Typography>
          <Typography variant="h6" textAlign="center" color="#e0e0e0">
            Login to find the best tutors or manage your students.
          </Typography>
        </motion.div>
      </Box>

      {/* Right Half - Login Form */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#f5f5f5',
          p: 5
        }}
      >
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Card sx={{ p: 6, width: '100%', maxWidth: 450, borderRadius: 4, boxShadow: 15 }}>
            <Typography variant="h4" mb={2} fontWeight="bold" textAlign="center">
              Login
            </Typography>
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
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, py: 1.5 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Typography mt={2} textAlign="center">
              Don't have an account?{" "}
              <Link href="/signup" underline="hover">
                Signup
              </Link>
            </Typography>
          </Card>
        </motion.div>
      </Box>
    </Box>
  );
}
