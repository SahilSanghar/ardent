"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FlipWords } from "./flip-words";

interface landerProps {
  image?: string;
  heading1: string;
  heading2?: string;
  description?: string;
  blurdata?: string;
  css?: string;
  button1hover?: boolean;
  buttonTxt?: string;
  buttonLink?: string;
  buttonTxt2?: string;
  ad?: boolean;
  buttonLink2?: string;
}

export default function Lander({
  image,
  heading1,
  heading2,
  description,
  buttonTxt,
  buttonLink,
  buttonTxt2,
  ad = false,
  buttonLink2,
  blurdata,
  css,
  button1hover = true,
}: landerProps) {
  const [loaded, setLoaded] = useState(false);
  // button1hover = button1hover || true;

  return (
    <section
      id="home"
      className={` relative w-full h-screen m-auto text-center flex flex-col justify-center items-center bg-opacity-100 bg-black  ${css} `}
    >
      <motion.div
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
        className={`relative object-cover inset-0 w-full h-full scale-90 rounded-2xl opacity-100`}
      >
        {image && (
          <Image
            src={image}
            height={0}
            width={0}
            sizes="100% 100%"
            className={`absolute object-cover inset-0 w-full h-full scale-100 opacity-100 ${
              loaded ? "" : "blur"
            } duration-100`}
            alt=""
            {...(blurdata
              ? { blurDataURL: blurdata, placeholder: "blur" }
              : {})}
            no-select="true"
            onLoad={() => setLoaded(true)}
          ></Image>
        )}
      </motion.div>
      {image && (
        <motion.div
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
        ></motion.div>
      )}

      <div className="absolute">
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="md:text-7xl text-4xl font-black"
        >
          <FlipWords words={[heading1]} />

          {heading2 && (
            <>
              <FlipWords words={[heading2]} />
            </>
          )}

          {description && (
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
              className="md:text-xl text-sm font-bold mt-5 w-[60%] m-auto text-white/100"
            >
              {description}
            </motion.p>
          )}
        </motion.span>
        {ad && (
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-center mt-5  w-full"
            >
              <div className="flex items-center gap-4 text-left">
                {/* Globe/news SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="md:size-16 size-10 text-ardent"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <div className="flex flex-col items-start">
                  <span className="text-ardent font-extrabold md:text-3xl text-xl leading-tight flex flex-row items-center">
                    1500+{" "}
                    <span className="text-white md:text-xl text-[10px] !font-bold ml-2">
                      {" "}
                      Media Coverages
                    </span>
                  </span>

                  <span className="text-white md:text-sm text-[10px] !font-bold">
                    Across national, business & regional publications
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* Megaphone SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="md:size-16 size-10 text-ardent"
                >
                  <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
                </svg>

                <div className="flex flex-col items-start">
                  <span className="text-ardent font-extrabold md:text-3xl text-xl leading-tight">
                    12M+
                  </span>
                  <span className="text-white font-medium md:text-base text-xs leading-tight">
                    Potential Readership Reached
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          className="mt-10"
        >
          <a
            href={buttonLink || "#more"}
            className={`md:text-xl border-2 font-bold bg-none border-ardent px-5 py-2 rounded-full   duration-300 ${
              button1hover
                ? "hover:bg-ardent hover:text-black  text-ardent"
                : "bg-ardent text-black"
            }`}
          >
            {buttonTxt || "Know more"}
          </a>
        </motion.div>

        <br />
      </div>

      {buttonTxt2 && buttonLink2 && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 1.2,
          }}
          className="absolute bottom-0 left-0 right-0 flex justify-center items-center mb-10"
        >
          <a
            href={buttonLink2}
            className="text-sm  border-2 font-bold text-white bg-none  px-5 py-2 rounded-full hover:bg-white hover:text-black hover:border-black duration-300"
          >
            {buttonTxt2}
          </a>
        </motion.div>
      )}
    </section>
  );
}
