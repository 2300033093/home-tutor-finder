import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import TutorDashboard from "./pages/TutorDashboard.jsx";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/student" element={<StudentDashboard user={user} setUser={setUser} />} />
        <Route path="/tutor" element={<TutorDashboard user={user} setUser={setUser} />} />
      </Routes>
    </Router>
  );
}
