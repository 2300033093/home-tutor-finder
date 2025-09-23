// components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black/30 backdrop-blur-lg border-b border-white/20">
      <Link to="/" className="text-2xl font-bold text-white tracking-wide">
        TutorFinder
      </Link>

      {user ? (
        <div className="flex items-center space-x-6 text-white">
          <div className="text-right">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-300">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white font-semibold"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex space-x-4">
          <Link to="/login" className="hover:text-purple-300">
            Login
          </Link>
          <Link to="/signup" className="hover:text-purple-300">
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}
