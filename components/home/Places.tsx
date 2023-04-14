import React from 'react'
import Image from 'next/image'
import IpadSingle from "../../assets/ipadsingle_final.png"

import LazyLoad from 'react-lazy-load';

const Places = () => {
  return (
    <div>
         <div className=' flex justify-center pb-64 bg-black
       xl:hidden'>
        <Image src={IpadSingle} alt="Single ipad" className='' />
        {/*add autoPlay prop to play */}
    </div> 
      <div className='  justify-center pb-64 bg-black
      hidden xl:flex'>
        <LazyLoad>
        <video autoPlay  muted loop className='w-full lg:w-5/6' >         
           <source src="/videos/workonfly.mp4" type="video/mp4" />       
        </video>
        {/*add autoPlay prop to play */}
        </LazyLoad>
    </div> 
     
    

      <div className=' flex justify-center pb-64 bg-black
       lg:hidden'>
        <video autoPlay  muted loop playsInline className='w-full lg:w-5/6' >         
           <source src="/videos/workondesktop_cropped.mp4" type="video/mp4" />       
        </video>
        {/*add autoPlay prop to play */}
    </div> 
      <div className='  justify-center pb-64 bg-black
      hidden lg:flex'>
        <LazyLoad>
        <video autoPlay  muted loop className='w-full lg:w-5/6' >         
           <source src="/videos/workondesktop.mp4" type="video/mp4" />       
        </video>
        {/*add autoPlay prop to play */}
        </LazyLoad>
    </div> 

    </div>
  )
}

export default Places