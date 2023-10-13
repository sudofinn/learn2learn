import React from 'react'
import Link from "next/link"

const FAQ = () => {
  return (
    <div className=" mx-auto px-5  pt-32 bg-black text-white min-h-sceen text-2xl">
	<div className="flex flex-col items-center">
		<h2 className="font-extrabold text-5xl lg:text-7xl mt-5 text-center tracking-tight">
			Questions ? <span className='underline decoration-red-600 text-white'> Answers. </span>
		</h2>
		
	</div>
	<div className="grid divide-y divide-red-600 max-w-2xl mx-auto mt-8">
		<div className="py-5 text-3xl">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How many newsletter articles will I receive per week ?</span>
					<span className="transition group-open:rotate-180">
                <svg className='hidden xl:flex' fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className=" mt-3 text-3xl group-open:animate-fadeIn">
					 You will receive 1-2 articles per week.
				</p>
			</details>
		</div>
		<div className="py-5 text-3xl">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Who are you even ?</span>
					<span className="transition group-open:rotate-180">
                <svg  className='hidden xl:flex' fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-3xl mt-3 group-open:animate-fadeIn">
					Hi,I&apos;m Finn Guha. I have been researching on how to learn properyl for nearly 5 years now. I have been using the learning App Anki 
					for nearly 4 years and am doing ~200 flashcards every day while still enjoying my life, building my business and occassionally watching a movie.
				</p>
			</details>
		</div>
		<div className="py-5 text-3xl">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Where can I find out more about you ?</span>
					<span className="transition group-open:rotate-180">
                <svg  className='hidden xl:flex' fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-3xl mt-3 group-open:animate-fadeIn">
					I&apos;m most active on <Link href="https://x.com/finnguha" target="_blank" className=' text-red-600'>𝕏</Link> (fka Twitter)
				</p>
			</details>
		</div>
        <div className="py-5 text-3xl">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> What makes this newsletter stand out ?</span>
					<span className="transition group-open:rotate-180">
                <svg  className='hidden xl:flex' fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-3xl mt-3 group-open:animate-fadeIn">
					I have been researching about the topic of learning for half of decade. This newsletter will be packed with concize information while still being easy to read and practical.
					It is totally free and you will get access to a supportive study community on discord. This newsletter is your advantage when it comes to learning more effectively.
				</p>
			</details>
		</div>
		<div className="py-5 text-3xl">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> So what can I expect from this newsletter ?</span>
					<span className="transition group-open:rotate-180">
                <svg  className='hidden xl:flex' fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-3xl mt-3 group-open:animate-fadeIn">
					You will either by able to spend way less time studying while still getting the same results or you can get way better results 
					when studying the same amount as you currently do.
				</p>
			</details>
		</div>
		<div className="py-5 text-3xl">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> That sounds awesome. Where can I sign up ?</span>
					<span className="transition group-open:rotate-180">
                <svg  className='hidden xl:flex' fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-3xl mt-3 group-open:animate-fadeIn">
					Great that you want to start, just click <Link href="" className='text-red-600 underline'>here</Link> to enter you email and start receiving articles + getting access to the study community.
				</p>
			</details>
		</div>

		
	</div>
</div>
  )
}

export default FAQ


 