import React from "react";
import Link from "next/link";
import iei_logo_text from '../images/iei_logo_text.png';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="sticky top-0 hidden items-end justify-between max-w-screen mx-auto z-30 xl:items-center bg-[rgb(0,0,0)] sm:flex">
      <div className="flex flex-row items-center p-5 px-10">
        <img
          className="relative h-12 w-30 mx-auto object-contain"
          src={iei_logo_text.src}
          alt="IEI LOGO TEXT"
        />
      </div>

      <div className="flex flex-row items-center text-gray-300 p-5 ">
        <Link href="#hero">
          <button className="herobutton cursor-pointer">Home</button>
        </Link>

        <Link href="#about">
          <button className="herobutton cursor-pointer">About Us</button>
        </Link>

        <Link href="#gallery">
          <button className="herobutton cursor-pointer">Gallery</button>
        </Link>

        <Link href="#speakers">
          <button className="herobutton cursor-pointer">Speakers</button>
        </Link>

        <Link href="#timeline">
          <button className="herobutton cursor-pointer">Timeline</button>
        </Link>

        <Link href="#prizes">
          <button className="herobutton cursor-pointer">Prizes</button>
        </Link>

        <Link href="#sponsors">
          <button className="herobutton cursor-pointer">Sponsors</button>
        </Link>

      </div>
    </header>
  );
}
