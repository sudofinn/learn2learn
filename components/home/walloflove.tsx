import React from 'react'
import Image from "next/image"
import Link from 'next/link'


import Support from "../../assets/walloflove_finnguha.jpg"

import WritingPic from "../../assets/writingpic.jpg"

import AnkiOne from "../../assets/ankistreak1.png"
import AnkiTwo from "../../assets/longeststreak1.png"
import StudyProof from "../../assets/flashcardsstudyevidence.png"
import CodingNotesWebsite from "../../assets/codingnotes_website_screenshot.png"
import PaliBestWebsite from "../../assets/palibest_screenshot.png"

import ArrowThick from "../../assets/arrow_thick.png"


import {FaMousePointer} from "react-icons/fa"

const Walloflove = () => {
  return (
    <div className='flex justify-center items-center mx-auto w-2/3  flex-col'>

<div>
      <Image src={ArrowThick} alt="Arrow Thick"  className="mx-auto mb-16"/>
      <h1 className='text-5xl pt-16  text-center 
      block  text-red-600 '>But who am I to tell you how to learn ?</h1>

      <h1 className='text-5xl pt-16 mb- text-center 
      block  text-white '>I have been trying to learn more about the &quot;Art of Learning&quot;
      for more than 5 years. 
      </h1>
       <h1 className='text-5xl pt-16 text-center 
      block  text-white '>Reading dozens of studies on how to become a more efficient leaner. 
      </h1>
       <h1 className='text-5xl pt-16 mb-64  text-center 
      block  text-white '>  And I will share this wisdom with you for free. But let&apos;s have a look a bit more into 
      what makes me qualified.
      </h1>

      </div>
       
    





      <h1 className='text-5xl pt-16 pb-16 text-center 
      block  text-red-600 '> I have been learning with the  popular Note-taking app 
       <Link href="https://apps.ankiweb.net/" className='underline text-white'>Anki</Link> for almost 2 consecutive 
      years without taking a day off. </h1>
      
      <Image src={AnkiOne} alt="Image One"  className="mb-8"/>
      <Image src={AnkiTwo} alt="Image One" className="w-1/3 mb-16" />


      <h1 className='text-5xl pb-8 mt-32 text-center 
      block  text-white  '> I have been reading various studies and include the key elements into 
      these newsletter. I know what works and what doesn&apos;t. </h1>
      
      <Image src={StudyProof} alt="Image One"  className="mb-8"/>


      <h1 className='text-5xl pb-8 mt-32 text-center 
      block  text-white  '> If you are into programming, you might have heard about my 
      business  <Link href="https://codingnotes.io" className='underline text-yellow-600 hover:no-underline ' target='_blank'>CodingNotes.io</Link> which teaches you web development effectively. I put all of my knowledges
      into this project and grew it to 1,000 customers. </h1>
      
      <Image src={CodingNotesWebsite} alt="Image One"  className="mb-8"/>


      <h1 className='text-5xl pb-8 mt-32 text-center 
      block  text-white  '> All of this leads to <Link href="https://pali.best" className='underline text-red-600 hover:no-underline ' target='_blank'>pali.best</Link>, the next level learning app 
      I&apos;m building atm. </h1>
      
      <Image src={PaliBestWebsite} alt="Image One"  className="mb-8"/>
      

    </div>
  )
}

export default Walloflove