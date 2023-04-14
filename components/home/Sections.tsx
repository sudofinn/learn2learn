import React from 'react'

const Sections = () => {
  return (
      <div>
       <section className="bg-black text-white pt-64">
        <div className="container px-6 py-10 mx-auto">
        <h1 className="text-7xl font-extrabold   ">Be faster with the   <span className="underline ">right tools</span></h1>
        
        {/*
        <p className="mt-4 text-black xl:mt-6 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
  */}
        
        <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-8 border-white rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold   ">01 Inbox</h1>

                <p className="text-white text-xl font-bold ">
                    Quickly scan the most important things of the day.
                </p>

            </div>

            <div className="p-8 space-y-3 border-8 border-white rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold ">02 Clients</h1>

                <p className=" text-xl font-bold">
                    Work in an organized manner with your clients. See the work , your progress and the deadline to deliver efficiently and on time. 
                </p>

            </div>

            <div className="p-8 space-y-3  border-white border-8 rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold ">03 Portal</h1>

                <p className=" text-xl font-bold">
                    A place you can share with your client to manage deadlines and invoices seamlessly.
                </p>

             </div>
            </div>
         </div>
           <div className='  justify-center pb-64 bg-black '>
        <video autoPlay  muted loop className='hidden  lg:flex mx-auto w-5/6 shadow-xl shadow-white rounded-xl' >         
           <source src="/videos/section1_final_freelanceos.mp4" type="video/mp4" />       
        </video>
        {/*add autoPlay prop to play */}

        <video autoPlay  muted loop className='flex playsInline mx-auto lg:hidden w-5/6 shadow-xl shadow-white rounded-xl' >         
           <source src="/videos/section_lightmono.mp4" type="video/mp4" />       
        </video>
        {/*add autoPlay prop to play */}

    </div>
       </section>






{/* second section*/}




        <section className="bg-black text-white ">
        <div className="container px-6 py-10 mx-auto">
        
        {/*
        <p className="mt-4 text-black xl:mt-6 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
  */}
        
        <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-8 border-white rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold   ">04 Brand</h1>

                <p className="text-white text-xl font-bold ">
                    Show your Portfolio, your Social Media links and testamonials to impress potential clients.
                </p>

            </div>

            <div className="p-8 space-y-3 border-8 border-white rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold ">05 Hubs</h1>

                <p className=" text-xl font-bold">
                    Stay focused when working in these dedicated sections.
                </p>

            </div>

            <div className="p-8 space-y-3  border-white border-8 rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold ">06 Finances</h1>

                <p className=" text-xl font-bold">
                    A detailed look on your finances to keep track of everything and determine which purchases were beneficial.
                </p>

             </div>
            </div>
         </div>
            <div className='  justify-center pb-64 bg-black '>
        <video autoPlay  muted loop className='hidden lg:flex mx-auto w-5/6 shadow-xl shadow-white rounded-xl' >         
           <source src="/videos/section2_final_freelanceos.mp4" type="video/mp4" />       
        </video>
        {/*add autoPlay prop to play */}

        <video autoPlay  muted loop className='flex playsInline mx-auto lg:hidden w-5/6 shadow-xl shadow-white rounded-xl' >         
           <source src="/videos/section_darkmono.mp4" type="video/mp4" />       
        </video>
        {/*add autoPlay prop to play */}

    </div>
       </section>










        <section className="bg-black text-white">
        <div className="container px-6 py-10 mx-auto">
        
        {/*
        <p className="mt-4 text-black xl:mt-6 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
  */}
        
        <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-8 border-white rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold   ">07 Social Media</h1>

                <p className="text-white text-xl font-bold ">
                    Structure your process to make people become interested in your work.
                </p>

            </div>

            <div className="p-8 space-y-3 border-8 border-white rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold ">08 Goal Tracker</h1>

                <p className=" text-xl font-bold">
                    Set yourself clear goals you want to achieve in a specific time.
                </p>

            </div>

            <div className="p-8 space-y-3  border-white border-8 rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold ">09 Jobs</h1>

                <p className=" text-xl font-bold">
                    A complete dashboard to manage your clients, visualize your progress and not miss deadlines.
                </p>

             </div>
            </div>
         </div>
            <div className='  justify-center pb-64 bg-black '>
        <video autoPlay  muted loop className='hidden lg:flex mx-auto w-5/6 shadow-xl shadow-white rounded-xl' >         
           <source src="/videos/section3_final_freelanceos.mp4" type="video/mp4" />       
        </video>
        {/*add autoPlay prop to play */}

        <video autoPlay  muted loop className='flex playsInline mx-auto lg:hidden w-5/6 shadow-xl shadow-white rounded-xl' >         
           <source src="/videos/section_lightcolorful.mp4" type="video/mp4" />       
        </video>
        {/*add autoPlay prop to play */}

    </div>
       </section>








        <section className="bg-black text-white ">
        <div className="container px-6 py-10 mx-auto">
        
        {/*
        <p className="mt-4 text-black xl:mt-6 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
  */}
        
        <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-8 border-white rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold   ">10 Resources</h1>

                <p className="text-white text-xl font-bold ">
                    Sort, filter and read your articles, blog posts or videos.
                </p>

            </div>

            <div className="p-8 space-y-3 border-8 border-white rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold ">11 Book Tracker</h1>

                <p className=" text-xl font-bold">
                    List all of the books you are reading and have read , give a review and take notes on them.
                </p>

            </div>

            <div className="p-8 space-y-3  border-white border-8 rounded-xl hover:scale-110 duration-500 ">
                <span className="inline-block ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-4xl font-extrabold ">12 Journal</h1>

                <p className=" text-xl font-bold">
                  Review and reflect on what went well today.
                </p>

             </div>
            </div>
         </div>
            <div className='  justify-center pb-64 bg-black '>
        <video autoPlay  muted loop className='hidden lg:flex mx-auto w-5/6 shadow-xl shadow-white rounded-xl' >         
           <source src="/videos/section4_final_freelanceos.mp4" type="video/mp4" />       
        </video>
        {/*add autoPlay prop to play */}

        <video autoPlay  muted loop className='flex playsInline mx-auto lg:hidden w-5/6 shadow-xl shadow-white rounded-xl' >         
           <source src="/videos/section_darkcolorful.mp4" type="video/mp4" />       
        </video>
        {/*add autoPlay prop to play */}

    </div>
       </section>




     </div>


  )
}

export default Sections