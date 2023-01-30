import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import NavBar from '@/components/home/NavBar'
import Header from '@/components/home/Header'
import FeatureJobsSection from '@/components/home/FeatureJobsSection'
import FeatureNotessection from  '@/components/home/FeatureNotessection'
import Tabs from '@/components/home/Tabs'
import CustomizeIt from '@/components/home/CustomizeIt'
import Card from '@/components/home/Card'
import AboutMe from '@/components/home/AboutMe'
import Footer from '@/components/home/Footer'


export default function Home() {
  return (
    <div>
   <NavBar />
   <Header />
   <FeatureJobsSection />
   <FeatureNotessection />
   <Tabs />
   <CustomizeIt />
   <Card />
   <AboutMe />
   <Footer />

    </div>
  )
}