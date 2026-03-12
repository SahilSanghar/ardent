"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Lander from "../components/ui/Lander";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// import Options from "../components/ui/Options";
import GetInTouch from "../components/GetInTouch";
import Contact from "../components/ui/Contact";

export default function Page() {
  const content = [
    {
      title: "Performance Marketing",
      description:
        "We optimize marketing campaigns to drive measurable results, leveraging data-driven strategies to increase ROI across digital platforms. Our approach ensures targeted reach, engagement, and conversion for your brand.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-full h-full duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
      ),
    },
    {
      title: "SEO Advisory",
      description:
        "We provide expert guidance on SEO strategies to enhance your website’s visibility and organic traffic. From on-page optimization to technical SEO, we help you rank higher and stay ahead of the competition.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-full h-full duration-300 stroke-white cursor-pointer"
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
      title: "Influencer Collaboration",
      description:
        "We connect your brand with the right influencers to amplify your message, building authentic relationships that drive engagement and trust. Our strategic partnerships ensure impactful collaborations that resonate with your target audience",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-full h-full duration-300 stroke-white cursor-pointer"
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
      title: "Social Media Management",
      description:
        "We define, ideate and execute comprehensive social media strategies to enhance your brand’s presence across social media platforms. Our team handles content creation, community engagement, and performance analysis, ensuring consistent growth and alignment to enable end-to-end brand campaign management.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-full h-full duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
    },
    {
      title: "Creative Design and Development",
      description:
        "We develop compelling and resonant brand identities with cohesive visual logo designs to build a brand story that integrates across all touchpoints.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" w-full h-full duration-300 stroke-white cursor-pointer"
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
      title: "Ad Strategy Development",
      description:
        "We conceptualize and develop comprehensive ad strategies, combining virtual production and static creative to build compelling campaigns. Our approach ensures your ads resonate with the right audience, driving both awareness and conversion",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-full h-full duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
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
        image="/banner/digitalComms.png"
        heading1="Digital"
        heading2="Communications"
        buttonTxt="Get in touch"
        button1hover={false}
        buttonLink="#contact"
        buttonTxt2="Know more"
        buttonLink2="#more"
        description="A series of impersonation posts by parody accounts on a popular social media platform in 2022 resulted in $15 billion worth of losses in market value."
        css="text-white"
        blurdata="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAARCAYAAADKZhx3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADhUlEQVR4nLVVQW+SWxC90TQID0uxIKUWkddKX0VEbBBpG4RUqag8mpryEDFp2iBiF00XVNMgLkzTRaOIbWJqd11oYuxKt76utFtM6rK/QH9Ck2POtB+SF40an4vD3DvfnTkzc+cOqrOzE17vCXg8x+HznUQgcBo+nw+BQADRaBSjo6PI5/OYmJhANptFOn0V+fxNTE1NIZe7gULhFjKZaygWZ7C0tIRs9jr8fj/c7m60t7fDYrEKzGYzTCYTjEYj9Ho9VE9PDzo6OuQwSWOxIUQiEQwPDyOdTiOVSmFkZAThcFjklSujQjQ5OYnZ2Vkhe/bsOVZXV7G8/ASlUgnnzp2H2+0WvzabDRaLBS0tLUJsMrUIubLb7QiFQkgk/kYsFhPCVOofJBIJybZcvodyuYxMJiMgcTKZlMz4nQHUau+xvb2NavUxNjc/4OPHT6hWq+jv74fX64XL9acE0NraCrP5AJqbm6GYKR0NDV1AJBIVhMNnxYiO19bWsLW1hcXFRakAy3v//hxyuRyi0UGwYqzEgwcPpdzT09NYX19HpfJI/PT1hRAMBuUaPR4PurqOyhUoEhDB4Jk6QqE+uWOWjFnG43EsLCxgZWUFb978i7dv32F5+SlKpbsoFotyZm5uTrJk1UjAPunt7RVCgn3E7CkZrOIBgood6RWpgQ3mcByWMnHNTDY2NqTBKpUKarUaBgcHMTMzg5cvXyAevyj3u0NwDN3df+2iuw5mrXiIG3Yhoa15mN/Y9YzQ5XJJgzAAv/+UEM3Pz+PSpcsSIHuDzcTGcTqdYse7pSScTld9z++KPwQdO51HBFzvGH7REXTc1tYmXcoO5V1RDgwMYHx8XLJkYNQTPK+hvWEvd8yupjNu7HbCvmt4qE6k6diZVqtV9MzeYDCgqalJ+oHvmgkwEJ7hWUKzt9ls4l/TK0aogQaatFoP7r5BDgBL/T3SscPhkJIajfuh0+2TUr969VrsGAzfKgPj0KANn5DmlzpC0QHflSbpmJKGmjH32htk1MyMmXICkUgphdu370g3c20w/CF6SvrTJP3s6A1QNG4ElY1rZsWgdDqdvMexsbH62CNkCimFQqGAZHJ4l/iLj6/51XNk/vfAt0Bi7X60bBsz5kjle96zZy8Mhu/7Uz9KTJCwkbSRmFOME+xbGet/hVi7n68Rc/Dwz+W3EOu/cxU/UuL/nfhn8Rnsa/E3D6teFAAAAABJRU5ErkJggg=="
      />

      <section id="contact" className="bg-white overflow-hidden">
        <Contact client={true} />
      </section>

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
                Digital Communications
              </p> */}
              <p className="md:px-32 px-20 md:text-2xl text-base text-center opac">
                Our Digital Communications vertical builds your brand&apos;s
                online presence with targeted social media planning and
                execution, powerful brand campaigns, and influencer work that
                drives and lifts engagement. We leverage performance marketing
                to maximize ROI, optimize visibility through SEO advisory, and
                bring your vision to life with innovative creative design and
                development. Together, we craft integrated campaigns that drive
                measurable success.
              </p>
            </motion.div>
            <div className="w-1/3 h-1 bg-white/0 rounded-full my-10"></div>

            <GetInTouch content={content} />
          </div>
        </div>
      </section>

      <Footer theme={"dark"} />
    </>
  );
}
