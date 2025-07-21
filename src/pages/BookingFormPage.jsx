// src/pages/BookingFormPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";

export default function BookingFormPage() {
  const navigate = useNavigate();

  // Called when BookingForm submits valid data
  const handleSearch = (formData) => {
    // For demo, just navigate to buses page passing formData as state
    navigate("/buses", { state: { searchParams: formData } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <BookingForm onSearch={handleSearch} />
    </div>
  );
}
