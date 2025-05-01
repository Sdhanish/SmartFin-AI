"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { featuresData } from "@/data/landing"

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 cursor-pointer">
      <div className="container mx-auto px-4">

        {/* Heading Animation */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Manage Your Finances Here
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card
                className="
                  p-2 
                  dark:bg-gray-900 
                  border 
                  border-blue-300 
                  hover:border-blue-500 
                  hover:bg-blue-50 
                  dark:hover:bg-blue-900 
                  transition 
                  duration-300 
                  transform 
                  hover:scale-105
                  rounded-2xl
                "
              >
                <CardContent className="space-y-4 pt-4 text-start">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <h3 className="text-gray-600 dark:text-gray-300">{feature.description}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default FeaturesSection
