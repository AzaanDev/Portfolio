import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7x1 px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase pl-10 tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <img
          src="/self.jpg"
          className="-mb-20 flex-shrink-0 md:mb-0 w-56 h-56 rounded-full object-cover md:rouned-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
        ></img>
      <div className="space-y-10 px-0 md:px-10">
        <p className="text-lg text-center px-[100px]">
          {`Hello, I'm Azaan Ali! I am a recent graduate from CUNY Hunter College with a Bachelor of Arts in 
          Computer Science. I have worked on frontend development using various open source frameworks as 
          will as backend apis and databases. Also, I have worked on complex software such as emulators and game development utilizing C++.`}
        </p>
      </div>
    </div>
  );
}
