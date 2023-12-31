import React from "react";
import Router from "next/router";
import Image from "next/image"
import Primary from "../../assets/freelance_os_discount.png"
import PrimaryOtherVersion from "../../assets/freelance_os_discount_2.png"

export const Pricing = () => {

  function forIndividuals() {
    Router.push("https://vimfinn.gumroad.com/l/freelanceos?wanted=true")
  }

  function forBusinesses() {
     Router.push("https://vimfinn.gumroad.com/l/freelanceos?option=Xu0nFqOG14SM_TjJs7IEgg%3D%3D&_gl=1*1p99o53*_ga*NjU1NjY0OTk2LjE2NDgwNjQ1Nzc.*_ga_6LJN6D94N6*MTY3NTUxNTg1MC4zNzkuMS4xNjc1NTE2NDM0LjAuMC4w&wanted=true")
  }


  return (
    <div id="Pricing" className="relative w-full h-full bg-black text-white ">
      <div className="absolute hidden w-full   lg:block h-96" />
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans mt-32 text-5xl lg:text-5xl font-extrabold leading-none tracking-tight text-gray-900  md:mx-auto">
            <span className="relative inline-block  ">
              <svg
                viewBox="0 0 52 24"
                fill="#fff"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                  width="52"
                  height="24"
                />
              </svg>
              <div>

              </div>
              <span className="relative text-white text-7xl   ">Pay once, use forever </span>
            </span >{" "}
            
          </h2>
        </div>
        <div className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto mt-20">
          <div className="  duration-500 ">
            <div className="p-8 bg-white rounded ">
              <div className="mb-4 text-center">
                <p className="text-2xl font-medium tracking-wide text-black">
                  Individual
                </p>
                <div className="flex items-center justify-center">
                  <p className="mr-2 text-5xl font-semibold text-black lg:text-6xl">
                    $39 
                  </p>
                  <p className="mr-2 text-3xl font-semibold text-black lg:text-4xl line-through">
                    $59 
                  </p>
                </div>
              </div>
              <ul className="mb-8 space-y-2 text-2xl">
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#000"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">
                    Complete Freelance OS
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#000"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black"> Lifetime access to updates</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-black"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#000"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">For individuals </p>
                </li>
                
              </ul>
              <button
                type="submit" onClick={forIndividuals}
                className="inline-flex bg-black text-white text-2xl
                
                items-center justify-center w-full h-12 px-6 font-medium tracking-wide   rounded shadow-md bg-deep-purple-accent-400 "
              >
                I want this !
              </button>
            </div >
            <div className="w-11/12 h-2 mx-auto bg-white rounded-b opacity-75" />
            <div className="w-10/12 h-2 mx-auto bg-white rounded-b opacity-50" />
            <div className="w-9/12 h-2 mx-auto bg-white rounded-b opacity-25" />
          </div>
          <div className="scale-95 duration-500 ">
            <div className="p-8 bg-white rounded">
              <div className="mb-4 text-center">
                <p className="text-xl font-medium tracking-wide text-black">
                  Agency
                </p>
                <div className="flex items-center justify-center">
                  <p className="mr-2 text-5xl font-semibold text-black lg:text-6xl">
                    $255
                  </p>
                  <p className="mr-2 text-3xl font-semibold text-black lg:text-4xl line-through">
                    $389
                  </p>
                </div>
              </div>
              <ul className="mb-8 space-y-2 text-xl">
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#000"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">
                    Complete Freelance OS
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#000"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">Lifetime access to updates</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-black"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#000"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-black">For Agencies ( 5+ seats) </p>
                </li>
               
              </ul>
              <button
                type="submit" onClick={forBusinesses}
                className="inline-flex items-center bg-black text-white text-xl
                  
                justify-center w-full h-12 px-6 font-semibold tracking-wide   rounded shadow-md "
              >
                We want this !
              </button>
            </div>
            <div className="w-11/12 h-2 mx-auto bg-white rounded-b opacity-75" />
            <div className="w-10/12 h-2 mx-auto bg-white rounded-b opacity-50" />
            <div className="w-9/12 h-2 mx-auto bg-white rounded-b opacity-25" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Pricing;