const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const register = (data) =>
  fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export const login = (data) =>
  fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export const getBuses = () =>
  fetch(`${API_URL}/api/buses`).then((res) => res.json());
