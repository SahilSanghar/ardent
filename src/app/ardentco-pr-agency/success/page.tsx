"use client";

import React from "react";
import Script from "next/script";
import Button from "@/app/components/ui/button";

export default function Page() {
  return (
    <>
      <Script id="google-analytics-success-ardentco-pr-agency">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17389056295/4JMxCJzAy_caEKfi3-NA',
            'value': 1.0,
            'currency': 'INR'
          });
        `}
      </Script>

      <div className="w-screen h-screen flex flex-col justify-center items-center bg-neutral-950 text-white px-4 text-center">
        <h1 className="flex md:text-4xl text-2xl font-bold">
          Form Submitted Successfully!
        </h1>
        <p className="md:text-lg text-xs mb-5 mt-1">
          Thank you for submitting the form. We will get back to you soon.
        </p>
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
