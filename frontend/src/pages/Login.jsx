import React, { useState } from "react";
import { Box, Card, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Card sx={{ p: 4, width: 400, boxShadow: 8, borderRadius: 2 }}>
        <Typography variant="h5" mb={3} fontWeight="bold">
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
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography mt={2}>
          Don't have an account?{" "}
          <Link href="/signup" underline="hover">
            Signup
          </Link>
        </Typography>
      </Card>
    </Box>
  );
}
