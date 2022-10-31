import React from "react";
import { motion } from "framer-motion";
import Skill from "../components/Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000]
  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[15px] pb-[1px]">Hover Over A Skill</h3>
      <div className="grid grid-cols-5 gap-4 pt-[100px]">
        <Skill url="/c.png" name="C"/>
        <Skill url="/cpp.png" name="C++"/>
        <Skill url="/py.png" name="Python"/>
        <Skill url="/ts.png" name="Typescript"/>
        <Skill url="/js.png" name="Javascript"/>
        <Skill url="/react.png" name="React"/>
        <Skill url="/next.png" name="Next"/>
        <Skill url="/sql.png" name="MySQL"/>
      </div>
    </motion.div>
  );
}
