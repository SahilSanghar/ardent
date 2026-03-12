"use client";

import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";

export default function compass() {
  return (
    <>
      {/* <div className="flex absolute z-0 md:w-[500px] w-[250px] md:h-fit md:min-h-screen h-[250px] md:justify-center md:items-center m-auto bg-ardent [mask-image:radial-gradient(circle,white_0%,transparent_50%)] md:block "></div> */}
      <Image
        src="/compass.png"
        height={400}
        width={400}
        className="absolute rounded-full"
        alt="compass "
      ></Image>
      {/* compass needle */}
      <motion.div
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: 90, // set angle with states
        }}
        className="absolute md:w-[400px] md:h-[400px] w-[250px] h-[250px]  rounded-full "
      >
        <Image
          src="/compassPointer.png"
          height={0}
          width={0}
          sizes="100% 100%"
          className="absolute w-full h-full"
          alt="compass"
        ></Image>
      </motion.div>
      <div className="absolute md:w-[365px] md:h-[365px] w-[265px] h-[265px]  rounded-full opacity-0">
        <div
          className="w-full h-1/3 bg-blue-500 absolute top-0 cursor-pointer"
         
        ></div>
        <div
          className="w-1/2 h-1/3 bg-green-500 absolute left-0 top-1/3 cursor-pointer"
          
        ></div>
        <div
          className="w-1/2 h-1/3 bg-red-500 absolute right-0 bottom-1/3 cursor-pointer"
          
        ></div>
        <div
          className="w-full h-1/3 bg-yellow-500 absolute bottom-0 cursor-pointer"
          
        ></div>
      </div>
    </>
  );
}
