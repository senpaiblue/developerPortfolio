import Link from "next/link";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id='"contact'>
      <div className="absolute w-full left-0 -bottom-72 min-h-6">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your </span>
          digital presence to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>

        <Link target="_blank" href={"mailto:singhsakcham29@gmai.com"}>
          <MagicButton
            title="Connect Now"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row w-[95%] flex-col gap-4 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © Sakcham</p>
        <div className="flex flex-row items-center justify-center gap-8">
          {socialMedia.map(({id,img,link})=>(
            <Link className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300" key={id} target="_blank" href={link}>
              <img
              src={img} alt={link}
              width={28} height={28}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
