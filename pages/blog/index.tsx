import React from 'react'
import Head from "next/head";


import Footer from '@/components/home/Footer'

const index = () => {
  return (
    <div className='bg-black text-white pt-16'>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog of  the  Freelance OS" />
      </Head>
        <h1 className='text-5xl lg:text-7xl font-extrabold text-center pb-4 '>We are working on it</h1>
        <p  className='text-2xl mx-auto w-2/3  lg:w-1/3 text-center '>Give us a moment, our blog will be up in no time 
         While we are building it, feel free to have  a look around on this page.</p>

        <video autoPlay  muted loop className='w-full lg:w-5/6' >         
           <source src="/videos/support_vid.mp4" type="video/mp4" />       
        </video>
        
        <Footer />


    </div>
  )
}

export default index