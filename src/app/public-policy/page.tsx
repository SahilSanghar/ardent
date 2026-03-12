"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Lander from "../components/ui/Lander";
import { useInView } from "react-intersection-observer";
// import Options from "../components/ui/Options";
import OptionsFull from "../components/ui/OptionsFull";
import { motion } from "framer-motion";

export default function Page() {
  const content = [
    {
      title: "Public Policy Advisory",
      description:
        "We assist businesses in understanding existing policies and regulations that impact their operations while also identifying policies that can act as growth enablers in the short to medium term. By defining organizational priorities across key areas, we demonstrate how public policy can drive topline and financial value for organizations at various scales. Our experts guide management in building the expertise needed to navigate this landscape effectively.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="  duration-300 fill-white cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Policy Communication",
      description:
        "With our PR and communications expertise, we help clients craft compelling messages and execute 360-degree campaigns. Through continuous consultations, government meetings, and strategic use of media and digital platforms, we drive impactful narratives. Collaborating with thought leaders, industry bodies, advocacy groups, and think tanks, we enhance ecosystem engagement and foster positive policy outcomes.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="  duration-300 fill-white cursor-pointer"
        >
          <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
      ),
    },
    {
      title: "Parliamentary Services",
      description:
        "Our consultants bring in-depth knowledge of parliamentary processes, equipping clients to engage effectively with parliamentarians, committees, and legislative developments. We enable stakeholders to leverage parliamentary systems for advocacy priorities, providing academic insights and practical tools to drive meaningful engagement.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="  duration-300 fill-white cursor-pointer"
        >
          <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" />
        </svg>
      ),
    },
    {
      title: "Advocacy & Legislative Campaign",
      description:
        "We support clients in defining legislative priorities from the ground up. From understanding key stakeholders to drafting bills and shaping policy positions, we ensure alignment with organizational objectives. Our strategic guidance facilitates the effective dissemination of policy initiatives to critical stakeholders.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="  duration-300 fill-white cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
            clipRule="evenodd"
          />
          <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
        </svg>
      ),
    },
    {
      title: "Regulatory Affairs",
      description:
        "Our specialized practice address regulatory challenges by developing tailored Standard Operating Procedures (SOPs) to ensure compliance with laws and regulations. We empower organizations to navigate complex regulatory environments by offering tailored compliance solutions and expert guidance.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className=" duration-300 fill-white cursor-pointer"
        >
          <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
      ),
    },
    {
      title: "Policy Sensing & Tracking",
      description:
        "We help clients stay updated on policy and regulatory developments by monitoring public sources, leveraging stakeholder networks, and providing timely updates. Our routine tracking and in-depth analyses enable organizations to gauge policy shifts and plan strategic interventions effectively..",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className=" duration-300 fill-white cursor-pointer"
        >
          <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
          <path
            fillRule="evenodd"
            d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const { ref: ref, inView: refInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });

  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (refInView) {
      setIntersecting(false);
    } else {
      setIntersecting(false);
    }
  }, [refInView]);

  return (
    <>
      <Navbar left={intersecting} right={intersecting} />
      <Lander
        image="/banner/publicPolicyAndRegulatoryAffairs.png"
        heading1="Public Policy &"
        heading2="Regulatory Affairs"
        description="Studies suggest that companies across industries risk losing up to 30% of their earnings due to policy changes, while in the banking sector, this figure exceeds 50%"
        css="text-white"
        blurdata="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAARCAYAAADKZhx3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEwUlEQVR4nD2V3UtcVxTFr2JBDMYqilGcTp06nanGaiaaMUarVUSjtdjBmaaiKJqPYrFWK2rFRmKVYghWYyqCQRALipCaQiIlGOxLsA8WJNjXIPgcSP+AsMpvj+PD5dyPc/baa+2193W8Xq+KiorE6vHkqqSkVEVFxfJ6P7R3xcXFunAhoPT0dBUUFKi0tFSBQEDBYNC+Z2Vlq6DgvOrq6lRTU2Ox/H6/gsEye66srFR1dbVqa2tVXl6usrIy1dXVy+EQAdzu91VY+LHq6xtsQ0lJiQESgMM5OS57V1p6yYAJRGCC1tfX2zP3weAl+Xx+AycO7yoqKk7PkTzfHbfbrZycHHvgA4yqqqrV0HD1JPCnFhTmMQbsC4fDam7+3NbOzk41NjaptTVs54iRl5cnv/8juy8vv2IXcUkS1g4bXC6XPB6PcnM9xqywsNDk5t7les9YwzYtLc2y7+/v19bWlh4//kOzs7P2LqrUFeXm5ury5XKLESXlUnZ2tvLz8xUIXDBQvjtkz2bkRgbu2YQCiYmJOns2xRi3tLSYdM3Nzbp7964Br639ptu3J9Td3a2RkRGT88yZM5YIMQD3+XzKyMiw+Mifn19gijlIyAs2ISvMYpJzID09Q5mZmWpq+kwtLV+YD8bGxjU+/qOmpqY0O/uLRkZGjfng4KBSUlIsRsy0eCc1NdVW/MT5QOCiHI/nA+XleU9rHDXAeVvPnTtnh2DS2tpqrMfGxrSwcN/W0dFRbW9va3v7T21sbGhoaMgCcwEOcKyMbrf7pOaXjJRJjSxs4gXmodaA00JIF8u0p6db1659pXA4ouHhYU1P/6yHD1c0MTFh4DMzM6cdQh3xCaAoipdoURKhnAbMhdSsOJfM2AxjZEZyeo9aY7TR0R907949PX36VLu7u3aPAjyTdELCO6flI2nuMVhWVpaRSU5OjtYYU8G6oaHhpEUi1n8Yg++0Gy0zOfmT1XNpaUl7e3/r6OhIr1+/1v7+vp49e6a9vT1TgWHCxZBhIDEPiINqsWHlVFZ+YnLExcXbRg7QGm1tbeZgDIcSfX19Wl9f1+Dg91pZWdH16ze1vLyst2+lly8PdXj4r/b3/9GTJ0/sO+ajt4mHUlVVVRYHUOR2MAGMoZ+UlGTg1Lm//ztNT0/bYQzY3t5u/dvZ2WXSYjrM9ubNfwa8s7NjLba6umrKMExqamrV1NRk3vH5/AYKTnx8vBxkBDhWA+rR1dVlLfPgwa+WAPKQMZkCFgq1Wv16e3u1urqmubk56+1Hj343qW/d+tp6mYtphcmIgakSEhKiwEwb2olMoj8Kj421vr5vNT9/3ySjlWAMmOM4to6PjxvonTuT9m1zc1OvXr0yD/T09JhfQqGwyUw8VIQY5+Pi4uTABHnJhqwwAAqEQiGTurf3GzU2Nqqjo8MAUlLeNbPROs+f/2Us5+bmdXh4qIODA3V1dSsS+dKUob6YC1DYU7KYs03qmO0ZidQDFzLsBwYGrVb4ALffuHHTDMIohQngk5OTxhZ3Ly4u2izGF7BkQtEZYABIHyM9STixPuXih8BGMuSvA0Oypxwkxz31hwnyDwwMaGFhQS9evNDx8bEikYiBMloZICjHTKDG0TlxUXQRnfI/gp+qD93vbKoAAAAASUVORK5CYII="
      />

      <section
        className="relative flex bg-neutral-950 w-full h-auto min-h-screen text-white"
        id="more"
        ref={ref}
      >
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_100%)] z-0"></div> */}

        <div className="relative m-auto flex flex-col w-full h-auto pt-20 z-10 justify-center items-center min-h-screen gap-5">
          <motion.div
            initial={{
              opacity: 0,
              y: -50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className=" flex flex-col m-auto mt-10 justify-center items-center"
          >
            {/* <p className="md:text-5xl text-2xl font-black px-20 pb-10 text-center">
              Public Policy & Regulatory Affairs
            </p> */}
            <p className="md:px-32 px-20 md:text-2xl text-base text-center opac">
              Our Public Policy and Regulatory Affairs practice helps
              businesses navigate complex policy landscapes and regulatory
              environments. We provide strategic guidance in policy advisory,
              communication, parliamentary engagement, and advocacy to drive
              growth and positive policy outcomes. Through tailored regulatory
              solutions and continuous monitoring, we ensure compliance and
              equip organizations to leverage public policy for financial and
              operational success.
            </p>
          </motion.div>
          <div className="w-1/3 h-1 bg-white/20 rounded-full my-10"></div>

          <div className="flex flex-wrap justify-center w-full h-fit text-center gap-5 mx-auto">
            <OptionsFull content={content} />
          </div>
        </div>
      </section>

      <Footer theme={"dark"} />
    </>
  );
}
