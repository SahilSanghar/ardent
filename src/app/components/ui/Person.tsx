import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  name: string;
  image: string;
  role?: string;
  blurdata?: string | "";
  theme?: "dark" | "light";
  position?: string;
  des1?: string;
  des2?: string;
  link?: string;
  role2?: string;
}

export default function Person({
  name,
  image,
  role,
  role2,
  blurdata,
  theme,
  position,
  des1,
  des2,
  link,
}: Props) {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div
        className={`w-fit h-fit flex flex-col m-auto justify-center items-center ${
          theme == "dark" ? "text-black" : "text-white"
        }`}
      >
        <div
          className="md:w-32 md:h-32 w-28 h-28 rounded-full bg-black flex cursor-pointer hover:opacity-50 duration-300 select-none"
          onClick={() => setClicked(true)}
        >
          <Image
            src={image}
            width={0}
            height={0}
            {...(blurdata
              ? { blurDataURL: blurdata, placeholder: "blur" }
              : {})}
            alt={""}
            sizes="100% 100%"
            className="w-full h-full rounded-full object-cover select-none grayscale"
          ></Image>
        </div>
        <p className="md:text-xl md:h-fit min-h-[30px] h-fit  text-lg font-black text-center leading-4 mt-2">
          {name}
        </p>
        <p className="md:text-base text-sm md:h-[50px] leading-4 h-[70px]  font-bold opacity-80 text-center">
          {role2 ? (
            <>
              {role} <br /> {role2}
            </>
          ) : (
            role
          )}
        </p>
      </div>

      <AnimatePresence>
        {clicked && (
          <>
            <motion.div
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="w-screen h-screen fixed  inset-0 bg-white/20 z-20 backdrop-blur-sm"
              onClick={() => setClicked(false)}
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed md:w-[1000px] w-[80%] max-h-[70vh] sm:max-h-[80vh] h-fit bottom-0 top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-30 p-5 rounded-xl bg-black/90 backdrop-blur-sm text-white flex flex-col shadow-2xl overflow-y-auto`}
            >
              <div className="grid md:grid-cols-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="md:hidden absolute right-0 size-10 mr-6 mt-1 cursor-pointer hover:scale-105 duration-100 z-20"
                  onClick={() => setClicked(false)}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                    clipRule="evenodd"
                  />
                </svg>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-full md:h-[300px] h-[150px] bg-black rounded-lg"
                >
                  <Image
                    src={image}
                    width={0}
                    height={0}
                    {...(blurdata
                      ? { blurDataURL: blurdata, placeholder: "blur" }
                      : {})}
                    alt={""}
                    sizes="100% 100%"
                    className={`w-full rounded-lg h-full object-cover grayscale`}
                    style={{ objectPosition: position }}
                  />
                  <p className="text-xl font-bold mt-2 md:leading-none leading-4">
                    {name}
                  </p>
                  <p className="md:text-sm text-xs font-bold mt-1">{role}</p>
                </motion.div>
                <div className="w-full md:h-[300px] md:mt-0 mt-10 bg-opacity-20 flex">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="md:pl-5 md:text-sm text-xs md:mt-0 mt-5 md:w-[90%]"
                  >
                    {des1}
                  </motion.p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="md:block hidden  size-10  ml-auto cursor-pointer hover:scale-105 duration-100"
                    onClick={() => setClicked(false)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full h-fit flex flex-col md:mt-16 md:m-auto">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="pt-2 md:w-[90%] md:text-sm text-xs"
                  dangerouslySetInnerHTML={{ __html: des2 || "" }}
                >
                  {/* {des2} */}
                </motion.p>
                {link && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="w-full h-fit bg-opacity-20 flex flex-col mt-5"
                  >
                    <p className="text-xl font-bold">Contact them here:</p>
                    <div className="flex flex-row gap-2">
                      <a href={link || "#"} target={link && "_blank"}>
                        <svg
                          enableBackground="new 0 0 56.693 56.693"
                          height="56.693px"
                          id="Layer_1"
                          version="1.1"
                          viewBox="0 0 56.693 56.693"
                          width="56.693px"
                          xmlSpace="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="white"
                          className="md:size-10 size-8"
                        >
                          <g>
                            <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" />
                            <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" />
                          </g>
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
