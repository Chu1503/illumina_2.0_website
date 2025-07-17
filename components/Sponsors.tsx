"use client";
import React from "react";
import { motion } from "framer-motion";
import TiltCircle from "./TiltCircle";
import orom from "../images/orom.webp";
import yoode from "../images/yoode.webp";
import aromas from "../images/aromas.webp";
import skill from "../images/skill-vertex.webp";

type Props = {};

export default function Sponsors({}: Props) {
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
        Sponsors
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
      ></motion.div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-20 py-10">
        <TiltCircle
          imageSrc={orom.src}
          altText="Orom"
          name="Orom"
          link="https://www.linkedin.com/company/oromcorp/?originalSubdomain=in"
        />
        <TiltCircle
          imageSrc={yoode.src}
          altText="Yoode"
          name="Yoode"
          link="https://yoode.com/"
        />
        <TiltCircle
          imageSrc={aromas.src}
          altText="Aromas"
          name="Aromas"
          link="https://www.zomato.com/vellore/aromas-1-katpadi"
        />
        <TiltCircle
          imageSrc={skill.src}
          altText="Skill Vertex"
          name="Skill Vertex"
          link="https://www.skillvertex.com/"
        />
      </div>
    </motion.div>
  );
}
