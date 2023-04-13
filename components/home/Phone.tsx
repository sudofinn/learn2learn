import React from 'react'
import Image from "next/image"
import IpadImg from "../../assets/phones_two.jpeg"
import PhoneImg from "../../assets/two_phoneresponsive.png"

const Phone = () => {
  return (
    <div className='bg-black text- text-white'>
        <h1 className='text-5xl lg:text-8xl pb-4  text-white font-extrabold pt-20 text-center'>Fully responsive</h1>

     <div className=' flex justify-center pb-32  lg:pb-64'>
        <Image src={IpadImg} alt="this"  className='w-full lg:w-1/2 hover:scale-110 duration-500 mt-12' />

    </div> 


    <h1 className='text-5xl lg:text-8xl pb-4  text-white font-extrabold pt-20 text-center'>Even on Mobile</h1>

     <div className=' flex justify-center pb-64'>
        <Image className='flex lg:hidden' src={PhoneImg} alt="this"   />
        <video autoPlay  muted loop  className='hidden lg:flex'>         
           <source src="/videos/three_mobile.mp4" type="video/mp4"/>       
        </video>
        {/*add autoPlay prop to play */}

    </div> 
    </div>
  )
}

export default Phone