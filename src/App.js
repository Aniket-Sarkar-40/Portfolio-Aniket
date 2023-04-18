import { useEffect, useState } from "react";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
// import bgImage from "./Assets/home-bg.jpg";

import { BsChevronDown } from "react-icons/bs";
import Projects from "./components/Projects";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

// const bgColour = `#181a2`;
// const color1 = `#be50f4`;

function App() {
  const [loading, setLoading] = useState(true);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  // console.log(ratio);

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  const scrollFunc = () => {
    const scroll = document.getElementById("scroll");
    scroll.style.display = "hidden";
  };

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {ratio < 2 ? (
            <>
              <Navbar />

              <div className={`bg-[#0e031c]  p-5`}>
                <Home ratio={ratio} />

                <About />

                <Projects />

                <Services />

                <Contact />
                <Toaster />

                <div className="fixed bottom-1 z-40 -translate-x-1/2 left-1/2">
                  <BsChevronDown
                    id="scroll"
                    onScroll={scrollFunc}
                    className="text-[#be50f4] animate-bounce text-5xl"
                  />
                </div>
              </div>
              <Footer />
            </>
          ) : (
            <em id="customMessage" className="font-bold ">
              Please Change The Ratio To View!
            </em>
          )}
        </>
      )}
    </>
  );
}

export default App;
