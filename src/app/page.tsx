"use client";

import { motion } from "framer-motion";
import { FlipWords } from "./components/ui/flip-words";
// import Image from "next/image";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Enable from "./components/ui/Enable";
import Contact from "./components/ui/Contact";
import About from "./components/ui/TempAbout";
import Wake from "./components/ui/Wake";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
// import frontpage from "../../public/frontpage.jpg";
// import Inactive from "./components/ui/Inactive";

export default function Home() {

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: [0.05, 0.5], // Fully visible
    rootMargin: "0px 0px -89% 0px",
  });
  const { ref: enableRef, inView: enableInView } = useInView({
    threshold: [0.05, 0.5], // Fully visible
    rootMargin: "0px 0px -89% 0px",
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: [0.05, 0.5], // Fully visible
    rootMargin: "0px 0px -89% 0px",
  });

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  useEffect(() => {
    if (aboutInView) {
      setLeft(false);
      setRight(false);
    } else if (enableInView) {
      setLeft(false);
      setRight(false);
    } else if (contactInView) {
      setLeft(false);
      setRight(true);
    } else {
      setLeft(false);
      setRight(false);
    }
  }, [aboutInView, enableInView, contactInView]);

  const avail: string[] = [
    "Rewiring",
    "Transforming",
    "Rewriting",
    "Modernizing",
    "Elevating",
  ];
  return (
    <>
      {/* <div className="fixed bottom-0 right-0 z-50 text-xl font-bold m-2 cursor-pointer text-white">
        Developer not paid yet!
      </div> */}

      <div className="hidden md:block">
        <Wake />
      </div>

      {/* <Inactive /> */}
      <Navbar left={left} right={right} button={right} />

      <section
        id="home"
        className="select-none relative w-full h-[100vh] m-auto text-center flex flex-col justify-center items-center bg-opacity-100 bg-black"
      >
        <motion.video
          initial={{
            scale: 0.8,
            borderRadius: "1rem",
          }}
          animate={{
            scale: 1,
            borderRadius: "0px",
          }}
          transition={{
            duration: 0.5,
          }}
          src="/bannerVideo.mp4"
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          crossOrigin="anonymous"
          poster="/banner-pre.png"
          className="absolute object-cover inset-0 w-full h-full scale-90 rounded-none opacity-100"
        >
          Your browser does not support the video tag.
        </motion.video>
        {/* <motion.div
          initial={{
            scale: 0.8,
            borderRadius: "1rem",
          }}
          animate={{
            scale: 1,
            borderRadius: "0px",
          }}
          transition={{
            duration: 0.3,
          }}
          className="relative object-cover inset-0 w-full h-full scale-90 rounded-2xl opacity-100"
        >
          <Image
            src={frontpage}
            height={0}
            width={0}
            placeholder="blur"
            sizes="100% 100%"
            className="absolute object-cover inset-0 w-full h-full scale-100 opacity-100"
            alt="athens"
            no-select="true"
          ></Image>
        </motion.div> */}
        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.7,
          }}
          transition={{
            duration: 2,
          }}
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(circle,white_10%,transparent_50%)]"
        ></motion.div> */}
        <div className="flex lg:flex-row flex-col z-10">
          <FlipWords
            words={avail}
            duration={3000}
            className="md:text-9xl text-6xl text-white font-bold lg:text-left text-center  flex-wrap"
          />
          <div className="w-1 bg-white flex-wrap rounded-full"></div>
          <div className="lg:pl-10 flex-wrap flex justify-center items-center m-auto">
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="md:text-7xl text-4xl font-bold text-white mb-0 pb-0 w-full"
            >
              Status Quo
            </motion.p>
            <br />
          </div>
        </div>
        <motion.div
          className="w-fit md:flex mx-auto justify-center text-center left-0 right-0 z-10 mt-5"
          whileTap={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.9 } }}
        >
          <a
            href="#about"
            className="md:text-xl border-2 font-bold text-ardent bg-none border-ardent px-5 py-2 rounded-full hover:bg-ardent hover:text-black duration-300"
          >
            Know more
          </a>
        </motion.div>
      </section>

      <section
        className="relative bg-neutral-950 bg-dot-black/[0.5] w-full h-fit min-h-full text-white"
        id="about"
        ref={aboutRef}
      >
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-ardent [mask-image:radial-gradient(circle,white_10%,transparent_100%)]"></div> */}
        <About />
      </section>

      <section
        className="relative bg-neutral-950 flex w-full min-h-screen h-fit"
        id="services"
        ref={enableRef}
      >
        <Enable />
      </section>

      <section
        className="relative bg-white flex w-full min-h-screen h-fit"
        id="contact"
        ref={contactRef}
      >
        <Contact />
      </section>
      <Footer theme="dark" />
    </>
  );
}
