import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image"

import { useRouter } from 'next/router';

import {Link} from "react-scroll"


import FreelanceIcon from "../../assets/icons8-notion.svg"

//import {Link} from "react-scroll"
//( gives duplicate , might have to replace all next/link with react scroll link) ( programming with yash 1:49 h)

import { FaMoon, FaSun } from "react-icons/fa";

/* make animation from yash patel tailwind tutorial */

const NavBar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "About",
      style: "   ",
    },

    {
      id: 2,
      link: "Features",
      style: " ",
    },

    {
      id: 3,
      link: "Pricing",
      style: " ",
    },

    {
      id: 4,
      link: "Get it now ",
      style: "border-4 border-gray-900 border-double hover:bg-pk   ",
    },
  ];



  
  const router = useRouter()

  const NavigateHome = () => {
    router.push("/")
  }
  

  

  return (
    <div
      className="flex justify-between items-center 
             px-4 w-full h-20 text-black relative "
    >
      <div>
        <button onClick={NavigateHome} >
          <Image src={FreelanceIcon} className=" hidden md:block h-14 lg:h-20 hover:scale-110 duration-200  " alt="Flowbite Logo" />
        </button>
      </div>

      {/* desktop */}

      <ul className="hidden lg:flex">
        {links.map(({ id, link, style }) => (
          <li
            key={id}
            className={`px-4 text-xl  cursor-pointer  transition duration-200  
             text-black hover:scale-105 mr-8 
             font-bold  ${style}`}
          >
            <Link to={link} smooth duration={1000}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* logic */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10
             text-black  lg:hidden"
      >
        {nav ? <FaTimes size={30} color="white" /> : <FaBars size={30} />}
      </div>

      {/* mobile */}
      {nav && (
        <ul
          className="flex flex-col justify-center 
                                items-center 
                                absolute   top-0 left-0 w-full h-screen   bg-pk  "
        >
          {links.map(({ id, link,  style }) => (
            <li
              key={id}
              className={`px-4  cursor-pointer   text-black py-4
                                my-6 text-2xl font-extrabold transition duration-500 hover:scale-110  
                                items-center  mr-3    rounded-xl ${style}`}
            >
               <Link onClick={() => setNav(!nav)} to={link} smooth duration={1000}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
