import React, { useEffect, useRef, useState } from "react";

// Static image imports
import i1 from "../../assets/Gallery Pics/1.webp";
import i2 from "../../assets/Gallery Pics/2.webp";
import i3 from "../../assets/Gallery Pics/3.webp";
import i4 from "../../assets/Gallery Pics/4.webp";
import i5 from "../../assets/Gallery Pics/5.webp";
import i6 from "../../assets/Gallery Pics/6.webp";
import i7 from "../../assets/Gallery Pics/7.webp";
import i8 from "../../assets/Gallery Pics/8.webp";
import i9 from "../../assets/Gallery Pics/9.webp";
import i10 from "../../assets/Gallery Pics/10.webp";
import i11 from "../../assets/Gallery Pics/11.webp";
import i12 from "../../assets/Gallery Pics/12.webp";
import i13 from "../../assets/Gallery Pics/13.webp";
import i14 from "../../assets/Gallery Pics/14.webp";

const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14];

function Gallerysample() {
  const scrollContainerRef = useRef(null);
  const scrollInterval = useRef(null);
  const isUserInteracting = useRef(false);
  const interactionTimeout = useRef(null);

  // Simple auto-scroll with optimized intervals
  const startAutoScroll = () => {
    stopAutoScroll();
    scrollInterval.current = setInterval(() => {
      if (!isUserInteracting.current && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      }
    }, 30); // Smoother with more frequent, smaller increments
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  // Handle user interaction
  const handleInteractionStart = () => {
    isUserInteracting.current = true;
    stopAutoScroll();
    
    // Clear any pending timeout
    if (interactionTimeout.current) {
      clearTimeout(interactionTimeout.current);
    }
  };

  const handleInteractionEnd = () => {
    // Set a timeout to resume auto-scroll after interaction ends
    interactionTimeout.current = setTimeout(() => {
      isUserInteracting.current = false;
      startAutoScroll();
    }, 3000);
  };

  // Initialize and clean up
  useEffect(() => {
    startAutoScroll();
    
    // Pause when tab is inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoScroll();
      } else {
        startAutoScroll();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      stopAutoScroll();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (interactionTimeout.current) {
        clearTimeout(interactionTimeout.current);
      }
    };
  }, []);

  return (
    <> 
      <div className="relative w-fit my-5 md:my-0 mx-auto">
        <h1 className="absolute text-2xl lg:text-3xl sm:text-lg font-Roboto font-bold text-blue-950 top-4 -left-3 md:top-6 md:left-[12%] lg:-left-0">
          Gallery
        </h1>
        <h1 className="relative flex flex-col gap-2 text-xl lg:text-2xl text-center sm:text-lg xl:text-[1.4rem] font-bold font-Roboto text-white sm:px-4 sm:py-2">
          <span className="text-gray-900 opacity-10 uppercase">Visit</span>
          <span className="text-gray-900 opacity-10 uppercase">our</span>
        </h1>
      </div>

      <div
        ref={scrollContainerRef}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onTouchEnd={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        className="flex overflow-x-scroll xl:ml-16 lg:w-auto md:gap-8 py-10 lg:gap-8 lg:mx-12 xl:mx-16 2xl:gap-24 2xl:mx-48 gap-12 relative justify-center md:justify-start lg:justify-start md:m-12 lg:m-8 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ 
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
          scrollBehavior: 'smooth' // Native smooth scrolling
        }}
      >
        {images.map((item, index) => (
          <div 
            key={index} 
            className="relative flex-shrink-0 snap-center"
          >
            <img
              src={item}
              alt={`Gallery image ${index + 1}`}
              className="rounded-3xl relative left-48 md:left-0 h-[250px] w-[340px] md:w-[320px] lg:w-[280px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default React.memo(Gallerysample);