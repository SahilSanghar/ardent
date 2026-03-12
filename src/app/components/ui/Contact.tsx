import React, { FormEvent, useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import axios from "axios";
import Button from "./button";
import { useRouter } from "next/navigation";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  department: string;
  cv: File | null;
}

interface Props {
  client?: boolean;
}

export default function Contact({ client }: Props) {
  const [clicked, setClicked] = useState(client ? true : false);
  const [clicked1, setClicked1] = useState(false);
  const [zindex, setZindex] = useState("z-0");

  const [status, setStatus] = useState<string>("");
  const [status1, setStatus1] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitting1, setIsSubmitting1] = useState<boolean>(false);

  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    department: "",
    cv: null,
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    // Update form data
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Validate input and update errors
  };

  const handleClientSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    axios
      .post("/api/ClientSubmit", {
        firstname: formData.firstName,
        lastname: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      })
      // eslint-disable-next-line no-use-before-define, @typescript-eslint/no-unused-vars
      .then((response) => {
        setStatus("Email sent successfully!");
        // Reset form
        setFormData((prev) => ({
          ...prev,
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        }));
      })
      .catch((error) => {
        setStatus("Network error. Please try again.");
        console.error("Submission error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
        router.replace("/success");
      });
  };

  const handleJobSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus1("");
    setIsSubmitting1(true);

    if (formData.cv && formData.cv.size > 4 * 1024 * 1024) {
      alert("File size exceeds 4MB limit.");
      setStatus1("File size exceeds 4MB limit.");
      setIsSubmitting1(false);
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("department", formData.department);
    if (formData.cv) {
      formDataToSend.append("cv", formData.cv);
    }

    axios
      .post("/api/JobSubmit", formDataToSend, {})
      // eslint-disable-next-line no-use-before-define, @typescript-eslint/no-unused-vars
      .then((response) => {
        setStatus1("Email sent successfully!");
        // Reset form
        setFormData((prev) => ({
          ...prev,
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          department: "",
        }));
      })
      .catch((error) => {
        setStatus1("Network error. Please try again.");
        console.error("Submission error:", error);
      })
      .finally(() => {
        setIsSubmitting1(false);
      });
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!clicked1) {
      timer = setTimeout(() => {
        setZindex("z-0");
      }, 500);
    } else {
      setZindex("z-10");
    }

    return () => {
      clearTimeout(timer);
    };
  }, [clicked1]);

  if (client) {
    return (
      <div className="md:w-[50%] w-screen h-screen">
        <div className="flex flex-col absolute md:w-[50%] w-screen h-screen bg-gradient-to-r bg-opacity-100">
          <div
            className={`flex flex-col items-center p-8 w-screen h-fit max-w-md m-auto`}
          >
            <form
              name="Clients"
              className="space-y-4 w-full"
              onSubmit={handleClientSubmit}
            >
              <div className="flex justify-between space-x-2">
                <div className="flex flex-col w-[49%]">
                  <label
                    htmlFor="firstName"
                    className="text-black font-bold mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className={`px-4 py-2 border-black border-2 rounded focus:outline-none`}
                    required
                  />
                </div>
                <div className="flex flex-col w-[49%]">
                  <label
                    htmlFor="lastName"
                    className="text-black font-bold mb-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="px-4 py-2 border-black border-2 rounded focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-black font-bold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="px-4 py-2 border-black border-2 rounded focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-black font-bold mb-1">
                  Phone number
                </label>
                <div className="flex space-x-2">
                  <select className="px-4 py-2 border-black border-2 rounded bg-black text-white font-bold">
                    <option>IND</option>
                  </select>
                  <input
                    type="number"
                    id="phone"
                    placeholder="+91xxxxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="px-4 py-2 border-black border-2 rounded flex-grow w-full focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-black font-bold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Leave us Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="px-4 py-2 border-black border-2 rounded resize-none focus:outline-none"
                ></textarea>
              </div>

              {isSubmitting ? (
                <div className="flex mx-auto bg-black text-white font-black py-2 px-4 rounded-lg duration-300 w-40 text-center justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    width="25px"
                    height="25px"
                    style={{
                      shapeRendering: "auto",
                      display: "block",
                      background: "transparent",
                    }}
                    className="mr-1"
                  >
                    <g>
                      <circle
                        strokeDasharray="164.93361431346415 56.97787143782138"
                        r="35"
                        strokeWidth="10"
                        stroke="#ffffff"
                        fill="none"
                        cy="50"
                        cx="50"
                      >
                        <animateTransform
                          keyTimes="0;1"
                          values="0 50 50;360 50 50"
                          dur="1s"
                          repeatCount="indefinite"
                          type="rotate"
                          attributeName="transform"
                        />
                      </circle>
                    </g>
                  </svg>
                  Sending...
                </div>
              ) : (
                <button
                  type="submit"
                  className="flex mx-auto bg-black text-white font-black py-2 px-4 rounded-lg duration-300 w-40 text-center justify-center"
                >
                  {isSubmitting ? "Sending..." : "Book a call with us"}
                </button>
              )}

              {status && (
                <p
                  className={`mt-2 text-sm text-center font-bold ${
                    status.includes("successfully")
                      ? "text-black"
                      : "text-black"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
        <motion.div
          initial={{
            x: "100%",
            backgroundSize: "100%",
          }}
          whileInView={{
            backgroundSize: "110%",
          }}
          viewport={{
            amount: 0.5,
          }}
          animate={{ x: clicked ? "100%" : "0%" }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
          }}
          onClick={() => setClicked(true)}
          className={`absolute md:w-[50%] hidden md:flex w-screen h-screen bg-center bg-cover bg-no-repeat bg-gradient-to-r from-100% to-90% from-neutral-950   ${
            clicked ? "z-10 cursor-auto" : "z-10 cursor-pointer"
          }`}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 flex-col w-fit h-fit m-auto  mx-auto">
            <motion.p
              initial={{
                opacity: 0,
                y: "-50%",
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
              className="text-ardent md:text-5xl text-4xl font-bold"
            >
              i am a <br />
            </motion.p>
            <motion.p
              initial={{
                opacity: 0,
                y: "-50%",
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
              className="text-ardent md:text-9xl text-8xl font-black"
            >
              CLIENT
            </motion.p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-[100%] grid md:grid-cols-2 grid-cols-1">
      {/* left option */}
      <div className="md:w-[50%] w-screen h-screen">
        <div className="flex flex-col absolute md:w-[50%] w-screen h-screen bg-gradient-to-r bg-opacity-100">
          <motion.svg
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: clicked ? 1 : 0,
            }}
            transition={{
              delay: clicked ? 0.5 : 0,
              duration: 0,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            onClick={() => setClicked(false)}
            className={`absolute right-0   md:-translate-x-0 size-10 md:m-5 m-5  hover:scale-110 transition hover:transition cursor-pointer`}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </motion.svg>

          <div
            className={`flex flex-col items-center p-8 w-screen h-fit max-w-md m-auto`}
          >
            <form
              name="Clients"
              className="space-y-4 w-full"
              onSubmit={handleClientSubmit}
            >
              <div className="flex justify-between space-x-2">
                <div className="flex flex-col w-[49%]">
                  <label
                    htmlFor="firstName"
                    className="text-black font-bold mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className={`px-4 py-2 border-black border-2 rounded focus:outline-none`}
                    required
                  />
                </div>
                <div className="flex flex-col w-[49%]">
                  <label
                    htmlFor="lastName"
                    className="text-black font-bold mb-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="px-4 py-2 border-black border-2 rounded focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-black font-bold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="px-4 py-2 border-black border-2 rounded focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-black font-bold mb-1">
                  Phone number
                </label>
                <div className="flex space-x-2">
                  <select className="px-4 py-2 border-black border-2 rounded bg-black text-white font-bold">
                    <option>IND</option>
                  </select>
                  <input
                    type="number"
                    id="phone"
                    placeholder="+91xxxxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="px-4 py-2 border-black border-2 rounded flex-grow w-full focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-black font-bold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Leave us Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="px-4 py-2 border-black border-2 rounded resize-none focus:outline-none"
                ></textarea>
              </div>

              {isSubmitting ? (
                <div className="flex mx-auto bg-black text-white font-black py-2 px-4 rounded-lg duration-300 w-40 text-center justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    width="25px"
                    height="25px"
                    style={{
                      shapeRendering: "auto",
                      display: "block",
                      background: "transparent",
                    }}
                    className="mr-1"
                  >
                    <g>
                      <circle
                        strokeDasharray="164.93361431346415 56.97787143782138"
                        r="35"
                        strokeWidth="10"
                        stroke="#ffffff"
                        fill="none"
                        cy="50"
                        cx="50"
                      >
                        <animateTransform
                          keyTimes="0;1"
                          values="0 50 50;360 50 50"
                          dur="1s"
                          repeatCount="indefinite"
                          type="rotate"
                          attributeName="transform"
                        />
                      </circle>
                    </g>
                  </svg>
                  Sending...
                </div>
              ) : (
                <button
                  type="submit"
                  className="flex mx-auto bg-black text-white font-black py-2 px-4 rounded-lg duration-300 w-40 text-center justify-center"
                >
                  {isSubmitting ? "Sending..." : "Book a call with us"}
                </button>
              )}

              {status && (
                <p
                  className={`mt-2 text-sm text-center font-bold ${
                    status.includes("successfully")
                      ? "text-black"
                      : "text-black"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
        <motion.div
          initial={{
            x: "0%",
            backgroundSize: "100%",
          }}
          whileInView={{
            backgroundSize: "110%",
          }}
          viewport={{
            amount: 0.5,
          }}
          animate={{ x: clicked ? "100%" : "0%" }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
          }}
          onClick={() => setClicked(true)}
          className={`absolute md:w-[50%] w-screen h-screen bg-[url('/handshake.png')] bg-center bg-cover   bg-no-repeat bg-gradient-to-r from-100% to-90% from-neutral-950   ${
            clicked ? "z-10 cursor-auto" : "z-10 cursor-pointer"
          }`}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 flex-col w-fit h-fit m-auto  mx-auto">
            <motion.p
              initial={{
                opacity: 0,
                y: "-50%",
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
              className="text-ardent md:text-5xl text-4xl font-bold"
            >
              i am a <br />
            </motion.p>
            <motion.p
              initial={{
                opacity: 0,
                y: "-50%",
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
              className="text-ardent md:text-9xl text-8xl font-black"
            >
              CLIENT
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
              className="mt-5"
            >
              {" "}
              <Button link={""} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* right option */}
      <div className="flex w-screen h-screen bg-white">
        <div className="flex flex-col absolute md:w-[50%] w-screen h-screen">
          <motion.svg
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: clicked1 ? 1 : 0,
            }}
            transition={{
              delay: clicked1 ? 0.5 : 0,
              duration: 0,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            onClick={() => setClicked1(false)}
            className={`flex size-10 mt-5 mr-auto ml-5 hover:scale-110 transition hover:transition cursor-pointer`}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </motion.svg>
          <div
            className={`flex flex-col items-center p-8 md:w-fit w-screen h-fit max-w-md m-auto `}
          >
            <form
              name="Job Application"
              className="space-y-4 w-full"
              onSubmit={handleJobSubmit}
            >
              <div className="flex justify-between space-x-2">
                <div className="flex flex-col w-[49%]">
                  <label
                    htmlFor="firstName"
                    className="text-black font-bold mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className={`px-4 py-2 border-black border-2 rounded focus:outline-none`}
                    required
                  />
                </div>
                <div className="flex flex-col w-[49%]">
                  <label
                    htmlFor="lastName"
                    className="text-black font-bold mb-1 "
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="px-4 py-2 border-black border-2 rounded focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-black font-bold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="px-4 py-2 border-black border-2 rounded focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-black font-bold mb-1">
                  Phone number
                </label>
                <div className="flex space-x-2">
                  <select className="px-4 py-2 border-black border-2 rounded bg-black text-white font-bold">
                    <option>IND</option>
                  </select>
                  <input
                    type="number"
                    id="phone"
                    placeholder="+91xxxxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="px-4 py-2 border-black border-2 rounded flex-grow w-full focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="department"
                  className="text-black font-bold mb-1"
                >
                  Choose Department
                </label>
                <select
                  required
                  name="department"
                  id="department"
                  value={formData.department}
                  onChange={(e) =>
                    handleInputChange("department", e.target.value)
                  }
                  className="border-black border-2 rounded px-4 py-2 focus:outline-none cursor-pointer"
                >
                  <option value="">Select Department</option>
                  <option value="Public Relations">Public Relations</option>
                  <option value="Public Policy">Public Policy</option>
                  <option value="Digital Communications">
                    Digital Communications
                  </option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="uplpad" className="text-black font-bold mb-1">
                  Select your CV
                </label>

                <input
                  required
                  accept=".pdf, .doc, .docx"
                  type="file"
                  id="upload"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      cv: e.target.files ? e.target.files[0] : null,
                    }))
                  }
                  className=""
                />
              </div>

              {isSubmitting1 ? (
                <div className="flex mx-auto bg-black text-white font-black py-2 px-4 rounded-lg duration-300 w-40 text-center justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    width="25px"
                    height="25px"
                    style={{
                      shapeRendering: "auto",
                      display: "block",
                      background: "transparent",
                    }}
                    className="mr-1"
                  >
                    <g>
                      <circle
                        strokeDasharray="164.93361431346415 56.97787143782138"
                        r="35"
                        strokeWidth="10"
                        stroke="#ffffff"
                        fill="none"
                        cy="50"
                        cx="50"
                      >
                        <animateTransform
                          keyTimes="0;1"
                          values="0 50 50;360 50 50"
                          dur="1s"
                          repeatCount="indefinite"
                          type="rotate"
                          attributeName="transform"
                        />
                      </circle>
                    </g>
                  </svg>
                  Sending...
                </div>
              ) : (
                <button
                  type="submit"
                  className="flex mx-auto bg-black text-white font-black py-2 px-4 rounded-lg duration-300 w-40 text-center justify-center"
                >
                  {isSubmitting1 ? "Sending..." : "Book a call with us"}
                </button>
              )}
              {status1 && (
                <p
                  className={`mt-2 text-sm text-center font-bold ${
                    status1.includes("successfully")
                      ? "text-black"
                      : "text-black"
                  }`}
                >
                  {status1}
                </p>
              )}
            </form>
          </div>
        </div>
        <motion.div
          initial={{
            x: "0%",
          }}
          animate={{ x: clicked1 ? "-100%" : "0%" }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
          }}
          onClick={() => setClicked1(true)}
          className={`flex absolute md:w-[50%] w-screen h-screen bg-gradient-to-l from-ardent to-neutral-950  ${zindex} ${
            clicked1 ? "cursor-auto" : "cursor-pointer"
          }`}
        >
          {/* <div
            className={`absolute h-1/2 w-[1px] flex my-auto top-0 bottom-0 ${
              clicked1 ? "bg-none" : "bg-white"
            }`}
          ></div> */}
          <div className={`h-fit w-fit m-auto `}>
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
              className="text-white md:text-5xl text-4xl font-bold top-5 "
            >
              i wanna <br />
              work with <br />
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
              className="text-white md:text-9xl text-8xl font-black md:underline"
            >
              YOU
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
              className="mt-5"
            >
              {" "}
              <Button theme="light" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* <div className="absolute w-[50%] h-screen bg-red-200"></div>
      <div className="absolute right-0 w-[50%] h-screen bg-red-900"></div> */}
    </div>
  );
}
