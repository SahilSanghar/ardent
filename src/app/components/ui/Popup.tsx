import React from "react";

interface Props {
  message: string;
}

export default function Popup({ message }: Props) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 z-30">
        <div
          className={`w-[60%] h-[80%] fixed  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  z-40 p-4 rounded-lg shadow-2xl backdrop-blur-sm bg-black/80`}
        >
          <div className="flex w-fit ml-auto cursor-pointer hover:scale-105" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-10"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <p className="text-center text-white text-sm font-medium">
            {message}
          </p>
        </div>
      </div>
    </>
  );
}
