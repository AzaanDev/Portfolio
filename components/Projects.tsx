import React from "react";
import Project from "./Project";

type Props = {};

/*Connect this to a database at some point*/
export type ProjectType = {
  name: string;
  description: string;
  link: string;
  github: string;
  img: string;
  web: boolean;
};

export default function Projects({}: Props) {
  const ProjectsList: ProjectType[] = [
    {
      name: "Social Media App",
      description: "Built a platform where registered users can submit posts, such as text and images to community boards, which can be liked, disliked, or commented on. Designed queries and mutations with GraphQL and Stepzen to connect to a PostgreSQL database hosted on Supabase. Created an interactive frontend with Next.js and Tailwindcss that render posts with comments for a specific or all communities.",
      link: "https://social-media-azaan.vercel.app/",
      github: "https://github.com/AzaanDev/SocialMediaApp",
      img: "/SocialApp-Azaan.png",
      web: true,
    },
    {
      name: "Gameboy Emulator",
      description: "Built a windows app with SDL2 for graphics to provide an emulation of the original Gameboy console. Accurately runs all cpu instructions and interrupts.",
      link: "",
      github: "https://github.com/AzaanDev/Gameboy-Emulator",
      img: "/pong.png",
      web: false,
    },
    {
      name: "Data Structures & Algorithm Visualizer",
      description: "A single-page website created to provide intuitive visualizations of common data structures and algorithms using React. Built an API that tracks users' learning process, authenticates logins, and fetches data from a SQL database with Flask.",
      link: "",
      github: "https://github.com/AzaanDev/cs_project",
      img: "/algo.png",
      web: false,
    },
    {
      name: "Game Engine",
      description: "Designed and built a framework that utilizes an OpenGL renderer to create 2D video games, which supports multiple client architectures with CMake. Engine uses batch rendering to minimize draw calls to the GPU and can read Sprite Sheets to generate objects. Implemented gameplay logic in C++ for player controls and enemy spawning system.",
      link: "",
      github: "https://github.com/AzaanDev/S22_Azaan_Ali",
      img: "/game.png",
      web: false,
    },
    {
      name: "Golang Tcp Chat",
      description: "Designed a chat client and server that uses the TCP to communicate between all devices on the network in Go",
      link: "",
      github: "https://github.com/AzaanDev/TCP-Chat",
      img: "/tcp.webp",
      web: false,
    },
  ];
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll
      overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4099ff]"
      >
        {ProjectsList.map((project, i) => (
          <Project project={project} key = {i} />
        ))}
      </div>
    </div>
  );
}
