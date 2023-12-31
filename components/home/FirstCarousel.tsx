import React,{useState} from 'react'
//import ModalVideo from 'react-modal-video'


import Image from 'next/image'
import Link from "next/link"
import Head from "next/head"
import Router from "next/router"


//import {  Zoom    } from "react-awesome-reveal";



import LaptopMockup from "../../assets/covers/htmlcss_mockup_final.png"


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


import NavBar from '../../components/home/NavBar'
import Footer from '../../components/home/Footer'

import First from "../../assets/learn2learn_banner_1.png"
import Second from "../../assets/learn2learn_banner_2.png"
import Third from "../../assets/learn2learn_banner_3.png"
import Forth from "../../assets/learn2learn_banner_4.png"
import Fifth from "../../assets/learn2learn_banner_5.png"


import { Fade , Bounce , Zoom , Roll ,  } from "react-awesome-reveal";





const FirstCarousel = () => {

  const slideImages = [
  {
    src: First,
    caption: 'Slide 1'
  },
  {
    src: Second,
    caption: 'Slide 2'
  },
  {
    src: Third,
    caption: 'Slide 3'
  },
  {
    src: Forth,
    caption: 'Slide 4'
  },
  {
    src: Fifth,
    caption: 'Slide 5'
  },
 
];


  


 const [isOpen, setOpen] = useState(false)


  return (

    <div className='w-full min-h-screen     p-4  '>
      

    <Zoom>


     <div className='text-center '>

             


    </div>
    
     <div className="slide-container  mt-32 mx-0 lg:mx-32 mb-32 lg:mb-64  ">
        <Slide transitionDuration={500} >
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide  " key={index}>
               <Image className="  rounded-xl mx-auto  mt-10 md:mt-8 shadow-xl shadow-black" src={slideImage.src} alt="The Header" width={1200} height={200} >

               </Image>
            </div>
          ))} 
        </Slide>

      </div>
         

      <h1 className='text-4xl pt-16 mt-0 mb-32 lg:mt-16 pb-16 w-ful  lg:w-1/2 text-center mx-auto font-bold italic border-8  p-4
      block   text-white '>Because knowing how to study effectively makes you faster, sharper and more willing to learn.</h1>




</Zoom>

      </div>

      
    

  )
}

export default FirstCarousel