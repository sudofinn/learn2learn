import React from 'react'

const Support = () => {
  return (
    <div className='bg-black text-white pt-64 pb-32'>
        <h1 className='text-5xl lg:text-7xl font-extrabold text-center pb-4 '>Questions after a purchase ?</h1>
        <p  className='text-2xl mx-auto w-2/3  lg:w-1/3 text-center '>No problem, we are always there to help you. Every question you have will 
        be answered by us.</p>

        <video autoPlay  muted loop className='w-full lg:w-5/6' >         
           <source src="/videos/support_vid.mp4" type="video/mp4" />       
        </video>


    </div>
  )
}

export default Support