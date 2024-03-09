import React, { useState } from "react";
import Link from "next/link";
import iei_logo_text from "../images/iei_logo_text.png";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

export default function Navbar({}: Props) {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNavVisibility = () => {
    setNavVisibility(!isNavVisible);
  };

  const closeNav = () => {
    setNavVisibility(false);
  };

  return (
    <header className="sticky top-0 flex flex-col items-end justify-between sm:flex-row sm:w-auto sm:max-w-screen mx-auto h-auto sm:h-16 z-30 sm:bg-black sm:items-center">
      <div className="hidden sm:flex sm:flex-row items-center p-5 px-10">
        <img
          className="relative h-12 w-30 mx-auto object-contain"
          src={iei_logo_text.src}
          alt="IEI LOGO TEXT"
        />
      </div>

      <div className="sm:hidden pt-5"> 
      {/*  <div className="sm:hidden pt-5"> -> if you want to hide the navbar on phone */}
        <button
          className="herobutton cursor-pointer fixed top-6 right-6 bg-black rounded-full pt-3 pb-3 pr-4 pl-4"
          onClick={toggleNavVisibility}
        >
          {isNavVisible ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>

      <div
        className={`sm:flex bg-black flex bg-rounded rounded-md flex-col text-right text-sm sm:text-xl sm:flex-row items-end sm:items-center text-gray-300 pt-12 pb-3 sm:p-4 ${
          isNavVisible ? "block" : "hidden"
        }`}
      >
        <Link href="#hero">
          <button className="herobutton cursor-pointer pb-1 sm:pb-0" onClick={closeNav}>Home</button>
        </Link>

        <Link href="#about">
          <button className="herobutton cursor-pointer pb-1 sm:pb-0" onClick={closeNav}>About</button>
        </Link>

        <Link href="#gallery">
          <button className="herobutton cursor-pointer pb-1 sm:pb-0" onClick={closeNav}>Gallery</button>
        </Link>

        <Link href="#speakers">
          <button className="herobutton cursor-pointer pb-1 sm:pb-0" onClick={closeNav}>Speakers</button>
        </Link>

        <Link href="#timeline">
          <button className="herobutton cursor-pointer pb-1 sm:pb-0" onClick={closeNav}>Timeline</button>
        </Link>

        <Link href="#prizes">
          <button className="herobutton cursor-pointer pb-1 sm:pb-0" onClick={closeNav}>Prizes</button>
        </Link>

        <Link href="#sponsors">
          <button className="herobutton cursor-pointer pb-1 sm:pb-0" onClick={closeNav}>Sponsors</button>
        </Link>
      </div>
    </header>
  );
}
