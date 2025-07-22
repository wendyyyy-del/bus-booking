import React from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";

export default function BookingFormPage() {
  const navigate = useNavigate();

  
  const handleSearch = (formData) => {
    
    navigate("/buses", { state: { searchParams: formData } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <BookingForm onSearch={handleSearch} />
    </div>
  );
}
