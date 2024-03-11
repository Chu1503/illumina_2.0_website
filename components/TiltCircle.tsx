'use client'
import { useState } from "react";
import { motion } from "framer-motion";

const TiltCircle = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <motion.div
      onHoverStart={handleHover}
      onHoverEnd={handleHover}
      className="w-[25vw] h-[25vw] sm:w-[7.5vw] sm:h-[7.5vw] rounded-full overflow-hidden relative"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 absolute inset-0 flex items-center justify-center text-center"
        style={{
          rotateY: isHovered ? 180 : 0,
          transition: "transform 0.5s",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="w-full h-full flex items-center justify-center text-center">
          {isHovered ? "Back Content" : "Front Content"}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TiltCircle;