import { easeInOut, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
// import Queen from "@/app/components/ui/Queen";

interface Props {
  content: { title: string; description: string; svg: ReactNode }[];
}

export default function About({ content }: Props) {
  const [para, setPara] = useState(0);
  // const [angle, setAngle] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const angles = Array.from(
      { length: content.length },
      (_, index) => index * 90
    );
    // setCompass(angles[para]);
    // setAngle(para * 90);

    const interval = setInterval(() => {
      setPara((prev) => prev + 1);
    }, 10000);

    if (para >= angles.length) {
      setPara((prev) => prev - angles.length);
    }

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [content.length, para]);

  return (
    <div className="relative flex w-full md:h-[100vh] h-[100vh] min-h-screen z-10  text-white">
      <div className=" w-fit flex m-auto md:flex-row flex-col h-full">
        {/* compass */}

        <motion.div
          className="flex relative z-10 md:mr-20 md:w-[400px] w-fit md:h-[80%] h-[30%]  md:justify-center md:items-center m-auto"
          initial={{
            opacity: 0,
            ...(isMobile ? { y: -50 } : { x: -50 }),
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            amount: 0.3,
          }}
        >
          <div className="md:flex md:relative lg:ml-0 lg:w-[400px] md:w-[200px] w-[100px]  md:ml-20 md:h-[80%] h-auto flex m-auto justify-center items-center">
            {/* <Queen angle={angle} /> */}
            {content.map((item, index) => (
              <>{para === index && item.svg}</>
            ))}
          </div>
        </motion.div>

        {/* paras */}

        <div className=" lg:w-[700px] lg:max-w-[600px] lg:mr-0  md:mr-20  md:h-screen md:justify-center min-h-[50%] md:p-0 px-10 text-center  h-fit flex flex-col mb-16 my-auto max-w-[400px]">
          {content.map((item, index) => (
            <div key={index}>
              {para === index && ( // Conditionally render based on para value
                <div>
                  <motion.p
                    initial={{
                      opacity: 0,
                      transform: "translateY(-50%)",
                    }}
                    whileInView={{
                      opacity: 1,
                      transform: "translateY(0%)",
                    }}
                    viewport={{
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: easeInOut,
                    }}
                    className="lg:text-5xl md:text-3xl overflow-hidden text-2xl font-black mb-5 text-ardent text-center "
                  >
                    {item.title} {/* Dynamically rendering the title */}
                  </motion.p>
                  <div>
                    <motion.p
                      initial={{
                        opacity: 0,
                        transform: "translateY(10%)",
                      }}
                      whileInView={{
                        opacity: 1,
                        transform: "translateY(0%)",
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      viewport={{
                        amount: 0.5,
                      }}
                      className="lg:text-xl md:text-base text-[14px] text-center"
                    >
                      {item.description}{" "}
                      {/* Dynamically rendering the description */}
                    </motion.p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-fit text-center flex justify-center">
        <div className="mb-5 w-[50%] h-10 flex items-center justify-center space-x-2">
          {content.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer hover:scale-110 ${
                para === index ? "bg-neutral-200" : "bg-neutral-500"
              } duration-300`}
              onClick={() => setPara(index)}
            ></div>
          ))}
        </div>
      </div>

      <div
        className="absolute md:w-20 w-10 h-screen left-0 text-center mb-5 flex justify-center items-center cursor-pointer hover:scale-110 z-10"
        onClick={() => setPara((prev) => (prev != 0 ? prev - 1 : prev))}
      >
        <div className="absolute left-0 w-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>

      <div
        className="absolute md:w-20 w-10 h-screen right-0 text-center mb-5 flex justify-center items-center cursor-pointer hover:scale-110"
        onClick={() =>
          setPara((prev) => (prev != content.length - 1 ? prev + 1 : prev))
        }
      >
        <div className="absolute w-full flex items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
