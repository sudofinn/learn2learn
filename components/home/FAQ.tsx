import React from 'react'
import Link from "next/link"

const FAQ = () => {
  return (
    <div className=" mx-auto px-5 pt-32 bg-black text-white min-h-sceen text-2xl">
	<div className="flex flex-col items-center">
		<h2 className="font-extrabold text-5xl lg:text-7xl mt-5 text-center tracking-tight">
			Questions ? <span className='bg-white text-black'> Answers. </span>
		</h2>
		
	</div>
	<div className="grid divide-y divide-neutral-200 max-w-2xl mx-auto mt-8">
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Who is the Freelance OS for ?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className=" mt-3 text-xl group-open:animate-fadeIn">
					 The product is for Freelancers who want to have an all-in-one system for managing their freelancing business.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Is the payment secure ?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-xl mt-3 group-open:animate-fadeIn">
					Yes, it is. The  payment is secured by SSL with 128-bit encryption and processed with PCI Compliant service providers.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> What payment options get accepted ?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-xl mt-3 group-open:animate-fadeIn">
					You can pay with VISA ( including VISA Electron), Mastercard , AMEX, Discover , Maestro , Diner&apos;s , Apple and Google Pay 
                    and most debit cards.
				</p>
			</details>
		</div>
        <div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Can I apply for Non-profit, NGO, and educational discounts? </span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-xl mt-3 group-open:animate-fadeIn">
					 Yes, that&apos;s possible. If you fit the description above, send a discount request <Link href="/contact">here</Link> using your official NGO or student email address.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I start using the OS ?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-xl mt-3 group-open:animate-fadeIn">
					After your purchase, you will find a link to a Notion page. From there on, you can install Notion ( it is free ) and duplicate the 
                    template into your own Notion. All of this is explained in a video you will find after the purchase so don&apos;t worry.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> I know nothing about Notion, can I still use the OS ?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-xl mt-3 group-open:animate-fadeIn">
					Of course. After your purchase, you will find a 10 minute video which introduces you to Notion and it&apos;s key features. You will also find 
                    a 10 minute video which explains the entire Operating System and how you can start using it. So getting started it fairly simple.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Can I share the OS ?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-xl mt-3 group-open:animate-fadeIn">
					  No, only people who bought the OS shall use it. Of course, you can recommend it to people or even join the affiliate
                      program to earn 30% on every sale you send our way.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I receive future updates ?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-xl mt-3 group-open:animate-fadeIn">
					You will receive future updates via email. 
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> What if I still have questions ?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-xl mt-3 group-open:animate-fadeIn">
					No problem, just contact us directly <Link href="/contact" className='underline '>here</Link>
				</p>
			</details>
		</div>
		
	</div>
</div>
  )
}

export default FAQ


 