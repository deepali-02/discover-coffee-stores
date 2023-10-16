import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/banner'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleOnBannerClick = () =>{
    console.log("Hi Banner Button")
  }
  return (
    <>
      <Head>
        <title>Coffee Conniosseur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
       <Banner buttonText='View stores nearby' handleOnClick={handleOnBannerClick}/>
       <div className={styles.heroImage}>
       <Image src="/static/hero_img.png" width={700} height={400} />
       </div>
      </main>
    </>
  )
}
