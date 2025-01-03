"use client"
import React, { useEffect } from 'react'
import PageReveal from '@/components/scroll/PageReveal'
import Scene1 from '@/components/cursor/Follower/Scene1'
import Scene2 from '@/components/cursor/Follower/Scene2'
import { Navbar } from '@/components/Navbar'
import MaskText from '@/components/cursor/MaskText/MaskText'
import dynamic from 'next/dynamic'
import Text from '@/components/PaintReveal/TextPaint'
import Scene from '@/components/PaintReveal/ScenePaint'
import Image from 'next/image'
const Hero = dynamic(() => import('@/components/Hero/Index'), {
    ssr: false,
});


const Home = () => {
    useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
          }
        )()
      }, [])
  return (
    <div>
        <Navbar/>
        <PageReveal element1={<Hero/>} element2={<Scene1/>}/>
        <PageReveal element1={<Scene2/>} element2={<MaskText/>}/>
        <PageReveal element1={<main className="flex w-full h-screen items-center bg-black justify-center">
             <Text />
             <Scene />
        </main>} element2={
            <div className="h-[200vh] flex ">
                <Image src={"/resume.png"} alt="Resume" layout={'fill'} objectFit={'contain'}  />
            </div>
        }/>

    </div>
  )
}

export default Home
