import React, { useEffect, useState } from "react";
import Nav2 from "./Nav2";
import ApplyNowButton from "../ui/ApplyButton";
import BG1 from "../../assets/Bg-Img/BG1.webp";
import BG2 from "../../assets/Bg-Img/BG2.webp";
import BG3 from "../../assets/Bg-Img/BG1.webp";
import BG4 from "../../assets/Bg-Img/BG2.webp";

const images = [BG1, BG2,BG3,BG4];

function BgCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slides */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="absolute inset-0 w-full h-full object-cover blur-[2px] transition-opacity duration-[2000ms] ease-in-out"
        loading="eager"
      />

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
