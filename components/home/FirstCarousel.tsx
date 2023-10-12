import React,{useState} from 'react'
//import ModalVideo from 'react-modal-video'


import Image from 'next/image'
import Link from "next/link"
import Head from "next/head"
import Router from "next/router"


//import {  Zoom    } from "react-awesome-reveal";



import LaptopMockup from "../../assets/covers/htmlcss_mockup_final.png"


import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css'


import NavBar from '../../components/home/NavBar'
import Footer from '../../components/home/Footer'

import First from "../../assets/htmlcss1_final.png"
import Second from "../../assets/htmlcss2.png"
import Third from "../../assets/htmlcss3.png"
import Forth from "../../assets//htmlcss4.png"





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
 
];


  


 const [isOpen, setOpen] = useState(false)


  return (

    <div className='w-full min-h-screen     p-4  '>
      

    


     <div className='text-center '>

             


    </div>
    {/*
     <div className="slide-container  mt-32 mx-0 lg:mx-32 mb-64  ">
        <Slide transitionDuration={500} >
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide  " key={index}>
               <Image className="  rounded-xl mx-auto  mt-10 md:mt-8 shadow-xl shadow-black" src={slideImage.src} alt="The Header" width={1200} height={200} >

               </Image>
            </div>
          ))} 
        </Slide>

      </div>
         */}

      <h1 className='text-4xl pt-16 mt-16 pb-16 w-1/2 text-center mx-auto font-bold italic border-8  p-4
      block   text-white '>Because knowing how to study effectively makes you faster, sharper and more willing to learn.</h1>






      </div>

      
    

  )
}

export default FirstCarousel