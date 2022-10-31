import React from "react";
import { motion } from "framer-motion";

type Props = {
    url: string;
    name: string;
};

export default function Skill({url, name}: Props) {
  return <div className="group relative flex cursor-pointer h-screenr">
    <motion.img
    initial = {{
        y: 200,
        opacity: 0,
    }}
    transition = {{duration: 1}}
    whileInView = {{opacity: 1, y: 0}}
    src = {url}
    className = "rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28"
    />
    <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
    ease-in-out group-hover:bg-white h-24 w-24 xl:w-28 xl:h-28 rounded-full z-0">
      <div className="flex items-center justify-center h-full">
        <p className="text-2xl font-bold sm:text-sm lg:text-lg text-black opacity-100%">{name}</p>
      </div>
    </div>
  </div>;
}
