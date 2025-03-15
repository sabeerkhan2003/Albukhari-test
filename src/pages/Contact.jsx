import React, { useEffect } from 'react'
import Nav2 from '../Components/Home/Nav2'
import Nav from '../Components/Home/Nav'
import Form from "../Components/Contact/Form"
import Methods from '../Components/Contact/Methods'
import DirectContacts from '../Components/Contact/DirectContacts'
import Map from '../Components/Contact/Map'
import Footer from '../Components/Home/Footer'
import Logos from '../Components/Home/Logos'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='py-10 pt-32 lg:pt-44 px-6 flex flex-col md:grid md:grid-cols-2 lg:space-x-0  flex-wrap  xl:px-40 justify-center gap-10 xl:gap-x-5    bg-gray-50'>
      <Form />
      <Methods/>
     <DirectContacts/>
     <Map/>
      </div>
    </>
  )
}

export default Contact