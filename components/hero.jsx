"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, PieChart, DollarSign, Brain, Shield, Zap } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='min-h-screen container mx-auto bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 px-4'>
      <div className='container mx-auto max-w-7xl'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left Content */}
          <div className='space-y-8'>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium'
            >
              <Zap className='w-4 h-4 mr-2' />
              AI-Powered Financial Intelligence
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight'
            >
              Master Your Money with 
              <span className='bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent'> AI Intelligence</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed'
            >
              Automate budgeting, track expenses effortlessly, and gain AI-driven insights that help you make smarter financial decisions. Your path to financial freedom starts here.
            </motion.p>

            {/* Feature Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400'
            >
              <div className='flex items-center space-x-2'>
                <Brain className='w-4 h-4 text-blue-600' />
                <span>AI Insights</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Shield className='w-4 h-4 text-green-600' />
                <span>Bank-Level Security</span>
              </div>
              <div className='flex items-center space-x-2'>
                <TrendingUp className='w-4 h-4 text-blue-800' />
                <span>Smart Analytics</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='flex flex-col sm:flex-row gap-4'
            >
              <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'>
                Get Started Free
              </button>
              <button className='px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-2xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300'>
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className='flex items-center space-x-6 text-xs text-slate-500 dark:text-slate-400'
            >
              <span>✓ Free 14-day trial</span>
              <span>✓ No credit card required</span>
              <span>✓ Cancel anytime</span>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className='relative'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className='relative'
            >
              {/* Main Dashboard Mockup */}
              <div className='bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-6 relative overflow-hidden'>
                {/* Dashboard Header */}
                <div className='flex items-center justify-between mb-6'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg'></div>
                    <h3 className='font-semibold text-slate-800 dark:text-white'>Smart Fin AI</h3>
                  </div>
                  <div className='flex space-x-2'>
                    <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                    <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                    <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                  </div>
                </div>

                {/* Balance Card */}
                <div className='bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-6 text-white mb-6'>
                  <p className='text-blue-100 text-sm'>Total Balance</p>
                  <p className='text-3xl font-bold'>$12,847.50</p>
                  <p className='text-blue-100 text-sm flex items-center mt-2'>
                    <TrendingUp className='w-4 h-4 mr-1' />
                    +12.5% this month
                  </p>
                </div>

                {/* Mini Charts */}
                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div className='bg-slate-50 dark:bg-slate-700 rounded-xl p-4'>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='text-sm text-slate-600 dark:text-slate-300'>Expenses</span>
                      <PieChart className='w-4 h-4 text-slate-400' />
                    </div>
                    <p className='text-xl font-semibold text-slate-800 dark:text-white'>$2,847</p>
                    <div className='w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mt-2'>
                      <div className='bg-red-500 h-2 rounded-full' style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div className='bg-slate-50 dark:bg-slate-700 rounded-xl p-4'>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='text-sm text-slate-600 dark:text-slate-300'>Savings</span>
                      <DollarSign className='w-4 h-4 text-slate-400' />
                    </div>
                    <p className='text-xl font-semibold text-slate-800 dark:text-white'>$1,200</p>
                    <div className='w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mt-2'>
                      <div className='bg-green-500 h-2 rounded-full' style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className='space-y-3'>
                  <h4 className='text-sm font-semibold text-slate-600 dark:text-slate-300'>Recent Activity</h4>
                  {[
                    { name: 'Grocery Store', amount: '-$127.50', color: 'red' },
                    { name: 'Salary Deposit', amount: '+$3,200.00', color: 'green' },
                    { name: 'Netflix', amount: '-$15.99', color: 'red' }
                  ].map((transaction, index) => (
                    <div key={index} className='flex items-center justify-between'>
                      <div className='flex items-center space-x-3'>
                        <div className={`w-8 h-8 bg-${transaction.color}-100 dark:bg-${transaction.color}-900/30 rounded-lg flex items-center justify-center`}>
                          <div className={`w-2 h-2 bg-${transaction.color}-500 rounded-full`}></div>
                        </div>
                        <span className='text-sm text-slate-700 dark:text-slate-300'>{transaction.name}</span>
                      </div>
                      <span className={`text-sm font-semibold ${transaction.color === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className='absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 border border-slate-200 dark:border-slate-700'
              >
                <div className='flex items-center space-x-2'>
                  <Brain className='w-5 h-5 text-blue-500' />
                  <span className='text-sm font-medium text-slate-700 dark:text-slate-300'>AI Insight</span>
                </div>
                <p className='text-xs text-slate-600 dark:text-slate-400 mt-1'>Save $200 more this month!</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className='absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg p-4 text-white'
              >
                <div className='flex items-center space-x-2'>
                  <TrendingUp className='w-5 h-5' />
                  <span className='text-sm font-medium'>Budget Goal</span>
                </div>
                <p className='text-xs opacity-90 mt-1'>85% completed</p>
              </motion.div>
            </motion.div>

            {/* Background Decorative Elements */}
            <div className='absolute inset-0 -z-10'>
              <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-2xl'></div>
              <div className='absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-200 dark:bg-blue-800 rounded-full opacity-20 blur-2xl'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection