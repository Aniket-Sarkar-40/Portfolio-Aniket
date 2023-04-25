import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import "../styles/home.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import animationData from "../Assets/animation1.json";

// const bgColour = `#181a27`;
const color1 = `#be50f4`;

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animationProjectsCount = () => {
    animate(0, 10, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <>
      <div
        className={`hero py-10 px-5
       w-full flex  flex-col min-h-[90vh]  md:flex-row  md:min-h-[70vh] lg:px-14`}
        id="home"
      >
        <section className="w-full  flex flex-col justify-center">
          <div>
            <motion.h1
              {...animation.h1}
              className={`font-bold text-white text-3xl`}
            >
              <span className="flex items-center">
                Hi There! <span className="wave"> 👋🏻 </span>
              </span>{" "}
              <br /> I'M
              <span className={`text-[${color1}] `}> Aniket Sarkar</span>
            </motion.h1>

            <div className="type  my-10">
              <Typewriter
                options={{
                  strings: ["A MERN Developer", "A Designer", "A Creator"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  wrapperClassName: `text-white tracking-wider font-semibold text-xl`,
                }}
              />
            </div>

            <div className="flex gap-3 items-center flex-wrap text-white mr-3">
              <a href="mailto:aniket10ce@gmail.com" className={``}>
                <motion.button {...animation.button} className="btn-body">
                  <span className="btn-body-cont text-md">Hire Me</span>
                </motion.button>
              </a>

              <a href="#projects" className=" /*flex space-x-1 items-center*/">
                <motion.button {...animation.button} className="btn-body">
                  <span className="flex items-center btn-body-cont space-x-1">
                    Projects <BsArrowUpRight />
                  </span>
                </motion.button>
              </a>
            </div>
            <div className="sec font-[roboto] py-7 text-white flex flex-col space-y-5">
              <div className="flex w-full gap-x-5 ">
                <article>
                  <p className="cta font-bold text-lg">
                    +
                    <motion.span
                      whileInView={animationClientCount}
                      ref={clientCount}
                    ></motion.span>
                  </p>
                  <span>Clients Worldwide</span>
                </article>

                <article>
                  <p className="cta font-bold text-lg">
                    +
                    <motion.span
                      whileInView={animationProjectsCount}
                      ref={projectCount}
                    ></motion.span>
                  </p>
                  <span>Projects Made Worldwide</span>
                </article>
              </div>
              <article data-special>
                <p className="cta font-bold text-lg">Contact</p>
                <span>aniket10ce@gmail.com</span>
              </article>
            </div>
          </div>
        </section>

        <section className="w-full lg:h-[80vh] flex flex-col md:justify-center">
          {/* <img className="object-contain" src={me} alt="Aniket" /> */}
          <Player autoplay loop src={animationData}>
            <Controls buttons={["play", "repeat", "frame", "debug"]} />
          </Player>
        </section>
      </div>
    </>
  );
};

export default Home;
