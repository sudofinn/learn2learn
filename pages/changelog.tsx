import React from 'react'
import Head from "next/head";

import Footer from '@/components/home/Footer'

const changelog = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
        <Head>
        <title>Changelog</title>
        <meta name="description" content="Changelog of the development on the  Freelance OS" />
      </Head>

        <div className='flex justify-center '>

<ol className="relative border-l border-gray-200 dark:border-gray-700 pt-32 pb-24 text-3xl ml-6 lg:ml-0">                  
    <li className="mb-10 ml-6 ">            
        <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-white">
            <svg aria-hidden="true" className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1  font-semibold text-gray-900 dark:text-white">Official Launch  <span className=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-white text-black ml-3">Latest</span></h3>
        <time className="block mb-2 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Released on March 19th, 2023</time>
        <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">Open to public after improving the OS from the feedback of the Beta Testers.</p>
    </li>

    <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-white">
            <svg aria-hidden="true" className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1  font-semibold text-gray-900 dark:text-white">Beta is live</h3>
        <time className="block mb-2 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 20th, 2023</time>
        <p className="text-xl font-normal text-gray-500 dark:text-gray-400">MVP is open for Beta Testers to gather feedback and improve the OS.</p>
    </li>

     <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-white">
            <svg aria-hidden="true" className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1  font-semibold text-gray-900 dark:text-white">Operating System MVP is ready.</h3>
        <time className="block mb-2 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 8th, 2023</time>
        <p className="text-xl font-normal text-gray-500 dark:text-gray-400">The Freelance OS is finally ready to be tested after 4 months of work.</p>
    </li>

     <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-white">
            <svg aria-hidden="true" className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1  font-semibold text-gray-900 dark:text-white">Theoretical design is complete</h3>
        <time className="block mb-2 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Released on September 11th, 2022</time>
        <p className="text-xl font-normal text-gray-500 dark:text-gray-400">The design with it&apos;s features stands.</p>
    </li>

    <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-white">
            <svg aria-hidden="true" className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1  font-semibold text-gray-900 dark:text-white">First thought about a Freelance Operating System</h3>
        <time className="block mb-2 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Released on February 3rd, 2022</time>
        <p className="text-xl font-normal text-gray-500 dark:text-gray-400">The first time I thought about creating such an OS.</p>
    </li>
    
    
</ol>
</div>
<Footer />


    </div>
  )
}

export default changelog

{/* Source: https://flowbite.com/docs/components/timeline/ */}