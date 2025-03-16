import React from 'react';
import main from "../../assets/hero/main.jpeg";
// import Banner from './Banner';
import AOS from "aos";
import "aos/dist/aos.css";

const heroContent = {
    intro: {
        image: main,
        alt: "B.S Abdul Rahman",
        paragraphs: ["Kilakarai Bukhari Aalim Arabic College believes that true success lies in mastering both divine and worldly knowledge. Join us in our mission to create future leaders who are both spiritually enlightened and globally competent."],
        paragraphs2: []
    },
    vision: {
        title: "Our Vision",
        description: "KBA aspires to become a pioneer in the field of Islamic education, producing scholars (Ulamas) who promote positive change within their communities and beyond. Guided by the Holy Qur’an and Sunnah, the institution is committed to nurture individuals capable of bettering their families, society and humanity as a whole through a moderate and balanced approach to life."
    },
    mission: {
        title: "Our Mission",
        description: "The rudimentary objective of the college is to provide students with a comprehensive education that combines revealed Islamic knowledge with modern sciences and business studies by offering a balanced curriculum, aiming to develop multi-dimensional personalities equipped to thrive in all aspects of life: spiritual, social, academic and professional. The institution is dedicated to empower the next generation with a high standard of education that blends Islamic and contemporary knowledge, cultivating leadership qualities, fostering personality development and equipping students to meet global challenges with confidence. Through a special focus on logical reasoning, creative thinking and research, the college strives to promote excellence in both academic and personal growth. Additionally, the college prioritizes language proficiency and soft skills development to ensure holistic growth of students.",
        points: []
    },
    facilities: {
        title: "Programs Offered",
        description: "The college offers a 5-year integrated academic program that empowers students to:",
        programs: [
            "Acquire a twin degree: One in Islamic Studies and the other in Business Management (B. Com).",
            "Become well-versed scholars of Islamic knowledge while also gaining critical skills to excel in the contemporary world.",
            "Achieve academic and spiritual excellence under a balanced curriculum."
        ]
    },
    admission: {
        title: "Why choose us",
        description: "",
        qualifications: [
            "<strong>Balanced Learning Environment:</strong> A curriculum that harmonizes Islamic teachings with modern academic disciplines.",
            "<strong>Holistic Development:</strong> Programs designed to foster personal, spiritual, and professional growth.",
            "<strong>Global Perspective:</strong> Preparing students for success in both the local and global arenas.",
            "<strong>Exemplary Faculty:</strong> Experienced scholars and teachers who guide students in their pursuit of knowledge and character-building."
        ]
    }
};

function About() {
    return (
        <>
            <div className='flex mx-5 lg:mx-14 -mt-16 text-lg font-Roboto text-[#6B6B6B] md:mt-0 md:gap-10 md:text-[14px] lg:text-[16px] lg:mt-[2%] pt-10' data-aos="fade-up">
                <div>
                    {heroContent.intro.paragraphs.map((paragraph, index) => (
                        <p key={index} className='mt-10 md:mt-0 md:leading-relaxed'>
                            {paragraph}
                        </p>
                    ))}
                    {heroContent.intro.paragraphs2.map((paragraph, index) => (
                        <p key={index} className='mt-10 md:mt-8 md:leading-relaxed'>
                            {paragraph}
                        </p>
                    ))}

                    <div className='md:hidden lg:text-[16px] lg:block'>
                        <h2 className='font-semibold mt-10 text-lg'>{heroContent.vision.title}</h2>
                        <p className='mt-2 lg:leading-relaxed'>{heroContent.vision.description}</p>

                        <h2 className='font-semibold mt-10 text-lg'>{heroContent.mission.title}</h2>
                        <p className='mt-2'>{heroContent.mission.description}</p>
                        <ul className='list-disc ml-5 lg:leading-relaxed'>
                            {heroContent.mission.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='hidden md:block lg:hidden xl:hidden md:mx-5 lg:mx-14 md:text-[14px] lg:text-[16px] md:leading-relaxed' data-aos="fade-up" >
                <h2 className='font-semibold text-lg'>{heroContent.vision.title}</h2>
                <p className='mt-2 lg:leading-relaxed md:leading-relaxed'>{heroContent.vision.description}</p>

                <h2 className='font-semibold mt-10 text-lg'>{heroContent.mission.title}</h2>
                <p className='mt-2 md:leading-relaxed'>{heroContent.mission.description}</p>
                <ul className='list-disc ml-5 lg:leading-relaxed'>
                    {heroContent.mission.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>

            <div className='lg:mx-14 md:mx-5 mx-5 md:text-[14px] lg:text-[16px] md:leading-relaxed font-Roboto text-[#6B6B6B]' data-aos="fade-up">
                <h2 className='font-semibold mt-10 text-lg md:leading-relaxed'>{heroContent.facilities.title}</h2>
                <p className='mt-2 md:leading-relaxed'>{heroContent.facilities.description}</p>
                <ul className='list-disc ml-5 mt-2 flex flex-col gap-2'>
                    {heroContent.facilities.programs.map((program, index) => (
                        <li key={index}>{program}</li>
                    ))}
                </ul>

                <h2 className='font-semibold mt-10 text-lg md:leading-relaxed'>{heroContent.admission.title}</h2>
                <p className='mt-2 lg:leading-relaxed'>{heroContent.admission.description}</p>
                <ul className='list-disc ml-5 mt-2 flex flex-col gap-2 pb-5'>
                    {heroContent.admission.qualifications.map((qualification, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: qualification }}></li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default About;
