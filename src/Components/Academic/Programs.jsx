import React from 'react';
import main from "../../assets/hero/main.jpeg";

const heroContent = {
    program: {
        title: "Integrated Higher Secondary & Dual Degree Program (IHD Program) or Integrated Islamic and Commerce Program (IICP)",
        description: "The program is designed for students who have completed their 10th grade and wish to pursue both Islamic studies and modern education in a structured and holistic environment. This program combines religious, academic, and professional education, equipping students for a well-rounded future."
    },
    structure: {
        title: "Program Structure",
        phases: [
            {
                title: "First Two Years: Foundational Program (11th & 12th)",
                details: [
                    "Students will complete the equivalent of 11th and 12th grades.",
                    "Along with the regular curriculum, students will also study basic Arabic and introductory Islamic studies (Quranic studies, Hadith, Fiqh, Seerah, and Islamic history).",
                    "These foundational courses aim to strengthen students’ Islamic knowledge while laying the groundwork for higher education."
                ]
            },
            {
                title: "Final Three Years: Dual Undergraduate Program",
                details: [
                    "After successfully completing the first two years, students will be upgraded to the following programs:",
                    "B.A. in Islamic Studies (On-campus, 3 years): A comprehensive Islamic studies program focusing on advanced subjects like Tafsir, Hadith, Usul al-Fiqh, Islamic Economics, and Comparative Religion.",
                    "B. Com (Commerce) (3 years, Distance Mode through the University of Madras, Institute of Distance Education): Students will pursue core subjects in commerce such as accounting, finance, business management, and marketing, providing them with essential business knowledge and skills."
                ]
            }
        ]
    },
    benefits: {
        title: "Benefits of the Program",
        list: [
            "Holistic Education: A balanced combination of spiritual and academic education.",
            "Dual Qualification: Students will graduate with two degrees (B.A. in Islamic Studies and B. Com) in five years.",
            "Career Opportunities: This program prepares students for careers in education, business, Islamic finance, entrepreneurship, and more.",
            "Personal Development: Emphasis on character building, leadership, and Islamic ethics to shape responsible and knowledgeable individuals."
        ]
    },
    eligibility: {
        title: "Eligibility",
        description: "Students who have completed their 10th grade and are capable of reciting the Qur'an fluently with proper Tajweed are eligible to apply."
    }
};

function Programs() {
    return (
        <div className='px-5 py-28  text-lg font-Roboto text-[#6B6B6B]  bg-[#EDF0F2] pt-48 lg:px-28 '>
          <div className='pb-10'>
           <h5 className='text-[#07294D] text-[18px]  font-bold font-montserrat'>Academic</h5>
          <hr className='border-[#07294D] border-2 my-2 w-10 ' />
          <h2 className='font-bold text-[26px] text-black py-2 lg:text-[48px] font-montserrat md:text-[26px]'>Programs</h2>
          </div>
            <h2 className='font-semibold text-xl'>{heroContent.program.title}</h2>
            <p className='mt-2'>{heroContent.program.description}</p>
            
            <h2 className='font-semibold mt-10 text-xl'>{heroContent.structure.title}</h2>
            {heroContent.structure.phases.map((phase, index) => (
                <div key={index} className='mt-5'>
                    <h3 className='font-semibold text-lg'>{phase.title}</h3>
                    <ul className='list-disc ml-5 mt-2'>
                        {phase.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
            
            <h2 className='font-semibold mt-10 text-xl'>{heroContent.benefits.title}</h2>
            <ul className='list-disc ml-5 mt-2'>
                {heroContent.benefits.list.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
            
            <h2 className='font-semibold mt-10 text-xl'>{heroContent.eligibility.title}</h2>
            <p className='mt-2'>{heroContent.eligibility.description}</p>
        </div>
    );
}

export default Programs;
