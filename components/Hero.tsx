"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import illumina_logo_text from "../images/illumina_logo_text.png";
import aurora from "../images/aurora.webp";
import front1 from "../images/front1.webp";
import front2 from "../images/front2.webp";
import front3 from "../images/front3.webp";
import front4 from "../images/front4.webp";
import front5 from "../images/front5.webp";
import front6 from "../images/front6.webp";
import trees from "../images/trees.webp";
import { useRouter } from "next/navigation";

const layers = [
  // { src: aurora, name: "aurora" },
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
      {layers.map((layer, index) => {
        const isTrees = layer.name === "trees";
        const isFront1 = layer.name === "front1";
        const isFront2 = layer.name === "front2";
        const isFront3 = layer.name === "front3";
        const isFront4 = layer.name === "front4";
        const isFront5 = layer.name === "front5";
        const isFront6 = layer.name === "front6";
        const isAurora = layer.name === "aurora";

        let transform = "none";

        if (isFront6) {
          transform = `translateY(${offsetY * -0.2}px)`;
        } else if (isFront5) {
          transform = `translateY(${offsetY * -0.4}px)`;
        } else if (isFront4) {
          transform = `translateY(${offsetY * -0.4}px)`;
        } else if (isFront3) {
          transform = `translateY(${offsetY * -0.1}px)`;
        } else if (isFront2) {
          transform = `translateY(${offsetY * -0.4}px)`;
        } else if (isFront1) {
          transform = `translateY(${offsetY * -0.3}px)`;
        } else if (isTrees) {
          transform = `translateY(${offsetY * -0.1}px)`;
        } else if (isAurora) {
          transform = `translateY(${offsetY * -0.05}px)`;
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
      <div
        className="absolute inset-0 z-0 h-[60%]"
        style={{
          backgroundImage: `
      linear-gradient(115deg, rgba(130, 36, 104, 0.4) 0%, transparent 70%),
      linear-gradient(245deg, rgba(25, 99, 107, 0.3) 10%, transparent 80%),
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, black 41%)
    `,
          backgroundSize: "400% 400%",
          animation: "aurora 60s linear infinite",
        }}
      />

      <div
        className="absolute left-1/2 top-[200px] flex flex-col items-center gap-2 md:gap-0"
        style={{
          transform: `translate(-50%, -50%) translateY(${offsetY * 0.6}px)`,
          zIndex: 1,
        }}
      >
        <img
          className="relative rounded-full sm:w-[50vw] w-[100vw] mx-auto"
          src={illumina_logo_text.src}
          alt="ILLUMINA LOGO TEXT"
        />

        <button
          className="text-lg p-2 border border-white text-white hover:bg-white hover:text-black hover:border-black rounded-lg cursor-pointer transition-opacity duration-500"
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
