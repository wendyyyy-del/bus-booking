import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-50">
      <h1 className="text-6xl font-extrabold text-red-600 mb-6 animate-pulse">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! Page Not Found</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </section>
  );
}
