import { useEffect, useState } from "react";
import { getBuses } from "../api";
import BusCard from "../components/BusCard";

export default function Buses() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    getBuses().then(setBuses);
  }, []);

  const handleBook = (busId) => {
    alert(`Booked bus with ID: ${busId}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Available Buses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {buses.map((bus) => (
          <BusCard key={bus.id} bus={bus} onBook={handleBook} />
        ))}
      </div>
    </div>
  );
}
