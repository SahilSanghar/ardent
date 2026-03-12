"use client";

import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Lander from "../components/ui/Lander";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// import Options from "../components/ui/Options";
import OptionsFull from "../components/ui/OptionsFull";

export default function Page() {
  const content = [
    {
      title: "Team Development",
      description:
        "When creating a new vertical or team, we assist you in defining the roles, responsibilities, and structure to align talent with organisational objectives.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="  duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Targeted Talent Acquisition",
      description:
        "We provide customized hiring solutions by deeply understanding your organization’s unique needs. Our tailored recruitment strategies help you attract the right talent that aligns with your company’s culture and long-term vision.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="  duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      ),
    },
    {
      title: "Executive Search and Fitment",
      description:
        "We advise senior management in identifying top-tier leadership talent for critical roles. Our experts conduct comprehensive market analysis to find the right fit, ensuring your senior team brings the expertise necessary for growth and innovation.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="  duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      ),
    },
    {
      title: "Remote HR Office",
      description:
        "We offer a complete remote HR solution, minimizing the need for external HR support. Our practice include policy development, culture-building engagement programs, psychometric assessments, strategic planning, and compliance management designed to drive organizational effectiveness.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="  duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
    },
    {
      title: "Learning and Development",
      description:
        "We help identify skill gaps within your company and create customized learning and development plans to build proficiency across roles. By bringing in veterans from the industry and developing a tailored curriculum, we support your organization in enhancing capability and achieving strategic objectives.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="  duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
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
      setIntersecting(true);
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
        image="/banner/nexus.png"
        heading1="Talent Nexus"
        heading2="Solutions"
        description="Our talent-focused vertical is designed to help organizations
                build and optimize their workforce to align with strategic
                goals."
        css="text-white"
        blurdata="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAARCAYAAADKZhx3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFJ0lEQVR4nD1VbS9kZxg+srbE+0uEMKVYBCHKdBQly1IzRcgIqljKdKcUQcRLxBRFV0zpCkp8IFqEmFKECDaNlaxURkajIbZbX/wEn/dqrlv1w5Mz5znnOfd9vd2jVFZWoqTkc5SVlaOqqgo63WeIi4tDamoqiouLkZycjISEBCQkqOWakvIJkpKSEB/P3ykICQlFdHS07GVkZECn0yE/Px8VFU9RVfUl+vr6MDIyArN5GGazGRMTExgc/B5KU1MTysvLUVZWhtLSL+RwbGwscnJyUFCglwZYNCoqCnFxH8qzpKRkKazRfAy1+iO5T0tLQ3a2Fnq9Xr5VUlKCZ8+MaGxsRE1NDaqrq8FaLG42/wClp6cX7e0dcoDoYmPjEBMTA41GI9eoqGio1WoEBgbKYmEywr17ZjSaRGi1OlRUVEizdXV1qK+vR1tbGzo7O1FX9418v6mpGd3dJvT29kGpr2+Qh7W1ddBqtUInP0okLMJG7tEGBgbBz88PERERyM7ORnp6OnJycuVccHAwIiMjBd3Q0BAGBgbQ1WVCc3OzoDYYvkJ5+VMpPDY2DoU61NQY0NnZJfQQNVEkJiaKnvw4kTs5OUlBDw8P+Pr6CsKiomIYjUY0NDTImaCgINF4ZGQUz5+z+CAMBgPoI77D4tS/tbUVSltbu1DS3d2N/PwCoe+O6kTEx8fLb9JEA7EZ0s0rNS0sLBTdOjo6pAmiJls9PT3CYkdHpyBsb2+HyWQSk7W0tEgzCh/wIN1HFOHhEYiJiRVt+dvHx0e67O/vh81mQ29vrxQOCvoARUVF6OrqkqaJprBQj4CAAGFwdHRU9gmMjczMzGB1dRWbm5uyFOrR3z8gXdFQ94YJDw+Hl5cXVCqVoOZ7794Bp6enCAsLF72Li0vQ1/edaEZtBwcHBTFdPj09jfHxcczNzWF/fx9nZ3/i/PwvXFxc4PLy8q4wu8rNzYVK9b7oyEyyCW9vb6GPhrNYfsXt7a3kkLozTnQuNaaRaE5GkKZzd/eQojbbKc7Pz/8rev7/Ojs7g1JbWytBJ510MJ1Jg7FzFxdXuLi4yKJG19fXolFWVhYCAlTIy8uTAhaLRWaBq6sbQkMfwc7ODs3NLXj79h9YrVbYbGdS8OTkFEdHRzg8PLwbIJxQdCNR0kQhISEICwuDg4ODdE/NSfnqqgWVlVUSKTbj5OQs9N7c3IjZKA0ZUhRFJtebN3/j5OREilutVrx6dYSdnR3s7e3R1W1idxqCU4tOZhOlpaVwdnaGv78/lpeXRQLGhFFydHSUZyxAx5NKRs/fP0AipSh2Moap6fHxHzg+PsbBwQG2trZlbW9vQyFdHBSPH6cLvZy/U1NT4kIio6tpIL2+UCLCPHPdFy4oKBBUHCJEzMYePLAX+Wii3d1drKxYMD8/j4WFRaytrYnhFMaEi9GgvjzIwU8nu7q6yj0nD1lgEbJib28vNLMwzXR1dQWj8WuJEt+nxqR6aWkJExOTAmJ+/mcsLi5hYeEXuVe2t3eEQupMNzNGpMzT01MoZRFGjNrRPByl1J6oWZiD4/XrYywvr8h5MsHnnM8s8uLFmKzh4WGMjv4Ik+lb8P9Befnyd3mBc7WhoVH+UahvVtangpAOpm5EwriRchrt4cP34ObmLtOL0jCW9ApHKh1P6rk/OfmTAGPRO3YHJCEK87m+vo719d/EoYwHFx9yKjGnzCf1z8h4ItmlJESbnv5EGmP8uEcDkm7u0TOZmZnY2toSXTc2NuQ6Ozsro/Nf2vwjpoSnSTAAAAAASUVORK5CYII="
      />

      <section
        className="relative bg-neutral-950 text-white bg-dot-black/[0.5] w-full h-auto min-h-screen"
        id="more"
        ref={ref}
      >
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_100%)] z-0"></div> */}

        <div className="relative m-auto flex flex-col w-full h-auto pt-20 z-10 justify-center items-center min-h-screen gap-5">
          <div className="flex flex-wrap justify-center w-full h-fit text-center gap-5 mx-auto ">
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
                Talent Nexus Solutions
              </p> */}
              <p className="md:px-32 px-20 md:text-2xl text-base text-center opac">
                Our talent-focused vertical is designed to help organizations
                build and optimize their workforce to align with strategic
                goals. From creating new teams to nurturing leadership
                capabilities, we provide end-to-end solutions that drive
                organizational success.
              </p>
            </motion.div>
            <div className="w-1/3 h-1 bg-white/20 rounded-full my-10"></div>
            <OptionsFull content={content} />
          </div>
        </div>
      </section>

      <Footer theme={"dark"} />
    </>
  );
}
