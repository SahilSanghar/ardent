"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BottomNav() {
  const navLinks: string[] = [
    "Home",
    "Services",
    "Manifesto",
    "Team",
    "Contact",
  ];
  let key: number = 0;
  const loaction = usePathname();

  if (loaction == "/") {
    key = 0;
  } else if (loaction == "/services") {
    key = 1;
  } else if (loaction == "/manifesto") {
    key = 2;
  } else if (loaction == "/team") {
    key = 3;
  } else if (loaction == "/contact") {
    key = 4;
  }

  const [overlap, setOverlap] = useState("bg-black text-white");

  useEffect(() => {
    const element = () => {
      const scroll = window.scrollY;
      const height = window.outerHeight;

      if (height >= 1000) {
        console.log(scroll);
        if (scroll >= 1878 && scroll <= 2800) {
          setOverlap("bg-white text-black");
        } else if (scroll >= 2800) {
          setOverlap("bg-black text-white");
        } else {
          setOverlap("bg-black text-white");
        }
      } else if (height >= 800) {

        if (scroll >= 1571 && scroll <= 2306) {
          setOverlap("bg-white text-black");
        } else if (scroll >= 2306) {
          setOverlap("bg-black text-white");
        } else {
          setOverlap("bg-black text-white");
        }
      }
    };
    window.addEventListener("scroll", element);

    return () => {
      window.addEventListener("scroll", element);
    };
  });
  return (
    <div
      className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 h-16 duration-300 ${overlap} rounded-full text-center flex justify-center items-center mb-5 z-50`}
    >
      <ul className="flex">
        {navLinks.map((nav, index) => {
          return (
            <Link
              href={`${
                navLinks[index].toLowerCase() == "home"
                  ? "/"
                  : ""
                  // : navLinks[index].toLowerCase()
              }`}
    
              className={`w-32 h-16 flex justify-center items-center text-center cursor-pointer transition duration-300 hover:px-10 rounded-full
            ${index === navLinks.length - 1 ? "rounded-r-full" : ""}
            ${index === 0 ? "rounded-l-full" : ""}
            ${index === key ? "bg-yellow-400 text-black" : { overlap }}
          `}
              key={index}
            >
              {nav}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
