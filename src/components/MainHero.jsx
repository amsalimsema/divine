import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

// Import desktop images
import wildAfricaDesktop from '../assets/Divine-Tours-3.webp'
import ancientCulturesDesktop from '../assets/Divine-African-Tours-1.webp'
import luxuryAdventureDesktop from '../assets/divine.jpg'

// Import mobile images
import wildAfricaMobile from '../assets/divine-mob.jfif'
import ancientCulturesMobile from '../assets/divine-mob.jfif'
import luxuryAdventureMobile from '../assets/divine-mob.jfif'

const heroContent = [
  {
    desktopImage: wildAfricaDesktop,
    mobileImage: wildAfricaMobile,
    title: 'Discover the Wild Heart of Africa',
    description:
      "Embark on unforgettable safaris across the breathtaking landscapes of Africa. Experience nature's grandeur up close.",
  },
  {
    desktopImage: ancientCulturesDesktop,
    mobileImage: ancientCulturesMobile,
    title: 'Explore Ancient Cultures and Traditions',
    description:
      'Immerse yourself in the rich heritage of African tribes. Witness age-old customs and vibrant celebrations.',
  },
  {
    desktopImage: luxuryAdventureDesktop,
    mobileImage: luxuryAdventureMobile,
    title: 'Luxury Meets Adventure',
    description:
      'Experience the perfect blend of comfort and excitement. Our tours offer premium accommodations amidst wild terrains.',
  },
]

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    const transitionInterval = 5000 // 5 seconds

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
    }, transitionInterval)

    return () => clearInterval(intervalId)
  }, [])

  const currentImage = isMobile
    ? heroContent[currentIndex].mobileImage
    : heroContent[currentIndex].desktopImage

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center transition-all duration-300'
        style={{ backgroundImage: `url(${currentImage})` }}
      />

      <div className='absolute inset-0 bg-black bg-opacity-40 z-10'></div>

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
                  className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {heroContent[currentIndex].title}
                </motion.h1>
                <motion.p
                  className='text-base sm:text-lg md:text-xl text-gray-200 mb-8'
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
              className='inline-block bg-green-800 hover:bg-amber-600 text-white font-normal py-2 px-6 sm:py-3 sm:px-8 rounded text-base sm:text-lg transition-colors duration-300'
            >
              Start Your Adventure
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
