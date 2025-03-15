import React from 'react';
import bgImage from '../../../public/1.webp';

function Chooseus() {
  const heroContent = {
    balancedLearning: {
      title: "Balanced Learning Environment",
      description: "A curriculum that harmonizes Islamic teachings with modern academic disciplines."
    },
    holisticDevelopment: {
      title: "Holistic Development",
      description: "Programs designed to foster personal, spiritual, and professional growth."
    },
    globalPerspective: {
      title: "Global Perspective",
      description: "Preparing students for success in both the local and global arenas."
    },
    exemplaryFaculty: {
      title: "Exemplary Faculty",
      description: "Experienced scholars and teachers who guide students in their pursuit of knowledge and character-building."
    }
  };

  return (
    <>
    <div className="relative w-full min-h-screen text-white pt-10 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-700 my-20">
      <div 
        className="absolute inset-0 bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-blue-800 after:opacity-50" 
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="relative z-10 text-center py-16 px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-yellow-300 mb-10 font-bebas tracking-wider">Why Choose Us</h1>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {Object.values(heroContent).map((item, index) => (
            <div
              key={index}
              className="space-y-5 p-6 bg-white/10 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-500 ease-in-out hover:scale-105"
            >
              <h2 className="text-[1.5rem] font-bold font-bebas tracking-wider text-yellow-300">{item.title}</h2>
              <p className="font-bebas text-lg xl:text-xl tracking-wider">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Chooseus;
