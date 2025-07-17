import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { register as registerUser } from "../api";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "customer" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(formData);
    console.log(res);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20">
      <h2 className="text-2xl mb-4">Register</h2>
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="border p-2 w-full mb-4"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-4"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-4"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <Button type="submit">Register</Button>
    </form>
  );
}
