import React from 'react'
import Link from "next/link"

import Image from "next/image"
import Primary from "../../assets/codingnotes_thumbnail.png"

const AboutMe = () => {
  return (

    <div className='flex items-center justify-center mt-64 mb-64 mx-4  '>
        <div className='w-full max-w-xl py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl shadow-black font-bold'>
            <div className="flex flex-col md:flex-row  md:w-full space-x-0 md:space-x-16">
                <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
                    <figure className="w-1/2 md:w-full  rounded-full ml-0 lg:ml-8  overflow-hidden">
                        <Image className='' src={Primary} alt="woman wearing a headwrap and an Africa-shaped earring while smiling"/>
                    </figure>
                </div>
                <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center  px-4  ">
                    <div className="flex flex-col justify-center font-bold">
                        <h1 className="text-center md:text-left  font-bold text-gray-900 text-4xl mt-4 mb-4">Hi, I am  Finn,</h1>
                        <p className="inline text-gray-700 text-2xl font-normal leading-6 w-full mb-8 ">the creator of the Freelance OS.</p>
                        <p className="inline text-gray-700 text-2xl font-normal leading-6 w-full mb-4 ">I also founded <Link href="https://www.codingnotes.io/" target="_blank" 
                        className='underline hover:bg-pk'>CodingNotes </Link> which uses Notion to teach Programming.</p>
                    </div>
                    

                    <Link href="https://twitter.com/coding_notes" target="_blank">
                    <button className="transition-colors bg-pk hover:bg-[#e2537e] hover:text-black p-2 rounded-sm w-full text-white text-hover shadow-md shadow-black ">
                        Follow me on Twitter for more content !
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>

)
}

export default AboutMe