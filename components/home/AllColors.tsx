import React from 'react'
import {Link} from "react-scroll"
import Image from "next/image"

import LazyLoad from 'react-lazy-load';



import HeaderPic from "../../assets/three_pic.png"

const AllColors = () => {
  return (
    <div className='bg-black text-white'>
      <div className='text-center'>
      <h1 className='text-5xl lg:text-8xl pb-4  text-white font-extrabold pt-20 text-center mb-4'>Multiple color variations</h1>
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

      <div className=' flex justify-center pb-64'>
         <Image className='flex lg:hidden pt-16' src={HeaderPic} alt="Header" />
        <video autoPlay  muted loop className='hidden lg:flex' >         
           <source src="/videos/allcolorsfinal.mp4" type="video/mp4"/>       
        </video>
        {/*add autoPlay prop to play */}

    </div>

    </div>
    
  )
}

export default AllColors