import React, { useState } from 'react';
import { Icon } from "@iconify/react";

function Socialicons() {
  // States to track hovering for each icon
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isYouTubeHovered, setIsYouTubeHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);

  // Function to handle redirection
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <section className="flex justify-center gap-4 z-20 bg-[#07294D] items-center lg:h-fit h-12 relative bottom-0 w-full">
      {/* Facebook Icon */}
      {/* <div
        onMouseEnter={() => setIsFacebookHovered(true)}
        onMouseLeave={() => setIsFacebookHovered(false)}
        onClick={() => handleRedirect("https://www.facebook.com/login")}
        className="cursor-pointer"
      >
        {isFacebookHovered ? (
          <Icon icon="logos:facebook" className="h-[28px] w-[28px] lg:h-[25px] lg:w-[25px]" />
        ) : (
          <Icon
            icon="ic:baseline-facebook"
            className="h-[28px] w-[28px] lg:h-[25px] lg:w-[25px] text-white rounded-full"
          />
        )}
      </div> */}

      {/* YouTube Icon */}
      <div
        onMouseEnter={() => setIsYouTubeHovered(true)}
        onMouseLeave={() => setIsYouTubeHovered(false)}
        onClick={() => handleRedirect("https://youtube.com/@bukhariamedia?feature=shared")}
        className="cursor-pointer"
      >
        {isYouTubeHovered ? (
          <Icon icon="logos:youtube-icon" className="h-[28px] w-[28px] lg:h-[25px] lg:w-[24px] bg-[#FF0000] rounded-full" />
        ) : (
          <Icon
            icon="entypo-social:youtube-with-circle"
            className="h-[28px] w-[28px] lg:h-[25px] lg:w-[24px] text-white rounded-full"
          />
        )}
      </div>

      {/* LinkedIn Icon */}
      <div
        onMouseEnter={() => setIsLinkedInHovered(true)}
        onMouseLeave={() => setIsLinkedInHovered(false)}
        onClick={() => handleRedirect("https://in.linkedin.com/company/kilakarai-bukhari-aalim-arabic-college")}
        className="cursor-pointer"
      >
        {isLinkedInHovered ? (
          <Icon icon="skill-icons:linkedin" className="h-[28px] w-[28px] lg:h-[25px] lg:w-[25px] rounded-full" />
        ) : (
          <Icon
            icon="entypo-social:linkedin-with-circle"
            className="h-[28px] w-[28px] lg:h-[25px] lg:w-[25px] text-white rounded-full"
          />
        )}
      </div>

      {/* Instagram Icon */}
      <div
        onMouseEnter={() => setIsInstagramHovered(true)}
        onMouseLeave={() => setIsInstagramHovered(false)}
        onClick={() => handleRedirect("https://www.instagram.com/bukharia_media?igsh=NjVoanZvdDFodTV5")}
        className="cursor-pointer"
      >
        {isInstagramHovered ? (
          <Icon icon="skill-icons:instagram" className="h-[28px] w-[28px] lg:h-[25px] lg:w-[25px] rounded-full" />
        ) : (
          <Icon
            icon="entypo-social:instagram-with-circle"
            className="h-[28px] w-[28px] lg:h-[25px] lg:w-[25px] text-white rounded-full"
          />
        )}
      </div>
    </section>
  );
}

export default Socialicons;
