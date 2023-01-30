import React from "react";
import { useState } from "react";
import Primary from "../../assets/freelance_os_premier_pic_2.png";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" min-h-screen      ">
      <div className="  ">
        <div className="text-center font-extrabold  ">
          <h1
            className=" text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl
             mx-[4] sm:mx-[75px] md:mx-[150px] lg:mx-[300px]  2xl:mx-[500px]
            mb-4 mt-8 sm:mt-12  "
          >
            Work{" "}
            <span className="font-extrabold text-pk ">efficiently </span>{" "}
            and enjoy more{" "}
            <span className="font-extrabold text-bl"> free time</span> .
          </h1>
          <h1
            className="text-xl md:text-2xl mt-4 mb-4 
            mx-[8] sm:mx-[75px] md:mx-[150px] lg:mx-[300px] xl:mx-[500px] 2xl:mx-[600px]"
          >
            {" "}
            With a system that makes organizing fun , work effortless and free
            time plentiful.
          </h1>

          <button
            id="badge-dismiss-default"
            className="px-10 py-3  select-none rounded-md text-white 
              hover:border-gray-500 border-2  border-white  bg-black
              hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 font-extrabold  mt-8 shadow-xl shadow-black
              
                "
          >
            Get Freelancer OS
          </button>

          <Image
            src={Primary}
            alt="The Header"
            className="mt-12 mx-auto mb-12 w-2/3 shadow-xl shadow-black "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
