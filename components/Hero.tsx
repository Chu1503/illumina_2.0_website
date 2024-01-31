import React from "react";
import illumina_logo_text from "../images/illumina_logo_text.png";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="h-screen flex flex-col sm:flex-row -space-y-2 items-center justify-center text-center overflow-hidden p-4 sm:pb-28">
      <img
        className="relative rounded-full sm:w-[50vw] w-[100vw] pb-10 sm:pb-0 mx-auto"
        src={illumina_logo_text.src}
        alt="ILLUMINA LOGO TEXT"
      />
      <p className="text-lg sm:text-xl text-center leading-10 sm:leading-10 sm:pl-20 sm:pr-20">
        Embark on a transformative journey by participating in the renowned
        Illumina hackathon, meticulously organized by VIT Vellore's IE(I)
        Student Chapter. Building on the resounding success of the previous
        edition, this event beckons you to partake in a thrilling experience
        dedicated to fostering creativity, innovation, and collaboration.
      </p>
    </div>
  );
}
