"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Lander from "../components/ui/Lander";
import InfoCard from "../components/ui/InfoCard";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Button from "../components/ui/button";
import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

export default function Page() {
  const [research, setResearch] = useState(false);
  const [media, setMedia] = useState(false);

  const router = useRouter();

  const { ref: ref, inView: refInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });
  const { ref: ref2, inView: ref2InView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });
  const { ref: lander, inView: landerInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });
  const { ref: select, inView: selectInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });

  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (landerInView || selectInView) {
      setIntersecting(false);
    } else if (ref2InView || refInView) {
      setIntersecting(true);
    } else {
      setIntersecting(true);
    }
  }, [refInView, ref2InView, landerInView, selectInView]);
  return (
    <>
      <Navbar left={intersecting} right={intersecting} />
      <div ref={lander}>
        <Lander
          image={`/banner/perspective.png`}
          heading1={"How our experts view"}
          heading2="the evolving world"
          css="text-white"
          blurdata="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAARCAYAAADKZhx3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD60lEQVR4nF2Vb4uiVRjGn21jm4xxbRjGZjOTzMwwbDbXzRicdSXXxSTDDJdBMsNYBGMbMEzaWIJBMgY2zDDm5XwB+yjzEbaPMW/u+F2Px5p9cXgez3POff25r3P0Uqn37Pbtj6xcvmfV6qeWzWYtk/nA4vG3LRR61a5de8kCgYAFAq9obG5uXhp829h4WesqlftWLN5VPfZHo29qLpfLqX46ndbY29szj5f9/X1rt9tWq9Usn89rYSTyhgWD11WU4UCDwaDG88CMRuML7c3nPxb5Gzdet3K5bIVCwSqVir4xf/Pmh+Y5xdVq1QqFA0un3xeReDy+LuiAfdDrl8CZR+3W1pb1+wO5Vip9slbtqy1rrlgsylEwvd3dXbHp9b61Tqcrq7LZW2K2s7OzstpX6yx/HvzKlRcskXhHwKjGOQBjsbcETk2cxAkICDgcDosRVjebX66As3bnzsElYEBxgQFYKBRa2bwhYFxqNptyjRq0EIWpVErfCoUDPXFCPaY49vgfC/rAO2TC4dfWwBSn0GKxEEnWQJAirAHMzaMymUxarfaZ5XK3DFdZh4s4wfBILgVh64IFARZFo1EVZbB5MvnVZrOZHR0daf3x8bG1Wi27evVF2TgYfCcrk8l3ZT11UZrJZCwWi2mO2qz16BMMUQgrYk+xTudrSyQSCpbnedqwXP5ts9kf1u1+ozXkotfryRGS+ujR99bpdESYkFIL4FKppBz9l/IDFIcEzEZCRUEsa7e/ku3ujA4GA6l9+vR3FSdIi8VfAoY81tbrdavXP5c7qES9s7ZcvqcjSmvVY/oIOzYSBFLZ7XZXYWtKDdacnp7aZDKx8fgnWcz748c/28OHfRFnAIQanGJAnPY51YjjUoGYxwuxZxIAFrdaD6zf70sZLJ88+cXm87lUnp2d2XK5lDO4wDy9pIf0GCtxDjBAXd38Kj88qekRhEgksrYF5VwmqKZnMJ1Opzaf/ynVFxcXdn5+rv6ieDr9zTKZPREmdH6o7qoGgPTWnQCeYCDWw282YbdLNOeZcI1GI/WaIgAA/OzZP0r3eDy24XAogoeHh3ZycmKNRmOdZv/CyIu4OyXUB4vwSbE7OoBDhMXYzEA19hEcLB8Of1DvASNYo9GP6jutcdbiHrX+3+N8Pi/FuEFbPNIHMMFiE6HAFsD8frfUc/rGRqyjt6hHJYB8JydcpexnnRPg+losFteXFGs8PgKK7yymxyzgybXnH4uSbOSocIbpJS3wz/wDqQeYtKLUXZWAuH8kF1z+JjkBHhMAEjDuYQpgP+8wgxDgkKHXKGYzIBQCFPu2t7d1Qfj3QVZ7Ic9v9iOCd8hD6l/ma2LIRpbBMgAAAABJRU5ErkJggg=="
        />
      </div>

      <section id="more" ref={select}>
        <div className="w-full h-screen md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 grid ">
          <div className="flex bg-black w-full h-full">
            <div className={`md:h-fit h-1/2 w-fit m-auto`}>
              <motion.p
                initial={{
                  opacity: 0,
                  y: "50%",
                }}
                whileInView={{
                  opacity: 1,
                  y: "0%",
                }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{
                  amount: 0.3,
                }}
                className="text-white pl-3 pb-1 md:text-5xl text-4xl font-bold top-5"
              >
                Our <br />
              </motion.p>
              <motion.p
                initial={{
                  opacity: 0,
                  y: "50%",
                }}
                whileInView={{
                  opacity: 1,
                  y: "0%",
                }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{
                  amount: 0.3,
                }}
                className="text-white -xl px-3  md:text-8xl text-5xl font-black"
              >
                Research
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                viewport={{
                  amount: 1,
                }}
                className="mt-5"
              >
                <Button link={"#research"} onclick={() => setResearch(true)} />
              </motion.div>
            </div>
          </div>
          <div className="flex bg-gradient-to-l from-ardent to-black w-full h-full">
            <div className={`h-fit w-fit m-auto`}>
              <motion.p
                initial={{
                  opacity: 0,
                  y: "50%",
                }}
                whileInView={{
                  opacity: 1,
                  y: "0%",
                }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{
                  amount: 0.3,
                }}
                className="text-white pl-3 pb-1 md:text-5xl text-4xl font-bold top-5"
              >
                Our <br />
              </motion.p>
              <motion.p
                initial={{
                  opacity: 0,
                  y: "50%",
                }}
                whileInView={{
                  opacity: 1,
                  y: "0%",
                }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{
                  amount: 0.3,
                }}
                className="text-white rounded-xl px-3  md:text-7xl text-5xl font-black"
              >
                VIEWS IN <br />
                THE MEDIA
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                viewport={{
                  amount: 1,
                }}
                className="mt-5"
              >
                <Button
                  link={"#media"}
                  theme="light"
                  onclick={() => setMedia(true)}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {research && (
        <section
          className="w-full h-fit bg-white bg-dot-black/[0.5] flex flex-col m-auto pb-20"
          ref={ref}
          id="research"
        >
          <div className="flex w-fit m-auto mt-20 mb-0 justify-center items-center">
            <p className="md:text-6xl text-4xl font-black text-center">
              Our Research
            </p>
            <motion.svg
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12 ml-1 cursor-pointer select-none"
              onClick={() => {
                setResearch(false);
                router.push("/our-perspectives#more");
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </motion.svg>
          </div>
          <div className="flex md:flex-row flex-col gap-10 mx-auto pt-10">
            <InfoCard
              title1={"Making Sense of"}
              title2="Union Budget"
              description={
                "As echoed by one of the most respected Secretaries to have led the Department of Economic Affairs, the Union-Budget assumes an unparalleled significance for our country."
              }
              animation="left"
              image={
                "/research/images/Making Sense of Union Budget 2023-2024.png"
              }
              link="/budget.pdf"
            />

            <InfoCard
              title1={"Strengthening India’s Focus on"}
              title2="Investments in Climate Adaptation"
              description={
                "The world experienced its hottest day ever on Tuesday, July 4, breaking a record set just the day before. Last week, China experienced its highest-ever temperature"
              }
              animation="center"
              image={
                "/research/images/Strengthening India's Focus on Investments in Climate Adaptation.png"
              }
              link="/research/Strengthening India's Focus on Investments in Climate Adaptation.pdf"
            />

            <InfoCard
              title1={"Brief On Strengthening Quantum "}
              title2="Applications Ecosystem in India"
              description={
                "The Department of Science & Technology (DST), which operates under the Ministry of Science & Technology, will be responsible for implementing the National Mission for Quantum Technologies and Applications (NM-QTA) between 2023-24 and 2030-31."
              }
              animation="right"
              image={
                "/research/images/Brief On Strengthening Quantum Applications Ecosystem in India.png"
              }
              link="/research/Brief On Strengthening Quantum Applications Ecosystem in India.pdf"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-10 mx-auto pt-10">
            <InfoCard
              title1={"Indian VC Ecosystem 2024"}
              animation="left"
              image={"/research/images/indianVC.png"}
              link="/research/indianVC.pdf"
            />

            <InfoCard
              title1={"Making Sense of "}
              title2="Interim Budget"
              animation="center"
              image={"/research/images/Making Sense of Interim Budget.png"}
              link="/research/Making Sense of Interim Budget.pdf"
            />
            <InfoCard
              title1={"To The Tune"}
              title2="Of Democracy"
              animation="right"
              image={"/research/images/To the tune of democracy.png"}
              link="/research/To The Tune Of Democracy_compressed.pdf"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-10 mx-auto pt-10">
            <InfoCard
              title1={"The Indian Geopolitical "}
              title2="Outlook March 2024"
              animation="left"
              image={"/research/images/Monthly Geopolitical Newsletter.png"}
              link="/research/The Indian Geopolitical Outlook March 2024.pdf"
            />
            <InfoCard
              title1={"The Indian Geopolitical "}
              title2="Outlook April 2024"
              animation="left"
              image={"/research/images/Monthly Geopolitical Newsletter.png"}
              link="/research/The Indian Geopolitical Outlook April 2024.pdf"
            />

            <InfoCard
              title1={"The Indian Geopolitical"}
              title2="Outlook May 2024"
              animation="right"
              image={"/research/images/Monthly Geopolitical Newsletter.png"}
              link="/research/The Indian Geopolitical Outlook May 2024.pdf"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-10 mx-auto pt-10">
            <InfoCard
              title1={"The Indian Geopolitical "}
              title2="Outlook June 2024"
              animation="center"
              image={"/research/images/Monthly Geopolitical Newsletter.png"}
              link="/research/The Indian Geopolitical Outlook June 2024.pdf"
            />
            <InfoCard
              title1={"The Indian Geopolitical "}
              title2="Outlook July 2024"
              animation="right"
              image={"/research/images/Monthly Geopolitical Newsletter.png"}
              link="/research/The Indian Geopolitical Outlook July 2024.pdf"
            />
          </div>
        </section>
      )}

      {media && (
        <section
          className="w-full flex-col h-fit bg-white pt-20 bg-dot-black/[0.5] flex"
          id="media"
          ref={ref2}
        >
          <div className="w-fit m-auto flex justify-center items-center">
            <p className="md:text-6xl text-4xl font-black text-center">
              Our Views in The Media
            </p>
            <motion.svg
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" md:size-12 size-8 ml-1 cursor-pointer select-none"
              onClick={() => {
                setMedia(false);
                router.push("/our-perspectives#more");
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </motion.svg>
          </div>
          <div className="flex flex-col ">
            <div className="flex md:flex-row flex-col gap-10 mx-auto pt-10">
              <InfoCard
                // title1={"Navigating Climate Financing"}
                title1="Pramit Lahiri"
                des="Senior Associate - Research and Content"
                animation="left"
                image={"/1.png"}
                link="https://indianexpress.com/article/opinion/columns/goa-needs-a-special-constitutional-amendment-for-environmental-survival-10522626/"
              />
              <InfoCard
                // title1={"Navigating Climate Financing"}
                title1="Pramit Lahiri"
                des="Senior Associate - Research and Content"
                animation="left"
                image={"/2.png"}
                link="https://www.downtoearth.org.in/climate-change/if-the-paris-agreement-was-about-shared-ambition-bel%C3%A9m-must-be-about-shared-architecture-where-finance-meets-fairness-and-growth-meets-governance"
              />
              <InfoCard
                // title1={"Navigating Climate Financing"}
                title1="Shivi Singh"
                des="Senior Research Associate"
                animation="left"
                image={"/media1.png"}
                link="https://pynr.in/navigating-climate-financing/#:~:text=India%20is%20estimated%20to%20need,agreed%20climate%20objectives%20by%202030"
              />
            </div>
            <div className="flex md:flex-row flex-col gap-10 mx-auto pt-10">
              {" "}
              <InfoCard
                // title1={"आत्मनिर्भर भारत, सशक्त अर्थव्यवस्था"}
                title1="Sristi Rai"
                des="Senior Associate Public Relation"
                animation="center"
                image={"/media2.png"}
                link="https://theyoungistaan.com/aatmanirbhar-bharat-strong-economy/"
              />
              <InfoCard
                // title1={
                //   "With UPI’s global buzz, India proves that it can be a digital trailblazer"
                // }
                title1="Tanush Handa"
                des="Assistant Manager"
                animation="right"
                image={"/media3.png"}
                link="https://www.moneycontrol.com/news/opinion/with-upis-global-buzz-india-proves-that-it-can-be-a-digital-trailblazer-11254981.html"
              />
              <InfoCard
                // title1={"Embracing empathy in the workplace landscape"}
                title1="Aradhna Anand"
                des="HR Manager"
                animation="left"
                image={"/media4.png"}
                link="https://www.peoplematters.in/article/culture/embracing-empathy-in-the-workplace-landscape-39637"
              />
            </div>
            <div className="flex md:flex-row flex-col gap-10 m-auto mt-10">
              <InfoCard
                // title1={"India’s neonatal burden and the challenges ahead"}
                title1="Shubhangi Misra"
                des="Associate Research and Content"
                animation="center"
                image={"/media5.png"}
                link="https://www.hindustantimes.com/ht-insight/public-health/indias-neonatal-burden-and-the-challenges-ahead-101714975069752.html"
              />

              <InfoCard
                // title1={"Making India the Clean Durable Metals Hub"}
                title1="Shivi Singh"
                des="Senior Research Associate"
                animation="right"
                image={"/media6.png"}
                link="https://energy.economictimes.indiatimes.com/news/renewable/making-india-the-clean-durable-metals-hub-is-stainless-steel-the-option/101569608"
              />
              <InfoCard
                // title1={"The guardians of earth"}
                // title2={"& local forest lands"}
                title1="Vaishnavi Chauhan"
                des="Senior Associate - Research"
                image={"/media7.png"}
                animation={"center"}
                link="https://government.economictimes.indiatimes.com/blog/the-guardians-of-earth-local-forest-lands-indigenous-communities-in-decision-making/116156284"
              />
            </div>
            <div className="flex md:flex-row flex-col gap-10 m-auto mt-10 pb-20"></div>
          </div>
        </section>
      )}

      <Footer theme="dark" />
    </>
  );
}
