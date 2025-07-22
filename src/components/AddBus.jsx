import { useState } from "react";

export default function AddBus({ token }) {
  const [form, setForm] = useState({ route: "", seats: "", price_per_seat: "", schedule_time: "", image_url: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/buses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) alert("Bus added!");
    else alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="route" placeholder="Route" onChange={(e) => setForm({...form, route: e.target.value})} />
      <input name="seats" type="number" placeholder="Seats" onChange={(e) => setForm({...form, seats: e.target.value})} />
      <input name="price_per_seat" type="number" placeholder="Price per seat" onChange={(e) => setForm({...form, price_per_seat: e.target.value})} />
      <input name="schedule_time" type="datetime-local" onChange={(e) => setForm({...form, schedule_time: e.target.value})} />
      <input name="image_url" placeholder="Image URL" onChange={(e) => setForm({...form, image_url: e.target.value})} />
      <button>Add Bus</button>
    </form>
  );
}
