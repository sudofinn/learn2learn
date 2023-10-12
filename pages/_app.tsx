import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import  Head from "next/head"

import { Inter, Dancing_Script , Permanent_Marker, Kalam , Londrina_Outline } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const dancing_script = Dancing_Script ({
  subsets: ['latin'],
  variable: '--font-dancing_script',
})

const kalam = Kalam ({
  subsets: ['latin'],
  variable: '--font-kalam',
  weight:'700'
})

const permanent_marker = Permanent_Marker ({
  subsets: ['latin'],
  variable:'--font-permanent_marker',
  weight:'400'
})

const londrina_outline = Londrina_Outline ({
  subsets: ['latin'],
  variable:'--font-londrina_outline',
  weight:'400'
})




export default function App({ Component, pageProps }: AppProps) {
  
  return  (
    
    <main className={`${permanent_marker.variable} font-sans`}>
      
      <Component {...pageProps} />



    </main>
  )


}

