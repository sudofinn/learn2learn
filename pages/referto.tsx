
import React from "react";
import Head from "next/head";
import Link from "next/link";



import Footer from "@/components/home/Footer";


const ReferTo = () => {
  return (
    <div className=" min-h-screen bg-black text-white   ">
      <Head>
        <title>Refer to</title>
        <meta name="description" content="Refer to the Freelance OS" />
      </Head>
   <section className="bg-black text-white pt-32 ">
        <div className="container px-6 py-10 mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-extrabold   ">Get a  <span className="bg-white text-black ">free template</span> when sharing Freelance OS</h1>
        
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

                <h1 className="text-4xl font-extrabold   ">01 Share</h1>
                        
                <p className="text-white text-xl font-bold ">
                  Share the OS with people you know and who could be interested in it. That could be friends, colleagues etc. 
                    
                </p>

            </div>

            <div className="p-8 space-y-3 border-8 border-white rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold ">02 Claim </h1>
                <p className=" text-xl font-bold">
                    Once one of them  has purchased the OS , click the button to send me a notification. Include the email of your friend/colleague etc. so that I can verify the purchase. 
                </p>

            </div>

            <div className="p-8 space-y-3  border-white border-8 rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold ">03 Choose</h1>
                          
                        
                <p className=" text-xl font-bold">

              I will email you back and ask what template you would like.You can choose one template from my collection.You can find the collection 
              <Link href="https://vimfinn.gumroad.com" className="underline" target="_blank"> here</Link>.
                  
                </p>

             </div>
            </div>
         </div>
           
       </section>  

        <div className=" flex justify-center items-center pt-24">
       <form
            action={process.env.NEXT_PUBLIC_KEY}
            method="POST"
            className=" flex flex-col w-full md:w-1/2 mb-32  "
          >
            <input
              type="email"
              name="name"
              placeholder="Enter your email"
              className="p-2 bg-white text-xl text-black  border-white rounded-md focus:outline-none border-4  "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your friends/colleagues email"
              className="my-4 text-black text-xl p-2  bg-white rounded-md  border-4 border-white focus:outline-none"
            />
            

            <button className="relative hover:text-black mt-4  items-center px-12 py-3 overflow-hidden text-2xl   border-white border-4 rounded-md  group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-white  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 text-black h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
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
              <span className="relative">Claim your template !</span>
            </button>
          </form>
          </div>

       
          

            
       <Footer />
    </div>
  );
};

export default ReferTo
