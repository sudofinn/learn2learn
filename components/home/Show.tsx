import React from 'react'
import Image from "next/image"
import {Link} from "react-scroll"



import ShowVidGif from "../../assets/2023-04-01-12-58-04.gif"


const Show = () => {
  return (
    <div className='bg-black text-white'>
      <div className='text-center'>
      <h1 className='text-5xl lg:text-8xl pb-4  text-white font-extrabold pt-20 text-center mb-4'>The complete system.</h1>
   <Link to="Pricing" smooth duration={1000}>
         <button className="relative mt-4  items-center px-12 py-3 overflow-hidden text-2xl  text-white hover:bg-white hover:text-black border-white  border-4 rounded-md  group ">
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
              <span className="relative">Get Freelance OS</span>
            </button>
          </Link>
      </div>

      <div className=' flex justify-center pb-64 mt-8 '>
        <video autoPlay  muted loop className='playsInline'  >         
           <source src="/videos/completesystem.mp4" type="video/mp4"/>       
        </video>
        {/*add autoPlay prop to play */}

    </div>

    </div>
    
  )
}

export default Show


{/* 
<div className='bg-[#111010] text-white pt-64'>
        <div className='relative '>
        <Image src={FosSec1} alt="fos sec 1" className='w-full mx-auto absolute shadow-xl shadow-white' />
        <h2 className=" relative text-6xl font-extrabold  text-center pb-16 pt-40 "> 01 Inbox </h2>
        <h2 className="relative text-6xl font-extrabold text-center pt-64  "> 02 Clients </h2>
        </div>

        
        
    </div>
 */}
