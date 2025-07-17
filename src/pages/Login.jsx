import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { login } from "../api";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(formData);
    console.log(res);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20">
      <h2 className="text-2xl mb-4">Login</h2>
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
      <Button type="submit">Login</Button>
    </form>
  );
}
