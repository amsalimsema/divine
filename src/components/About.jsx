import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, Globe, Heart, Users, TreePine, Star, Target, Book, Smile } from 'lucide-react'
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
      <Hero title='Our story is simple,' sub='We are divine' />
      <div className='bg-white text-black'>
        <main className='container mx-auto px-1 py-6 sm:px-1 lg:px-8'>
          <motion.div {...fadeIn}>
            <div className='h-full bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6'>
              
              <p>
                Divine African Holidays tours and travel is a ground handling
                tours and Travel Company that organizes both inbound and
                outbound safaris throughout the East African region. Ingeniously
                owned and managed. Divine African Holidays is a thoroughly
                professional and established company.
              </p>
              <br />
              <p>
                We specialize in tailor-made and set departure safaris in the
                East African region ensuring that they are Eco- friendly and
                respecting the cultures of the local community.
              </p>
              <br />
              <p>
                As part of giving back to the community, a percentage of our
                revenue is given to selected orphanages.
              </p>
              <br />
              <p>
                In a way to conserve the environment, we do plant trees and also
                encourage people to do the same. If more trees are planted, then
                the world's environment will become a safer place to live in.
                This is because trees provide oxygen to the environment, provide
                medicine, provide shelter for birds that attract tourists, and
                reduce on pollution.
              </p>
              <br />
              At Divine African holidays tours and travel we are enthusiastic in
              making the tourism industry offering professional advice on
              corporate ventures.
            </div>
          </motion.div>

          <motion.section
            className='mb-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className='text-3xl font-medium text-center my-8 text-black'>
              Our Impact
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 text-center'>
                <Heart className='mx-auto mb-4 text-[#2ba924]' size={40} />
                <h3 className='text-xl font-semibold mb-2'>
                  Community Support
                </h3>
                <p>
                  A percentage of our revenue is given to selected orphanages,
                  supporting the local community.
                </p>
              </div>
              <div className='bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 text-center'>
                <TreePine className='mx-auto mb-4 text-[#2ba924]' size={40} />
                <h3 className='text-xl font-semibold mb-2'>
                  Environmental Conservation
                </h3>
                <p>
                  We actively plant trees and encourage others to do the same,
                  contributing to a safer environment.
                </p>
              </div>
              <div className='bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 text-center'>
                <Users className='mx-auto mb-4 text-[#2ba924]' size={40} />
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
            <h2 className='text-3xl text-center mb-8 text-black font-medium'>
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
                          ? 'bg-[#2ba924] text-white'
                          : 'bg-gray-100 text-black hover:bg-gray-200'
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
                        className='text-[#2ba924] flex-shrink-0'
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
                      <Book className='text-[#2ba924] flex-shrink-0' size={24} />
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
                        className='text-[#2ba924] flex-shrink-0'
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
                        className='text-[#2ba924] flex-shrink-0'
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
            <div className='text-center mt-6 italic text-black'>
              "We are always honored to have you with us, and your presence is
              our motivation to do better."
            </div>
          </motion.section>

          
        </main>
      </div>
    </>
  )
}

