import React from 'react'
import Image from "next/image"
import MockupPhone from "../../assets/whatankioffers_ankiguide_screenshot.png"
import MockupIpadMini from "../../assets/specialtrricks_ankiguide_screenshot.png"
import MockupImac from "../../assets/howankitransformedmylearning.webp"

import AnkiTransform from "../../assets/howankitransformedthis.png"


import ArrowThick from "../../assets/arrow_curved_thick.png"
import ArrowToLeftThick from "../../assets/arrow_curvedtoleft_thick.png"

import LazyLoad from 'react-lazy-load';


const Features = () => {
  return (

    <div>
    

    <div className="flex  justify-between mt-32 ">
      
        <Image className=" w-1/2" src={MockupPhone } alt="Mockup of iphone"/> 
      <div className='ml-8'>
        <h2 className=" text-5xl lg:text-6xl text-white  "> Get one weekly lesson teaching you one specific things about learning effectively.</h2>
      <Image src={ArrowToLeftThick} alt="Arrow Thick"  className="mt-16 w-2/3"/>
      </div>
      
      
    </div>


    <div className="flex  justify-between mt-32 ">
      <div className='ml-8'>
        <h2 className=" text-5xl lg:text-6xl text-white  "> Understand every concept with beautiful graphics and videos.</h2>
      <Image src={ArrowThick} alt="Arrow Thick"  className="mt-16 w-2/3"/>
      </div>
      
        <Image className=" w-1/2" src={MockupIpadMini } alt="Mockup of iphone"/> 
      
    </div>



     <div className="flex  justify-between mt-32 ">
      
        <Image className=" w-1/2" src={AnkiTransform} alt="Mockup of iphone"/> 
      <div className='ml-8'>
        <h2 className=" text-5xl lg:text-6xl text-white  "> 
        Get access to a dedicated study community with striving individuals who want to be better just like you and where you will find the support you need
        </h2>
      <Image src={ArrowToLeftThick} alt="Arrow Thick"  className="mt-16 w-2/3"/>
      </div>
      
      
    </div>



  

    </div>
  )
}

export default Features