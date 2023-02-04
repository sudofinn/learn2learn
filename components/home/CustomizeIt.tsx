import React from 'react'
import Image from 'next/image'
import PrimaryOtherVersion from "../../assets/freelance_os_customize_23.png"
import PrimaryNextVersion from "../../assets/freelance_os_customize_24.png"

import PrimaryMobileVersion from "../../assets/freelance_cusotmize_mobile_2.png"
const CustomizeIt = () => {
  return (
    <div id="Customize" className='font-extrabold text-center mt-64'>
         <h1
            className=" text-4xl sm:text-6xl xl:text-6xl 2xl:text-7xl
             mx-4 sm:mx-[75px] md:mx-[150px] lg:mx-[300px]  2xl:mx-[700px]
            mb-4 mt-8 sm:mt-12  "
          >
            Make it {" "}
            <span className="font-extrabold text-pk ">your</span>{" "}
            {" "}
            <span className="font-extrabold text-bl"> Freelance OS</span> 
          </h1>

             <Image
            src={PrimaryNextVersion}
            alt="The Header"
            className="hidden lg:block mt-12 mx-auto mb-12 w-5/6   "
          />
             <Image
            src={PrimaryMobileVersion}
            alt="The Header"
            className="block lg:hidden mt-12 mx-auto mb-12 w-full   "
          />
    </div>
  )
}

export default CustomizeIt