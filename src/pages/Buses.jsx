import React, { useEffect, useState } from "react";
import BusCard from "../components/BusCard";

export default function Buses() {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5500/api/buses/") // 🔍 check this port & path!
      .then((res) => res.json())
      .then((data) => {
        setBuses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load buses");
        setLoading(false);
      });
  }, []);

  const handleBook = (busId, seats) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to login first");
      return;
    }

    fetch("http://localhost:5500/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ bus_id: busId, seats }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Booking failed");
        return res.json();
      })
      .then((data) => {
        alert(data.message || "Booking successful");

        // Optionally update the seats left in state
        setBuses((prev) =>
          prev.map((bus) =>
            bus.id === busId
              ? { ...bus, availableSeats: Math.max(0, bus.availableSeats - seats) }
              : bus
          )
        );
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  };

  if (loading) return <p>Loading buses...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {buses.map((bus) => (
        <BusCard
          key={bus.id}
          bus={bus}
          onBook={handleBook} // ✅ pass this
        />
      ))}
    </section>
  );
}
