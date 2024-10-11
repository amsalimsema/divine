import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import primary (WebP) images
import wildAfricaImageWebp from '../assets/Divine-African-Tours-1.webp'
import ancientCulturesImageWebp from '../assets/Divine-African-Tours-2.webp'
import luxuryAdventureImageWebp from '../assets/Divine-Tours-3.webp'

// Import fallback (JPG) images
import wildAfricaImageJpg from '../assets/Divine-African-Tours-1.jpg'
import ancientCulturesImageJpg from '../assets/Divine-African-Tours-2.jpg'
import luxuryAdventureImageJpg from '../assets/Divine-Tours-3.jpg'

const heroContent = [
  {
    image: wildAfricaImageWebp,
    fallbackImage: wildAfricaImageJpg,
    title: 'Discover the Wild Heart of Africa',
    description:
      "Embark on unforgettable safaris across the breathtaking landscapes of Africa. Experience nature's grandeur up close.",
  },
  {
    image: ancientCulturesImageWebp,
    fallbackImage: ancientCulturesImageJpg,
    title: 'Explore Ancient Cultures and Traditions',
    description:
      'Immerse yourself in the rich heritage of African tribes. Witness age-old customs and vibrant celebrations.',
  },
  {
    image: luxuryAdventureImageWebp,
    fallbackImage: luxuryAdventureImageJpg,
    title: 'Luxury Meets Adventure',
    description:
      'Experience the perfect blend of comfort and excitement. Our tours offer premium accommodations amidst wild terrains.',
  },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [imageLoadError, setImageLoadError] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setNextIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
    }, 3500) // Change slightly before the transition to preload the next image

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setCurrentIndex(nextIndex)
      setImageLoadError(false) // Reset error state when changing images
    }, 2000)

    return () => clearTimeout(transitionTimer)
  }, [nextIndex])

  const handleImageError = () => {
    setImageLoadError(true)
  }

  const currentImage = imageLoadError
    ? heroContent[currentIndex].fallbackImage
    : heroContent[currentIndex].image

  const nextImage = imageLoadError
    ? heroContent[nextIndex].fallbackImage
    : heroContent[nextIndex].image

  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Current Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${currentImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 1s ease-in-out',
        }}
      />

      {/* Preload Next Image */}
      <img
        src={nextImage}
        alt=''
        style={{ display: 'none' }}
        onError={handleImageError}
      />

      <div className='absolute inset-0 bg-black bg-opacity-5'></div>

      <div className='relative z-10 flex-grow flex flex-col justify-end items-start text-left min-h-screen'>
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
            <motion.button
              className='bg-green-600/40 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Adventure
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
