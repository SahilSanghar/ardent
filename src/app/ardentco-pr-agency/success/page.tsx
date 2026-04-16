"use client";

import React from "react";
import Button from "@/app/components/ui/button";

export default function Page() {
  return (
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
  );
}
