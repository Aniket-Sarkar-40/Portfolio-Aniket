import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillWindows } from "react-icons/ai";
import { SiAffinitydesigner } from "react-icons/si";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <>
      <div
        id="services"
        className="w-full h-[100vh] py-32 px-5 lg:px-14 overflow-hidden"
      >
        <h2 className="font-semibold  text-4xl text-white w-fit m-auto border-b-2 solid border-[#be50f4] p-2 ">
          Services
        </h2>
        <section className="grid my-12 mx-0  grid-cols-2 gap-4  lg:grid-cols-3 h-full lg:gap-8 text-white">
          <motion.div
            className="serviceBox1 row-auto lg:row-start-1 lg:row-end-3
            col-start-1 col-end-3 lg:col-end-2 w-full h-full bg-[#871fba] flex flex-col transition-all items-center justify-center hover:shadow-lg hover:shadow-[#db9bfb] "
            whileInView={animations.whileInView}
            initial={animations.one}
          >
            <p className="font-thin text-5xl">1+</p>
            <p className="font-semibold text-lg  tracking-wider">
              Years Experience
            </p>
          </motion.div>
          <motion.div
            className="serviceBox2 w-full h-full bg-[#181a27] flex flex-col transition-all items-center justify-center hover:shadow-lg hover:shadow-[#be50f4] "
            whileInView={animations.whileInView}
            initial={animations.twoAndThree}
          >
            <AiFillIeCircle className=" font-semibold text-6xl h-[35%] lg:h-fit" />
            <span className="font-semibold text-lg m-4 tracking-wider text-center h-[40%]  lg:h-fit">
              Full Stack Web Development
            </span>
          </motion.div>
          <motion.div
            className="serviceBox3 w-full h-full bg-[#181a27] flex flex-col transition-all items-center justify-center hover:shadow-lg hover:shadow-[#be50f4] "
            whileInView={animations.whileInView}
            initial={animations.twoAndThree}
            transition={{
              delay: 0.2,
            }}
          >
            <SiAffinitydesigner className=" font-semibold text-5xl h-[35%] lg:h-fit" />
            <span className="font-semibold text-lg m-4 tracking-wider text-center h-[40%] lg:h-fit ">
              Web Designing
            </span>
          </motion.div>
          <motion.div
            className="serviceBox4 w-full h-full lg:col-start-2 lg:col-end-4 col-start-1 col-end-3 bg-[#181a27] flex flex-col transition-all items-center justify-center hover:shadow-lg hover:shadow-[#be50f4] "
            whileInView={animations.whileInView}
            initial={animations.four}
          >
            <AiFillWindows className=" font-semibold text-5xl" />
            <span className="font-semibold text-lg m-4 tracking-wider">
              Software Development
            </span>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Services;
