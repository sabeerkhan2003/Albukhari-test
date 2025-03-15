import React, { useState, useEffect } from 'react';
import img from "../../assets/Popup/Banner.jpg";

function HomePopUp() {
  // State to control popup visibility
  const [showPopup, setShowPopup] = useState(true);

  // Automatically hide the popup after a delay (optional)
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 10000); // Hide after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  // Handle closing the popup
  const closePopup = () => setShowPopup(false);

  return (
    showPopup && (
      <div className="fixed inset-0 z-50 p-4">
        {/* Background Overlay with Blur Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={closePopup}></div>

        {/* Popup Container with Slide Animation */}
        <div className="relative mx-auto mt-20 max-w-lg p-2 lg:p-6  md:mt-16 lg:w-[450px] lg:h-[550px] lg:bg-white md:shadow-none shadow-lg rounded-md animate-slideDown">
          {/* Popup Image */}
          <img
            src={img}
            alt="Advertisement"
            className="mx-auto w-full h-full md:h-[500px] md:w-[400px] rounded-md"
          />
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute -top-5 right-5 md:-top-6 md:right-16 lg:right-5 lg:-top-8 z-50 font-bold text-white text-xl   hover:text-black text-md"
          >
            X
          </button>
        </div>
      </div>
    )
  );
}

export default HomePopUp;
