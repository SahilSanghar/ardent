import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Inactive() {
  const [active, setActive] = useState<boolean>(false);

  const time = 30000;

  let timer: NodeJS.Timeout | undefined;

  const resetTimer = () => {
    // Clear previous timer
    if (timer) clearTimeout(timer);

    // Set a new timer
    timer = setTimeout(() => {
      if (!document.hidden) {
        // Only set active if the document is not hidden
        setActive(true);
      }
    }, time);
  };

  useEffect(() => {
    // Add event listeners for user interactions
    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "touchstart",
      "scroll",
    ];

    // Reset the timer on any of these events
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Initialize the timer on component mount
    resetTimer();

    // Cleanup event listeners on component unmount
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timer) clearTimeout(timer); // Cleanup timer
    };
  });

  return (
    <>
      <AnimatePresence>
        {active && (
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
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-none bg-opacity-50 z-30"
          >
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
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className={`w-[60%] h-[80%] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  z-40 p-4 rounded-lg shadow-2xl backdrop-blur-sm bg-white/80`}
            >
              <div
                className="flex w-fit ml-auto cursor-pointer hover:scale-105"
                onClick={() => setActive(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="size-10"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <p className="text-center text-black text-sm font-medium">
                you were inactive for {time / 1000} seconds
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
