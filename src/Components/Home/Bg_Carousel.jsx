import React, { useEffect, useState } from "react";
import Nav2 from "./Nav2";
import ApplyNowButton from "../ui/ApplyButton";

const imagePaths = ["/1.webp", "/2.webp", "/3.webp", "/4.webp"];

function BgCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slides */}
      <div className="absolute inset-0 w-full h-full blur-[2px]">
        {imagePaths.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            loading="eager"
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-400 opacity-90 mix-blend-multiply"></div>

      {/* Text Content */}
      <div className="absolute inset-0 font-opensans flex flex-col items-center justify-center text-white text-center mx-4">
        <h1 className="text-3xl flex flex-col lg:gap-3 font-bebas tracking-wider lg:text-5xl font-bold drop-shadow-xl py-4">
          <div> Welcome to </div>
          <span className="text-white">Kilakarai Bukhari Aalim Arabic College</span>
        </h1>
        <p className="text-3xl font-bebas tracking-wider lg:text-5xl font-bold mt-2">
          Admissions <span className="text-red-500">Open 2025</span>
        </p>
        <a
          href="https://forms.gle/DzfW7ZoZpsNYY4GAA"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 lg:mt-6"
        >
     <ApplyNowButton bgColor="red-500" textColor="white" />

        </a>
      </div>
    </div>
  );
}

export default BgCarousel;
