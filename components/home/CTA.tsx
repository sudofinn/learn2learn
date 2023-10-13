import React from 'react'
import {Link } from "react-scroll"
import Image from "next/image"
import ArrowThick from "../../assets/arrow_thick.png"

import L2LCTAPic from "../../assets/learn2learnnewslettertext.png"


import { Fade , Bounce , Zoom , Roll ,  } from "react-awesome-reveal";


const CTA = () => {
  return (
    <div id="How" className='mb-64'>
      <Zoom>
      <h1 className='text-7xl pt-16 pb-16 text-center font-bold mt-32
      block  text-red-600 '>Ok, let&apos;s break it down once more.</h1>

      <h1 className='text-5xl pt-16 pb-16 text-center font-bold underline 
      block  text-white '>This is what you&apos;ll receive !</h1>

      <ul className=' text-white   w-full lg:w-1/2 flex justify-center mx-auto flex-col'>
        <li className='text-5xl pt-8 pb-8 text-center font-bold 
         text-white  '> ➔ One article per week</li>

        <li className='text-5xl pt-16 pb-16 text-center font-bold 
        block  text-white '> ➔ Concise knowledge, easy to understand, many examples, images and videos</li>


        <li className='text-5xl pt-16 pb-16 text-center font-bold 
        block  text-white '> ➔ Exclusive guides on how to learn</li>
        
        <li className='text-5xl pt-16 pb-16 text-center font-bold 
        block  text-white '> ➔ Dedicated study community with likeminded individuals</li>
      </ul>
      <div className="flex justify-center">
     <Link to="SignUp" smooth duration={2000} className="hover:text-black hover:bg-red-600   text-white text-4xl   border-red-600 border-4 p-8
      text-center cursor-pointer mb-32 w-full lg:w-1/3 ">Get access to the newsletter and the study community !</Link>
     </div>


      <Image src={ArrowThick} alt="Arrow Thick"  className="mx-auto mb-16"/>

      <Image src={L2LCTAPic } alt="cta "  className="mx-auto mb-16"/>
      </Zoom>

    </div>
  )
}

export default CTA