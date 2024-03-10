'use client'
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Prizes({}: Props) {
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
      className="flex flex-col relative h-auto text-center max-w-7xl p-10 justify-evenly mx-auto items-center"
    >
      <h2 className="p-10 uppercase tracking-[10px] sm:tracking-[20px] text-[rgba(1,205,250,255)] text-4xl sm:text-5xl">
        Prizes
      </h2>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="flex flex-col space-y-10 px-0 md:px-10"
      >
        <p className="text-lg sm:text-xl text-center leading-10 sm:leading-10 sm:pl-20 sm:pr-20">Coming Soon!</p>
      </motion.div>
    </motion.div>
  );
}
