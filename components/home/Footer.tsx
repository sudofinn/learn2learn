import React from 'react'
import Link from "next/link"
import Router from "next/router"

//import { FaTwitter } from "react-icons/fa";
import {RiTwitterXLine} from "react-icons/ri"
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {AiFillHome} from "react-icons/ai"

const Footer = () => {
	
  return (
		<>
			<div className="  pt-32 h-1/2 bg-black text-white  w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5  ">
					<ul>
						<Link href="/">
						<p className="  duration-500 font-extrabold text-red-600 text-4xl pb-6">
							Learn2Learn.guide
						</p>
						</Link>
						<div className="flex gap-6 pb-5 hover:shadow-xl shadow-black duration-500">

							<Link href="https://x.com/finnguha" target="_blank">
								<RiTwitterXLine className="text-2xl cursor-pointer  " />
							</Link>


							<Link href="/" >
								<AiFillHome className="text-2xl cursor-pointer  duration-300" />
							</Link>



							

							

						</div>
					</ul>
				</div>
				<div className="p-5 ">
					<ul>
						<p className="font-extrabold text-3xl pb-4">Sidemap </p>
						<li  onClick={() => Router.push("https://finnguha.com")} className=" font-extrabold text-md pb-2   cursor-pointer">
							About Finn Guha
						</li>
						
						<li onClick={() => Router.push("/founder")} className=" text-md pb-2 font-extrabold   cursor-pointer">
							Sign up to Newsletter
						</li>

						<li onClick={() => Router.push("/sources")} className=" text-md pb-2 font-extrabold   cursor-pointer">
							Sources
						</li>

						<li onClick={() => Router.push("/contact")} className=" text-md pb-2 font-extrabold   cursor-pointer">
							Contact
							
						</li>
					</ul>
				</div>
				
				<div className="p-5">
					<ul>
						<p className="text-3xl font-extrabold  pb-4">Legal</p>
						<li onClick={() => Router.push("/terms")} className=" text-md pb-2 font-extrabold   cursor-pointer">
							Terms and Conditions
						</li>
						
						<li onClick={() => Router.push("/privacy")} className=" text-md pb-2 font-extrabold   cursor-pointer">
							Privacy Policy
						</li>
						<li onClick={() => Router.push("/cookie_policy")} className="text-md pb-2 font-extrabold   cursor-pointer">
							Cookie Policy
						</li>
						<li onClick={() => Router.push("/impressum")} className=" text-md pb-2 font-extrabold   cursor-pointer">
							Impressum
						</li>
						
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center bg-black text-red-600 p-5 ">
				<h1 className=" font-extrabold ">
					© 2023 | All rights reserved | {" "}
					<Link href="/" className=" font-extrabold  cursor-pointer">
						Learn2Learn{" "}
					</Link>
				</h1>
			</div>
		</>
	);
}

export default Footer