import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary'
import ReactPlayer from 'react-player'
import Script from 'next/script'


const IntroVid = () => {
  return (
    <div className='bg-black text-white flex justify-center pt-64 pb-32'>

      <ReactPlayer width="1500px" height="800px" controls url='https://youtu.be/hJTwN6NKG-I' />

      
     
    
    

      

    </div>
  )
}

export default IntroVid