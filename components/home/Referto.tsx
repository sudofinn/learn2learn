import React from 'react'
import Image from 'next/image'
import Link from "next/link"
//import ReferToPic from "../../assets/referto_img.jpeg"
import ReferToPic from "../../assets/salefriend_freelanceos_mockup_blackwhite_cropped.jpeg"

const ReferTo = () => {
  return (
    <div>
           <section className="relative py-32 text-white bg-black  overflow-hidden">
  <div className="container px-4 ">
    <div className="flex flex-wrap items-center ">
        <div className="w-full lg:w-2/3 ">
       
        <Image src={ReferToPic} alt="this"  className='  mt-12  ' />
      </div>
      <div className="w-full lg:w-1/3  ">
        <h2 className=" text-4xl md:text-5xl font-extrabold "> <span className='text-black bg-white'>Love it ?</span> Tell your friends about it 
        and get a free template for every sale you refer to.</h2>

        <Link href="/referto">
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
              <span className="relative">Learn more !</span>
            </button>
            </Link>
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default ReferTo