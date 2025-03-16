import React, { useEffect } from 'react'
import Gallery1 from '../Components/Gallery/Gallery1';
// import Gallery1 from '../Components/Gallery/Gallery1'
// import Gallery2 from '../Components/Gallery/Gallery2'
import AOS from "aos";
import "aos/dist/aos.css";

function Gallery() {
 
  useEffect(() => {
    AOS.init({
      duration: 1800, 
      once: true, 
      easing: "ease-in-out",
    });
  }, []);
   useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
  return (
    <>
     <div className=' h-auto' data-aos="fade-up">
     <div className='pt-32 xl:mx-28  md:mx-10 lg:pt-44 px-6 py-20'>
                    <h5 className='text-[#07294D] text-[18px] font-bold font-montserrat'>Our Campus</h5>
                    <hr className='border-[#07294D] border-2 my-2 w-10' />
                    <h2 className='font-bold text-[26px] lg:text-[48px] font-montserrat md:text-[26px]'>
                        Visit our Campus
                    </h2>
                </div>
       {/* <Founder/> */}
       {/* <p className='font-bold h-[50vh] flex justify-center items-center'>WELCOME TO GALLERY PAGE</p> */}

        <Gallery1/>
       {/* <Gallery2/> */}
       </div>
   </>
  )
}

export default Gallery