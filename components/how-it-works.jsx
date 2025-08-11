"use client"

import { motion } from "framer-motion"
import { howItWorksData } from "@/data/landing"

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="pt-20 pb-8 cursor-pointer">
      <div className="container mx-auto px-4">

        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-bold text-center pt-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          How it Works
        </motion.h2>

        {/* Animated Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          {howItWorksData.map((step, index) => (
            <motion.div
              key={index}
              className="
                text-center 
                dark:bg-gray-900 
                bg-blue-50 
                dark:hover:bg-blue-950 
                hover:bg-blue-100 
                rounded-2xl 
                py-6 px-4 
                transition 
                duration-300 
                transform 
                hover:scale-105 
                shadow 
                hover:shadow-lg 
                group
              "
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="
                h-16 w-16 
                bg-blue-100 
                dark:bg-blue-100 
                rounded-full 
                flex items-center justify-center 
                mx-auto mb-6 mt-5 
                shadow-inner 
                border-2 border-transparent 
                transition 
                group-hover:border-blue-400
              ">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default HowItWorksSection
