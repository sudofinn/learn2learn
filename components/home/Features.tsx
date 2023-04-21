import React from 'react'
import Image from "next/image"
import MockupPhone from "../../assets/planfreelanceos_features1.png"
import MockupIpadMini from "../../assets/workfreelanceos_feature2.png"
import MockupImac from "../../assets/earnfreelanceos_features3.png"

import LazyLoad from 'react-lazy-load';


const Features = () => {
  return (

    <div>
        <section className="relative py-32  lg:py-32 text-white bg-black  overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center ">
      <div className="w-full md:w-1/2 lg:w-1/3 p-8">
        <h2 className=" text-5xl lg:text-7xl font-extrabold "> <span className='text-black bg-white'>Plan</span> your day in advance. Simply and elegantly.</h2>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3  ">
        <Image className=" " src={MockupPhone} alt="Mockup of iphone"/>
      </div>
    </div>
  </div>
</section>


     <section className="relative py-32 text-white bg-black  overflow-hidden">
  <div className="container px-4 ">
    <div className="flex flex-wrap items-center ">
        <div className="w-full md:w-1/2 lg:w-2/3 ">
        <Image className=" " src={MockupIpadMini } alt="Mockup of iphone"/>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3  ">
        <h2 className=" text-5xl lg:text-7xl font-extrabold "> <span className='text-black bg-white'>Work </span> efficiently. Keep track of everything and finish early.</h2>
      </div>
      
    </div>
  </div>
</section>



        <section className="relative py-32 text-white bg-black  overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center ">
      <div className="w-full md:w-1/2 lg:w-1/3 p-8">
        <h2 className=" text-5xl lg:text-7xl font-extrabold "> <span className='text-black bg-white'>Earn</span> a lot by being organized.</h2>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3  ">
        <Image className=" " src={MockupImac} alt="Mockup of iphone"/>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Features