import React from 'react'
import Image from "next/image"

import AgencyPic from "../../assets/agencyonly_final.png"


const AgencyOnly = () => {
  return (
    <div className='bg-black text-white pt-64 pb-32'>
        <h1 className='text-5xl lg:text-8xl font-extrabold text-center pb- pb-8 '>Got a <span className='bg-white text-black'>business</span> ?</h1>
        <p  className='text-2xl mx-auto w-2/3  lg:w-1/3 text-center  '>Then go for the Business version with added features 
        for multiple people.</p>

        <Image className="w-2/3 mx-auto " src={AgencyPic} alt="Mockup of ipad"/>


    </div>
  )
}

export default AgencyOnly