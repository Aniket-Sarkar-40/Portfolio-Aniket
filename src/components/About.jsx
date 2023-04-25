import React from "react";
// import home from "../Assets/home.png";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiTailwindcss,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import "../styles/about.css";
// import { Player, Controls } from "@lottiefiles/react-lottie-player";
// import animationData from "../Assets/animation2.json";
import home from "../Assets/transMyImg.png";

const About = () => {
  return (
    <>
      <div id="about" className="w-full min-h-[100vh] py-32 px-5 lg:px-14">
        <h2 className="font-semibold  text-4xl text-white w-fit m-auto border-b-2 solid border-[#be50f4] p-2 mb-7">
          About
        </h2>
        <div className="info  flex flex-col-reverse md:flex-row-reverse md:justify-center md:h-[60vh] justify-around items-center forpic gap-4 md:gap-x-6">
          <section className="left text-lg text-white font-semibold tracking-wide md:w-[60%] pl-8">
            <h3 className="my-7 md:my-10 text-3xl text-center md:text-left font-semibold">
              Know Who <span className="text-[#be50f4]">I'M</span>
            </h3>
            <p>
              Hi Everyone, I am{" "}
              <span className="text-[#be50f4]">Aniket Sarkar</span> from
              <span className="text-[#be50f4]"> Murshidabad, India.</span>
            </p>
            <p className="mb-5">
              I am a junior web developer, pursuing B.tech in CSE from Cooch
              Behar Govt. Engineering College.
            </p>
            <p>Apart from coding, some other activities that I love to do!</p>
            <div className="ml-4 mx-2">
              <p>👉🏻 Playing Games</p>
              <p>👉🏻 Listening Audio Story</p>
              <p>👉🏻 Travelling</p>
            </div>
          </section>
          <section className="w-full md:w-[40%] flex flex-col md:justify-center forPic  items-center mb-4 md:m-0">
            <img
              className="object-contain bg-transparent md:w-[90%] lg:w-[70%] min-w-[8rem] max-w-[18rem] lg:max-w-[24rem] rounded-full w-[60%] shadow-lg 
              shadow-[#be50f4] animate-ping"
              src={home}
              alt="Aniket"
              style={{
                animation: "ping 2s linear infinite",
              }}
            />
            {/* <Player autoplay loop src={animationData}>
              <Controls buttons={["play", "repeat", "frame", "debug"]} />
            </Player> */}
          </section>
        </div>
        <div className="skillSet  my-9 text-3xl text-center font-semibold text-white">
          <h3>
            Professional <span className="text-[#be50f4]">Skillset</span>
          </h3>
          <div className="skills text-white "></div>
        </div>
        <div className="flex justify-center flex-wrap gap-5 md:gap-8 lg:gap-14 xl:gap-20 text-white text-6xl xl:text-7xl">
          <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
            <CgCPlusPlus />
          </div>
          <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
            <DiJavascript1 />
          </div>
          <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
            <DiJava />
          </div>
          <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
            <DiNodejs />
          </div>
          <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
            <DiReact />
          </div>
          <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
            <DiMongodb />
          </div>
          <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
            <SiTailwindcss />
          </div>
          <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
            <DiGit />
          </div>
          <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
            <SiFirebase />
          </div>
        </div>

        <div className="tools pt-10">
          <div className=" my-9 text-3xl text-center font-semibold text-white">
            <h3>
              <span className="text-[#be50f4]">Tools </span> I Use
            </h3>
            <div className="skills text-white "></div>
          </div>
          <div className="flex justify-center flex-wrap gap-5 md:gap-8 lg:gap-14 xl:gap-20 text-white text-6xl xl:text-7xl">
            <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
              <SiVisualstudiocode />
            </div>
            <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
              <SiPostman />
            </div>
            <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
              <SiVercel />
            </div>
            <div className="box shadow-md shadow-[#be50f4]  border-solid border-2 rounded-lg border-[#be50f4] p-7 lg:p-9 xl:p-10 2xl:p-12  hover:scale-[1.1] transform duration-500 ease-out cursor-pointer">
              <SiHeroku />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
