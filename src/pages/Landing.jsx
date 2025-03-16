import React, { useEffect } from "react";
import BgCarousel from "../Components/Home/Bg_Carousel";
import { Link } from "react-router-dom";
import Gallerysample from "../Components/Home/Gallerysample";
import Vismis from "../Components/Home/vismis";
import Chooseus from "../Components/Home/Chooseus";
import ApplyNowButton from "../Components/ui/ApplyButton";
import Founder from "../Components/Home/Founder";
import Hero from "../Components/Home/Hero";
import bgImage from '../assets/Bg-Img/BG2.webp';
import AOS from "aos";
import "aos/dist/aos.css";

function Landing() {
  
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true, 
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <BgCarousel />
      {/* <div className="flex justify-center pt-14"> */}
        {/* <Button name={"Online Admissions"} /> */}
      {/* </div> */}
      <Vismis />
    
      <Chooseus />
      <div className="py-5" data-aos="fade-up">
        <Gallerysample />
        <div className="flex justify-center py-10 md:pb-10">
          <Link to="/gallery">
            <ApplyNowButton name={"View more"}  textColor="blue-500"   />
          </Link>
        </div>
      </div>

    </>
  );
}

export default Landing;

