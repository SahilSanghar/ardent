"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/ui/Footer";
import Lander from "../components/ui/Lander";
import { useInView } from "react-intersection-observer";
// import Options from "../components/ui/Options";
import OptionsFull from "../components/ui/OptionsFull";

export default function Page() {
  const content = [
    {
      title: "White-papers & Policy Briefs",
      description:
        "Ardent Co. leverages specialized knowledge in the preparation of white papers and policy briefs to make sense of the intricacies of complex sectoral issues. We assist our clients to develop a more detailed understanding of their industry, potential growth contributors and challenges from a policy and industry perspective. We also enable them in acquiring a deeper understanding of their issues of interest, while harnessing insights and evidence which can complement their discussions and drive a narrative.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="duration-300 fill-white cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
            clipRule="evenodd"
          />
          <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
        </svg>
      ),
    },
    {
      title: "Market Identification & Analysis",
      description:
        "Ardent Co. provides custom market-entry solutions based on detailed analysis of industry dynamics, competitive positioning, and regulatory environment. Based on analysis of leading industry players and promising market trends, we present actionable intelligence that enables companies to take strategic, forward-looking actions in a competitive landscape.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Annual Reports & Corporate Collaterals",
      description: `Ardent Co. presents a new definition of reporting organizational impact by way of data-driven annual reports and organization impact reports. We are closely involved with clients in mapping out impact measurement parameters, planning data collection strategies and building "impact reports" that help advance an organization's visibility in the areas and industries it works in.`,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
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
      <Navbar left={intersecting} right={intersecting} />
      <Lander
        image="/banner/research.png"
        heading1="Research &"
        heading2="Collateral Development"
        description="A longitudinal study has found that firms with the right maturity level of corporate foresight practices and high future preparedness can expect an average 33% higher profitability and a 200% higher market capitalisation growth compared to the average."
        css="text-white"
        blurdata="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAARCAYAAADKZhx3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAErElEQVR4nF2VTyzldxTFf5UoVY9i/HkofUPJq6oKVSVEVak8o6I0EcVUWaiYdKGa5o1SIboRnY6F0CmJqdpMlUy6UGUhIlEbEYmFTFeiNpZk0kxO87nml7RdfPPe+/6599xzzr3PaWlpUU9Pj1pbW9XV1aWenk81MPCF5ufnNTv7vYaGhtTX12efzc3NKi8vV2VlpRobG1VfX6+qqir7XV1draqqd1VaWqqioiLl5uYqEAhobW1Nq6urFm95edl+r6//LicjI0Neb7LCwsKUmZlpIMbGxrS4+JMePPhZHR0dFqCiokLJyclKSEhUbGyc4uLilJaWpqysLJWXV6iwsNASco/kZWVlKip6U8PDwxobG7cYbW1tFo9PJyoqSiEhIYqJibGqp6amtLKyor29P7S5uamamhqrqLi4WHl5ryshIcHuxsfHW/LY2FilpaWrouJtNTd/qLq6OmPBZQIWxsfHNTz8tW7e/NiAlZWVy/F4PEpPT5ff71dr60eanJzU9PSMdnd37XJ+fr6d5eS8asECgToVFr6hlJQUAxEXd00+n8+oRqb+/n51d3ebJLDJWW1tre7endL4+Ddqamo2kE54eLhSU1OVne03dL29vbp//0fNzMzYBRL6fNdNBhaU3br1mVXj979ilUN5Q0ODeWFkZESjo6NGMXuARA5iAwxGrOKIiOeNLgJwqb293fTFaG7w3NzX7AwvUCmacg/6AZyYmKjOzk7193+ugYEB8wkFoCVMZGdnW5ySkhLTHRacyEiPacVjjyfK0E9PT2tiYsKoxTRQxmPARUZGKjo62oJQCXqjMXTidLoELWGmpuY9S0yMK+Z8Fh+JnIiICAtEchJnZr6s5eVftL7+mz1gn3OS4gePJ9KSs88e3ZCa+qJ5AeMAFhAY9YrWMovj9/ttwRhgjWoCAYBAHAwODuro6EgFBYVPK3zBFh2QmJhk0lyB8Bgor9ernJwcVVa+Y1UiUVNTk4GgSqRCErxEO/LGcZxnFBr6rEJDQy0wqDDW2dlf9pA9Arvtw2CAlaioaAMFbZwjB5pjKAYL7qefkYikGJOiXOaczs5PNDT0lYLB2+a6O3e+0+npqY6Pj40m2gVdWJgLbelnHtMRJCYg54C6armAtRPUFxQUWNXp6S/ZHdcnDsNia2vL+pb16NGfevJE2tnZMScSlGr4TlsRkGpIyiIo+xgtLy/P6KZdSkpKjXamGYwkJSXZgjVLzAxmYMzNzWljY8Oqvbi4UDAYtIQg5TMrK9s0Ki5+SzduvG8VIw979ChJMNXVCPZaYgBgLDqGRbUYCz85k5PfamFhQQ8f/mqGOj8/1+HhoT1yEzPZcC60A4BEaE9iOoEkVAaV+IX2cv80SHzlj2tmKqqFKWdxcVHb29um6dnZmR4//ttodicVwaDb602yR4w8kjDfQU47sQ8IFo4HMIlpJ3THiG4nuBI5g4O37e8PnU9OTnR5eWm/0YtKoY0WCg9/zoLs7+8bIDexG4jvBMZsJKalcDhdArB/J7XEjY0f2Oy9d+8HHRwcaHZ2VsHgl1paWno65K+bKQiwt7dn/zSO4/wnqbuYggClhegIqMZ8sPL/+/8AMGiBItmqzekAAAAASUVORK5CYII="
      />

      <section
        className="relative bg-neutral-950 bg-dot-black/[0.5] w-full h-auto min-h-screen text-white"
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
              Research & Collateral Development
            </p> */}
            <p className="md:px-32 px-20 md:text-2xl text-base text-center opac">
              Our Research and Collateral Development practice helps the
              clients develop a rich understanding of their field through white
              papers, policy and market analysis reports focused on the
              challenges faced by the sector and the growth opportunities ahead.
              We provide tailored market-entry strategies, practical
              intelligence, and data-driven annual reports to enhance
              translational impact, strengthen stakeholder relationships, and
              enable better decision-making and thought leadership.
            </p>
          </motion.div>

          <div className="w-1/3 h-1 bg-white/20 rounded-full my-10"></div>
          {/* <Options content={content} /> */}
          <OptionsFull content={content} />
        </div>
      </section>

      <Footer theme={"dark"} />
    </>
  );
}
