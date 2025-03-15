import React, { useEffect } from 'react'
import Nav2 from '../Components/Home/Nav2'
import Nav from '../Components/Home/Nav'
import Logos from '../Components/Home/Logos'
import Footer from '../Components/Home/Footer'

function Ejournal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     
      <div className='md:pt-32 h-[100vh]'>
        {/* <Founder/> */}
        <p className='font-bold h-[50vh] flex justify-center items-center'>WELCOME TO E-JOURNAL PAGE</p>
        <a href="http://www.albukharijournal.in/index.php/abjais" target='_blank' className='font-bold h-[50vh] flex justify-center items-center'>E-Journal</a>
       
        </div>
    </>
  )
}

export default Ejournal