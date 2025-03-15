import React, { useEffect } from 'react'
import Nav2 from '../Components/Home/Nav2'
import Nav from '../Components/Home/Nav'
import Logos from '../Components/Home/Logos'
import Footer from '../Components/Home/Footer'

function Admission() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <div className='md:pt-32 h-[100vh]'>
       {/* <Founder/> */}
       <p className='font-bold h-[50vh] flex justify-center items-center'>WELCOME TO Admission PAGE</p>
       </div>
   </>
  )
}

export default Admission