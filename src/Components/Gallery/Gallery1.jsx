import React, { useEffect } from "react";
import img1 from "../../assets/Gallery Pics/1.webp";
import img2 from "../../assets/Gallery Pics/2.webp";
import img3 from "../../assets/Gallery Pics/3.webp";
import img4 from "../../assets/Gallery Pics/4.webp";
import img5 from "../../assets/Gallery Pics/5.webp";
import img6 from "../../assets/Gallery Pics/6.webp";
import img7 from "../../assets/Gallery Pics/7.webp";
import img8 from "../../assets/Gallery Pics/8.webp";
import img9 from "../../assets/Gallery Pics/9.webp";
import img10 from "../../assets/Gallery Pics/10.webp";
import img11 from "../../assets/Gallery Pics/11.webp";
import img12 from "../../assets/Gallery Pics/12.webp";
import img13 from "../../assets/Gallery Pics/13.webp";
import img14 from "../../assets/Gallery Pics/14.webp";

const images = [ img5, img6, img7, img8, img9, img10, img11, img12, img13, img14,  img3, img4,img1,img2,];


function Gallery1() {
  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Gallery ${index + 1}`} 
            className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery1;
