import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../Assets/data.json";
import "../styles/projects.css";

const Projects = () => {
  return (
    <>
      <div id="projects" className="w-full h-[100vh] py-32 px-5 lg:px-14">
        <h2 className="font-semibold  text-4xl text-white w-fit m-auto border-b-2 solid border-[#be50f4] p-2 ">
          Projects
        </h2>
        <section className="mt-10 sm:mt-16 lg:mt-10 w-full h-full flex items-center justify-center bg-[#181a27]">
          <article className="w-[90%] md:w-[80%] lg:w-[70%]  2xl:w-[72%] h-[90%]  2xl:h-[26vmax]   flex flex-col justify-center">
            <Carousel
              showArrows={false}
              showIndicators={true}
              showStatus={false}
              showThumbs={false}
              interval={2000}
              infiniteLoop={true}
              autoPlay={true}
            >
              {data.projects.map((curr) => (
                <div key={curr.title}>
                  <div
                    className="work-item w-full  flex flex-col justify-center gap-x-5 xl:overflow-y-auto xl:h-[25vmax] xl:w-[95%] xl:m-auto bg-[#0e031c]  xl:flex-row xl:p-8 p-4 h-[430px]"
                    // style={{
                    //   boxShadow: "0 0 20px 5px white",
                    // }}
                  >
                    <img
                      className="rounded-2xl h-[40%] xl:h-full xl:w-[40%] object-contain "
                      src={curr.imgSrc}
                      alt={curr.title}
                    />
                    <aside className="text-white  w-full xl:w-[60%] flex flex-col justify-between items-center ">
                      <h3 className="font-bold text-xl xl:mt-10">
                        {curr.title}{" "}
                      </h3>

                      <p className="tracking-wider mb-3 text-sm xl:text-base leading-[180%] 2xl:m-8">
                        {curr.description}{" "}
                      </p>
                      <div className="flex gap-x-5 flex-wrap justify-center">
                        <a className="ani-btn" target={"blank"} href={curr.url}>
                          <span className="relative top-[18%]">View Demo</span>
                        </a>
                        <a
                          className="ani-btn"
                          target={"blank"}
                          href={curr.github}
                        >
                          <span className="relative top-[18%]">
                            View Github
                          </span>
                        </a>
                      </div>
                    </aside>
                  </div>
                </div>
              ))}
            </Carousel>
          </article>
        </section>
      </div>
    </>
  );
};

export default Projects;
