import React from "react";
import Image from "next/image";
import mem0real from "../public/images/Mem0Real.png";

const footer = () => {
  return (
    <footer className="text-gray-400 bg-stone-900 body-font mt-12 md:mt-0 flex flex-col md:flex-row">
      <div className="container px-5 py-5 flex justify-start items-center flex-col md:flex-row basis-2/3">
        <a className="flex title-font font-medium items-center justify-center text-white border border-y-0 rounded-md border-r-0 border-l-0 mr-2">
          <span className="mx-5 text-xl">AbuSolarTech</span>
        </a>
        {/* <div className="hidden md:block border border-y-0 border-l-0 h-7 mx-5"></div> */}
        <p className="text-sm text-gray-400 pl-2 sm:ml-4 sm:pl-4 sm:border-l-2 mt-2 md:mt-0 sm:border-gray-800 sm:py-2 sm:mt-0">
          © 2023 All Rights Reserved
        </p>
      </div>
      <div className="container flex w-screen justify-center md:justify-end items-center basis-1/3">
        <span className="font-audioWide text-center"> Web Developed by: </span>
        <a href="https://github.com/Mem0Real">
          <Image
            // width="40%"
            // height="10%"
            width={120}
            height={70}
            src={mem0real}
            alt="Mem0Real"
            className="relative"
          />
        </a>
      </div>
    </footer>
  );
};

export default footer;
