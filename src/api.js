const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5500/api";
console.log("🌐 Using API URL:", API_URL);

// Helper to handle fetch responses
async function handleResponse(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || data.message || "API Error");
  }
  return data;
}

// Register a new user
export const register = (data) =>
  fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(handleResponse);

// Login user
export const login = (data) =>
  fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(handleResponse);

// Fetch all buses (public)
export const fetchBuses = () =>
  fetch(`${API_URL}/buses`).then(handleResponse);

// Fetch bookings for logged-in user (requires token)
export const fetchBookings = (token) =>
  fetch(`${API_URL}/bookings`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);

// Add a new booking (requires token)
export const addBooking = (bookingData, token) =>
  fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookingData),
  }).then(handleResponse);

// Update booking by ID (requires token)
export const updateBooking = (id, updateData, token) =>
  fetch(`${API_URL}/bookings/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updateData),
  }).then(handleResponse);

// Delete booking by ID (requires token)
export const deleteBooking = (id, token) =>
  fetch(`${API_URL}/bookings/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);

// Optional: health check / ping
export const ping = () =>
  fetch(`${API_URL}/ping`).then(handleResponse);
