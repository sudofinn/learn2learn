import React from 'react'
import Link from "next/link"
import Router from "next/router"
import Image from "next/image"






import HeaderPic from "../../assets/header_pic.png"
//import HeaderPicMtoL from "../../assets/header_mtol_pic.png"
import HeaderFinalPicMtoL from "../../assets/header_final.png"

import AnkiHeaderPic from "../../assets/learn2learn_primary_pic.png"

const Header = () => {
	
  return (
    <div className=""  >
      <h1 className='text-8xl pt-16 pb-16 text-center font-bold 
      block  text-red-600 '>Learning right must be learnt</h1>

      <Image src={AnkiHeaderPic} alt="Anki Header Pic" className='flex justify-center items-center mx-auto mb-16' />

{/*
        <video autoPlay  muted loop className='hidden  lg:flex mx-auto w-5/6 shadow-xl shadow-white rounded-xl' >         
           <source src="/videos/section1_final_freelanceos.mp4" type="video/mp4" />       
        </video>
  */}
<div className="flex justify-center">
  <Link href="#product" className="hover:text-black hover:bg-red-600   text-white text-4xl   border-red-600 border-4 p-8
  text-center   ">Join the Club !</Link>

</div>




       <div className=' flex justify-center '>
        
       {/*
        <video autoPlay  muted loop className='hidden  lg:flex mx-auto w-5/6  shadow-xl shadow-white rounded-xl' >         
           <source src="/videos/finnguha_intro_vid_final_1.mp4" type="video/mp4" />       
        </video>
  */}

        

    </div> 
    </div>



  )
}

export default Header



