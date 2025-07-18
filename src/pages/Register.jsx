import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { register as registerUser } from "../api";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await registerUser(formData);
      console.log(res);
      if (res.success) {
        navigate("/login");
      } else {
        setError(res.message || "Registration failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow-md"
      aria-label="Register form"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Register</h2>

      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      <label htmlFor="name" className="block mb-1 font-medium">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your full name"
        required
        className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={formData.name}
        onChange={handleChange}
        autoComplete="name"
        aria-required="true"
      />

      <label htmlFor="email" className="block mb-1 font-medium">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email address"
        required
        className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={formData.email}
        onChange={handleChange}
        autoComplete="email"
        aria-required="true"
      />

      <label htmlFor="password" className="block mb-1 font-medium">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Create a password"
        required
        className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={formData.password}
        onChange={handleChange}
        autoComplete="new-password"
        aria-required="true"
      />

      <label htmlFor="role" className="block mb-1 font-medium">
        Role
      </label>
      <select
        id="role"
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="border p-3 w-full mb-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="customer">Customer</option>
        <option value="driver">Driver</option>
        <option value="admin">Admin</option>
      </select>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
