import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token"); // Adjust if using Redux
  // Removed role since it's not used

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="bg-white bg-opacity-80 backdrop-blur-md shadow-lg py-4 px-8 flex justify-between items-center sticky top-0 z-50 animate-fade-in">
      <h1 className="text-3xl font-extrabold text-blue-600 hover:animate-bounce-slow transform transition duration-700 ease-in-out cursor-pointer">
        <Link to="/">BusBooking</Link>
      </h1>

      <div className="flex gap-8">
        <Link
          to="/"
          className="relative text-gray-700 font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110 hover:tracking-widest"
        >
          Home
        </Link>
        <Link
          to="/buses"
          className="relative text-gray-700 font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110 hover:tracking-widest"
        >
          Buses
        </Link>

        {token ? (
          <>
            <Link
              to="/bookings"
              className="relative text-gray-700 font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110 hover:tracking-widest"
            >
              Bookings
            </Link>
            <button
              onClick={handleLogout}
              className="relative text-red-500 font-semibold transition-all duration-300 hover:text-red-700 hover:scale-110 hover:tracking-widest"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="relative text-gray-700 font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110 hover:tracking-widest"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="relative text-gray-700 font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110 hover:tracking-widest"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
