import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCricle from "./BackgroundCricle";
type Props = {};

export default function Profile({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I am Azaan Ali", `print('LovestoCode')`],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCricle />
      {/*Image*/}
      <div className="z-20">
      <h1 className="text-5xl lg:text-6xl pb-10 font-senibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="blue" />
        </h1>
        <h2 className="tex-sm uppercase text-gray-500 pt-2 tracking-[15px]">
          Software Enginner
        </h2>
        <div className="pt-5">
          <Link href="#About">
            <button className="profileButton">About</button>
          </Link>
          <Link href="#Skills">
            <button className="profileButton">Skills</button>
          </Link>
          <Link href="#Projects">
            <button className="profileButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
