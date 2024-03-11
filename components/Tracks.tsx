"use client";
import React from "react";
import { motion } from "framer-motion";
import TiltCircle from "./TiltCircle";

type Props = {};

export default function Tracks({}: Props) {
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
      className="flex flex-col relative h-auto text-center max-w-7xl p-4 justify-evenly mx-auto items-center"
    >
      <h2 className="p-10 uppercase tracking-[10px] sm:tracking-[20px] text-[rgba(1,205,250,255)] text-4xl sm:text-5xl">
        Tracks
      </h2>

      <TiltCircle />
    </motion.div>
  );
}
