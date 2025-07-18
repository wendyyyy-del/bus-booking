import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white bg-opacity-80 backdrop-blur-md shadow-lg py-4 px-8 flex justify-between items-center sticky top-0 z-50 animate-fade-in">
      <h1 className="text-3xl font-extrabold text-blue-600 hover:animate-bounce-slow transform transition duration-700 ease-in-out cursor-pointer">
        <Link to="/">BusBooking</Link>
      </h1>
      <div className="flex gap-8">
        {[
          { to: "/", label: "Home" },
          { to: "/buses", label: "Buses" },
          { to: "/bookings", label: "Bookings" },
          { to: "/login", label: "Login" },
          { to: "/register", label: "Register" }
        ].map(({ to, label }) => (
          <Link
            key={label}
            to={to}
            className="relative text-gray-700 font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110 hover:tracking-widest"
          >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 transition-all duration-500 hover:w-full rounded-full"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
