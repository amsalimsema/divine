import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import { ChevronLeft, ChevronRight, Clock, Users, MapPin } from 'lucide-react'

const tourPackages = [
  {
    id: 1,
    title: 'Bwindi Gorilla Tracking',
    description:
      'The safari begins in Rwanda, the "Land of a Thousand Hills," and leads you to Bwindi Impenetrable National Park, the famous home of the majestic Mountain Gorillas.',
    duration: '3 days',
    groupSize: '6-12 people',
    location: 'Bwindi Impenetrable National Park ',
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  },
  ,
  {
    id: 2,
    title: 'Primate Safari',
    description:
      'This safari offers unforgettable encounters with endangered Mountain Gorillas and rare Golden Monkeys, starting in Uganda and continuing into Rwanda. Deeply rewarding experience.',
    duration: '6 days',
    groupSize: '4-8 people',
    location: 'Uganda | Rwanda',
    image:
      'https://images.unsplash.com/photo-1449104573673-83d90bf3484f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Volcanoes Gorilla Tracking',
    description:
      'This 2-day Gorilla Safari, starts and ends in Rwanda, explores Volcanoes National Park in northwestern Rwanda, home to endangered Mountain Gorillas and rare Golden Monkeys.',
    duration: '2 days',
    groupSize: '10-20 people',
    location: 'Volcanoes National Park',
    image:
      'https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: 4,
    title: 'Moroccan Desert Expedition',
    description:
      'Journey through the Sahara on camelback and sleep under the stars in luxury desert camps.',
    duration: '8 days',
    groupSize: '6-10 people',
    location: 'Morocco',
    image:
      'https://images.unsplash.com/photo-1449104573673-83d90bf3484f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Victoria Falls Adventure',
    description:
      'Witness the power of Victoria Falls and enjoy thrilling activities in the surrounding area.',
    duration: '6 days',
    groupSize: '8-16 people',
    location: 'Zimbabwe/Zambia',
    image:
      'https://images.unsplash.com/photo-1449104573673-83d90bf3484f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'Gorilla Trekking Expedition',
    description:
      'Trek through lush forests to encounter magnificent mountain gorillas in their natural habitat.',
    duration: '4 days',
    groupSize: '4-8 people',
    location: 'Uganda',
    image:
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  },
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()
  const imageRefs = useRef([])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove('lazy')
          observer.unobserve(img)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    imageRefs.current.forEach((img) => {
      if (img) {
        observer.observe(img)
      }
    })

    return () => {
      imageRefs.current.forEach((img) => {
        if (img) {
          observer.unobserve(img)
        }
      })
    }
  }, [])

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0))
  }

  const handleNext = () => {
    const maxIndex = isMobile
      ? tourPackages.length - 1
      : tourPackages.length - 3
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : prevIndex
    )
  }

  const handleTourClick = (tourTitle) => {
    const slug = tourTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    navigate(`/tour/${slug}`)
  }

  const visiblePackages = isMobile ? 1 : 3

  return (
    <div className='bg-gradient-to-b from-amber-300 to-amber-100'>
      <div className='relative max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-gray-900'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8'>
          Our Tour Packages
        </h2>
        <div className='overflow-hidden' {...handlers}>
          <div
            className='flex transition-transform duration-300 ease-in-out'
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visiblePackages)
              }%)`,
            }}
          >
            {tourPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`${
                  isMobile ? 'w-full' : 'w-1/3'
                } flex-shrink-0 px-2`}
              >
                <div
                  onClick={() => handleTourClick(pkg.title)}
                  className='bg-amber-600/20 rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform duration-300 ease-in-out hover:scale-101 cursor-pointer'
                >
                  <div className='relative overflow-hidden'>
                    <img
                      ref={(el) => (imageRefs.current[index] = el)}
                      data-src={pkg.image}
                      alt={pkg.title}
                      className='lazy w-full h-48 sm:h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-110'
                      width='800'
                      height='600'
                      loading={index < 3 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className='p-4 flex flex-col flex-grow'>
                    <h3 className='text-lg sm:text-xl font-semibold mb-2'>
                      {pkg.title}
                    </h3>
                    <p className='text-sm text-gray-900 mb-4 flex-grow'>
                      {pkg.description}
                    </p>
                    <div className='mt-auto space-y-2'>
                      <div className='flex items-center text-sm text-gray-900'>
                        <Clock className='w-4 h-4 mr-2 flex-shrink-0' />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className='flex items-center text-sm text-gray-900'>
                        <Users className='w-4 h-4 mr-2 flex-shrink-0' />
                        <span>{pkg.groupSize}</span>
                      </div>
                      <div className='flex items-center text-sm text-gray-900'>
                        <MapPin className='w-4 h-4 mr-2 flex-shrink-0' />
                        <span>{pkg.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed z-10'
          aria-label='Previous package'
        >
          <ChevronLeft className='w-6 h-6 text-gray-800' />
        </button>
        <button
          onClick={handleNext}
          disabled={
            currentIndex ===
            (isMobile ? tourPackages.length - 1 : tourPackages.length - 3)
          }
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed z-10'
          aria-label='Next package'
        >
          <ChevronRight className='w-6 h-6 text-gray-800' />
        </button>
        <div className='mt-4 flex justify-center'>
          {tourPackages.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-green-800' : 'bg-amber-300'
              }`}
              aria-label={`Go to package ${index + 1}`}
              role='button'
              tabIndex={0}
              onClick={() => setCurrentIndex(index)}
              onKeyDown={(e) => e.key === 'Enter' && setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
