import React from "react";
import { motion } from "framer-motion";
import iei_logo from "../images/iei_logo.png";

type Props = {};

export default function About({}: Props) {
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
        About IE(I)
      </h2>

      <motion.div
        initial={{
          x: 200,
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
        <img
          className="relative rounded-full h-60 w-60 mx-auto object-contain p-5"
          src={iei_logo.src}
          alt="ILLUMINA LOGO TEXT"
        />
      </motion.div>
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
        <p className="text-lg text-center">
          The Institution of Engineers (India) is a prestigious non-profit
          organization established in 1920. Our mission is to advance
          engineering, technology, and their practical applications. As the
          world's largest professional association of engineers, we employ
          innovative strategies to promote sustainable development. At VIT, our
          IE(I) student chapter serves as a platform for comprehensive technical
          and non-technical growth, organizing diverse events and activities.
        </p>
      </motion.div>
    </motion.div>
  );
}
