import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltCardProps {
  imageSrc: string;
  altText: string;
  name: string;
  link: string;
}

const TiltCard: React.FC<TiltCardProps> = ({
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
        scale: 1.05,
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
    window.open(link, "_blank");
  };

  return (
    <div
      ref={tiltRef}
      className="cursor-pointer w-128 h-128 bg-white/10 border border-white/15 rounded-[10px] overflow-hidden shadow-lg"
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

export default TiltCard;
