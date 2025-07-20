"use client";
import React, { useState } from "react";
import Link from "next/link";
import iei_logo_text from "../images/iei_logo_text.webp";
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
    <header className="sticky top-0 flex flex-col items-end justify-between lg:flex-row lg:w-auto lg:max-w-screen mx-auto h-auto lg:h-16 z-30 lg:bg-black lg:items-center">
      <div className="flex-row items-center p-5 px-10 lg:hidden xl:flex sm:hidden md:hidden hidden">
        <img
          className="relative h-12 w-30 mx-auto object-contain"
          src={iei_logo_text.src}
          alt="IEI LOGO TEXT"
        />
      </div>

      <div className="lg:hidden pt-5">
        {/*  <div className="lg:hidden pt-5"> -> if you want to hide the navbar on phone */}
        <button
          className="herobutton cursor-pointer fixed top-6 right-6 bg-[#01cdfa] rounded-full pt-3 pb-3 pr-4 pl-4 text-black"
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
        className={`lg:flex bg-black flex bg-rounded rounded-md flex-col text-right lg:flex-row items-end lg:items-center text-gray-300 pt-12 pb-3 lg:p-4 ${
          isNavVisible ? "block" : "hidden"
        }`}
      >
        <Link href="#hero">
          <button
            className="herobutton cursor-pointer pb-1 lg:pb-0 sm:text-md text-xs xl:text-base"
            onClick={closeNav}
          >
            Home
          </button>
        </Link>

        <Link href="#about">
          <button
            className="herobutton cursor-pointer pb-1 lg:pb-0 sm:text-md text-xs xl:text-base"
            onClick={closeNav}
          >
            About
          </button>
        </Link>

        <Link href="#speakers">
          <button
            className="herobutton cursor-pointer pb-1 lg:pb-0 sm:text-md text-xs xl:text-base"
            onClick={closeNav}
          >
            Speaker
          </button>
        </Link>

        <Link href="#timeline">
          <button
            className="herobutton cursor-pointer pb-1 lg:pb-0 sm:text-md text-xs xl:text-base"
            onClick={closeNav}
          >
            Timeline
          </button>
        </Link>

        <Link href="#sponsors">
          <button
            className="herobutton cursor-pointer pb-1 lg:pb-0 sm:text-md text-xs xl:text-base"
            onClick={closeNav}
          >
            Sponsors
          </button>
        </Link>

        <Link href="#prizes">
          <button
            className="herobutton cursor-pointer pb-1 lg:pb-0 sm:text-md text-xs xl:text-base"
            onClick={closeNav}
          >
            Prizes
          </button>
        </Link>

        <Link href="#gallery">
          <button
            className="herobutton cursor-pointer pb-1 lg:pb-0 sm:text-md text-xs xl:text-base"
            onClick={closeNav}
          >
            Gallery
          </button>
        </Link>
      </div>
    </header>
  );
}
