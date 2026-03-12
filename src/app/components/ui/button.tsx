import React from "react";

interface buttonProps {
  buttonTxt?: string;
  link?: string;
  target?: string;
  theme?: "dark" | "light";
  onclick?: () => void;
}

export default function Button({
  buttonTxt,
  link,
  theme,
  onclick,
  target,
}: buttonProps) {
  return theme == "light" ? (
    <a
      href={link || undefined}
      onClick={onclick}
      target={target}
      className="md:text-xl text-base border-2 font-bold text-white bg-none border-white px-5 py-2 rounded-full hover:bg-black hover:text-white hover:border-black duration-300"
    >
      {buttonTxt ? buttonTxt : "Know more"}
    </a>
  ) : (
    <a
      href={link || undefined}
      onClick={onclick}
      target={target}
      className="md:text-xl border-2 font-bold text-ardent bg-none border-ardent px-5 py-2 rounded-full hover:bg-ardent hover:text-black duration-300"
    >
      {buttonTxt ? buttonTxt : "Know more"}
    </a>
  );
}
