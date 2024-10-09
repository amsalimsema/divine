import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Star,
  Clock,
  Users,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const tourPackages = [
  {
    title: 'Murchison Falls Safari',
    description:
      "Experience the breathtaking wildlife and the world's most powerful waterfall in Murchison Falls National Park.",
    duration: '5 days',
    groupSize: '6-12',
    location: 'Murchison Falls National Park, Uganda',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpfGVufDB8fDB8fHww',
  },
  {
    title: 'Queen Elizabeth Park Tour',
    description:
      "Witness the diverse ecosystems and abundant wildlife in Uganda's most popular national park.",
    duration: '6 days',
    groupSize: '4-10',
    location: 'Queen Elizabeth National Park, Uganda',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Kibale Forest Expedition',
    description:
      'Explore the lush rainforest and encounter diverse primate species in Kibale National Park.',
    duration: '4 days',
    groupSize: '4-8',
    location: 'Kibale National Park, Uganda',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhbiUyMGVsZXBoYW50fGVufDB8fDB8fHww',
  },
  {
    title: 'Kidepo Valley Adventure',
    description:
      'Discover the remote beauty and unique wildlife of Kidepo Valley National Park in northern Uganda.',
    duration: '7 days',
    groupSize: '2-8',
    location: 'Kidepo Valley National Park, Uganda',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlcmVuZ2V0aXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Lake Mburo Safari',
    description:
      "Experience the diverse wildlife and beautiful landscapes in one of Uganda's smallest national parks.",
    duration: '3 days',
    groupSize: '4-10',
    location: 'Lake Mburo National Park, Uganda',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Bwindi Gorilla Trek',
    description:
      'Embark on an unforgettable journey to see the endangered mountain gorillas in their natural habitat.',
    duration: '5 days',
    groupSize: '2-6',
    location: 'Bwindi Impenetrable National Park, Uganda',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D',
  },
]

export default function PopularTourPackages() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (tourPackages.length - 2)
      )
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: currentIndex * (containerRef.current.clientWidth / 3),
        behavior: 'smooth',
      })
    }
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + tourPackages.length - 2) % (tourPackages.length - 2)
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (tourPackages.length - 2))
  }

  const handleTourClick = (tourName) => {
    navigate(`/tour/${tourName.toLowerCase().replace(/\s+/g, '-')}`)
  }

  return (
    <section className='w-full py-12 bg-[#F4A460]'>
      <div className='container mx-auto px-0'>
        <h2 className='text-gray-900 text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-center'>
          Popular Tour Packages
        </h2>
        <div className='relative'>
          <div
            ref={containerRef}
            className='flex overflow-x-hidden scroll-smooth'
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {tourPackages.map((tour, index) => (
              <div
                key={index}
                className='w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4'
                style={{ scrollSnapAlign: 'start' }}
              >
                <div
                  onClick={() => handleTourClick(tour.title)}
                  className='bg-white/30 rounded-lg shadow-md overflow-hidden h-full cursor-pointer'
                >
                  <div className='relative overflow-hidden'>
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className='w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110'
                    />
                  </div>
                  <div className='p-4'>
                    <div className='flex justify-between items-start mb-2'>
                      <h3 className='text-gray-900 text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis'>
                        {tour.title}
                      </h3>
                      <span className='inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded ml-2 flex-shrink-0'>
                        <Star className='w-4 h-4 mr-1 inline' />
                        {tour.rating}
                      </span>
                    </div>
                    <p className='text-gray-900 mb-4'>{tour.description}</p>
                    <div className='flex justify-between items-center mb-4'>
                      <div className='flex items-center'>
                        <Clock className='w-4 h-4 mr-2 text-gray-900' />
                        <span className='text-sm'>{tour.duration}</span>
                      </div>
                      <div className='flex items-center'>
                        <Users className='w-4 h-4 mr-2 text-gray-900' />
                        <span className='text-sm'>{tour.groupSize}</span>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <MapPin className='w-4 h-4 mr-2 text-gray-900' />
                      <span className='text-sm'>{tour.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className='absolute left-0 top-[calc(50%-45px)] transform -translate-y-1/2 bg-white p-2 rounded-md shadow-md hover:bg-gray-100 transition duration-300'
            onClick={handlePrev}
          >
            <ChevronLeft className='h-6 w-6 text-gray-600' />
          </button>
          <button
            className='absolute right-0 top-[calc(50%-45px)] transform -translate-y-1/2 bg-white p-2 rounded-md shadow-md hover:bg-gray-100 transition duration-300'
            onClick={handleNext}
          >
            <ChevronRight className='h-6 w-6 text-gray-600' />
          </button>
        </div>
      </div>
    </section>
  )
}
