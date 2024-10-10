import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import images from assets folder
import wildAfricaImage from '../assets/Divine-African-Tours-1.webp'
import ancientCulturesImage from '../assets/Divine-African-Tours-2.webp'
import luxuryAdventureImage from '../assets/Divine-Tours-3.webp'

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
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
    }, 5000) // Change every 60 seconds (1 minute)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className='relative min-h-screen bg-cover bg-center flex flex-col transition-all duration-1000 ease-in-out'
      style={{ backgroundImage: `url(${heroContent[currentIndex].image})` }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-5'></div>

      <div className='relative z-10 flex-grow flex flex-col justify-end items-start text-left'>
        <div className='container mx-auto px-4 sm:px-6 pb-16 md:pb-24'>
          <div className='max-w-xl'>
            {/* <motion.a
              href='/'
              className='text-white text-3xl font-bold mb-8 inline-block'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Divine African Tours
            </motion.a> */}
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
