import React from "react";
import { SiGithub, SiTwitter, SiLinkedin, SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="footer absolute flex justify-around z-50 bg-black w-full text-white py-6 px-5 text-xs font-thin lg:font-light gap-x-5 items-center">
        <div className="w-1/3">
          <p className="text-center">
            Designed and developed by <br /> Aniket Sakrkar
          </p>
        </div>
        <div className="w-1/3 text-center">Copyright © 2023 AS</div>
        <div className="flex w-1/3 justify-center gap-3 font-thin md:gap-x-7 text-base">
          <a href="https://github.com/Aniket-Sarkar-40" target="blank">
            <SiGithub />
          </a>
          <a href="https://twitter.com/ANIKETSARKAR05" target="blank">
            <SiTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-sarkar-b14a6b218"
            target="blank"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://www.instagram.com/aniket.sarkar._ro_hit_man_45/"
            target="blank"
          >
            <SiInstagram />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
