import React from 'react'
import Image from "next/image"
import Primary from "../../assets/image 42.png"
import PrimaryGif from "../../assets/2023-01-29-17-33-28.gif"

const FeatureJobsSection = () => {
  return (
    <div className='text-center'>

        <h1   className="text-4xl xl:text-6xl  mt-32 xl:mt-64 inline-flex  px-14 py-6 mb-4 font-extrabold 
          bg-pk text-black hover:bg-gray-200 duration-500 rounded 
          mx-[10px] sm:mx-[100px] lg:mx-[200px] xl:mx-[300px] 2xl:mx-[500px]
          ">See what needs to get done - with one look </h1>
            <ul className="   text-xl xl:text-2xl mx-[10px] sm:mx-[100px] lg:mx-[200px] xl:mx-[300px] 2xl:mx-[700px] ">
                      <li className=" mb-6 text-center font-extrabold ">Never loose track of your work - instantly see your progress and deadlines.</li>

            </ul>

             <Image
            src={PrimaryGif}
            alt="The Header"
            className="mt-12 mx-auto mb-12 w-2/3 shadow-xl shadow-black "
          />
    </div>
  )
}

export default FeatureJobsSection