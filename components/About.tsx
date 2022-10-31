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
      <div className="space-y-10 px-0 md:px-10">
        <p className="text-md ">
          Hello, I'm Azaan Ali! I am a recent graduate from CUNY Hunter College with a Bachelor of Arts in 
          Computer Science. I have worked on frontend development using various open source frameworks as 
          will as backend apis and databases. Also, I have worked on complex software utilizing C++.
        </p>
      </div>
    </div>
  );
}
