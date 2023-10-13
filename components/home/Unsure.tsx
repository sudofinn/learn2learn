import React from 'react'
import Image from 'next/image'
import UnsurePic from "../../assets/unsure_mockup.jpeg"

//use getform api endpoint here

const Unsure = () => {
  return (
    <div id="SignUp">
           <section className="relative py-32 text-white bg-black  overflow-hidden">
  <div className="container px-4 ">
    <div className="flex flex-wrap items-center ">
        <div className="w-full lg:w-2/3  ">
        <Image className=" " src={UnsurePic } alt="Mockup of iphone"/>
      </div>
      <div className="w-full lg:w-1/3  ">
        <h2 className=" text-4xl md:text-7xl font-extrabold text-red-600 "> <span className='underline decoration-red-600 text-white'>Learn the secrets</span> to becoming
        a top 1% learner.</h2>

        <form
        action={process.env.NEXT_PUBLIC_KEY}
            method="POST">
            <input type="email" name="nametwo" className='border-white mt-8  px-2 py-3  border-4 bg-black text-3xl text-white rounded-md' placeholder='example@gmail.com'></input>
            <input type="name" name="namethree" className='border-white mt-4 mb-4 px-2 py-3  border-4 bg-black text-3xl text-white rounded-md' placeholder='Your Name (optional)'></input>
          
         <button className="relative mt-4  items-center px-12 py-3 overflow-hidden text-3xl  text-white hover:bg-white hover:text-black border-white  border-4 rounded-md  group ">
              <span className="absolute left-0 block w-full h-0 transition-all  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">Sign me up !</span>
            </button>
            </form>
          
            
            
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Unsure