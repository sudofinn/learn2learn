import React from 'react'
import Image from 'next/image'
import Primary from "../../assets/freelance_os_customize_1.png"
import PrimaryOtherVersion from "../../assets/freelance_os_customize_23.png"

const CustomizeIt = () => {
  return (
    <div className='font-extrabold text-center mt-64'>
         <h1
            className=" text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl
             mx-[4] sm:mx-[75px] md:mx-[150px] lg:mx-[300px]  2xl:mx-[700px]
            mb-4 mt-8 sm:mt-12  "
          >
            Make it {" "}
            <span className="font-extrabold text-pk ">your</span>{" "}
            {" "}
            <span className="font-extrabold text-bl"> Freelance OS</span> 
          </h1>

             <Image
            src={PrimaryOtherVersion}
            alt="The Header"
            className="mt-12 mx-auto mb-12 w-5/6  "
          />
    </div>
  )
}

export default CustomizeIt