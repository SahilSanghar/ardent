import React from "react";
import { motion } from "framer-motion";

interface Props {
  theme: "yellow" | "dark";
}

export default function BabyKeem({ theme }: Props) {
  return (
    <>
      {theme == "yellow" && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0 * 0.1,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className={`bg-yellow-50`}
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1 * 0.1,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className={`bg-yellow-100`}
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2 * 0.1,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className={`bg-yellow-200`}
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 3 * 0.1,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className={`bg-yellow-300`}
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 4 * 0.1,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className={`bg-yellow-400`}
          ></motion.div>
        </>
      )}
      {theme == "dark" && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0 * 0.1,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className={`bg-neutral-500`}
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1 * 0.1,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className={`bg-neutral-600`}
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2 * 0.1,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className={`bg-neutral-700`}
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 3 * 0.1,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className={`bg-neutral-800`}
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 4 * 0.1,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className={`bg-neutral-900`}
          ></motion.div>
        </>
      )}
    </>
  );
}
