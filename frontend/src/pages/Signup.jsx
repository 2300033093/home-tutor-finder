import React, { useState } from "react";
import { Box, Card, TextField, Button, Typography, MenuItem, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    console.error("Signup error:", err); // <-- log full error
    alert("Signup failed: " + (err.response?.data || err.message));
  }
};


  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f5f5f5">
      <Card sx={{ p: 4, width: 400, boxShadow: 8, borderRadius: 2 }}>
        <Typography variant="h5" mb={3} fontWeight="bold">
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
          sx={{ mt: 2 }}
          onClick={handleSignup}
        >
          Signup
        </Button>
        <Typography mt={2}>
          Already have an account?{" "}
          <Link href="/login" underline="hover">
            Login
          </Link>
        </Typography>
      </Card>
    </Box>
  );
}
