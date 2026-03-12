import { motion, AnimatePresence } from "framer-motion";
import React, { ReactNode, useState } from "react";

interface Props {
  content: { title: string; description: string; svg: ReactNode }[];
}

export default function Options({ content }: Props) {
  const [clicked, setClicked] = useState({
    clicked: false,
    index: 0,
  });
  return (
    <div className="w-full flex flex-wrap justify-center gap-28 px-10">
      {content.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <motion.div
            initial={{
              backgroundImage: "linear-gradient(180deg, #00d8d6, #0000)",
            }}
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              // set a background of gradient color
              backgroundImage: "linear-gradient(100deg, #00d8d6, #0000)",
              // set a transition of 0.3s
              transition: { duration: 0.5 },
            }}
            className="md:size-20 size-12 rounded-xl cursor-pointer flex p-3 bg-gradient-to-b from-ardent to-ardent/20 shadow-black shadow-xl hover:from-ardent hover:to-ardent/40"
            onClick={() => setClicked({ clicked: true, index })}
          >
            {item.svg}
          </motion.div>
          <p className="text-white/50 w-20 text-center items-center justify-center flex font-bold md:text-lg text-sm">
            {item.title}
          </p>
        </div>
      ))}
      <AnimatePresence>
        {clicked.clicked && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="absolute top-0 left-0 w-full h-full bg-neutral-950 z-50 flex justify-center items-center"
          >
            <div className="bg-neutral-950 p-5 rounded-xl flex flex-col items-center justify-center">
              <p className="text-white md:text-6xl text-3xl font-black ">
                {content[clicked.index].title}
              </p>
              <p className="text-white md:text-2xl w-[70%] text-center flex mt-5">
                {content[clicked.index].description}
              </p>
              <button
                onClick={() => setClicked({ clicked: false, index: 0 })}
                className="bg-white text-black px-4 py-2 rounded-xl mt-5 md:text-xl font-bold"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
