"use client"

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const imageOffsetTop = imageElement.offsetTop;
      const imageHeight = imageElement.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollProgress = (scrollPosition - imageOffsetTop + windowHeight) / (imageHeight + windowHeight);

      if (scrollProgress > 0 && scrollProgress < 1) {
        const rotation = 15 * (1 - 2 * scrollProgress);
        const translateY = 40 * scrollProgress;
        imageElement.style.transform = `rotateX(${rotation}deg) scale(1) translateY(${translateY}px)`;
      } else if (scrollProgress >= 1) {
        imageElement.style.transform = 'rotateX(-15deg) scale(1) translateY(40px)';
      } else {
        imageElement.style.transform = 'rotateX(15deg) scale(1)';
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className='pb-4 px-4'>
      <div className='container mx-auto text-center'>

        {/* Title animation */}
        <motion.h1
          className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          Master Your Money with AI for a Smarter Future!
        </motion.h1>

        {/* Paragraph animation */}
        <motion.p
          className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-400'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Automate budgeting, Track expenses, and gain AI-driven insights all in one place. Make smarter financial choices effortlessly with Smart Fin AI
        </motion.p>

        {/* Buttons animation */}
        <motion.div
          className='flex justify-center space-x-8'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <Link href={"/dashboard"}>
            <Button size="lg" className="px-8">Get Started</Button>
          </Link>
          <Link href={"/about"}>
            <Button size="lg" className="px-8" variant="outline">Learn More</Button>
          </Link>
        </motion.div>

        {/* Image wrapper with custom scroll effect */}
        <motion.div
          className='hero-image-wrapper'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          <div ref={imageRef} className='hero-image'>
            <Image
              src={"/he.jpg"}
              className='rounded-lg shadow-2xl border mx-auto'
              width={1200}
              height={200}
              alt='Hero Section Image'
            />
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default HeroSection
