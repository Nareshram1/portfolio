import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { Inter } from '@next/font/google'

import SoundButton from '@/components/soundButton'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

 

  return (
    <>
      <Head>
        <title>Naresh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./code.png" />
      </Head>
      <main>
       <div>
        <section className=' flex min-h-screen bg-slate-500 align-middle justify-center'>
          
        <div className="flex bg-slate-600 rounded-lg shadow-md px-9 py-9 text-center mt-72 mb-60 ">
        <Link
        href={{
          pathname: '/chucknorris',
        }}
      >
          <h2 className='text-xl text-white pt-20'>Wanna Hear a chucknorris joke</h2>
        </Link>
        <SoundButton/>


        </div>
        </section>
       </div>
      </main>
    </>
  )
}
