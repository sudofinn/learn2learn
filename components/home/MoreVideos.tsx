import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary'
import ReactPlayer from 'react-player'
import Script from 'next/script'


const MoreVideos = () => {
  return (
    <div>
       
        <div className='player-wrapper  '>
            <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=og87UsvmNaA'
            width='100%'
            height='100%'
            controls
            />
        </div> 
    </div>
  )
}

export default MoreVideos