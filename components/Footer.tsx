import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="text-center lg:text-left text-white">
      <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-700">
        <div className="mr-12 hidden lg:block">
          <span>Get in contact:</span>
        </div>
        <div className="flex justify-center">
          <SocialIcon
            url="https://github.com/AzaanDev"
            fgColor="white"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/azaan-ali/"
            fgColor="white"
            bgColor="transparent"
          />
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="white"
            bgColor="transparent"
            url="mailto: azaan.ali2434@gmail.com"
          />
          <a href="mailto: azaan.ali2434@gmail.com">
            <p className="uppercase hidden md:inline-flex pt-3 text-white-400">
              azaan.ali2434@gmail.com
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
}
