"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { testimonialsData } from "@/data/landing"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ArrowRight } from "lucide-react"

const TestimonialsSection = () => {
  const [showAll, setShowAll] = useState(false)

  const visibleTestimonials = showAll ? testimonialsData : testimonialsData.slice(0, 3)

  return (
    <section id="testimonials" className="py-10 cursor-pointer">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What our users say...
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="transition duration-300 transform hover:scale-105 hover:shadow-lg hover:border-blue-400 border border-gray-200 dark:border-gray-700 rounded-2xl h-full"
            >
              <Card className="p-6 dark:bg-gray-900 bg-blue-50 dark:hover:bg-blue-800 transition duration-300 rounded-2xl h-full flex flex-col">
                <CardContent className="space-y-4 pt-4 flex-1 flex flex-col">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.role}
                      </div>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-1">
                    {testimonial.quote}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More Reviews button */}
        {!showAll && testimonialsData.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              More Reviews <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default TestimonialsSection
