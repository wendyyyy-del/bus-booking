import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://images.pexels.com/photos/30661414/pexels-photo-30661414.jpeg",
  "https://images.pexels.com/photos/31102079/pexels-photo-31102079.jpeg",
  "https://images.pexels.com/photos/30661393/pexels-photo-30661393.jpeg",
];

const SLIDE_DURATION = 4500;
const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 360;

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((i) => (i + 1) % images.length),
      SLIDE_DURATION
    );
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  return (
    <section
      className="relative flex flex-col items-center justify-start min-h-screen text-center px-4 bg-gradient-to-b from-white to-orange-50 overflow-x-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Image Slider */}
      <div
        role="region"
        aria-label="Image slider"
        className="relative w-full flex justify-center mb-10 mt-20"
        style={{ height: IMAGE_HEIGHT, minHeight: IMAGE_HEIGHT }}
      >
        {images.map((src, i) => {
          const isCurrent = i === currentIndex;
          const transformStyle = isCurrent
            ? "translateX(-50%) rotateY(0deg)"
            : "translateX(-50%) rotateY(180deg)";

          return (
            <img
              key={i}
              src={src}
              alt={`Matatu ${i + 1}`}
              className={`
                absolute top-0 left-1/2 transform -translate-x-1/2
                transition-transform duration-[1600ms] ease-in-out rounded-2xl
                ${isCurrent ? "opacity-100 z-20" : "opacity-0 z-10"}
              `}
              style={{
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                objectFit: "cover",
                backfaceVisibility: "hidden",
                willChange: "transform, opacity",
                imageRendering: "auto",
                transformStyle: "preserve-3d",
                transform: transformStyle,
                opacity: isCurrent ? 1 : 0,
                boxShadow: isCurrent
                  ? "0 0 20px 8px rgba(251, 86, 7, 0.7)"
                  : "none",
              }}
              loading="lazy"
              decoding="async"
            />
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mb-8">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-orange-500 scale-125" : "bg-blue-200"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <h1 className="text-4xl md:text-5xl font-heading text-blue-700 font-bold drop-shadow-sm mb-4 animate-fade-in">
        Welcome to <span className="text-orange-500">BusBooking Kenya</span>
      </h1>
      <p className="text-gray-700 text-lg max-w-xl mb-6 animate-fade-in delay-100">
        Your trusted platform for booking bus tickets across Kenya — fast, easy,
        and reliable.
      </p>

      <Link
        to="/buses"
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-500 transition-all duration-300 ease-in-out hover:scale-105"
      >
        View Buses
      </Link>
    </section>
  );
}
