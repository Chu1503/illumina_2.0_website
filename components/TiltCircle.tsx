'use client'
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const TiltCircle = () => {
  

  return (
    <motion.div  
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1.5,
    }}
      className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 relative h-[25vw] w-[25vw] sm:w-[7.5vw] sm:h-[7.5vw] rounded-full flex sm:flex-row flex-col items-center p-5 text-center justify-center"
    >
      Track 1
    </motion.div>
    
  );
};

export default TiltCircle;
