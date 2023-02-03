import React from 'react'
import Link from "next/link"
import Router from "next/router"
import Image from "next/image"

import { FaRegImages, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {AiFillHome} from "react-icons/ai"
import {FaProductHunt} from "react-icons/fa"


import FreelanceIcon from "../../assets/icons8-notion.svg"

const Footer = () => {
	
  return (

<footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 font-bold ">
    <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center  mb-4 sm:mb-0">
            <Image src={FreelanceIcon} className="h-14 lg:h-24 -mr-12 hover:scale-110 duration-200" alt="Flowbite Logo" />
            <span className="self-center text-2xl  whitespace-nowrap ">Freelance OS</span>
        </Link>
        <ul className="flex flex-wrap items-center text-lg  lg:text-xl  mb-6  text-gray-800  sm:mb-0 ">
            <li>
                <Link href="/terms" className="mr-4 hover:underline md:mr-6 ">Terms</Link>
            </li>
            <li>
                <Link href="/privacy" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
            </li>
            <li>
                <Link href="/impressum" className="mr-4 hover:underline md:mr-6 ">Impressum</Link>
            </li>
            <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm  sm:text-center "><Link href="/" className="hover:underline">Freelance OS</Link>. All Rights Reserved.
    </span>
</footer>


  )
}

export default Footer