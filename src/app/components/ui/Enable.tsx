"use client";

import React, { useState, useEffect } from "react";
import ScreenCard from "./ScreenCard";

export default function Enable() {
  const [nav, setNav] = useState(0);
  const [left, setLeft] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNav((prev) => (prev === 2 ? 0 : prev + 1));
      setLeft(false);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-screen md:h-screen h-fit z-10 grid md:grid-cols-2 grid-cols-1 grid-rows-2">
        {nav === 0 && (
          <>
            <ScreenCard
              heading1="Strategic Communications"
              heading2="& Public Relations"
              image="/chess/pawns/11.png"
              position="left"
              link="/public-relations"
              left={left}
            />
            <ScreenCard
              heading1="Public Policy &"
              heading2="Regulatory Affairs"
              image="/chess/pawns/8.png"
              position="right"
              link="/public-policy"
              left={left}
            />
          </>
        )}

        {nav === 1 && (
          <>
            <ScreenCard
              heading1="Research &"
              heading2="Development"
              image="/chess/pawns/9.png"
              position="left"
              link="/research"
              left={left}
            />
            <ScreenCard
              heading1="Digital"
              heading2="Communications"
              position="right"
              image="/chess/pawns/10.png"
              link="/digital-comms"
              left={left}
            />
          </>
        )}

        {nav === 2 && (
          <>
            <ScreenCard
              heading1="Talent Nexus"
              heading2="Solutions"
              image="/chess/pawns/12.png"
              position="left"
              link="/talent-nexus"
              left={left}
            />
            <ScreenCard
              heading1="Creative Design"
              heading2="& Production"
              image="/chess/pawns/13.png"
              position="right"
              link="/graphics-designing"
              left={left}
            />
          </>
        )}
      </div>

      {/* LEFT ARROW */}
      <div
        className="absolute top-1/2 -translate-y-1/2 h-fit w-fit z-10 flex hover:scale-105 cursor-pointer p-2 rounded-full md:ml-5 ml-1"
        onClick={() => {
          setNav((prev) => (prev !== 0 ? prev - 1 : 2));
          setLeft(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="md:size-10 size-6 rotate-180"
        >
          <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
        </svg>
      </div>

      {/* RIGHT ARROW */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 h-fit w-fit z-10 flex hover:scale-105 cursor-pointer md:mr-5 mr-1 p-2 rounded-full"
        onClick={() => {
          setNav((prev) => (prev !== 2 ? prev + 1 : 0));
          setLeft(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="md:size-10 size-6"
        >
          <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
        </svg>
      </div>
    </>
  );
}