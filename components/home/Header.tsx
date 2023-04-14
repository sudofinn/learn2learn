import React from 'react'
import Link from "next/link"
import Router from "next/router"
import Image from "next/image"






import HeaderPic from "../../assets/header_pic.png"
import HeaderPicMtoL from "../../assets/header_mtol_pic.png"

const Footer = () => {
	
  return (
    <div className="bg-black"  >
      <h1 className='text-5xl pt-16 pb-16 text-center font-extrabold 
      block md:hidden text-white'>Plan.Work.Earn.</h1>
       <div className=' flex justify-center pb-64'>
        
        <Image className='flex md:hidden' src={HeaderPic} alt="Header" />
        <Image className='hidden md:flex ' src={HeaderPicMtoL} alt="Header" />

        

    </div> 
    </div>



  )
}

export default Footer


{/* 
return (
    <div className="bg-black"  >
      <h1 className='text-5xl pt-16 pb-16 text-center font-extrabold 
      block md:hidden text-white'>Plan.Work.Earn.</h1>
       <div className=' flex justify-center pb-64'>
        
        <Image className='flex md:hidden' src={HeaderPic} alt="Header" />
        <Image className='hidden md:flex lg:hidden' src={HeaderPicMtoL} alt="Header" />

        <video autoPlay  muted loop playsInline className='hidden lg:flex'>         
           <source src="/videos/header_vid.mp4" type="video/mp4"/>       
        </video>

    </div> 
    </div>



  )*/}
