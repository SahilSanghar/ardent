"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface props {
  title1: string;
  title2: string;
  description: string;
  image: string;
  link: string;
  theme: "light" | "dark";
}

export default function FullCard({
  title1,
  title2,
  image,
  description,
  link,
  theme,
}: props) {
  return (
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
      className="absolute w-full h-full z-10 flex flex-col group"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5
        }}
        className="flex flex-col m-auto"
      >
        <a
          href={link}
          className={`relative w-[300px] h-[100px] m-auto mb-10 text-center items-center justify-center hover:w-[500px] group-hover:w-[500px] duration-50 rounded-full duration-500  cursor-pointer group/link ${
            theme == "light" ? "bg-black" : "bg-white"
          }`}
        >
          <div className="w-[300px] h-[100px]">
            <Image
              src={image}
              height={0}
              width={0}
              sizes="100% 100%"
              className="w-full h-full rounded-full object-center object-cover shadow-xl duration-500 "
              alt=""
            />
          </div>
          <div className="flex m-auto w-fit justify-center items-center absolute top-0  right-0 bottom-0 opacity-0 mr-14 group-hover:opacity-100 duration-500">
            <p
              className={`text-2xl font-bold ${
                theme == "light" ? "text-white" : "text-black"
              }`}
            >
              Read more
            </p>
          </div>
        </a>

        <div className="flex flex-col m-auto">
          <div className="flex flex-col">
            <p
              className={`mx-auto text-3xl font-bold z-10 text-center ${
                theme == "light" ? "text-black" : "text-white"
              }`}
            >
              {title1}
              {title2 && (
                <>
                  <br />
                  {title2}
                </>
              )}
            </p>
          </div>
          <div className="flex h-44">
            <p
              className={` mx-auto text-lg font-bold z-10 w-[80%] text-center mt-5 ${
                theme == "light" ? "text-neutral-800" : "text-neutral-400"
              }`}
            >
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
