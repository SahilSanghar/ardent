import React from "react";

export default function Status() {
  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 z-20 p-4 rounded-lg shadow-lg bg-black`}
    >
      <p className="text-center text-white text-sm font-medium">status</p>
    </div>
  );
}
