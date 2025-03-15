import React, { useEffect } from 'react';
import book1 from "../assets/Academic/book1.jpg";
import book2 from "../assets/Academic/book2.jpg";
import book3 from "../assets/Academic/book3.png";
// import SampleFaculty from '../Components/Academic/SampleFaculty';
import SampleAdmissions from '../Components/Academic/SampleAdmissions';
import Programs from '../Components/Academic/Programs';

const programs = [
  {
    image: book1,
    title: "5-years Integrated program for boys",
    duration: "5 Years",
  },
  {
    image: book2,
    title: "B.A. Islamic Studies for Girls",
    duration: "3 Years",
  },
  {
    image: book3,
    title: "M.A. Islamic Studies for All",
    duration: "2 Years",
  },
];

function Academic() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bg-[#EDF0F2] pt-32 md:pt-0 pb-16'>
      
      {/* <div className='bg-[#EDF0F2] lg:px-20  '>
        <div className='md:pt-32 lg:pt-44 px-6 py-0 '>
          <h5 className='text-[#07294D] text-[18px]  font-bold font-montserrat'>Academic</h5>
          <hr className='border-[#07294D] border-2 my-2 w-10' />
          <h2 className='font-bold text-[26px] lg:text-[48px] font-montserrat md:text-[26px]'>Programs</h2>
          <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8'>
          {programs.map((program, index) => (
            <div key={index} className='bg-white my-6 before:bg-[#454E5F96] transition duration-300 ease-in-out'>
              <div className=''>
              <img src={program.image} alt={program.title} className='' /></div>
              <h4 className='p-8 py-12 text-[20px] md:text-[24px] font-semibold hover:text-[#07294D] transition duration-300 ease-in-out font-montserrat'>{program.title}</h4>
              <hr className='mx-10' />
              <p className='text-[#505050] font-Roboto p-8'>Duration: {program.duration}</p>
            </div>
          ))}</div>

        </div>
 
      <Link to="/faculty"><Button name={"Faculty"}/> </Link><br />
      <Link to="/admission"><Button name={"Admissions"}/></Link>
      
      </div> */}

      
      <Programs/>
      {/* <SampleFaculty/> */}
      <SampleAdmissions/>
    </div>
  );
}

export default Academic;