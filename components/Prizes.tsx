"use client";
import React from "react";
import { motion } from "framer-motion";

import first from "../images/gold.webp";
import second from "../images/silver.webp";
import third from "../images/bronze.webp";
import uiux from "../images/uiux.webp";
import pitch from "../images/pitch.webp";
import freshers from "../images/freshers.webp";

type PrizeCardProps = {
  image: string;
  label: string;
  size?: string;
};

const PrizeCard: React.FC<PrizeCardProps> = ({
  image,
  label,
  size = "w-[15vw] h-[15vw]",
}) => (
  <div
    className={`flex flex-col justify-center items-center text-center rounded-full bg-transparent text-[var(--cream)] ${size} mx-4`}
  >
    <img src={image} alt={label} className="mb-2 w-[80%] h-[80%]" />
    <div className=" text-sm sm:text-xl font-semibold whitespace-pre-line">
      {label}
    </div>
  </div>
);

export default function Prizes({}: {}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-auto text-center max-w-7xl p-10 justify-evenly mx-auto items-center"
    >
      <h2 className="p-10 uppercase tracking-[10px] sm:tracking-[20px] text-[rgba(1,205,250,255)] text-4xl sm:text-5xl font-bold">
        Prizes
      </h2>
      <div className="flex flex-col gap-20 lg:gap-32 mt-2 lg:mt-10">
        <div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="flex flex-row justify-center items-center"
          >
            <PrizeCard
              image={second.src}
              label={"Second\nPlace"}
              size="w-[17vw] h-[17vw]"
            />
            <PrizeCard
              image={first.src}
              label={"First\nPlace"}
              size="w-[17vw] h-[17vw]"
            />
            <PrizeCard
              image={third.src}
              label={"Third\nPlace"}
              size="w-[17vw] h-[17vw]"
            />
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="flex flex-row justify-center items-center"
          >
            <PrizeCard
              image={uiux.src}
              label={"Best\nUI/UX"}
              size="w-[13vw] h-[13vw]"
            />
            <PrizeCard
              image={pitch.src}
              label={"Best\nPitch"}
              size="w-[13vw] h-[13vw]"
            />
            <PrizeCard
              image={freshers.src}
              label={"Best\nFreshers"}
              size="w-[13vw] h-[13vw]"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
