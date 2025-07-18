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

export const fetchBuses = () =>
  fetch(`${API_URL}/api/buses`).then((res) => res.json());

// Optional: Fetch bookings for current logged-in user
export const fetchBookings = () =>
  fetch(`${API_URL}/api/bookings`, {
    headers: {
      "Content-Type": "application/json",
      // Add auth token header if needed, e.g.
      // Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

// Optional: Add a new booking
export const addBooking = (bookingData) =>
  fetch(`${API_URL}/api/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingData),
  }).then((res) => res.json());

// Optional: Update a booking by ID
export const updateBooking = (id, updateData) =>
  fetch(`${API_URL}/api/bookings/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  }).then((res) => res.json());

// Optional: Delete a booking by ID
export const deleteBooking = (id) =>
  fetch(`${API_URL}/api/bookings/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
