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
      className="flex flex-col relative h-auto text-center max-w-7xl justify-evenly mx-auto items-center p-24"
    >
      <h2 className="pb-12 uppercase tracking-[20px] text-gray-500 text-3xl sm:text-4xl">
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
        <p className="text-lg text-center">Coming Soon!</p>
      </motion.div>
    </motion.div>
  );
}
