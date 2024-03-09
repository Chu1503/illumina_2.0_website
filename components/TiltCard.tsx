import { useRef, useState } from "react";
import { motion } from "framer-motion";
import iei_logo from "../images/iei_logo.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: "translateZ(500px)",
        transformStyle: "preserve-3d",
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative h-auto w-auto sm:w-[55vw] rounded-xl flex sm:flex-row flex-col items-center p-5"
    >
      <div className="flex-shrink-0">
        <img
          className="sm:h-[20vw] sm:w-[20vw] h-[50vw] w-[50vw] rounded-full"
          src={iei_logo.src}
          alt="iei_logo"
        />
      </div>
      <div className="flex flex-col flex-grow justify-center p-4">
        <h1 className="text-5xl font-bold">Name</h1>
        <p className="text-md mt-5 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          justo ut quam efficitur commodo.
        </p>
        <div className="flex justify-center items-center mt-5">
          {" "}
          <a href="#" className="align-center">
            <FaInstagram
              className="text-pink-500 hover:text-pink-700 mr-2.5"
              size={25}
            />
          </a>
          <a href="#" className="">
            <FaLinkedin
              className="text-blue-500 hover:text-blue-700 ml-2.5"
              size={25}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TiltCard;
