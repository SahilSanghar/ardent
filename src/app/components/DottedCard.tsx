import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  title1: string;
  title2?: string;
  content: string;
  svg?: ReactNode;
  position?: string;
}

export default function DottedCard({
  title1,
  title2,
  content,
  svg,
  position,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: position === "left" ? -20 : position === "right" ? 20 : 0,
        scale: position === "center" ? 0.9 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex flex-col w-[400px] h-[400px] border-2 border-black border-dashed rounded-2xl items-center justify-between py-10"
    >
      {/* SVG Container */}
      {svg && (
        <>
          <div className="">{svg}</div>
        </>
      )}

      {/* Title Container */}
      <div className="text-center h-[80px] flex flex-col justify-center">
        <p className="text-black text-4xl font-bold">
          {title2 ? (
            <>
              {title1} <br /> {title2}
            </>
          ) : (
            <>{title1}</>
          )}
        </p>
      </div>

      {/* Content Container */}
      <div className="text-center px-10 h-[500px] flex justify-center items-center m-auto">
        <p className="text-black text-sm leading-relaxed overflow-hidden pt-5">
          {content}
        </p>
      </div>
    </motion.div>
  );
}
