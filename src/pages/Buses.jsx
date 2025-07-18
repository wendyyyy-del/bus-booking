import React, { useEffect, useState } from "react";
import BusCard from "../components/BusCard";



export default function Buses() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const dummyBuses = [
      { id: 1, name: "Modern Coast", route: "Nairobi - Mombasa", time: "08:00 AM", price: 1200, availableSeats: 10,  },
      { id: 2, name: "Easy Coach", route: "Nairobi - Kisumu", time: "07:30 AM", price: 1500, availableSeats: 5, },
      { id: 3, name: "Dreamline Express", route: "Nairobi - Eldoret", time: "09:00 AM", price: 1300, availableSeats: 12 },
      { id: 4, name: "Tahmeed", route: "Nairobi - Malindi", time: "10:00 AM", price: 1600, availableSeats: 8 },
      { id: 5, name: "Guardian Angel", route: "Nairobi - Kakamega", time: "06:30 AM", price: 1400, availableSeats: 15 },
      { id: 6, name: "Coast Bus", route: "Nairobi - Ukunda", time: "11:00 AM", price: 1700, availableSeats: 20 },
      { id: 7, name: "City Hopper", route: "Nairobi - Nakuru", time: "01:00 PM", price: 900, availableSeats: 18 },
      { id: 8, name: "Transline", route: "Nairobi - Bungoma", time: "03:00 PM", price: 1400, availableSeats: 9 },
      { id: 9, name: "Mash Poa", route: "Nairobi - Mombasa", time: "05:00 PM", price: 1800, availableSeats: 7 },
      { id: 10, name: "North Rift", route: "Nairobi - Kitale", time: "06:00 PM", price: 1550, availableSeats: 11 },
      { id: 11, name: "Greenline", route: "Nairobi - Meru", time: "08:15 AM", price: 1250, availableSeats: 13 },
      { id: 12, name: "Nairobi Shuttle", route: "Nairobi - Narok", time: "09:45 AM", price: 800, availableSeats: 16 },
      { id: 13, name: "Periska", route: "Nairobi - Kisii", time: "07:00 AM", price: 1350, availableSeats: 6 },
      { id: 14, name: "Mashinani Sacco", route: "Nairobi - Machakos", time: "06:00 AM", price: 400, availableSeats: 22 },
      { id: 15, name: "Super Metro", route: "Nairobi - Thika", time: "12:00 PM", price: 250, availableSeats: 25 },
      { id: 16, name: "Metro Trans", route: "Nairobi - Rongai", time: "02:00 PM", price: 200, availableSeats: 30 },
      { id: 17, name: "Kenya Mpya", route: "Nairobi - Limuru", time: "04:00 PM", price: 300, availableSeats: 17 },
      { id: 18, name: "Bus Station Express", route: "Mombasa - Nairobi", time: "07:00 AM", price: 1250, availableSeats: 12 },
      { id: 19, name: "Safarilink Shuttle", route: "Nakuru - Nairobi", time: "10:30 AM", price: 900, availableSeats: 14 },
      { id: 20, name: "Malindi Express", route: "Malindi - Nairobi", time: "11:00 AM", price: 1550, availableSeats: 10 },
      { id: 21, name: "Rift Valley Transit", route: "Eldoret - Nairobi", time: "06:30 AM", price: 1200, availableSeats: 16 },
      { id: 22, name: "Western Star", route: "Kakamega - Nairobi", time: "08:00 AM", price: 1300, availableSeats: 9 },
      { id: 23, name: "Lake Victoria Coach", route: "Kisumu - Nairobi", time: "09:00 AM", price: 1500, availableSeats: 11 },
      { id: 24, name: "Nyeri Shuttle", route: "Nyeri - Nairobi", time: "10:00 AM", price: 800, availableSeats: 20 },
      { id: 25, name: "Meru Express", route: "Meru - Nairobi", time: "07:45 AM", price: 1100, availableSeats: 15 },
      { id: 26, name: "Thika Link", route: "Thika - Nairobi", time: "01:00 PM", price: 300, availableSeats: 18 },
      { id: 27, name: "Kisii Shuttle", route: "Kisii - Nairobi", time: "03:00 PM", price: 1350, availableSeats: 13 },
      { id: 28, name: "Busia Express", route: "Busia - Nairobi", time: "05:00 PM", price: 1500, availableSeats: 8 },
      { id: 29, name: "Kitale Transit", route: "Kitale - Nairobi", time: "06:15 PM", price: 1550, availableSeats: 10 },
      { id: 30, name: "Nanyuki Shuttle", route: "Nanyuki - Nairobi", time: "08:30 AM", price: 1200, availableSeats: 14 },
      { id: 31, name: "Isiolo Express", route: "Isiolo - Nairobi", time: "09:30 AM", price: 1400, availableSeats: 11 },
      { id: 32, name: "Garissa Transit", route: "Garissa - Nairobi", time: "10:45 AM", price: 1700, availableSeats: 7 },
      { id: 33, name: "Wajir Link", route: "Wajir - Nairobi", time: "11:15 AM", price: 1800, availableSeats: 6 },
      { id: 34, name: "Embu Express", route: "Embu - Nairobi", time: "12:30 PM", price: 900, availableSeats: 12 },
      { id: 35, name: "Marsabit Transit", route: "Marsabit - Nairobi", time: "01:45 PM", price: 1900, availableSeats: 5 },
    ];

    setBuses(dummyBuses);
  }, []);

  const handleBook = (busId) => {
    setBuses((prevBuses) =>
      prevBuses.map((bus) =>
        bus.id === busId && bus.availableSeats > 0
          ? { ...bus, availableSeats: bus.availableSeats - 1 }
          : bus
      )
    );
    alert(`Successfully booked a seat on bus ID: ${busId}`);
  };

  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {buses.map((bus) => (
        <BusCard key={bus.id} bus={bus} onBook={handleBook} />
      ))}
    </section>
  );
}
