'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from 'lenis';
import dynamic from 'next/dynamic';
import { useEffect, useRef } from "react";
import Scene1 from '../cursor/Follower/Scene1';



export default function PageReveal({element1,element2}) {

    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"]
    })

    useEffect( () => {
      const lenis = new Lenis()

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }, [])


  return (
    <main ref={container} className="relative h-[200vh]">
     <Section1 scrollYProgress={scrollYProgress} element1={element1}/>
     <Section2 scrollYProgress={scrollYProgress} element2={element2}/>
    </main>
  )
}

const Section1 = ({scrollYProgress, element1}) => {

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
    return (
      <motion.div style={{scale, rotate}} className="sticky top-4 h-screen bg-black text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
            {element1}
      </motion.div>
    )
  }

  const Section2 = ({scrollYProgress,element2}) => {

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

    return (
      <motion.div style={{scale, rotate}} className="relative h-screen bg-cyan-900">
        {/* <main className='flex w-screen h-screen items-center justify-center bg-gray-900 '>
            <Text/>
            <Scene/>
        </main> */}
        {element2}
      </motion.div>
    )
  }
