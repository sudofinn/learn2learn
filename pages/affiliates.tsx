import React from "react";
import Head from "next/head";
import Link from "next/link";

import SecondCallToAction from "@/components/home/SecondCallToAction";


import Footer from "@/components/home/Footer";


const Affiliates = () => {
  return (
    <div className=" min-h-screen bg-black text-white   ">
   <section className="bg-black text-white pt-32 ">
        <div className="container px-6 py-10 mx-auto text-center">
        <h1 className="text-7xl font-extrabold   ">Earn <span className="bg-white text-black ">money</span> sharing Freelance OS</h1>
        
        {/*
        <p className="mt-4 text-black xl:mt-6 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
  */}
        
        <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-32 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-8 border-white rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold   ">01 Sign up</h1>
                        
                <p className="text-white text-xl font-bold ">
                  Sign up for becoming an affiliate of this product using the button below.
                    
                </p>

            </div>

            <div className="p-8 space-y-3 border-8 border-white rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold ">02 Account </h1>
                <p className=" text-xl font-bold">
                       Create a Gumroad account <Link href="https://gumroad.com/" className="underline" target="_blank">here</Link>. Gumroad is a secure and trustworthy payment processor.
                </p>

            </div>

            <div className="p-8 space-y-3  border-white border-8 rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold ">03 Connect</h1>
                          
                        
                <p className=" text-xl font-bold">

          Add your bank account information to Gumroad so that they are able to pay you.
                  
                </p>

             </div>
            </div>
         </div>
           
       </section>  
       <button className="relative mx-auto flex align-start mt-4  items-center px-12 py-3 overflow-hidden text-2xl  text-white hover:bg-white hover:text-black border-white  border-4 rounded-md  group ">
              <span className="absolute left-0 block w-full h-0 transition-all  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">Sign up to become an affiliate</span>
            </button>
       <SecondCallToAction />
       <Footer />
    </div>
  );
};

export default Affiliates
