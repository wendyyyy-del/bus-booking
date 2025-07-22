import React, { useEffect, useState } from "react";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyBookings = [
      {
        id: 1,
        busName: "Kenya Express",
        route: "Nairobi to Mombasa",
        seatNo: 12,
        time: "10:00 AM",
        status: "Confirmed",
      },
      {
        id: 2,
        busName: "Modern Coast",
        route: "Nairobi to Kisumu",
        seatNo: 4,
        time: "2:00 PM",
        status: "Pending",
      },
    ];

  
    setTimeout(() => {
      setBookings(dummyBookings);
      setLoading(false);
    }, 800);
  }, []);

  const handleCancel = (id) => {
    const confirm = window.confirm("Are you sure you want to cancel this booking?");
    if (confirm) {
      // TODO: Call cancel API here
      setBookings(bookings.filter((b) => b.id !== id));
    }
  };

  return (
    <section className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">My Bookings</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading your bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500">You have no bookings yet.</p>
      ) : (
        <ul className="space-y-6 max-w-3xl mx-auto">
          {bookings.map((booking) => (
            <li
              key={booking.id}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md transition hover:shadow-lg"
            >
              <div className="space-y-1 text-sm text-gray-700">
                <p><strong>Bus:</strong> {booking.busName}</p>
                <p><strong>Route:</strong> {booking.route}</p>
                <p><strong>Seat No:</strong> {booking.seatNo}</p>
                <p><strong>Time:</strong> {booking.time}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`font-semibold ${
                      booking.status === "Confirmed" ? "text-green-600" : "text-yellow-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </p>
              </div>

              <button
                onClick={() => handleCancel(booking.id)}
                className="mt-4 inline-block text-red-500 hover:text-red-700 font-semibold text-sm"
              >
                Cancel Booking
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
