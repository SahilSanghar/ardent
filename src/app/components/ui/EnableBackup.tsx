import React from "react";
import { useState } from "react";
import FullCard from "./FullCard";
import { motion } from "framer-motion";
import BabyKeem from "./BabyKeem";

export default function Enable() {
  const [nav, setNav] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (nav == 2) {
  //       setNav(0);
  //     } else {
  //       setNav((prev) => prev + 1);
  //     }
  //   }, 100000000);

  //   return () => clearInterval(interval);
  // }, [nav]);

  return (
    <div className="flex w-full h-full z-10">
      {nav == 0 && (
        <>
          <div className="w-full h-full grid grid-cols-2">
            <div className="relative grid grid-rows-5">
              <FullCard
                title1="Strategic Communication &"
                title2="Public Relations"
                description="Our expertise in policy affairs and comprehensive research equips our communications interventions with a holistic 360-degree perspective, ensuring consistently impactful outputs for your organization and its leadership."
                link="/public-relations"
                image="/publicRelations.jpg"
                theme="light"
              />
              <BabyKeem theme="yellow" />
            </div>
            <div className="grid grid-rows-5 relative">
              <FullCard
                title1="Public Policy &"
                title2=" Regulatory Affairs"
                description="Ardent Co. helps your organization in defining and engaging with its public policy priorities through a unique understanding of the stakeholder ecosystem and powered by in-depth research driven policy insights."
                link="/public-policy"
                image="/publicPolicy.jpg"
                theme="dark"
              />
              <BabyKeem theme="dark" />
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="m-10  absolute right-0 bottom-0 hover:scale-110 cursor-pointer z-10 duration-100"
                onClick={() => setNav((prev) => prev + 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="size-10"
                >
                  <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                </svg>
              </motion.div>
            </div>
          </div>
        </>
      )}

      {nav == 1 && (
        <div className="w-full h-full grid grid-cols-2">
          <div className="relative grid grid-rows-5">
            <FullCard
              title1="Research &"
              title2="Collateral Development"
              description="Our experienced team of researchers and content experts deliver quality analysis and reports, providing actionable insights for our stakeholders across domains and sectors."
              link="/research"
              image="/research.jpg"
              theme="light"
            />
            <BabyKeem theme="yellow" />
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="m-10 absolute left-0 bottom-0 hover:scale-110 cursor-pointer z-10 duration-100 rotate-180"
              onClick={() => setNav((prev) => prev - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="size-10"
              >
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
              </svg>
            </motion.div>
          </div>

          <div className="grid grid-rows-5 relative">
            <FullCard
              title1="Digital"
              title2="Communications"
              description="Ardent Co manages social media properties end-to-end, crafting tailored strategies across platforms. We align content with business goals, delivering platform-centric, perspective-driven solutions."
              link="/digital-comms"
              image="/digitalComms.png"
              theme="dark"
            />
            <BabyKeem theme="dark" />
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="m-10  absolute right-0 bottom-0 hover:scale-110 cursor-pointer z-10 duration-100"
              onClick={() => setNav((prev) => prev + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="size-10"
              >
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
              </svg>
            </motion.div>
          </div>
        </div>
      )}

      {nav == 2 && (
        <div className="w-full h-full grid grid-cols-2">
          <div className="relative grid grid-rows-5">
            <FullCard
              title1="Talent"
              title2="Nexus Solutions"
              description="Building upon our extensive experience as a dynamic young advisory, we have now decided to leverage our expertise to address challenges faced by other agencies when it comes to manpower management through our latest initiative, “Talent Nexus Solutions”"
              link="/talent-nexus"
              image="/nexus.jpg"
              theme="light"
            />
            <BabyKeem theme="yellow" />
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="m-10 absolute left-0 bottom-0 hover:scale-110 cursor-pointer z-10 duration-100 rotate-180"
              onClick={() => setNav((prev) => prev - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="size-10"
              >
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
              </svg>
            </motion.div>
          </div>

          <div className="grid grid-rows-5 relative">
            <FullCard
              title1="Graphics"
              title2="Designing"
              description="Ardent Co creates impactful graphic design solutions, enhancing your brand’s identity with precision-crafted visuals and content. Our team develops brand-centric designs that align with communication goals, bringing ideas to life and driving strong audience engagement."
              link="/graphics-designing"
              image="/graphics.jpg"
              theme="dark"
            />
            <BabyKeem theme="dark" />
          </div>
        </div>
      )}
    </div>
  );
}
