import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltCircleProps {
  imageSrc: string;
  altText: string;
  name: string;
  link: string;
}

const TiltCircle: React.FC<TiltCircleProps> = ({
  imageSrc,
  altText,
  name,
  link,
}) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1,
      });

      const glareInner = tiltRef.current.querySelector(
        ".js-tilt-glare-inner"
      ) as HTMLElement;

      if (glareInner) {
        glareInner.style.background = "rgba(255, 255, 255, 0.2)";
      }
    }
  }, []);

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      ref={tiltRef}
      className="cursor-pointer w-64 md:w-128 h-auto bg-[#a2229e36] border border-white/15 rounded-full overflow-hidden shadow-[0_0_5px_1px_rgba(255,255,255,0.8)]"
      onClick={handleClick}
    >
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default TiltCircle;
