import React, { useEffect } from 'react';
import About from '../Components/Aboutus/SampleAboutus';
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  const committeeMembers = [
    { sl: 1, name: "ASHRAF A. RAHMAN BUHARI", designation: "PRESIDENT" },
    { sl: 2, name: "B.S.A. ARIF BUHARY RAHMAN", designation: "VICE PRESIDENT" },
    { sl: 3, name: "AHMED A. RAHMAN BUHARI", designation: "VICE PRESIDENT" },
    { sl: 4, name: "MOHAMMED HASSAN", designation: "SECRETARY" },
    { sl: 5, name: "KHALID BUHARI", designation: "JOINT SECRETARY" },
    { sl: 6, name: "ABDUL QADIR RAHMAN BUHARI", designation: "JOINT SECRETARY" },
    { sl: 7, name: "SYED MOHAMMED BUHARI", designation: "TREASURER" },
  ];
  const generalBodyMembers = [
    { sl: 12, name: "N.D.S. SATHAK ANSARI" },
    { sl: 13, name: "S.K.M. HABEEB MOHAMMED" },
    { sl: 14, name: "SAIT SALAHUDEEN" },
    { sl: 15, name: "ZABBIR MOHAMMED" },
    { sl: 16, name: "MRS. QURRATH JAMEELA" },
    { sl: 17, name: "MRS. MARIYAM HABEEB" },
    { sl: 18, name: "DR. RAHMATHUNISSA" },
    { sl: 19, name: "MS. SHARIFFA A. AZEEZ" },
    { sl: 20, name: "ZEENATH AYOOB" },
  ];

  return (
    <>  
      <div className='pt-32 bg-[#EDF0F2]' >
        <h3 className='text-[24px] font-semibold text-center m-5 lg:my-5' data-aos="fade-up">
          WELCOME TO 
          <span className='uppercase text-red-500'>Kilakarai Bukhari Aalim Arabic College</span>
        </h3>
        <About />
        {/* <div className='m-6 md:mx-auto w-fit'>
          <Button name={"view more"} />
        </div> */}
<div data-aos="fade-up">
        <div className="text-center text-2xl font-bold mt-20">Management</div>
        <h1 className="text-lg font-bold bg-gray-300 text-center mt-8">ALL INDIA ISLAMIC FOUNDATION</h1>
        <p className="text-center mt-8 text-md text-blue-950  font-medium mb-6">MANAGING COMMITTEE MEMBERS</p>
        </div>

        <div className="overflow-x-auto mx-4 pb-20" data-aos="fade-up">
          <table className="w-full max-w-4xl mx-auto border border-gray-300 text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">SL.NO</th>
                <th className="border border-gray-300 px-4 py-2">NAME</th>
                <th className="border border-gray-300 px-4 py-2">DESIGNATION</th>
              </tr>
            </thead>
            <tbody>
              {committeeMembers.map((member) => (
                <tr key={member.sl} className="even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{member.sl}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8 text-md text-blue-950  font-medium mb-6" data-aos="fade-up">General Body Members</div>

        <div className="overflow-x-auto mx-4 pb-20" data-aos="fade-up">
          <table className="w-full max-w-4xl mx-auto border border-gray-300 text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">SL.NO</th>
                <th className="border border-gray-300 px-4 py-2">NAME</th>
              </tr>
            </thead>
            <tbody>
              {generalBodyMembers.map((member) => (
                <tr key={member.sl} className="even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{member.sl}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
