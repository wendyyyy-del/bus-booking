import React from "react";

export default function BusCard({ bus, onBook }) {
  return (
    <div
      className="
        bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-gray-800
        transition-transform duration-300 ease-in-out
        hover:shadow-2xl hover:scale-[1.05]
        hover:-rotate-3 hover:skew-y-1
        cursor-pointer
        perspective-1000
      "
      style={{ perspective: 1000 }}
    >
      <div className="mb-4">
        <h2 className="text-2xl font-extrabold text-blue-700">{bus.name}</h2>
        <p className="text-sm text-gray-700">Route: {bus.route}</p>
        <p className="text-sm text-gray-700">Departure: {bus.time}</p>
      </div>

      <div className="space-y-1 mb-4">
        <p className="text-sm">
          Price:{" "}
          <span className="font-semibold text-orange-600">KES {bus.price}</span>
        </p>
        <p className="text-sm">
          Available Seats:{" "}
          <span
            className={`font-semibold ${
              bus.availableSeats === 0 ? "text-red-500" : "text-green-700"
            }`}
          >
            {bus.availableSeats}
          </span>
        </p>
      </div>

      <button
        onClick={() => onBook(bus.id)}
        disabled={bus.availableSeats === 0}
        className={`w-full px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${
          bus.availableSeats === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {bus.availableSeats === 0 ? "Fully Booked" : "Book Seat"}
      </button>
    </div>
  );
}
