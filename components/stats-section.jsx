"use client"

import { motion } from "framer-motion"
import { statsData } from "@/data/landing"

const StatsSection = () => {
  return (
    <section className="py-20 bg-blue-100 dark:bg-gray-950 dark:text-blue-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stats, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stats.value}
              </div>
              <div className="text-gray-600">{stats.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
