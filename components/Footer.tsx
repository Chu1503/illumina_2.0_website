'use client'
import React from "react";
import { SocialIcon } from 'react-social-icons';
import vit_logo from "../images/vit_logo.webp";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full bg-black p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
  <div className="flex justify-center sm:justify-start items-center w-full sm:w-auto">
    <a href="https://vit.ac.in/" target="_blank" rel="noopener noreferrer">
      <img
        src={vit_logo.src}
        alt="VIT Logo"
        className="h-8 sm:h-10 w-auto cursor-pointer"
      />
    </a>
  </div>

  <div className="text-gray-300 text-sm sm:text-base text-center">
    Made with <span className="inline-block mx-1">❤️</span> by IE(I)-VIT
  </div>

  <div className="flex space-x-4 justify-center sm:justify-end items-center w-full sm:w-auto">
    <SocialIcon
      url="https://www.linkedin.com/company/ie-i-vellore/mycompany/"
      target="_blank"
      fgColor="gray"
      bgColor="transparent"
    />
    <SocialIcon
      url="https://www.facebook.com/ieichap.vit/"
      target="_blank"
      fgColor="gray"
      bgColor="transparent"
    />
    <SocialIcon
      url="https://www.instagram.com/iei_vit/"
      target="_blank"
      fgColor="gray"
      bgColor="transparent"
    />
  </div>
</footer>

  );
}
