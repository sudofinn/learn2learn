import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import NavBar from '@/components/home/NavBar'
import Header from '@/components/home/Header'
import FeatureJobsSection from '@/components/home/FeatureJobsSection'
import FeatureNotessection from  '@/components/home/FeatureNotessection'
import Tabs from '@/components/home/Tabs'
import CustomizeIt from '@/components/home/CustomizeIt'
import Templates from '@/components/home/Templates' 
import Card from '@/components/home/Card'
import AboutMe from '@/components/home/AboutMe'
import Footer from '@/components/home/Footer'




export default function Home() {
  return (
    <div>
      <Head>
      <title>Freelance OS</title>
       <meta name="description" content="Freelance OS Notion Template" />
      <meta
          property="og:image"
          content="../public/favicon.ico"
        />
    </Head>
    <NavBar />
    <Header />
    <FeatureJobsSection />
   <FeatureNotessection />
   <Tabs />
   <Templates />
   <CustomizeIt />
   <Card />
   <AboutMe />
   <Footer />
   

   
  

    </div>
  )
}