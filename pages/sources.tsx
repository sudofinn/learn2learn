import React from 'react'
import Link from "next/link"

import Footer from '@/components/home/Footer'

const Sources = () => {
  return (
    <div>

    
    <div className='bg-black min-h-screen  text-white'>
        <Link href="https://www.pewresearch.org/internet/2016/03/22/lifelong-learning-and-technology/" target='_blank'
         className='text-4xl pt-16 pb-16 text-center font-bold underline
      block  text-red-600 '>Americans learning activities</Link>


        <Link href="https://www.researchgate.net/publication/251573566_The_Use_of_Flashcards_in_an_Introduction_to_Psychology_Class" target='_blank'
         className='text-4xl pt-16 pb-16 text-center font-bold underline
      block  text-red-600 '>Flashcard study </Link>


        <Link href="https://www.pewresearch.org/internet/2016/03/22/lifelong-learning-and-technology/" target='_blank'
         className='text-6xl pt-16 pb-16 text-center font-bold underline
      block  text-white '>More will links will be added ...whenever there&apos;s something new to prove.</Link>
    </div>

      <Footer />
        
    </div>
  )
}

export default Sources