
import React from 'react'
import Image from 'next/image'
import Primary from "../../assets/image_18.png"
import PrimaryVideo from "../../assets/2023-02-01-19-23-38.gif"

const CustomizeIt = () => {
  return (
    <div id="Automate" className='font-extrabold text-center mt-64'>
         <h1
            className=" text-4xl sm:text-6xl xl:text-6xl 2xl:text-7xl
             mx-4 sm:mx-[75px] md:mx-[50px] lg:mx-[300px]  2xl:mx-[650px]
            mb-4 mt-8 sm:mt-12  "
          >
              {" "}
            <span className="font-extrabold text-pk ">Automate</span>{" "}
            {" "} the 
            <span className="font-extrabold text-bl"> boring</span>  stuff
          </h1> 

          <p className='text-xl lg:text-2xl  font-semibold mx-2 sm:mx-[75px] md:mx-[150px] lg:mx-[300px]  2xl:mx-[650px] '
          >Focus on what is truly important and let the Freelance OS do the rest. Achieve more in less time 
            and finish work early. </p>

             <Image
            src={PrimaryVideo}
            alt="The Header"
            className="mt-12 mx-auto mb-12 w-5/6 lg:w-1/3 border-8 border-black rounded-xl 
            hover:scale-[1.03] duration-500  "
          />
    </div>
  )
}

export default CustomizeIt