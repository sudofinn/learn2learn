import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary'
import ReactPlayer from 'react-player'
import Script from 'next/script'


const IntroVid = () => {
  return (
     <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=hJTwN6NKG-I'
          width='100%'
          height='100%'
          controls
        />
      </div> 
  )
}

export default IntroVid