import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white flex justify-between px-6 py-3">
      <div className="flex items-center gap-2">
        🚌 <span className="font-bold text-lg">Bus Booking</span>
      </div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/buses">Buses</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
