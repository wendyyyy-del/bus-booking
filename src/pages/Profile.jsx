import React, { useEffect, useState } from "react";

export default function Profile() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("⚠️ You must login to view your bookings.");
      setLoading(false);
      return;
    }

    fetch("http://localhost:5000/api/bookings", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load bookings");
        return res.json();
      })
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading your bookings...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-orange-700">Your Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-600">You have no bookings yet.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((b) => (
            <li key={b.booking_id} className="border p-4 rounded shadow flex flex-col md:flex-row gap-4">
              <img
                src={`http://localhost:5000${b.image_url}`}
                alt={b.bus_name}
                className="w-40 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <p><strong>Bus:</strong> {b.bus_name}</p>
                <p><strong>Route:</strong> {b.route}</p>
                <p><strong>Seats Booked:</strong> {b.seats_booked}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
