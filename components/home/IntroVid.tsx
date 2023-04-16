import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary'
import ReactPlayer from 'react-player'
import Script from 'next/script'


const IntroVid = () => {
  return (
    <div className='bg-black text-white flex justify-center pb-32'>

      <ReactPlayer width="1500px" height="800px"  url='https://www.youtube.com/watch?v=jy6KagCc-6w' />

      
     
    
    

      

    </div>
  )
}

export default IntroVid