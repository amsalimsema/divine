import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import {
  ChevronLeft,
  ChevronRight,
  // Clock,
  MapPin,
} from 'lucide-react'

import GB from '../assets/Gorilla.jpg'
//import Monkey from '../assets/Monkey.jpg'
import GM from '../assets/GoldenMonkey.jpg'
// import GV from '../assets/Gorilla_Volcano.jpg'
// import GR from '../assets/Gorilla_rwanda.jpg'
import Chimp from '../assets/chimpanzee.jpg'
import BGT from '../assets/bwindi_gorilla.jpg'
import Elephant from '../assets/divine.jpg'
import GoldenMonkey from '../assets/uganda-golden-monkey.jpg'
import Troop from '../assets/Chimpanzee-troop.jpg'
import Lion from '../assets/lion-in-queen-elizabeth-national-park.jpg'
import Giraffe from '../assets/giraffe_murchision.jpg'
import Impala from '../assets/impala_lake_mburo.jpg'
import Imbalu from '../assets/imbalu-celebrations.jpg'
import Sunset from '../assets/Divine-African-Tours-1.jpg'

const tourPackages = [
  {
    id: 1,
    title: '6 Days Gorilla & Chimpanzee Tracking',
    description:
      "Explore Uganda's wilderness, from gorilla and chimpanzee trekking in Bwindi and wildlife in Queen Elizabeth National Park to the tranquil beauty of Lake Bunyonyi.",
    duration: '6 days',
    location: 'Bwindi & Queen Elizabeth National Park',
    image: Troop,
  },
  {
    id: 2,
    title: '3 Days Bwindi Gorilla Tracking Safari',
    description:
      'The safari offers thrilling encounters with endangered Mountain Gorillas at Bwindi Impenetrable National Park-One of the most popular gorilla trekking destinations in the world.',
    duration: '3 days',
    location: 'Bwindi Impenetrable National Park',
    image: GB,
  },
  {
    id: 3,
    title: '6 Days Uganda And Rwanda Primate Safari',
    description:
      'The safari offers thrilling encounters with endangered Mountain Gorillas and Golden monkeys, starting in Uganda and ending in Rwanda.',
    duration: '6 days',
    location: 'Bwindi Impenetrable & Volcanoes National Park',
    image: GM,
  },
  {
    id: 4,
    title: '5 Days Rwanda Primate Safari',
    description:
      'This primate safari in Nyungwe National Park offers chimpanzee and golden monkey sightings, a canopy walk with scenic views, and a visit to the Genocide Memorial Museum for a poignant historical experience.',
    duration: '',
    location: 'Nyungwe National Park & Chamudong',
    image: Chimp,
  },
  {
    id: 5,
    title: '2 Days Gorilla Tracking at Volcanoes National Park',
    description:
      "This 2 day Gorilla Safari in Rwanda's Volcanoes National Park offers a chance to see endangered mountain gorillas and rare golden monkeys in a stunning volcanic rainforest setting",
    duration: '',
    location: 'Volcanoes National Park',
    image: BGT,
  },
  {
    id: 6,
    title: '7 Days Rwanda Safari',
    description:
      "This 7-day Rwanda gorilla safari explores all of Rwanda's national parks. Highlights include wildlife game drives in Akagera National Park, golden monkey and gorilla trekking in Volcanoes National Park, and chimpanzee trekking in Nyungwe Forest.",
    duration: '',
    location: 'Akagera,Volcanoes,Nyungwe',
    image: Elephant,
  },
  {
    id: 7,
    title: '8 Days Gorilla & Golden Monkey Tracking',
    description:
      "This adventure, starting in Entebbe and ending in Kigali, features stunning landscapes and encounters with Mountain Gorillas, Golden monkeys, and a visit to Dian Fossey's grave, celebrating her conservation work.",
    duration: '',
    location: 'Bwindi,Queen Elizabeth & Volcanoes',
    image: GoldenMonkey,
  },
  {
    id: 8,
    title: '4 days Uganda wildlife safari',
    description:
      'A 4-day Uganda safari featuring gorilla tracking, wildlife viewing in Queen Elizabeth National Park, and visits to the equator monument and Igongo Cultural Museum.',
    duration: '',
    location: 'Bwindi & Queen Elizabeth National Park',
    image: Lion,
  },
  {
    id: 9,
    title: '10 days Uganda wildlife safari',
    description:
      "Discover Uganda's wonders on a 10-day safari featuring game drives, boat rides, gorilla trekking, and chimpanzee tracking—a perfect adventure for all.",
    duration: '',
    location:
      'Murchision Falls, Kibale ,Bwindi & Queen Elizabeth National Park',
    image: Giraffe,
  },
  {
    id: 10,
    title: '7 Days Uganda Safari',
    description:
      'Explore Uganda on a 7-day budget safari with gorilla trekking in Bwindi, wildlife viewing in Queen Elizabeth and Lake Mburo National Parks, and stunning western landscapes.',
    duration: '',
    location: 'Lake Mburo ,Bwindi & Queen Elizabeth National Park',
    image: Impala,
  },
  {
    id: 11,
    title: '5 Days Uganda Safari',
    description:
      'Explore gorillas in Bwindi, culture with the Batwa, and wildlife in Queen Elizabeth, including a Kazinga Channel cruise, before returning to Kampala.',
    duration: '',
    location: 'Bwindi & Queen Elizabeth National Park',
    image: BGT,
  },
  {
    id: 12,
    title: '3 Days Murchison Falls National Park Safari',
    description:
      'This 3-day Murchison Falls safari features diverse wildlife, breathtaking waterfalls, and rhino tracking at Ziwa Sanctuary.',
    duration: '',
    location: 'Murchison Falls National Park',
    image: Giraffe,
  },
  {
    id: 13,
    title: '15 Days Eastern and Northern Cultural Tour to Uganda',
    description:
      "This 15-day tour explores Uganda's diverse cultures, from Bantu and Nilotic communities to the Gishu of Mt. Elgon and the Pygmies in western rainforests.",
    duration: '',
    location:
      'Kidepo, Murchison, Lake Kyoga, Mt.Elgon, West, East & North Uganda',
    image: Imbalu,
  },
  {
    id: 14,
    title: 'Sunset Cruise To Equator Island',
    description:
      'Experience a magical sunset cruise on Lake Victoria, crossing the Equator at 0° latitude, with opportunities to float or swim at this iconic landmark.',
    duration: '',
    location: 'Equator Island - Lake Victoria',
    image: Sunset,
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
    <div className='bg-gradient-to-b from-amber-300 to-amber-100 '>
      <div className='relative w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-gray-900'>
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
                    <h3 className='text-lg sm:text-xl font-medium mb-2'>
                      {pkg.title}
                    </h3>
                    <p className='text-sm text-gray-900 mb-3 flex-grow'>
                      {pkg.description}
                    </p>
                    <div className='mt-auto space-y-2'>
                      {/* <div className='flex items-center text-sm text-gray-900'>
                        <Clock className='w-4 h-4 mr-2 flex-shrink-0' />
                        <span>{pkg.duration}</span>
                      </div> */}
                      {/* <div className='flex items-center text-sm text-gray-900'>
                        <Users className='w-4 h-4 mr-2 flex-shrink-0' />
                        <span>{pkg.groupSize}</span>
                      </div> */}
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
