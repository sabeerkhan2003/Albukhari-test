import React from 'react';

const heroContent = {
  intro: {
    alt: "B.S Abdul Rahman",
    paragraphs: [""],
  },
  vision: {
    title: "Our Vision",
    description:
      "KBA aspires to become a pioneer in the field of Islamic education, producing scholars (Ulamas) who promote positive change within their communities and beyond. Guided by the Holy Qur’an and Sunnah, the institution is committed to nurture individuals capable of bettering their families, society, and humanity as a whole through a balanced approach to life.",
  },
  mission: {
    title: "Our Mission",
    description:
      "The college provides students with a comprehensive education that merges Islamic knowledge with modern sciences and business studies. We aim to develop multi-dimensional personalities, equipping them with leadership qualities, logical reasoning, creative thinking, and global competence.",
  },
};

function Hero() {
  return (
    <div className="relative text-white py-16  lg:pt-16 xl:pt-40 px-6 lg:px-20 flex items-center justify-center my-auto">
      {/* Main Content */}
      <div
        className="relative md:max-w-2xl lg:max-w-4xl mx-auto text-center space-y-10 animate-fade-in-up"
      >
        {/* Introduction */}
        <h1 className="text-3xl w-full md:text-xl font-bold bg-clip-text text-transparent bg-white font-Roboto drop-shadow-lg">
          {heroContent.intro.paragraphs[0]}
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 xl:gap-16 justify-center" >
          {/* Vision */}
          <div
            className="space-y-5 md:w-[50%] 2xl:w-full p-4 bg-white/10 rounded-xl shadow-lg backdrop-blur-md transition-all duration-500 ease-in-out hover:scale-105" 
            data-aos="fade-right">
            <h2 className="text-3xl font-bold font-bebas tracking-wider xl:tracking-widest text-yellow-300">
              {heroContent.vision.title}
            </h2>
            <p className="font-bebas text-lg xl:text-xl tracking-wide">
              {heroContent.vision.description}
            </p>
          </div>

          {/* Mission */}
          <div
            className="space-y-5 md:w-[50%] 2xl:w-full p-4 bg-white/10 rounded-xl shadow-lg backdrop-blur-md transition-all duration-500 ease-in-out hover:scale-105"
            data-aos="fade-left">
            <h2 className="text-3xl font-bold font-bebas tracking-wider xl:tracking-widest text-yellow-300">
              {heroContent.mission.title}
            </h2>
            <p className="font-bebas text-lg xl:text-xl tracking-wide">
              {heroContent.mission.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
