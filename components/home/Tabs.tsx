import React from 'react'

const Tabs = () => {
  return (
      <div>
       <section className="text-black mt-64">
        <div className="container px-6 py-10 mx-auto">
        <h1 className="text-4xl font-extrabold text-black  ">Be faster with the   <span className="underline decoration-pk">right tools</span></h1>
        
        {/*
        <p className="mt-4 text-black xl:mt-6 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
  */}
        
        <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-4 border-pk rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#7D8AE8">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <h1 className="text-2xl font-extrabold text-black  ">Monitor and manage your expenditures the easy way</h1>

                <p className="text-black text-xl font-bold ">
                    See the cost of everything with one glimpse. Identify which purchases were worth it and which were not.
                </p>

            </div>

            <div className="p-8 space-y-3 border-4 border-pk rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#7D8AE8">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </span>

                <h1 className="text-2xl font-extrabold text-black">Keep the information of a project and the client organized and at one place</h1>

                <p className="text-black text-xl font-bold">
                    Work in an organized manner with your clients. See the work , your progress and the deadline to deliver efficiently and on time. 
                </p>

            </div>

            <div className="p-8 space-y-3  border-pk border-4 rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#7D8AE8">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-2xl font-extrabold text-black">Be informed when what happens , do not let your work take over your personal life</h1>

                <p className="text-black text-xl font-bold">
                    Divide the business from your personal life to maintain a healthy work-life balance and never forget a family meeting.
                </p>

             </div>
            </div>
         </div>
       </section>
     </div>


  )
}

export default Tabs