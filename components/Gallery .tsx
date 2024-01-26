import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import pic1 from "../images/1.png";
import pic2 from "../images/2.png";
import pic3 from "../images/3.png";
import pic4 from "../images/4.png";
import pic5 from "../images/5.png";
import pic6 from "../images/6.png";

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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex flex-col relative h-auto text-center max-w-7xl p-10 justify-evenly mx-auto items-center">
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
        <h2 className="pt-20 p-10 uppercase tracking-[20px] text-gray-500 text-3xl sm:text-4xl">
          Gallery
        </h2>
      </motion.div>
      <div className="w-full m-auto py-4 px-4 relative group">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="absolute top-0 left-0 w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat duration-500 shadow-xl shadow-black"
          >
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-[#F7AB0A] cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-[#F7AB0A] cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
        <div className="flex top-4 justify-center py-7">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled style={{ color: "#F7AB0A" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
