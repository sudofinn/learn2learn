import React from 'react'
import Image from "next/image"
import Link from "next/link"

import LifeLongLearnStatistic from "../../assets/american_lifelong_learners_statistic.png"

const SocialProof = () => {
  return (
    <div className='mt-32 mb-32'>

      <h1 className='text-7xl pt-16 pb-16 text-center font-bold w-2/3  mx-auto
      block  text-red-600 '>People invest a lot of time to learn new things.</h1>

      <Image src={LifeLongLearnStatistic} alt="Life long learn statistic"
      className='mx-auto w-1/2' />


      <h1 className='text-7xl pt-16 pb-16 text-center font-bold  w-2/3  mx-auto
      block  text-white '>But few take the time to learn how to learn.</h1>


      <h1 className='text-6xl pt-16 pb-8 text-center font-bold  w-2/3  mx-auto
      block  text-red-600 '>Because few know that this is important.</h1>
      <h1 className='text-6xl pt-8 pb-8 text-center font-bold  w-2/3  mx-auto
      block  text-red-600 '>But now you know.</h1>
      <h1 className='text-6xl pt-8 pb-8 text-center font-bold  w-2/3  mx-auto
      block  text-red-600 '>So take your chance now , spend 10 seconds to enter your mail and start
      receiving emails.</h1>

      <div className="flex justify-center">
  <Link href="#product" className="hover:text-black hover:bg-red-600   text-white text-4xl   border-red-600 border-4 p-8
  text-center   ">Join the Club !</Link>

</div>

    </div>
  )
}

export default SocialProof