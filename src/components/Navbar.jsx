import React, { useEffect, useState } from "react";
import "../styles/nav.css";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FaTelegramPlane, FaBriefcase } from "react-icons/fa";
import logo from "../Assets/A.png";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const bgColour = `#181a27`;
const color1 = `#be50f4`;

async function getResumeUrl() {
  const settingsCol = collection(db, "settings");
  const settingsSnapshot = await getDocs(settingsCol);
  const settingsList = settingsSnapshot.docs.map((doc) => doc.data());

  const resumeUrl = settingsList[0].resumeUrl;

  return resumeUrl;
}

const Navbar = () => {
  const [hamb, setHamb] = useState(false);
  const [resumeLink, setResumeLink] = useState("");

  useEffect(() => {
    const data = getResumeUrl();
    data.then((val) => setResumeLink(val)).catch(() => console.log("error"));
  }, []);

  const hamclick = () => {
    setHamb(!hamb);
    const hamburger = document.querySelector(".hamburger");
    const navToggler = document.getElementById("navToggler");
    // console.log(navToggler);

    hamburger.classList.toggle("is-active");
    navToggler.classList.toggle("-translate-y-full");
    navToggler.classList.toggle("-z-50");
    navToggler.classList.toggle("z-10");
  };

  return (
    <>
      <MobileView hamb={hamb} hamclick={hamclick} resumeLink={resumeLink} />
      <PcView resumeLink={resumeLink} />
    </>
  );
};

const MobileView = ({ hamb, hamclick, resumeLink }) => {
  return (
    <>
      <header className="sticky top-0 z-20 lg:hidden">
        <nav
          className={`flex relative top-0 z-40 px-3 w-full justify-between items-center bg-[${bgColour}]`}
        >
          <div className="logo">
            <a href="#home">
              <img src={logo} className="rounded-full w-24" alt="" />
            </a>
          </div>

          <div className="hamb">
            <button
              onClick={hamclick}
              className="hamburger hamburger--spin"
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </nav>

        <div
          onClick={() => (hamb ? hamclick() : undefined)}
          className={`navelements w-full -top-4 relative `}
        >
          <div
            id="navToggler"
            className={`navs w-full absolute -translate-y-full -z-50  transition-all duration-300 ease-in-out pb-5 flex flex-col bg-[${bgColour}] `}
          >
            <ul className="p-5">
              <li
                className={`flex flex-col space-y-5 text-center text-[#be50f4] `}
              >
                <a
                  href="#home"
                  className=" tracking-wider  font-semibold text-xl flex space-x-1 items-center justify-center"
                >
                  <span>{<AiOutlineHome />}</span> <span>Home</span>
                </a>
                <a
                  href="#about"
                  className=" tracking-wider font-semibold text-xl flex space-x-1 items-center justify-center"
                >
                  <span>{<BiUser />}</span> <span>About</span>
                </a>
                <a
                  href="#projects"
                  className=" tracking-wider font-semibold text-xl flex space-x-1 items-center justify-center"
                >
                  <span>{<AiOutlineFundProjectionScreen />}</span>{" "}
                  <span>Projects</span>
                </a>
                <a
                  href="#services"
                  className=" tracking-wider font-semibold text-xl flex space-x-1 items-center justify-center"
                >
                  <span>{<FaBriefcase />}</span> <span>Services</span>
                </a>
                <a
                  href="#contact"
                  className=" tracking-wider font-semibold text-xl flex space-x-1 items-center justify-center"
                >
                  <span>{<FaTelegramPlane />}</span> <span>Contact</span>
                </a>
              </li>
            </ul>

            <div className=" h-1/2 flex justify-center">
              <a
                href={resumeLink}
                download="Resume"
                target="blank"
                className="cursor-pointer"
              >
                <button className="btn font-semibold text-xl  bg-[#bd50f454] border-0 rounded-lg w-fit text-[#be50f4]">
                  My Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const PcView = ({ resumeLink }) => {
  return (
    <>
      <header className="sticky top-0 z-20 hidden lg:block">
        <nav
          className={`flex stroke  px-7 lg:px-10 w-full justify-between items-center bg-[${bgColour}]`}
        >
          <div className="logo">
            <a href="#home">
              <img src={logo} className="rounded-full w-24" alt="" />
            </a>
          </div>
          <div
            className={`navs text-lg font-semibold items-center px-5 flex space-x-7 text-[${color1}]`}
          >
            <ul className="flex space-x-7">
              <li>
                <a
                  className={`/*hover:border-b-4*/ pb-1 flex space-x-1 items-center rounded-b-sm  border-[#be50f4] `}
                  href="#home"
                >
                  <span>{<AiOutlineHome />}</span> <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  className={`/*hover:border-b-4*/ flex space-x-1 items-center pb-1 rounded-b-sm  border-[#be50f4] `}
                  href="#about"
                >
                  <span>{<BiUser />}</span> <span>About</span>
                </a>
              </li>
              <li>
                <a
                  className={`/*hover:border-b-4*/ flex space-x-1 items-center pb-1 rounded-b-sm  border-[#be50f4] `}
                  href="#projects"
                >
                  <span>{<AiOutlineFundProjectionScreen />}</span>
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a
                  className={`/*hover:border-b-4*/ flex space-x-1 items-center pb-1 rounded-b-sm  border-[#be50f4] `}
                  href="#services"
                >
                  <span>{<FaBriefcase />}</span>
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  className={`/*hover:border-b-4*/ flex space-x-1 items-center pb-1 rounded-b-sm  border-[#be50f4] `}
                  href="#contact"
                >
                  <span>{<FaTelegramPlane />}</span> <span>Contact</span>
                </a>
              </li>
            </ul>

            <div className=" h-1/2">
              <a href={resumeLink} download="Resume" target="blank">
                <button className="btn">My Resume</button>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
