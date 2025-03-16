import React, { useEffect } from 'react'
import img1 from "../../assets/Faculties/syed_masood_jamali.png";
import img2 from "../../assets/Faculties/abdul_hai_nadwi.png";
import img3 from "../../assets/Faculties/yoosuf_jamali.png";
import img4 from "../../assets/Faculties/abdus_samad_nadwi.jpg";
import img5 from "../../assets/Faculties/usman.png";
import img6 from "../../assets/Faculties/Mr. Abdul kareem.png";
import img7 from "../../assets/Faculties/ahamedullah.png";
import img8 from "../../assets/Faculties/Ali Gousi.png";
import img9 from "../../assets/Faculties/M.png";
import img10 from "../../assets/Faculties/Dr. MOHAMMAD FAISAL 2.png";
import img11 from "../../assets/Faculties/Dr. Yasar Arafath Ali.png";
import img12 from "../../assets/Faculties/Mr. Abubaker Siddique.png";
import img13 from "../../assets/Faculties/Mr. Hamsath Khan.png";
import img14 from "../../assets/Faculties/Mr. Dhamim Anzar.png";
import img15 from "../../assets/Faculties/Mr. Mohamed Azarudeen2.png";
import img16 from "../../assets/Faculties/abuthahir.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Faculty() {
    useEffect(() => {
        AOS.init({
          duration: 1200, 
          once: true, 
          easing: "ease-in-out",
        });
      }, []);
    const facultyMembers = [
        { name: "Dr. Syed Masood Jamali", role: "Principal", image: img1 },
        { name: "Dr. Abdul Hai Hasani Nadwi", role: "Vice Principal", image: img2 },
        { name: "Dr. Yoosuf Jamali", role: "Professor", image: img3 },
        { name: "Dr. Abdus Samad Nadwi", role: "Asst. Professor", image: img4 },
        { name: "Dr.Usman Ali Hasani", role: "Asst. Professor", image: img5 },
        { name: "Mr. Abdul kareem", role: "Asst. Professor", image: img6 },
        { name: "Dr. Ahamedullah AlBukhari", role: "Asst. Professor", image: img7 },
        { name: "Mr. Mohamed Ali Gousi", role: "Asst. Professor", image: img8 },
        { name: "Dr. Mohamed Rafiq", role: "Asst. Professor", image: img9 },
        { name: "Dr. Mohammad Faisal", role: "Asst. Professor", image: img10 },
        { name: "Dr. Yasar Arafath Ali Bukhari Thaqaufi", role: "Asst. Professor", image: img11},
        { name: "Mr. Abubaker Siddique Bukhari Nadwi", role: "Lecturer", image: img12 },
        { name: "Mr. Hamsath Khan", role: "Lecturer", image: img13},
        { name: "Mr. Dhamim Anzar", role: "Lecturer", image: img14 },
        { name: "Mr. Mohamed Azarudeen", role: "Librarian", image: img15},
        { name: "Mr. Abuthahir", role: "Accountant", image: img16 },
    ];
    return (
        <>
         <div className='bg-[#EDF0F2] lg:px-20 pt-14 md:pt-0' data-aos="fade-up">
                <div className='md:pt-32 lg:pt-44 px-6 py-20 '>
                    <h5 className='text-[#07294D] text-[18px] font-bold font-montserrat'>Featured Faculties</h5>
                    <hr className='border-[#07294D] border-2 my-2 w-10' />
                    <h2 className='font-bold text-[26px] lg:text-[48px] font-montserrat md:text-[26px]'>Meet Our Faculties</h2>
                </div>

                <div className="container mx-auto px-4 pb-24" data-aos="fade-up">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-4 md:gap-y-2">
                        {facultyMembers.map((member, index) => (
                            <div key={index} className=" overflow-hidden">
                                <img src={member.image} alt={member.name} className="w-40 h-40 md:w-48 md:h-48 lg:w-72 lg:h-52 object-contain mx-auto" />
                                <div className="p-3 text-center">
                                    <h3 className="text-sm md:text-base font-semibold">{member.name}</h3>
                                    <p className="text-gray-600 text-xs md:text-sm">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faculty
