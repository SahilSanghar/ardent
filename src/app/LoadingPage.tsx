"use client";

import { motion } from "framer-motion";
import { FlipWords } from "./components/ui/flip-words";

export default function Home() {
  const avail: string[] = ["Bolder", "Bigger", "Better"];
  return (
    <>
      {/* <div className="fixed bottom-0 right-0 z-50 text-xl font-bold m-2 cursor-pointer text-white">
        Developer not paid yet!
      </div> */}

      {/* <div className="hidden md:block">
        <Wake />
      </div> */}

      {/* <Inactive /> */}
      {/* <Navbar left={left} right={right} button={right} /> */}

      <section
        id="home"
        className="select-none relative w-full h-[100vh] m-auto text-center flex flex-col justify-center items-center bg-opacity-100 bg-black"
      >
        <motion.video
          src="/bannerVideo.mp4"
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          crossOrigin="anonymous"
          poster="/banner-pre.png"
          className="absolute object-cover inset-0 w-full h-full  rounded-none opacity-100"
        >
          Your browser does not support the video tag.
        </motion.video>

        <div className="flex flex-col z-10">
          {/* <FlipWords
            words={avail}
            duration={3000}
            className=""
          /> */}

          <div className="flex-wrap flex flex-col justify-center items-center m-auto">
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
              className="md:text-4xl text-2xl font-bold text-white mb-0 pb-0 w-full"
            >
              If our social media brought you here...
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="md:hidden hidden md:text-4xl text-xl font-bold text-white  flex-row w-screen text-center justify-center items-center "
            >
              You&apos;re not wrong—something&apos;s brewing. It&apos;s
              <div className="flex  ml-3 md:w-[110px] w-[60px] ">
                <FlipWords
                  words={avail}
                  duration={1000}
                  className="md:text-4xl text-xl font-bold text-white mb-0 pb-0 w-full "
                />
              </div>
            </motion.div>
            {/* phone div */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="md:flex  md:text-4xl text-lg font-bold text-white flex flex-col text-center justify-center items-center "
            >
              You&apos;re not wrong—something&apos;s brewing.
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              className="flex  flex justify-center "
            >
              <p className="md:text-6xl text-4xl font-bold text-white">
                It&apos;s
              </p>

              <div className="flex flex-row justify-center items-center md:ml-3 ml-1  md:w-[177px] w-[107px]">
                <FlipWords
                  words={avail}
                  duration={1000}
                  className="md:text-6xl text-4xl font-bold text-ardent mb-0 pb-0 flex"
                />
                {/* {avail.map((word, index) => {
                  let number = 0;
                  return (
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: -50,
                      }}
                      animate={{
                        opacity: index === number++ ? 1 : 0,
                        y: 0,
                      }}
                      className=""
                      key={index}
                    >
                      {word}
                    </motion.p>
                  )

                })} */}
              </div>
            </motion.div>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1.5,
              }}
              className="absolute bottom-0 mb-5 md:text-2xl text-lg font-bold text-white flex flex-col "
            >
              Stick around. The reveal’s worth it.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
