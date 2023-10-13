import React from 'react'


import { Fade , Bounce , Zoom , Roll ,  } from "react-awesome-reveal";
import { FaDesktop } from 'react-icons/fa';

const Explain = () => {
  return (
    <div id="Why" className="bg-black text-red-600 text-center w-full lg:w-2/3 mx-auto mb-64">
      <Zoom>
        <h1 className="text-5xl  mb-16  ">The Learn2Learn newsletter show you how to   <span className=" underline decoration-red-600 text-white ">learn effectively.</span></h1>

        <h1 className="text-5xl mb-16  ">Because most likely you have been learning   <span className=" underline decoration-red-600 text-white ">slow your whole life</span>.</h1>

        <h1 className="text-5xl   mb-16 ">But you can    <span className=" underline decoration-red-600 text-white ">change</span>that.</h1>

        <h1 className="text-5xl mb-16  ">How would one concize, weekly lesson , delivered to your inbox sound like ?  Probably  <span className=" underline decoration-red-600 text-white ">very good</span></h1>
        </Zoom>

    </div>
  )
}

export default Explain