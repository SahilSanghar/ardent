import React, { useEffect } from "react";

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin);
}

export default function Arrow() {
  useEffect(() => {
    // GSAP animation
    gsap.to("#arrow", {
      duration: 3, // Total animation time in seconds
      repeat: 0, // Infinite repeat
      ease: "power1.inOut", // Smooth easing
      motionPath: {
        path: "#motionPath", // Reference to the path
        align: "#motionPath", // Align arrow to the path
        autoRotate: true, // Make arrow rotate along path direction
        alignOrigin: [0.5, 0.5], // Adjust alignment point of the arrow
      },
    });
  }, []);

  return (
    <svg
      width="100vw"
      height="100vh"
      viewBox="0 0 1000 562.50"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      transform="scale(1.18,1.18)"
    >
      {/* Motion Path */}
      {/* round path */}
      {/* <path
        id="motionPath_old"
        d="m 0 0 c 0 0 0 500 500 200 c 0 0 350 -200 500 360"
        stroke="none"
        fill="transparent"
      /> */}
      {/* straight path */}
      <path
        id="motionPath"
        d="m 0 281.25 l 1000 0"
        stroke="none"
        fill="transparent"
      />
      {/* Arrow */}
      <image
        href="/arrow.png"
        id="arrow"
        x="0" // Initial position
        y="0" // Initial position
        width="100"
        height="100"
      />
    </svg>
  );
}
