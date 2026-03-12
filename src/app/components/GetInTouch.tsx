"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  content: { title: string; description: string; svg: ReactNode }[];
}

export default function GetInTouch({ content }: Props) {
  return (
    <>
      <motion.div
        initial={{ translateX: 0 }}
        className="w-full flex flex-wrap md:overflow-x-visible overflow-x-auto"
      >
        {content.map((item, index) => (
          <motion.div
            key={index}
            animate={{
              backgroundColor: `rgba(0, 216, 214, ${
                1 - (index % content.length) * 0.1
              })`,
            }}
            className={`${
              content.length % 2 === 0
                ? "2xl:w-1/2"
                : index !== content.length - 1
                ? "2xl:w-1/2"
                : "2xl:w-full"
            } w-full h-[30rem] p-10 flex flex-col justify-center items-center m-auto cursor-pointer`}
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center flex flex-col items-center justify-center"
            >
              <div className="w-fit flex md:size-12 size-10 text-black">
                {item.svg}
              </div>
              <div className="w-full flex h-fit text-center ">
                <p className="w-full md:text-5xl text-3xl font-bold">
                  {item.title}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-[80%] w-[80%] mt-5"
            >
              <p className="md:text-lg text-sm font-bold text-center ">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center md:mb-10 mb-3">
          <a
            href={"#contact"}
            className={`md:text-xl border-2 font-bold bg-none text-white border-white px-5 py-2 rounded-full hover:bg-white hover:text-black duration-300`}
          >
            Get in touch
          </a>
        </div>
      </motion.div>

      {/* Controls */}
    </>
  );
}
