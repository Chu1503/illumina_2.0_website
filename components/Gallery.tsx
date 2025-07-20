"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import pic1 from "../images/1.webp";
import pic2 from "../images/2.webp";
import pic3 from "../images/3.webp";
import pic4 from "../images/4.webp";
import pic5 from "../images/5.webp";
import pic6 from "../images/6.webp";

type Props = {};

export default function Gallery({}: Props) {
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      url: pic1.src,
    },
    {
      url: pic2.src,
    },
    {
      url: pic3.src,
    },
    {
      url: pic4.src,
    },
    {
      url: pic5.src,
    },
    {
      url: pic6.src,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex flex-col relative h-auto text-center max-w-4xl p-10 justify-evenly mx-auto items-center">
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
      >
        <h2 className="p-10 uppercase tracking-[10px] sm:tracking-[20px] text-[rgba(1,205,250,255)] text-4xl sm:text-5xl font-bold">
          Gallery
        </h2>
      </motion.div>
      <div className="w-full m-auto relative group">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src={slides[currentIndex].url}
              alt={`Gallery Image ${currentIndex + 1}`}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl shadow-xl shadow-black transition duration-700 ease-in-out blur-sm scale-105"
              onLoad={(e) => {
                e.currentTarget.classList.remove("blur-sm", "scale-105");
              }}
            />
            <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/70 text-[#01cdfa] cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/70 text-[#01cdfa] cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
        <div className="flex top-4 justify-center py-7">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-3xl cursor-pointer"
            >
              <RxDotFilled style={{ color: "#01cdfa" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
