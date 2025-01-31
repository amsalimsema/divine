import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, ArrowDownRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Import desktop images

import Chimp from '../assets/chimpanzee.jpg'
import GoldenMonkeyRw from '../assets/uganda-golden-monkey.jpg'
import Nakuru from '../assets/Nakuru.jpg'
import Mara from '../assets/Mara.jpg'
import MountainGorilla from '../assets/bwindi_gorilla.jpg'
import Giraffe from '../assets/giraffe_murchision.jpg'
import Impala from '../assets/impala_lake_mburo.jpg'
import Lion from '../assets/lion-in-queen-elizabeth-national-park.jpg'

const scrollKeyframes = `
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }
`

const ImageColumn = ({ images, isScrolling }) => {
  return (
    <div className='overflow-hidden h-[300px] md:h-full relative'>
      <div
        className='flex flex-col'
        style={{
          animation: isScrolling ? 'scroll 30s linear infinite' : 'none',
          animationPlayState: isScrolling ? 'running' : 'paused',
        }}
      >
        {[...images, ...images].map((img, index) => (
          <div key={index} className='w-full mb-0 md:mb-1 last:mb-0'>
            <div
              className={
                img.aspect === 'square' ? 'aspect-square' : 'aspect-[4/3]'
              }
            >
              <img
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          </div>
        ))}
      </div>
      <div className='absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/65 to-transparent pointer-events-none'></div>
      <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/65 to-transparent pointer-events-none'></div>
    </div>
  )
}

export default function Hero() {
  const [isScrolling, setIsScrolling] = useState(true)
  const [currentCountry, setCurrentCountry] = useState('Uganda')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const countries = ['Uganda', 'Kenya', 'Rwanda', 'Tanzania']
  // const bottomRef = useRef(null) //Removed as per update

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentCountry((prevCountry) => {
          const currentIndex = countries.indexOf(prevCountry)
          const nextIndex = (currentIndex + 1) % countries.length
          return countries[nextIndex]
        })
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const scrollToTours = () => {
    const toursSection = document.getElementById('tours-section')
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const columnOneImages = [
    {
      src: Lion,
      alt: 'Lion in the savanna',
      aspect: '4/3',
    },
    {
      src: Impala,
      alt: 'Impala',
      aspect: 'square',
    },
    {
      src: Mara,
      alt: 'Zebras grazing',
      aspect: '4/3',
    },
    {
      src: MountainGorilla,
      alt: 'Gorilla in the forest',
      aspect: 'square',
    },
  ]
  const columnTwoImages = [
    {
      src: GoldenMonkeyRw,
      alt: 'Golden monkey',
      aspect: 'square',
    },
    {
      src: Nakuru,
      alt: 'Flamingos on nakuru',
      aspect: '4/3',
    },
    {
      src: Chimp,
      alt: 'Equator Island Chimp',
      aspect: 'square',
    },
    {
      src: Giraffe,
      alt: 'Giraffe',
      aspect: '4/3',
    },
  ]

  return (
    <>
      <style>{scrollKeyframes}</style>
      <style>
        {`
          .country-transition {
            display: inline-block;
            transition: transform 0.5s ease, opacity 0.5s ease;
          }

          .country-transition-enter {
            transform: translateY(20px);
            opacity: 0;
          }

          .country-transition-enter-active {
            transform: translateY(0);
            opacity: 1;
          }

          .country-transition-exit {
            position: absolute;
            transform: translateY(0);
            opacity: 1;
          }

          .country-transition-exit-active {
            transform: translateY(-20px);
            opacity: 0;
          }
          @media (max-width: 768px) {
            .flex.flex-col > div {
              margin-bottom: 0.5rem;
            }
          }
          @media (max-width: 1023px) {
            .mobile-top-spacing {
              padding-top: 2rem;
            }
          }
        `}
      </style>
      <div className='bg-white text-black'>
        <div className='max-w-7xl mx-auto px-4 min-h-screen'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 flex-col lg:flex-row'>
            {/* Right Column - Scrolling Image Grid mobile-top-spacing*/}
            <div className='relative grid grid-cols-2 gap-1 h-[300px] lg:h-[600px] w-full lg:w-auto pt-0 lg:pt-0 '>
              <ImageColumn images={columnOneImages} isScrolling={isScrolling} />
              <ImageColumn images={columnTwoImages} isScrolling={isScrolling} />
              <button
                onClick={() => setIsScrolling(!isScrolling)}
                className='absolute bottom-4 right-4 p-2 bg-white/50 rounded-full hover:bg-white/75 transition-colors z-10'
                aria-label={
                  isScrolling ? 'Pause image scroll' : 'Play image scroll'
                }
              >
                {isScrolling ? (
                  <Pause className='w-6 h-6' />
                ) : (
                  <Play className='w-6 h-6' />
                )}
              </button>
            </div>

            {/* Left Column */}
            <div className='h-full flex items-center w-full lg:w-auto mt-6 md:mt-0'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='space-y-6'
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black'
                >
                  Discover the wild heart of{' '}
                  <span
                    className={`text-[#2ba924] country-transition ${
                      isTransitioning
                        ? 'country-transition-exit country-transition-exit-active'
                        : 'country-transition-enter country-transition-enter-active'
                    }`}
                  >
                    {currentCountry}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className='text-lg text-gray-600'
                >
                  Experience the untamed beauty of East Africa like never before
                  as you embark on unforgettable wildlife safaris across the
                  breathtaking landscapes of Uganda, Kenya, Rwanda, and
                  Tanzania.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className='text-lg text-gray-600'
                >
                  Discover the raw splendor of vast savannahs, lush forests, and
                  towering mountains, where every destination unveils a unique
                  blend of adventure, vibrant cultures, and natural wonders.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  onClick={scrollToTours}
                  className='mt-6 px-4 py-2 text-sm bg-transparent border-2 border-[#2ba924] text-[#2ba924] rounded-md hover:bg-[#2ba924] hover:text-white transition-colors duration-300 flex items-center mx-auto lg:mx-0 w-fit'
                >
                  Start Your Adventure
                  <ArrowDownRight className='ml-2 h-4 w-4' />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Removed <div ref={bottomRef} /> */}
      </div>
    </>
  )
}
