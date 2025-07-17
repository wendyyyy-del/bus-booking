export default function BusCard({ bus, onBook }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{bus.name}</h3>
      <p>From: {bus.from}</p>
      <p>To: {bus.to}</p>
      <p>Seats: {bus.seats_available}</p>
      <button
        className="mt-2 bg-green-500 text-white px-4 py-1 rounded"
        onClick={() => onBook(bus.id)}
      >
        Book
      </button>
    </div>
  );
}
