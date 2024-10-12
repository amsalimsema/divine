import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

// Import JPG images
import wildAfricaImage from '../assets/Divine-African-Tours-1.jpg'
import ancientCulturesImage from '../assets/Divine-African-Tours-2.jpg'
import luxuryAdventureImage from '../assets/Divine-Tours-3.jpg'

const heroContent = [
  {
    image: wildAfricaImage,
    title: 'Discover the Wild Heart of Africa',
    description:
      "Embark on unforgettable safaris across the breathtaking landscapes of Africa. Experience nature's grandeur up close.",
  },
  {
    image: ancientCulturesImage,
    title: 'Explore Ancient Cultures and Traditions',
    description:
      'Immerse yourself in the rich heritage of African tribes. Witness age-old customs and vibrant celebrations.',
  },
  {
    image: luxuryAdventureImage,
    title: 'Luxury Meets Adventure',
    description:
      'Experience the perfect blend of comfort and excitement. Our tours offer premium accommodations amidst wild terrains.',
  },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const transitionInterval = 5000 // 5 seconds

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
    }, transitionInterval)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center transition-all duration-300'
        style={{
          backgroundImage: `url(${heroContent[currentIndex].image})`,
        }}
      >
        <img
          src={heroContent[currentIndex].image}
          alt=''
          className='w-full h-full object-cover'
        />
      </div>

      <div className='absolute inset-0 bg-black bg-opacity-50 z-10'></div>

      <div className='relative z-20 flex flex-col justify-end items-start text-left min-h-screen'>
        <div className='container mx-auto px-4 sm:px-6 pb-16 md:pb-24'>
          <div className='max-w-xl'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {heroContent[currentIndex].title}
                </motion.h1>
                <motion.p
                  className='text-lg md:text-xl text-gray-200 mb-8'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {heroContent[currentIndex].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            <Link
              to='/'
              className='inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded text-lg transition-colors duration-300'
            >
              Start Your Adventure
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
