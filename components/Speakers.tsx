"use client";
import React from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import speaker1 from "../images/speaker1.webp";
import speaker2 from "../images/speaker2.webp";
import speaker3 from "../images/speaker3.webp";

type Props = {};

export default function Speakers({}: Props) {
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
      <h2 className="p-10 uppercase tracking-[10px] sm:tracking-[20px] text-[rgba(1,205,250,255)] text-4xl sm:text-5xl font-bold">
        Speakers
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
      ></motion.div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-20 py-10">
        <TiltCard
          imageSrc={speaker1.src}
          altText="Speaker 1"
          name="Hariom Shandilya"
          link="https://www.linkedin.com/in/hariomshandilya/"
        />
        <TiltCard
          imageSrc={speaker2.src}
          altText="Speaker 2"
          name="Sasmita Singh"
          link="https://www.linkedin.com/in/sasmita-singh-37b0251b3/"
        />
        <TiltCard
          imageSrc={speaker3.src}
          altText="Speaker 3"
          name="Braham Aggarwal"
          link="https://www.linkedin.com/in/braham-aggarwal-7a08b8209/"
        />
      </div>
    </motion.div>
  );
}
