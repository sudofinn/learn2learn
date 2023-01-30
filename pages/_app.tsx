import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import  Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
    if (typeof window === 'undefined') {
    return <></>;
  } else {
  return  (
    
    <div>
      <Component {...pageProps} />

        <Head>
         <link rel="shortcut icon" href="/favicon.svg" /> 
         
          </Head>


    </div>
  )


}

}