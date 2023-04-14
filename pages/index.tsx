import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from "../components/home/Header"
import Features from '@/components/home/Features'
import Sections from '@/components/home/Sections'
import Show from '@/components/home/Show'
import AllColors from '@/components/home/AllColors'
import Phone from '@/components/home/Phone'
import Places from '@/components/home/Places'
import CallToAction from '@/components/home/CallToAction'
import Pricing from '@/components/home/Pricing'
import Unsure from '@/components/home/Unsure'
import Affiliate from '@/components/home/Affiliate'
import ReferTo from '@/components/home/Referto'
import SecondCallToAction from '@/components/home/SecondCallToAction'
import Footer from '../components/home/Footer'
import LazyLoad from 'react-lazy-load';


export default function Home() {
  return (
    <div className=''>
      <Head>
      <title>Freelance OS</title>
       <meta name="description" content="Freelance OS Notion Template" />
      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>
    <Header />

    <Features />

    <Sections />

    <Show />

    <AllColors />
   
    <Phone />

    <Places />

    <CallToAction />

    <Pricing />

    <Unsure />

    <Affiliate />

    <ReferTo />

    <SecondCallToAction />

    <Footer />

    
    {/*
  */}
   
   

   
  

    </div>
  )
}