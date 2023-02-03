import React from 'react'
import Image from "next/image"
import Primary from "../../assets/image 52.png"
import PrimaryGif from "../../assets/FullSizeRender.gif"
const FeatureJobsSection = () => {
  return (
    <div className='text-center'>

        <h1   className="text-3xl xl:text-6xl  mt-32 xl:mt-96 inline-flex  px-14 py-6 mb-4 font-extrabold 
          bg-bl text-black hover:bg-gray-200 duration-500 rounded 
          mx-[10px] sm:mx-[100px] lg:mx-[200px] xl:mx-[300px] 2xl:mx-[500px]
          ">Organize everything - sorted and in one place </h1>
            <ul className="   text-2xl xl:text-2xl mx-[10px] sm:mx-[100px] lg:mx-[200px] xl:mx-[300px] 2xl:mx-[700px] ">
                      <li className=" mb-6 text-xl lg:text-2xl text-center font-semibold ">Never say &apos;I don`t know where to put this link&apos;. Instead, embrace having a central system to archive any information.</li>

            </ul>

             <Image
            src={PrimaryGif}
            alt="The Header"
            className="mt-12 mx-auto mb-12 w-5/6 lg:w-2/3 shadow-xl shadow-black "
          />
    </div>
  )
}

export default FeatureJobsSection