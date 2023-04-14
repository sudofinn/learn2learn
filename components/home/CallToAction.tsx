import React from 'react'
import Image from 'next/image'
import CTAPicture from "../../assets/calltoaction_mobile.jpeg"

const CallToAction = () => {
  return (
        <div className='bg-black'>
          <h1 className='text-white flex lg:hidden text-center text-4xl md:text-6xl w-5/6 mx-auto font-extrabold pb-8'>
            Get instant access and manage your Freelance business with ease</h1>
         <div className=' flex justify-center pb-64 bg-black'>
          
            <Image className='flex lg:hidden' src={CTAPicture} alt="Header" />
        <video autoPlay  muted loop className='w-5/6 hidden lg:flex' >         
           <source src="/videos/instant_access_cropped.mp4" type="video/mp4" />       
        </video>
        {/*add autoPlay prop to play */}

    </div> 
    </div>
  )
}

export default CallToAction