import React from 'react'
import Image from "next/image"
import ArrowThick from "../../assets/arrow_thick.png"

import L2LCTAPic from "../../assets/learn2learnnewslettertext.png"


const CTA = () => {
  return (
    <div className='mb-64'>
      <h1 className='text-7xl pt-16 pb-16 text-center font-bold mt-32
      block  text-red-600 '>Ok, let&apos;s break it down once more.</h1>

      <h1 className='text-5xl pt-16 pb-16 text-center font-bold underline 
      block  text-white '>This is what you will receive !</h1>

      <ul className=' text-white   w-full lg:w-1/2 flex justify-center mx-auto flex-col'>
        <li className='text-5xl pt-8 pb-8 text-center font-bold 
         text-white  '> ➔ One article per week</li>

        <li className='text-5xl pt-16 pb-16 text-center font-bold 
        block  text-white '> ➔ Concize knowledge, easy to understand, many examples, images and videos.</li>


        <li className='text-5xl pt-16 pb-16 text-center font-bold 
        block  text-white '> ➔ Exclusive guides on how to learn</li>
        
        <li className='text-5xl pt-16 pb-16 text-center font-bold 
        block  text-white '> ➔ Dedicated study community with likeminded individuals</li>
      </ul>


      <Image src={ArrowThick} alt="Arrow Thick"  className="mx-auto mb-16"/>

      <Image src={L2LCTAPic } alt="cta "  className="mx-auto mb-16"/>

    </div>
  )
}

export default CTA