import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React, { useState } from "react";
import animationData from "../Assets/contact.json";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const animations = {
    form: {
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
      transition: {
        delay: 0.5,
      },
    },
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    if (name === "" || email === "" || message === "") {
      toast.error("Please fill all the fields!");
      setDisableBtn(false);
      return;
    }

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (!regex.test(email)) {
      toast.error("Please Enter a valid email!");
      setDisableBtn(false);
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      toast.success("Message has been sent successfully.");
    } catch (error) {
      toast.error(`${error.message}`);
    }

    setName("");
    setEmail("");
    setMessage("");
    setDisableBtn(false);
  };

  return (
    <>
      <div
        id="contact"
        className="w-full min-h-[100vh] py-32 px-5 lg:px-14 overflow-hidden flex justify-center items-center"
      >
        <div className="flex flex-col-reverse md:flex-row h-full gap-x-5 justify-center items-center">
          <section className="left lg:w-1/2">
            <motion.form
              className="flex flex-col p-10 bg-[#181a27] border-0 rounded-xl gap-y-5"
              {...animations.form}
            >
              <h2 className="font-extralight tracking-wider text-3xl text-center md:text-5xl text-white">
                CONTACT ME
              </h2>
              <input
                type="text"
                placeholder="Your Name"
                className="placeholder:tracking-wider outline-none text-[#be50f4] font-medium border-spacing-y-5 border-2 border-[#be50f4] rounded-lg border-solid px-6 py-3 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="placeholder:tracking-wider outline-none text-[#be50f4] font-medium border-spacing-y-5 border-2 border-[#be50f4] rounded-lg border-solid px-6 py-3 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Your Message"
                className="placeholder:tracking-wider outline-none text-[#be50f4] font-medium border-spacing-y-5 border-2 border-[#be50f4] rounded-lg border-solid px-6 py-3 w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <motion.button
                disabled={disableBtn}
                type="submit"
                className={`text-white btn ${
                  disableBtn ? "cursor-not-allowed" : ""
                } `}
                onClick={(e) => submitHandler(e)}
                {...animations.button}
              >
                Send
              </motion.button>
            </motion.form>
          </section>
          <section className="right w-[90%] md:w-1/2 lg:h-[60vh] flex flex-col md:justify-center">
            <Player autoplay loop src={animationData}>
              <Controls buttons={["play", "repeat", "frame", "debug"]} />
            </Player>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
