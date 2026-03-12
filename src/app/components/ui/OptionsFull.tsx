"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  content: { title: string; description: string; svg: ReactNode }[];
}

export default function OptionsFull({ content }: Props) {
  const [pos, setPos] = useState(0);
  const [animation, setAnimation] = useState(1);
  const [jumped, setJumped] = useState(false);
  const [contentLength, setContentLength] = useState([...content]);

  const [clicked, setClicked] = useState<{
    clicked: boolean;
    index: number | null;
  }>({
    clicked: false,
    index: null,
  });

  const [item, setItem] = useState(40);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setItem(windowWidth <= 768 ? 25 : 40);
    setPos(0);
  }, [windowWidth]);

  useEffect(() => {
    if (jumped) {
      setAnimation(1);

      setTimeout(() => {
        setPos((prev) => prev - item);
      }, 30);

      setJumped(false);
    }
  }, [jumped]);

  const handleNext = () => {
    if (clicked.clicked) {
      setClicked({ clicked: false, index: null });
    }

    if (pos === item * (contentLength.length - 3)) {
      setContentLength((prev) => [...prev, ...content]);
    }

    setPos((prev) => prev + item);
  };

  const handlePrev = () => {
    if (clicked.clicked) {
      setClicked({ clicked: false, index: null });
    }

    setContentLength((prev) => [...prev, ...content]);

    if (pos === 0) {
      setAnimation(0);
      setPos((prev) => prev + item * content.length);
      setJumped(true);
    } else {
      setAnimation(1);
      setPos((prev) => prev - item);
    }
  };

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [pos]);

  return (
    <>
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: `-${pos}rem` }}
        transition={{
          duration: animation,
          type: "spring",
        }}
        className="w-full grid grid-flow-col md:overflow-x-visible overflow-x-auto"
      >
        {contentLength.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              backgroundColor: `rgba(0,216,214,${
                1 - (index % content.length) * 0.1
              })`,
            }}
            animate={{
              backgroundColor: `rgba(0,216,214,${
                1 - (index % content.length) * 0.1
              })`,
            }}
            whileHover={{
              backgroundColor: `rgba(100,216,214,${
                ((index % 10) + 1) * 0.1
              })`,
            }}
            onClick={() =>
              setClicked((prev) => ({
                clicked: prev.index === index ? false : true,
                index: prev.index === index ? null : index,
              }))
            }
            className="md:w-[40rem] w-[25rem] h-[30rem] p-10 flex flex-col justify-center items-center m-auto cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {clicked.clicked && clicked.index === index ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full text-left"
                >
                  <p className="md:text-xl text-sm font-bold text-justify">
                    {item.description}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="collapsed"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0 }}
                  className="w-full"
                >
                  <div className="w-fit flex md:size-12 size-7 text-black">
                    {item.svg}
                  </div>
                  <div className="w-full text-left">
                    <p className="md:text-5xl text-3xl font-bold">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Controls */}
      <div className="md:flex flex-row ml-auto w-fit h-fit hidden absolute left-0 bottom-0">
        <motion.div
          initial={{
            scale: 1,
          }}
          whileTap={{
            scale: 1.1,
          }}
          className="cursor-pointer bg-white rounded-full p-5 h-fit flex mr-auto mt-auto m-5"
          // onClick={() => {
          //   if (clicked.clicked) {
          //     setClicked({ clicked: false, index: null });
          //   }
          //   setPos((prev) =>
          //     prev != 0 ? prev - item : item * (content.length - 1)
          //   );
          // }}
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="black"
            className="md:size-7 size-3 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </motion.div>
      </div>
      <div className="md:flex flex-row ml-auto w-fit hidden absolute right-0 bottom-0 ">
        <motion.div
          initial={{
            scale: 1,
          }}
          whileTap={{
            scale: 1.1,
          }}
          className="cursor-pointer bg-white rounded-full p-5 ml-2 h-fit flex mt-auto m-5"
          // onClick={() => {
          //   if (clicked.clicked) {
          //     setClicked({ clicked: false, index: null });
          //   }
          //   setPos(
          //     (prev) =>
          //       // prev != item * (content.length - 1) ? prev + item : 0
          //       prev + item
          //   );

          // }}
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="black"
            className="md:size-7 size-3 rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </motion.div>
      </div>
    </>
  );
}
