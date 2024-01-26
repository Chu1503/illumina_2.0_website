import React from "react";
import { SocialIcon } from "react-social-icons";
import vit_logo from '../images/vit_logo.png';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="sticky bottom-0 p-5 flex flex-col items-center justify-between max-w-screen mx-auto z-20 w-full bg-[rgb(0,0,0)] sm:flex-row">
      <div className="flex items-center text-gray-300 px-32">
        <a href="https://vit.ac.in/" target="_blank">
        <img
          className="relative h-12 w-30 mx-auto object-contain cursor-pointer"
          src={vit_logo.src}
          alt="VIT LOGO"
        />
        </a>
      </div>
      <div className="flex flex-row items-center px-32">
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
        {/* <SocialIcon
          url="https://www.threads.net/"
          fgColor="gray"
          bgColor="transparent"
        /> */}
      </div>
    </footer>
  );
}
