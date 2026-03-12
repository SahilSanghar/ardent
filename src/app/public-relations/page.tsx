"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Lander from "../components/ui/Lander";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// import Options from "../components/ui/Options";
// import OptionsFull from "../components/ui/OptionsFull";
import Contact from "../components/ui/Contact";
import OptionsFull from "../components/ui/OptionsFull";

export default function Page() {
  const content = [
    {
      title: "Brand Image Development",
      description:
        "We collaborate with you to create your corporate affairs vertical from the ground up, by unifying internal capability with leadership intent. Our customized strategies link you with your community, build your relationships with journalists, get you maximum media coverage, and create a strong base for your public image.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="duration-300 fill-white  cursor-pointer"
        >
          <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
          <path
            fillRule="evenodd"
            d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Corporate Communications",
      description:
        "We work jointly with your corporate communications department to produce multi-faceted, thematically structured communications, on products, finance and socio-economic and sustainability communications.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="duration-300 cursor-pointer stroke-white "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
      ),
    },
    {
      title: "Startup Communications Advisory",
      description:
        "We are experienced in working there in close collaboration with new founders, entrepreneurs, and young teams in various fields to establish their unique and effective public image. We help them achieve visibility and build audience perception and voice that plays to their strengths and value proposition. Our methodology guarantees their story appeals to the right stakeholders, enhances their brand, and pushes their endeavours to encourage market growth and acknowledgement.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="  duration-300  cursor-pointer fill-white "
        >
          <path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
        </svg>
      ),
    },
    {
      title: "Communications Training & Workshops",
      description:
        "We collaborate with subject matter experts to equip senior key opinion leaders and company spokespersons with essential media preparedness skills. Based on our deep industry experience, we ensure that they are equipped to deal with crises and articulate the brand story and vision effectively.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="  duration-300  cursor-pointer fill-white "
        >
          <path
            fillRule="evenodd"
            d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clipRule="evenodd"
          />
          <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
        </svg>
      ),
    },
    {
      title: "Leadership Communications Advisory",
      description:
        "Our policy and research team works with your leadership on important strategic issues and messaging to address topics that reach beyond the usual industry storyline. We help shape the image of the executives and position leaders as experts and empower them to articulate macro issues and wider industry trends with authority and engagement.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="  duration-300  cursor-pointer stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
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
    // console.log("Home: " + enableInView);

    // console.log("enable: " + enableInView);
  }, [refInView]);

  return (
    <>
      {/* <Navbar left={intersecting} right={intersecting} /> */}
      <Lander
        image="/banner/publicRelations.png"
        heading1="Strategic Communication"
        heading2="Public Relations"
        buttonTxt="Get in touch"
        button1hover={false}
        buttonLink="#contact"
        buttonTxt2="Know more"
        buttonLink2="#more"
        ad={true}
        description="A study of 30 listed companies over 40 years found that crises caused an average 19% drop in share prices, took 147 days to recover, and led to lost deals, customers, and funding, affecting unlisted firms too.
"
        css="text-white"
      />
      
      <section id="contact" className="bg-white flex overflow-hidden overflow-x-hidden">
        <Contact client={true} />
      </section>


      <section
        className="relative bg-neutral-950 text-white bg-dot-black/[0.5] w-full h-auto min-h-screen"
        id="more"
        ref={ref}
      >
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_100%)] z-0"></div> */}

        <div className="relative m-auto flex flex-col w-full h-auto pt-20 z-10 justify-center items-center min-h-screen gap-5">
          <div className="flex flex-wrap justify-center w-full h-fit text-center gap-5 mx-auto">
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
              <p className="md:text-5xl text-2xl font-black px-20 pb-10 text-center">
                The Power Behind Effective Corporate Communication
              </p>
              <p className="md:px-32 px-20 md:text-2xl text-base text-center opac">
                At the heart of strategic communications, we focus on shaping
                your brand image and reinforcing your industry presence. Our
                comprehensive suite of services builds and refines your
                corporate affairs from the ground up, aligning internal
                capabilities with leadership vision to ensure impactful
                communication strategies.
              </p>
            </motion.div>
            <div className="w-1/3 h-1 bg-white/0 rounded-full my-10"></div>

            <OptionsFull content={content} />
          </div>
        </div>
      </section>

      {/* <Footer theme={"dark"} /> */}
    </>
  );
}
