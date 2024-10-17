import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Leaf,
  Globe,
  Heart,
  Users,
  TreePine,
  Star,
  Target,
  Book,
  Smile,
} from 'lucide-react'
import Hero from './Hero'

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('expertise')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <>
      <Hero title=' WHO WE ARE' />
      <div className='min-h-screen bg-gradient-to-b from-green-100 to-amber-100 text-gray-800'>
        <main className='container mx-auto px-4 py-12 sm:px-6 lg:px-8'>
          <motion.h2
            className='text-3xl font-bold text-center mb-2 text-green-800'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Divine African Tours
          </motion.h2>

          <motion.div
            className='prose lg:prose-xl mx-auto mb-12 text-center'
            {...fadeIn}
          >
            <p className='lead'>
              Connecting with the soul of Africa and its people, one journey at
              a time
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
            <motion.div {...fadeIn}>
              <div className='h-full bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6'>
                <h2 className='text-2xl font-semibold mb-4 flex items-center'>
                  <Globe className='mr-2 text-green-600' /> Our Story
                </h2>
                <p>
                  Divine African Holidays is a ground handling Tours and Travel
                  Company that organizes both inbound and outbound safaris
                  throughout the East African region. Ingeniously owned and
                  managed, we are a thoroughly professional and established
                  company specializing in tailor-made and set departure safaris.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <div className='h-full bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6'>
                <h2 className='text-2xl font-semibold mb-4 flex items-center'>
                  <Leaf className='mr-2 text-green-600' /> Our Commitment
                </h2>
                <p>
                  We ensure our safaris are Eco-friendly and respect the
                  cultures of the local communities. Our passion lies in making
                  the tourism industry thrive while offering professional advice
                  on corporate ventures.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.section
            className='mb-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className='text-3xl font-bold text-center mb-8 text-green-800'>
              Our Impact
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 text-center'>
                <Heart className='mx-auto mb-4 text-green-600' size={40} />
                <h3 className='text-xl font-semibold mb-2'>
                  Community Support
                </h3>
                <p>
                  A percentage of our revenue is given to selected orphanages,
                  supporting the local community.
                </p>
              </div>
              <div className='bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 text-center'>
                <TreePine className='mx-auto mb-4 text-green-600' size={40} />
                <h3 className='text-xl font-semibold mb-2'>
                  Environmental Conservation
                </h3>
                <p>
                  We actively plant trees and encourage others to do the same,
                  contributing to a safer environment.
                </p>
              </div>
              <div className='bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 text-center'>
                <Users className='mx-auto mb-4 text-green-600' size={40} />
                <h3 className='text-xl font-semibold mb-2'>Cultural Respect</h3>
                <p>
                  Our safaris are designed to respect and celebrate the rich
                  cultures of local communities.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className='mb-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className='text-3xl font-bold text-center mb-8 text-green-800'>
              About Our Staff
            </h2>
            <div className='bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6'>
              <p className='text-center mb-6'>
                Our staff creates relevant, original, and thrilling safaris. We
                go out of our way to tailor-make the best holidays that give our
                visitors value for their money.
              </p>
              <div className='w-full'>
                <div className='grid w-full grid-cols-4 mb-4'>
                  {['expertise', 'planning', 'goals', 'guides'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-2 text-sm font-medium transition-colors ${
                        activeTab === tab
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
                <div className='mt-4'>
                  {activeTab === 'expertise' && (
                    <div className='flex items-center space-x-4'>
                      <Star
                        className='text-yellow-500 flex-shrink-0'
                        size={24}
                      />
                      <p>
                        Our team thrives on creating unique and exciting safari
                        experiences tailored to each client's preferences.
                      </p>
                    </div>
                  )}
                  {activeTab === 'planning' && (
                    <div className='flex items-center space-x-4'>
                      <Book className='text-blue-500 flex-shrink-0' size={24} />
                      <p>
                        We believe in collaborative planning, considering our
                        clients' budgets and needs to craft the perfect safari
                        adventure.
                      </p>
                    </div>
                  )}
                  {activeTab === 'goals' && (
                    <div className='flex items-center space-x-4'>
                      <Target
                        className='text-red-500 flex-shrink-0'
                        size={24}
                      />
                      <p>
                        Our team constantly sets and strives towards new goals,
                        always seeking opportunities to improve and excel.
                      </p>
                    </div>
                  )}
                  {activeTab === 'guides' && (
                    <div className='flex items-center space-x-4'>
                      <Smile
                        className='text-green-500 flex-shrink-0'
                        size={24}
                      />
                      <p>
                        Our knowledgeable, professional safari guides ensure
                        visitors leave with fond memories and enriching
                        experiences.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='text-center mt-6 italic text-gray-600'>
              "We are always honored to have you with us, and your presence is
              our motivation to do better."
            </div>
          </motion.section>

          <motion.div
            className='text-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className='text-3xl font-bold mb-4 text-green-800'>
              Ready to Explore Africa?
            </h2>
            <p className='mb-6 text-lg'>
              Join us for an unforgettable journey through the wonders of East
              Africa.
            </p>
            <button className='px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-md transition-colors duration-300'>
              Plan Your Safari
            </button>
          </motion.div>
        </main>
      </div>
    </>
  )
}
