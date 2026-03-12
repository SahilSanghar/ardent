"use client";

import React from "react";
// import Script from "next/script";

import Button from "@/app/components/ui/button";

export default function Page() {
  // const [count, setCount] = useState(10);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prev) => prev - 1);
  //   }, 1000);

  //   if (count === 0) {
  //     redirect("/");
  //   }

  //   return () => clearInterval(interval);
  // }, [count]);

  return (
    <>
    

      <div className="w-screen h-screen flex flex-col justify-center items-center bg-neutral-950 text-white">
        <h1 className="flex md:text-4xl text-2xl font-bold">
          Form Submitted Successfully!
        </h1>
        <p className="md:text-lg text-xs mb-5 mt-1">
          Thank you for submitting the form. We will get back to you soon.
        </p>
        {/* <p className="md:text-base text-xs mb-5 text-white/50">
        Auto redirecting to home page in{" "}
        <span className="text-ardent">{count}</span> seconds
      </p>
       */}
        <div className="flex gap-4">
          <Button buttonTxt="Home" link="/" />
          <Button
            buttonTxt="Instagram"
            target="_blank"
            link="https://www.instagram.com/_ardentco._/"
          />
        </div>
      </div>
    </>
  );
}
