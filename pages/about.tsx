
import React from 'react'
import Image from 'next/image'
import Head from "next/head";

import Footer from '@/components/home/Footer';

import ReferToPic from "../assets/salefriend_freelanceos_mockup_blackwhite_cropped.jpeg"
import UnsurePic from "../assets/unsure_mockup.jpeg"


const about = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
         <Head>
        <title>About</title>
        <meta name="description" content="About the  Freelance OS" />
      </Head>
           <section className="relative py-32 text-white bg-black   overflow-hidden">
  <div className="container px-4 ">
    <div className="flex flex-wrap items-center ">
        <div className="w-full lg:w-2/3 ">
       
        <Image src={ReferToPic} alt="this"  className='  mt-12  ' />
      </div>
      <div className="w-full lg:w-1/3  ">
        <h2 className=" text-4xl md:text-6xl font-extrabold pb-4 "> <span className='text-black bg-white'>About </span>the Freelance OS </h2>
        <p className='text-xl font-bold'>The Notion Freelance OS in an all-in-one workspace designed to faciliate the life of a freelancer by providing the right tools to stay efficient.</p>

         
      </div>
      
    </div>
  </div>
</section>

<section  className="relative py-32 text-white bg-black  overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center ">
      <div className="w-full lg:w-1/3 p-8">
        <h2 className=" text-4xl md:text-5xl font-extrabold pb-4 "> The <span className='text-black bg-white'>Why</span> and the  <span className='text-black bg-white'>how</span>
        </h2>
        <p className='text-xl font-bold'>I had the idea for building an Operating System for freelancers several months ago. I just didn&apos;t feel 
        like the available tools were great and there was no all-in-one system. Instead, one had to use multiple products which can&apos;t be easily connected with each other.
        What a mess ! To go against this, I worked closely together with several freelancers who described their perfect system. Then I built exactly that. The Freelance OS 
        was born.</p>

         
      </div>
      <div className="w-full lg:w-2/3  ">
       <Image className=" " src={UnsurePic } alt="Mockup of iphone"/> 
      </div>
    </div>
  </div>
</section>

<Footer />

    </div>
  )
}

export default about