import React, { useEffect, useState } from "react";

export default function BusCard({ bus, onBook }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`
        bg-orange-100 border-2 border-orange-300 rounded-2xl shadow-lg p-6 text-gray-800
        transform transition-all duration-700 ease-in-out
        ${animate ? "translate-x-0 opacity-100 rotate-0 scale-100" : "translate-x-20 opacity-0 rotate-3 scale-90"}
        hover:shadow-2xl hover:scale-[1.07] hover:-rotate-2 hover:skew-y-1
        cursor-pointer
      `}
      style={{ perspective: 1000 }}
    >
      <div className="mb-4">
        <h2 className="text-2xl font-extrabold text-orange-700 animate-pulse">
          {bus.name}
        </h2>
        <p className="text-sm text-gray-700">Route: {bus.route}</p>
        <p className="text-sm text-gray-700">Departure: {bus.time}</p>
      </div>

      <div className="space-y-1 mb-4">
        <p className="text-sm">
          Price:{" "}
          <span className="font-semibold text-orange-800">KES {bus.price}</span>
        </p>
        <p className="text-sm">
          Available Seats:{" "}
          <span
            className={`font-bold ${
              bus.availableSeats === 0 ? "text-red-600" : "text-green-700"
            }`}
          >
            {bus.availableSeats}
          </span>
        </p>
      </div>

      <button
        onClick={() => onBook(bus.id)}
        disabled={bus.availableSeats === 0}
        className={`w-full px-4 py-2 rounded-md font-bold transition duration-300 ${
          bus.availableSeats === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-orange-600 hover:bg-orange-700 text-white shadow-md hover:shadow-xl"
        }`}
      >
        {bus.availableSeats === 0 ? "Fully Booked" : "Book Seat"}
      </button>
    </div>
  );
}
