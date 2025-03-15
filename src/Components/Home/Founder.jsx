import React, { useState } from 'react'
import founder from "../../assets/hero/main.jpeg"
import { Link } from 'react-router-dom';



function Founder() {

  const Founder_msg=["KiIakarai Bukhari Aalim Arabic College was established in 2000, fulfilling the vision and dream of its founder, Alhaj Dr. B.S. Abdur Rahman to create an institution, integrating Islamic and Contemporary Global knowledge. Having crossed significant milestones since the inception, the college stands as a unique institution, with dedicated teachers to shape its students to become not just responsible citizens and prospective scholars but also leading professionals of tomorrow."]

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); 
  };

  return (<><div className='text-center mt-8'>
   
    {/* <h3 className='text-[24px] font-semibold m-5 lg:my-5'>
      WELCOME TO <span className='text-uppercase text-red-500'>Kilakarai Bukhari Aalim Arabic College</span>
    </h3> */}
    </div>
    <div className='flex justify-center flex-col gap-8 lg:justify-center mt-8 md:gap-16 lg:gap-32  md:flex-row items-center mx-4 lg:mx-24'>

      <div className=' rounded-3xl   '>

      <img 
  src={founder} 
  alt="principal" 
  className='w-[180px] lg:w-[230px] lg:h-[230px] rounded-sm' 
  style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }} 
/>
<p className='text-center font-bold text-lg font-serif py-3 md:text-sm lg:text-base text-[#131A26]'>B.S Abdul Rahman</p>

        </div>
      <div className='flex flex-col gap-2 md:w-3/4'>

        {/* <h1 className='text-[30px] font-sans text-[#252525] font-bold'>Founder's Message</h1> */}
        <p className='text-[#4A4D54] text-[16px] font-semibold font-Roboto mx-3 '>
         {Founder_msg}</p><br />
        {/* <h2 className='text-[24px] text-gray-900 font-semibold'>Alhaj Dr. B.S. Abdur Rahman</h2>
        <h4 className='text-[15px] text-[#6B6B6B] font-semibold'>Founder, Kilakarai Bukhari Aalim Arabic College</h4> */}
        <div></div>
        {/* <Link to="/about" ><Button name={"About"}  /></Link> */}
       
      </div>
    </div>
  </>
  )
}

export default Founder