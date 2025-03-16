import bgImage from '../../assets/Bg-Img/BG2.webp';
import Founder from './Founder';
import Hero from './Hero';
import AOS from "aos";
import "aos/dist/aos.css";

function Vismis() {
  return (
    <>
      <div className="relative w-full min-h-screen text-white pt-10 overflow-x-hidden"  data-aos="fade-up">
      
      {/* Founder (No Background Image) */}
      <Founder />

      {/* Hero (With Background Image) */}
      <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-700" >
        <div 
          className="absolute inset-0 bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-blue-800 after:opacity-50" 
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="relative z-10 mt-20">
          <Hero />
        </div>
      </div>

    </div>
    
    </>
  );
}

export default Vismis;
