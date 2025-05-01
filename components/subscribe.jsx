"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  
    if (!email) return toast.error("Please enter an email.");
    
    if (!emailRegex.test(email)) return toast.error("Please enter a valid email address.");
  
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // Send the entered email as 'to' address
      });
  
      if (res.ok) {
        toast.success("Thank you for subscribing! You’ll get regular updates.");
        setSubscribed(true);
        setEmail("");
      } else {
        toast.error("Something went wrong. Try again later.");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again later.");
    }
  };
  

  return (
    <motion.section 
      className="py-20 bg-blue-600 dark:bg-gray-950 dark:text-blue-300 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="container mx-auto px-4 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          hidden: {},
          visible: {}
        }}
      >
        <motion.h2 
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Take Control of Your Finances?
        </motion.h2>

        <motion.p 
          className="text-blue-100 mb-8 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Smarter budgeting starts here, Automate tracking, set goals, and get insights that actually make sense.
        </motion.p>

        <motion.div 
          className="relative max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Input
            type="email"
            placeholder="Subscribe to get monthly updates..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-14 py-4 px-6 text-lg rounded-full bg-white text-gray-900 pr-40 
               border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Button
            onClick={handleSubscribe}
            disabled={subscribed}
            className="absolute top-1 right-1 h-12 px-6 text-base font-medium rounded-full transition duration-200 bg-blue-600 hover:bg-blue-700 dark:text-white"
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Subscribe;
