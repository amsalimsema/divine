import { useState, useEffect } from 'react'
import { Play, Pause, ArrowDownRight } from 'lucide-react'
import { motion } from 'framer-motion'

const scrollKeyframes = `
  @keyframes scrollVertical {
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
          animation: isScrolling
            ? 'scrollVertical 30s linear infinite'
            : 'none',
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

// Fixed Mobile single image display with auto-advance
const MobileSingleImage = ({ images, isScrolling, setIsScrolling }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const allImages = [...images.column1, ...images.column2]

  // Auto-advance images when isScrolling is true
  useEffect(() => {
    if (isScrolling) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length)
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [isScrolling, allImages.length])

  return (
    <div className='md:hidden relative h-[300px] w-full overflow-hidden p-0 m-0'>
      {/* Full-width container that breaks out of all parent containers */}
      <div
        className='absolute left-0 right-0 top-0 bottom-0 p-0 m-0'
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
        }}
      >
        {/* Image slider container with no padding/margin */}
        <div className='relative h-full w-full overflow-hidden p-0 m-0'>
          {/* Image track with no padding/margin */}
          <div
            className='absolute flex h-full p-0 m-0'
            style={{
              width: `${allImages.length * 100}vw`,
              transform: `translateX(-${currentIndex * 100}vw)`,
              transition: 'transform 500ms ease',
            }}
          >
            {allImages.map((img, index) => (
              <div
                key={index}
                className='w-screen h-full flex-shrink-0 p-0 m-0'
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className='h-full w-full object-cover p-0 m-0'
                  style={{ display: 'block' }} // Ensure no extra space
                />
              </div>
            ))}
          </div>
        </div>

        {/* Play/Pause button */}
        <button
          onClick={() => setIsScrolling(!isScrolling)}
          className='absolute bottom-4 right-4 p-2 bg-white/50 rounded-full hover:bg-white/75 transition-colors z-10'
          aria-label={
            isScrolling ? 'Pause image advance' : 'Play image advance'
          }
        >
          {isScrolling ? (
            <Pause className='w-5 h-5' />
          ) : (
            <Play className='w-5 h-5' />
          )}
        </button>
      </div>
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
      src: 'https://images.ctfassets.net/4uh13bd20zjq/VIK94LoqQbQEtKR5MDarV/86aed5f208320bc5e9f18ca1fd20e5ab/lion-in-queen-elizabeth-national-park.jpg?w=850&h=500&fm=jpg&fl=progressive',
      alt: 'Lion in the savanna',
      aspect: '4/3',
    },
    {
      src: 'https://images.ctfassets.net/4uh13bd20zjq/2fydVAZeIT9I1JRJM0GyKQ/740e24744bffecede023f1ae5d2e3141/impala_lake_mburo.jpg?w=1920&h=1280&fm=jpg&fl=progressive',
      alt: 'Impala',
      aspect: 'square',
    },
    {
      src: 'https://images.ctfassets.net/4uh13bd20zjq/D90honCWvEP4KUV82EO1r/bc28b3404d9278f795f5f74f1576e2aa/Mara.jpg?w=640&h=427&fm=jpg&fl=progressive',
      alt: 'Zebras grazing',
      aspect: '4/3',
    },
    {
      src: 'https://images.ctfassets.net/4uh13bd20zjq/6GFicKthut49pcvHyWueAU/5872d6f2ebceaa72bda04a23f0d7cfd7/bwindi_gorilla.jpg?w=1920&h=1503&fm=jpg&fl=progressive',
      alt: 'Gorilla in the forest',
      aspect: 'square',
    },
  ]
  const columnTwoImages = [
    {
      src: 'https://images.ctfassets.net/4uh13bd20zjq/7MuHpS3ZODAgG9kOR9A90z/09f58ea10ce1043e1d99187693a2244b/uganda-golden-monkey.jpg?w=750&h=450&fm=jpg&fl=progressive',
      alt: 'Golden monkey',
      aspect: 'square',
    },
    {
      src: 'https://images.ctfassets.net/4uh13bd20zjq/3u3vx1VmdZ2IPHuAi71uD6/073cead2ca20cbff399d8c405e8339fc/Nakuru.jpg?w=640&h=427&fm=jpg&fl=progressive',
      alt: 'Flamingos on nakuru',
      aspect: '4/3',
    },
    {
      src: 'https://images.ctfassets.net/4uh13bd20zjq/1sqIyoXPoindIetpSA4ZrT/1d27b6d049fe16e0bfd6943cd4d4e353/chimpanzee.jpg?w=800&h=450&fm=jpg&fl=progressive',
      alt: 'Equator Island Chimp',
      aspect: 'square',
    },
    {
      src: 'https://images.ctfassets.net/4uh13bd20zjq/59fQJ4qa1dCEsZmr62CpqX/57e4ad9cd9f27e7c3b702f9638c043c9/giraffe_murchision.jpg?w=1080&h=721&fm=jpg&fl=progressive',
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
              padding-top: 0rem;
              margin-top:5px;
            }
          }
          @media (max-width: 768px) {
            .max-w-7xl.mx-auto.px-4 {
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
          }
        `}
      </style>
      <div className='bg-white text-black'>
        <div className='max-w-7xl mx-auto px-4 min-h-screen'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 flex-col lg:flex-row'>
            {/* Mobile Single Image Display */}
            <div className='md:hidden relative p-0 m-0'>
              <MobileSingleImage
                images={{ column1: columnOneImages, column2: columnTwoImages }}
                isScrolling={isScrolling}
                setIsScrolling={setIsScrolling}
              />
            </div>

            {/* Desktop Two-Column Vertical Scroll - Hidden on Mobile */}
            <div className='relative hidden md:grid grid-cols-2 gap-1 h-[310px] lg:h-[600px] w-full lg:w-auto pt-0 lg:pt-0 mobile-top-spacing'>
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
            <div className='h-full flex items-center w-full lg:w-auto mt-0 px-2 md:mt-0'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='space-y-6 px-0 md:px-0'
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-black'
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
