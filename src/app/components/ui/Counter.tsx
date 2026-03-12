// import React, { useEffect } from "react";

export default function Counter() {
  // const [count, setCount] = React.useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // function formatTime(seconds : number) {
  //   const hours = Math.floor(seconds / 3600);
  //   const minutes = Math.floor((seconds % 3600) / 60);
  //   const secs = seconds % 60;
  
  //   // Pad hours, minutes, and seconds with leading zeros if necessary
  //   const formattedHours = String(hours).padStart(2, '0');
  //   const formattedMinutes = String(minutes).padStart(2, '0');
  //   const formattedSeconds = String(secs).padStart(2, '0');

  //   if(seconds <  60) {
  //     return `${formattedSeconds}`;
  //   }
  //   else if(seconds > 60) {
  //     return `${formattedMinutes}:${formattedSeconds}`;
  //   }
  //   else{
  //     return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  //   }

  
  //   return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  // }

  return (
    <div className="fixed bottom-0 right-0 z-50 text-xl font-bold m-2 cursor-pointer text-white">
      {/* {formatTime(count)} */}
      Developer not paid yet!
    </div>
  );
}
