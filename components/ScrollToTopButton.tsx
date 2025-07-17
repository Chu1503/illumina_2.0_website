'use client'
import { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToHeroSection = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={scrollToHeroSection}
      className="fixed z-20 bottom-6 right-6 sm:bottom-12 sm:right-12 text-black flex items-center justify-center bg-[#01cdfa] rounded-full w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] hover:cursor-pointer"
    >
      <FontAwesomeIcon  className="w-[1.5rem]" icon={faArrowUp} />
    </div>
  );
};

export default ScrollToTopButton;
