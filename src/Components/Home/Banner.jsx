import React from 'react'
// import banner from "../../assets/hero/Banner.jpg";

function Banner() {
  return (
    <>
        <div className='hidden md:inline lg:inline  '>
                    <img
                        src={banner}
                        className='lg:h-[700px] lg:w-[600px] md:h-[450px] md:w-[1500px] object-contai'
                        alt=""
                    />
                </div>
    </>
  )
}

export default Banner