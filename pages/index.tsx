import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from "../components/home/Header"
import Features from '@/components/home/Features'
import Pricing from '@/components/home/Pricing'
import FAQ from '@/components/home/FAQ'
import Support from '@/components/home/Support'
import Unsure from '@/components/home/Unsure'
import ReferTo from '@/components/home/Referto'
import Footer from '../components/home/Footer'
import { FaQq } from 'react-icons/fa'

import Explain from '@/components/home/Explain'
import Founder from './founder'
import Walloflove from '@/components/home/walloflove'


import NavBar from '@/components/home/NavBar'

import FirstCarousel from '@/components/home/FirstCarousel'
import CTA from '@/components/home/CTA'
import SocialProof from '@/components/home/SocialProof'


//import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
//const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className="bg-[#101010]">
      <Head>
      <title>Learn2Learn</title>
       <meta name="description" content="The Learn2Learn newsletter !" />
      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>
    

   
   <NavBar />

    <Header />

    <FirstCarousel />

    <Explain />

    {/*<Features /> */}

    <Founder />

    <Walloflove />

    <CTA />

    <SocialProof />


    <FAQ />

<Unsure />

    <ReferTo />
    
    <Footer />


    

{/* 



*/}

    </div>
  )
}