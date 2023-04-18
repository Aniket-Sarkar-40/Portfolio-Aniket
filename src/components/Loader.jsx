import React from "react";
import "../styles/loader.css";

const Loader = () => {
  return (
    <>
      <div className="flex w-[100vw] h-[100vh] justify-center items-center bg-[#181a27]">
        <div className="loader">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
