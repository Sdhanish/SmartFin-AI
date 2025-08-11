"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 bg-white dark:bg-[#00000000]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-center">

        {/* Content Animation */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Link href='/dashboard'>
            <span className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium tracking-wide">
              Meet Smartfin AI
            </span>
          </Link>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight dark:text-white gradient-title">
            Smarter Financial Future
          </h2>

          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed ml-2">
            SmartFin AI empowers you with smart insights to manage your money effortlessly.
            From tracking your spending to personalized budget planning, <br />
            it's like having a financial advisor in your pocket.
          </p>

          <div className="flex gap-4 pt-4 ml-4">
            <Button size="lg" asChild className="px-6 py-2">
              <Link href="/#about">Explore More</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-6 py-2">
              <Link href="/dashboard">Try It Now</Link>
            </Button>
          </div>
        </motion.div>

        {/* Image Animation */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src="/abt.jpg"
            alt="SmartFin AI Overview"
            width={500}
            height={500}
            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default AboutSection
