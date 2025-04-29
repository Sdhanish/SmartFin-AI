"use client";
import React from 'react'
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Github, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      aria-label="Site Footer"
      className="bg-gray-50 dark:bg-[#0a0b0e] dark:border-gray-800 pt-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { href: "/about", label: "About Us" },
                { href: "/support", label: "Support" },
                { href: "/#how-it-works", label: "How To Use" },
                { href: "/#features", label: "Features" },
                { href: "/#testimonials", label: "Testimonials" },
                { href: "/termsofuse", label: "Terms of Use" },
                { href: "/faq", label: "FAQ" },
                { href: "/reports", label: "Reports" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-gray-500 dark:text-gray-400 text-md max-w-3xl mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              SmartFin offers AI-powered tools like receipt scanning, budget tracking,
              and real-time spending insights , all designed to help you stay in control effortlessly.
            </motion.p>
          </div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
              <motion.div
                className="flex space-x-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
                variants={{ hidden: {}, visible: {} }}
              >
                {[
                  { href: "https://facebook.com", icon: <Facebook className="h-6 w-6" />, color: "hover:text-blue-600" },
                  { href: "https://instagram.com", icon: <Instagram className="h-6 w-6" />, color: "hover:text-pink-600" },
                  { href: "https://twitter.com", icon: <X className="h-6 w-6" />, color: "hover:text-blue-400" },
                  { href: "https://linkedin.com", icon: <Linkedin className="h-6 w-6" />, color: "hover:text-blue-700" },
                  { href: "https://github.com", icon: <Github className="h-6 w-6" />, color: "hover:text-gray-900" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-gray-600 dark:text-gray-400 ${item.color} transition`}
                      aria-label="Social Link"
                    >
                      {item.icon}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Need Help?</h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  Send a mail to: smartfinai@gmail.com
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Or, Call our toll free number: 1820 1111 23
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer;
