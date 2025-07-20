"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import illumina_logo_text from "../images/illumina_logo_text.webp";
import front1 from "../images/front1.webp";
import front2 from "../images/front2.webp";
import front3 from "../images/front3.webp";
import front4 from "../images/front4.webp";
import front5 from "../images/front5.webp";
import front6 from "../images/front6.webp";
import trees from "../images/trees.webp";
import mobile_hero from "../images/mobile_hero.webp";
import { useRouter } from "next/navigation";

const layers = [
  { src: front6, name: "front6" },
  { src: front5, name: "front5" },
  { src: front4, name: "front4" },
  { src: front3, name: "front3" },
  { src: front2, name: "front2" },
  { src: front1, name: "front1" },
  { src: trees, name: "trees" },
];
type Props = {};

export default function Hero({}: Props) {
  const router = useRouter();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".scroll-container");
    const handleScroll = () => setOffsetY(container?.scrollTop || 0);
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="particle-bg" />
      <div className="mt-[100px] relative w-full h-full hidden md:flex">
        {layers.map((layer, index) => {
          const isLazyLoad = [
            "trees",
            "front1",
            "front2",
            "front3",
            "front4",
            "front5",
            "front6",
          ].includes(layer.name);
          const isTrees = layer.name === "trees";
          const isFront1 = layer.name === "front1";
          const isFront2 = layer.name === "front2";
          const isFront3 = layer.name === "front3";
          const isFront4 = layer.name === "front4";
          const isFront5 = layer.name === "front5";
          const isFront6 = layer.name === "front6";

          let transform = "none";

          if (isFront6) {
            transform = `translateX(${offsetY * 0.3}px)`;
          } else if (isFront5) {
            transform = `translateY(${offsetY * 0.2}px)`;
          } else if (isFront4) {
            transform = `translateY(${offsetY * 0.1}px)`;
          } else if (isFront3) {
            transform = `translateX(${offsetY * -0.3}px)`;
          } else if (isFront2) {
            transform = `translateX(${offsetY * -0.3}px)`;
          } else if (isFront1) {
            transform = `translateX(${offsetY * -0.2}px)`;
          } else if (isTrees) {
            transform = `translateY(${offsetY * 0.1}px)`;
          }

          return (
            <Image
              key={index}
              src={layer.src}
              alt={`layer-${layer.name}`}
              fill
              className="object-cover absolute pointer-events-none"
              style={{
                zIndex: 10 + index,
                transform,
              }}
            />
          );
        })}
      </div>
      
      <div className="block md:hidden absolute inset-0 z-10">
        <Image
          src={mobile_hero.src}
          alt="Mobile Hero"
          fill
          className="object-cover"
        />
      </div>
      <div
        className="absolute left-1/2 top-[250px] flex flex-col items-center gap-2 md:gap-0 sm:w-[50vw] w-[100vw]"
        style={{
          transform: `translate(-50%, -50%) translateY(${offsetY * 0.6}px)`,
          zIndex: 1,
        }}
      >
        <Image
          src={illumina_logo_text}
          alt="ILLUMINA LOGO TEXT"
          className="relative rounded-full "
          priority
        />

        <button
          className="text-lg p-2 border border-white text-white hover:bg-[#01cdfa] hover:text-black hover:border-black rounded-lg cursor-pointer transition-opacity duration-500"
          style={{
            opacity:
              typeof window !== "undefined" &&
              offsetY > window.innerHeight * 0.1
                ? 0
                : 1,
            pointerEvents:
              typeof window !== "undefined" &&
              offsetY > window.innerHeight * 0.1
                ? "none"
                : "auto",
          }}
          onClick={() => router.push("/login")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
