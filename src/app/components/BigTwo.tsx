"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/ui/Navbar";
import axios from "axios";
import { motion } from "framer-motion";

interface BigTwoProps {
  realestate?: boolean;
  healthcare?: boolean;
  pragency?: boolean;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  designation: string;
  message: string; 
  loading: boolean;
  success: boolean;
  error: string;
}

export default function BigTwo({ realestate, healthcare, pragency }: BigTwoProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    company: "",
  designation: "",
  message: "", 
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setFormData((prev) => ({
    ...prev,
    loading: true,
    success: false,
    error: "",
  }));

  try {
    const response = await axios.post(
      pragency
        ? "/api/pragency"
        : healthcare
        ? "/api/healthcare"
        : "/api/realestate",
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        designation: formData.designation,
        message: formData.message,
      }
    );

    console.log("STATUS:", response.status);

    // ✅ ALWAYS redirect if success
    if (response.status >= 200 && response.status < 300) {
      window.location.href = pragency
        ? "/pr-agency/success"
        : healthcare
        ? "/healthcare/success"
        : "/realestate/success";
    }

  } catch (error: any) {
    console.error("Frontend error:", error);

    setFormData((prev) => ({
      ...prev,
      loading: false,
      success: false,
      error: "Submission failed",
    }));
  }
};

  const [loaded, setLoaded] = useState(false);
  const pageType = pragency ? "pragency" : healthcare ? "healthcare" : "realestate";

  return (
    <>
     
{pageType !== "pragency" && <Navbar contact={false} />}
      <div className=" md:h-full h-fit w-full">
        {/* lander */}
        <motion.div
          initial={{
            scale: 0.8,
            borderRadius: "1rem",
          }}
          animate={{
            scale: 1,
            borderRadius: "0px",
          }}
          transition={{
            duration: 0.3,
          }}
          className={` md:h-screen h-[150vh] bg-black -z-10 absolute inset-0 rounded-2xl ${
            loaded ? "blur-0" : "blur-xl"
          }`}
        >
          <Image
          src={
  pragency
    ? "/pragency-1.jpeg"
    : realestate
    ? "/realestate.jpg"
    : "/doctor.jpg"
}
            alt="doctor"
            fill
            className={`object-cover opacity-50  grayscale ${
              loaded ? "rounded-none" : "rounded-xl"
            }`}
            onLoad={() => setLoaded(true)}
          />
        </motion.div>
        {/* lander */}
        <section
          id="home"
          className="w-full md:h-screen h-fit flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="flex md:h-full h-fit mt-24 md:mt-0 md:flex-row flex-col items-center justify-center w-full"
          >
            <div className="w-full h-full min-w-screen flex flex-col items-center justify-center">
              <div className="w-[60%] h-full gap-10 flex flex-col  justify-center">
                <p className="text-white md:text-2xl xl:text-4xl text-2xl font-bold">
                  {pageType === "healthcare" ? (
  <>
    Patients Don&apos;t Just <br /> Choose,{" "}
    <span className="text-ardent">They Trust</span>
  </>
) : pageType === "pragency" ? (
  <>
    <span className="text-ardent">PR Agency</span> in India <br />  
  </>
) : (
  <>Lost In The Noise?</>
)}
                </p>
                <p
                  className={`capitalize text-white 2xl:text-7xl xl:text-5xl font-black md:text-5xl ${
                    healthcare ? "text-4xl" : "text-2xl"
                  }`}
                >
                  {pageType === "healthcare" ? (
  <>
    We Help <br /> you <span className="text-ardent">earn</span> It!
  </>
) : pageType === "pragency" ? (
  <>
    That Gets <br />You in the <br />
    <span className="text-ardent">News</span>
  </>
) : (
  <>
    <span className="text-ardent">
      We Make Your Property the Talk of the Town!
    </span>
  </>
)}
                </p>

                <div className="flex flex-col gap-3 mt-10">
                  <div className="w-1/2 xl:h-[0.2rem] md:h-[0.1rem] h-[0.1rem] bg-white"></div>

                  <p className="xl:text-base md:text-sm text-sm text-white">
                    {pageType === "healthcare" ? (
  <>
    Ardent Co. integrates public relations, research, and
    digital storytelling to build trust, navigate policy,
    and grow patient engagement for healthcare providers.
  </>
) : pageType === "pragency" ? (
  <>
    Ardent Co. is a PR agency in India helping brands secure real media coverage, company features, leadership quotes, interviews, and visibility during major announcements.
  </>
) : (
  <>
    Ardent Co. combines innovative public relations, deep
    research, and targeted digital storytelling to generate
    high-quality audience and build lasting credibility for
    real estate businesses.
  </>
)}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full min-w-screen flex items-center justify-center md:mt-0 mt-10">
              <div className="xl:w-[60%] md:w-[70%] w-[70%] h-fit flex md:p-10 p-5 bg-white/50 backdrop-blur-sm border-2 border-ardent rounded-xl justify-center items-center">
                <form
  className="w-full h-fit flex flex-col md:gap-6 gap-4 text-white md:text-base text-sm"
  onSubmit={onSubmit}
>
  {/* Row 1 — Name */}
  <input
    type="text"
    name="name"
    required
    value={formData.name}
    onChange={handleChange}
    className="w-full h-10 rounded-full px-5 bg-black/50"
    placeholder="Name"
  />

  {/* Row 2 — Company Name + Email */}
  <div className="flex gap-4">
    <input
      type="text"
      name="company"
      required
      value={formData.company}
      onChange={handleChange}
      className="w-1/2 h-10 rounded-full px-5 bg-black/50"
      placeholder="Company Name"
    />

    <input
      type="email"
      name="email"
      required
      value={formData.email}
      onChange={handleChange}
      className="w-1/2 h-10 rounded-full px-5 bg-black/50"
      placeholder="Company Email"
    />
  </div>

  {/* Row 3 — Phone + Designation */}
  <div className="flex gap-4">
    <input
      type="tel"
      name="phone"
      required
      value={formData.phone}
      onChange={handleChange}
      className="w-1/2 h-10 rounded-full px-5 bg-black/50"
      placeholder="Phone"
    />

    <input
      type="text"
      name="designation"
      required
      value={formData.designation}
      onChange={handleChange}
      className="w-1/2 h-10 rounded-full px-5 bg-black/50"
      placeholder="Designation"
    />
  </div>

  {/* Row 4 — Message */}
  <textarea
    value={formData.message}
    name="message"
    onChange={handleChange}
    className="w-full rounded-xl p-5 bg-black/50"
    placeholder="Message (optional)"
  />

  {/* Button */}
  <button
    type="submit"
    className="w-full p-3 rounded-full font-bold bg-ardent text-black border-2 border-black"
  >
    {formData.loading
      ? "Sending..."
      : formData.success
      ? "Sent successfully!"
      : "Book A Strategy Call Now"}
  </button>
</form>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.8,
            }}
            className="w-full md:mt-auto mt-10 h-fit flex flex-col md:flex-row md:mb-10 mb-5 items-center justify-center md:gap-32 gap-5"
          >
            <div className="flex flex-row items-center justify-center xl:w-[30rem] md:w-[25rem] w-[15rem]  gap-3">
              <div className="flex flex-row items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="xl:size-20 md:size-16 size-10 fill-ardent"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                {pageType === "healthcare" ? (
                  <>
                    <p className="xl:text-5xl md:text-3xl text-2xl font-black text-ardent flex flex-row items-center">
                      1500+{" "}
                      <span className="xl:text-2xl md:text-xl text-base text-white ml-2 font-medium">
                        media coverage
                      </span>
                    </p>
                  </>
                ) : pageType === "pragency" ? (
                  <>
                    <p className="xl:text-5xl md:text-3xl text-2xl font-black text-ardent flex flex-row items-center">
                      1500+{" "}
                      <span className="xl:text-2xl md:text-xl text-base text-white ml-2 font-medium">
                        media coverage
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="xl:text-5xl md:text-3xl text-2xl font-black text-ardent flex flex-row items-center">
                      2000+{" "}
                      <span className="xl:text-2xl md:text-xl text-base text-white ml-2 font-medium">
                        media coverage
                      </span>
                    </p>
                  </>
                )}

                <p className="md:text-base text-[10px]  text-white">
                  {healthcare ? (
                    <>
                      across leading healthcare, national and regional news
                      publications
                    </>
                  ) : (
                    <>
                      across leading real-estate, national and regional news
                      publications
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center xl:w-[30rem] md:w-[25rem] w-[15rem] gap-3">
              <div className="flex flex-row items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  className="xl:size-20 md:size-16 size-10 fill-ardent stroke-ardent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                  />
                </svg>
              </div>
              <div>
                {pageType === "healthcare" ? (
                  <>
                    <p className="xl:text-5xl md:text-3xl text-2xl font-black text-ardent flex flex-row items-center">
                      12M+{" "}
                      <span className="xl:text-2xl md:text-xl text-sm text-white ml-2 font-medium">
                        avg readership potentially achieved
                      </span>
                    </p>
                  </>
                ) : pageType === "pragency" ? (
                  <>
                    {" "}
                    <p className="xl:text-5xl md:text-3xl text-2xl font-black text-ardent flex flex-row items-center">
                      12M+{" "}
                      <span className="xl:text-2xl md:text-xl text-sm text-white ml-2 font-medium">
                        avg readership potentially achieved
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    {" "}
                    <p className="xl:text-5xl md:text-3xl text-2xl font-black text-ardent flex flex-row items-center">
                      1.6M+{" "}
                      <span className="xl:text-2xl md:text-xl text-sm text-white ml-2 font-medium">
                        avg readership potentially achieved
                      </span>
                    </p>
                  </>
                )}

                {/* <p className="text-base  text-white">
                  across leading healthcare, national and regional news publications
                </p> */}
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="lander"
          className="relative w-full h-fit min-w-screen min-h-screen bg-white flex xl:flex-row flex-col items-center justify-center"
        >
          <div className=" md:h-screen h-[200vh] bg-black z-10 absolute inset-0">
            <Image
              src="/texture.jpg"
              alt="texture"
              fill
              className="object-cover opacity-50 z-10 grayscale"
            />
          </div>
          <div className="w-full h-fit min-w-screen min-h-screen bg-white/70 flex flex-col justify-center items-center z-10">
            <div className="w-[80%] gap-5 flex flex-col">
              <motion.div
                className=" gap-5 flex flex-col"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <p className="text-bold text-4xl ">
                  The Problem <span className="font-black">We Solve</span>
                </p>
                <p className="md:text-xl text-base">
                  {pageType === "healthcare" ? (
                    <>
                      Healthcare providers often struggle to authentically
                      connect with patients while managing complex regulatory
                      communication demands
                    </>
                  ) : pageType === "pragency" ? (
                    <>
Many companies:
<ul>
  <li>Struggle to get noticed by the media</li>
  <li>Miss coverage during major announcements</li>
  <li>Have no leadership presence in news stories</li>
  <li>Rely only on ads and social media</li>
</ul>
                  </>
                  ): (
                    <>
                      Real estate brands face the challenge of cutting through
                      noise in crowded markets where traditional ads
                      underperform and trust is hard to build.
                    </>
                  )}
                </p>
                <p className="md:text-xl text-base">
                  {pageType === "healthcare" ? (
                    <>
                      Without strategic PR and integrated digital communication,
                      growth and patient trust lag behind the competition.
                    </>
                  ) : pageType === "pragency" ? (
                    <>
                      If you’re not in the news, you’re not part of the conversation.
                    </>
                  ) : (
                    <>
                      Without strong PR and integrated digital communication
                      strategies, your projects can remain invisible or
                      undervalued.
                    </>
                  )}
                </p>
              </motion.div>

              {/* bulb */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="flex flex-row items-center justify-center mt-20 relative "
              >
                {Array.from({ length: 3 }).map((_, index) => (
                  <>
                    <div
                      key={index}
                      className="absolute -translate-y-5 left-0 right-0 m-auto rounded-full bg-yellow-500 md:blur-3xl blur-2xl md:opacity-70 opacity-100 md:w-[200px] md:h-[150px] w-[100px] h-[75px] "
                    ></div>
                    <Image
                      key={index}
                      src="/bulb.png"
                      alt="bulb"
                      height={200}
                      width={200}
                      className="md:size-[100%] size-[50%]"
                    />
                  </>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="w-full h-fit min-w-screen min-h-screen bg-ardent/70 z-10 flex flex-col items-center justify-center ">
            <div className="xl:w-[80%] md:w-[90%] w-[90%] gap-5 flex flex-col items-center justify-center ">
              <motion.p
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="text-bold text-4xl flex md:flex-row flex-col items-center text-left"
              >
                Our <span className="ml-3 font-bold">Solution</span>{" "}
                <a
                  href={
  pageType === "healthcare"
    ? "/healthcare#home"
    : pageType === "pragency"
    ? "/pr-agency#home"
    : "/realestate#home"
}
                  className="font-bold xl:text-xl md:text-base text-sm border-2 ml-3 border-red-600 bg-yellow-500 rounded-full md:px-5 px-3 py-1 mt-3 md:mt-0"
                >
                  Book A Strategy Call
                </a>
              </motion.p>
              <motion.ul
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="flex flex-col gap-10 w-[80%] mt-10"
              >
                <li className="flex flex-row items-center gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="md:size-14 size-10"
                    >
                      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                  </div>
                  <p className="md:text-xl text-base">
                    {pageType === "healthcare" ?  (
                      <>
                        Crafting authentic healthcare narratives that humanize
                        your brand
                      </>
                    ) : pageType === "pragency" ? (
                      <>
                        Crafting authentic narratives that humanize your brand
                      </>
                    ) : (
                      <>
                        Crafting compelling brand narratives that resonate with
                        buyers and investors
                      </>
                    )}
                  </p>
                </li>
                <li className="flex flex-row items-center gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="md:size-14 size-10"
                    >
                      <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                    </svg>
                  </div>
                  <p className="md:text-xl text-base">
                    {pageType === "healthcare" ? (
                      <>
                        Managing media relations to strengthen authority and
                        compliance visibility
                      </>
                    ) : pageType === "pragency" ? (
                      <>
                        Managing media relations to strengthen authority and compliance visibility
                      </>
                    ) : (
                      <>
                        Leveraging media relations to earn powerful coverage and
                        endorsements
                      </>
                    )}
                  </p>
                </li>
                <li className="flex flex-row items-center gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="md:size-14 size-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                        clipRule="evenodd"
                      />
                      <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                    </svg>
                  </div>
                  <p className="md:text-xl text-base">
                    {pageType === "healthcare" ? (
                      <>
                        Delivering research-backed multi-channel communication
                        strategies
                      </>
                    ) : pageType === "pragency" ? (
                      <>
                        Delivering research-backed multi-channel communication strategies
                      </>
                    ) : (
                      <>
                        Executing multi-channel campaigns that combine research
                        insights and creative storytelling
                      </>
                    )}
                  </p>
                </li>
                <li className="flex flex-row items-center gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="md:size-14 size-10"
                    >
                      <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
                    </svg>
                  </div>
                  <p className="md:text-xl text-base">
                    { pageType === "healthcare" ? (
                      <>
                        Engaging patients across digital platforms with
                        targeted, meaningful content
                      </>
                    ) : pageType === "pragency" ? (
                      <>
                        Engaging audiences across digital & print platforms with targeted, meaningful content
                      </>
                    ) : (
                      <>
                        Amplifying your message through social, digital, and
                        traditional channels
                      </>
                    )}
                  </p>
                </li>
              </motion.ul>
              {/* bulb */}
              {/* <div className="flex flex-row items-center justify-center mt-20 relative ">
                {Array.from({ length: 3 }).map((_, index) => (
                  <>
                    <div
                      key={index}
                      className="absolute -translate-y-5 left-0 right-0 m-auto rounded-full bg-yellow-500 blur-3xl opacity-70 w-[200px] h-[150px] "
                    ></div>
                    <Image
                      key={index}
                      src="/bulb.png"
                      alt="bulb"
                      height={200}
                      width={200}
                      className=""
                    />
                  </>
                ))}
              </div> */}
            </div>
          </div>
        </section>
        {/* end */}
        <section className="w-full relative h-fit min-w-screen md:min-h-screen min-h-fit flex flex-col items-center justify-center text-white md:my-0 py-20">
          <Image
            src={
  pragency
    ? "/pragency-2.jpeg"
    : healthcare
    ? "/doctor.jpg"
    : "/realestate.jpg"
}
            alt="doctor"
            fill
            className="object-cover opacity-50 grayscale -z-10 absolute inset-0"
          />

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-4xl flex md:flex-row flex-col items-center justify-center z-10"
          >
            Why{" "}
            <span className="text-ardent font-bold md:mx-3 mx-2">Choose</span>{" "}
            Ardent Co.{" "}
            <a
            href={
  pageType === "healthcare"
    ? "/healthcare#home"
    : pageType === "pragency"
    ? "/pr-agency#home"
    : "/realestate#home"
}
              className="font-bold xl:text-xl md:text-base text-sm border-2 md:ml-5 ml-0 border-red-600 bg-yellow-500 rounded-full md:px-5 px-3 py-1 mt-3 md:mt-0 text-black"
            >
              Book A Strategy Call
            </a>
          </motion.p>

          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-2 w-fit h-fit place-items-center mt-10 md:gap-5 gap-2 z-10">
            {pageType === "healthcare"
              ? [
                  "Proven ability to build trust and brand credibility",
                  "Integrated digital communication strategies tailored for healthcare",
                  "Collaborative approach ensuring regulatory compliance and impact",
                  "Trusted by clinics, hospitals, and health startups",
                ].map((item, index) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    key={index}
                    className="bg-ardent text-black md:w-[350px] w-[180px] md:h-[350px] h-[200px] md:text-2xl text-base md:p-5 p-3 flex flex-col cursor-pointer hover:shadow-2xl shadow-ardent transition-shadow duration-100 ease-in-out hover:shadow-ardent/50"
                  >
                    <p className="font-bold">0{index + 1}</p>
                    <p className="font-bold mt-10 ">{item}</p>
                  </motion.div>
                ))
              : pageType === "pragency"
? [
                  "Proven ability to build audience trust and brand credibility",
                  "Integrated digital communication strategies tailored for your brand.",
                  "Collaborative approach ensuring regulatory compliance and impact",
                  "Simple, sharp messaging that gets picked up.",
                ].map((item, index) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    key={index}
                    className="bg-ardent text-black md:w-[350px] w-[180px] md:h-[350px] h-[200px] md:text-2xl text-base md:p-5 p-3 flex flex-col cursor-pointer hover:shadow-2xl shadow-ardent transition-shadow duration-100 ease-in-out hover:shadow-ardent/50"
                  >
                    <p className="font-bold">0{index + 1}</p>
                    <p className="font-bold mt-10 ">{item}</p>
                  </motion.div>
                ))
                : [
                  "Deep expertise in real estate PR and communications",
                  "Proven success in securing targeted media coverage and leads",
                  "Holistic digital campaigns to maximize reach and engagement",
                  "Trusted by top developers and real estate brands",
                ].map((item, index) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    key={index}
                    className="bg-ardent text-black md:w-[350px] w-[180px] md:h-[350px] h-[200px] md:text-2xl text-base md:p-5 p-3 flex flex-col cursor-pointer hover:shadow-2xl shadow-ardent transition-shadow duration-100 ease-in-out hover:shadow-ardent/50"
                  >
                    <p className="font-bold">0{index + 1}</p>
                    <p className="font-bold mt-10 ">{item}</p>
                  </motion.div>
                ))}
          </div>
        </section>
      </div>
    </>
  );
}