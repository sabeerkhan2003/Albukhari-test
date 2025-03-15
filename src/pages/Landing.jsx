import React, { useEffect } from "react";
import BgCarousel from "../Components/Home/Bg_Carousel";
// import Button from "../Components/ui/Button";
import { Link } from "react-router-dom";
import Gallerysample from "../Components/Home/Gallerysample";
import Vismis from "../Components/Home/vismis";
import Chooseus from "../Components/Home/Chooseus";
import ApplyNowButton from "../Components/ui/ApplyButton";

function Landing() {
  return (
    <>
      <BgCarousel />
      {/* <div className="flex justify-center pt-14"> */}
        {/* <Button name={"Online Admissions"} /> */}
      {/* </div> */}
      <Vismis />
      <Chooseus />
      <div className="py-5">
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

