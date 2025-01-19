import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react'

//tour images
import Sunset from '../assets/Divine-African-Tours-1.jpg'
import Chimp from '../assets/chimpanzee.jpg'
import Gorrila from '../assets/Gorilla.jpg'
import GoldenMonkeyRw from '../assets/uganda-golden-monkey.jpg'
import GoldenMonkeyPrimate from '../assets/GoldenMonkey.jpg'
import Serengeti from '../assets/serengeti.jpg'
import Nakuru from '../assets/Nakuru.jpg'
import Mara from '../assets/Mara.jpg'
import Imbalu from '../assets/imbalu-celebrations.jpg'
import MountainGorilla from '../assets/bwindi_gorilla.jpg'
import ElephantRW from '../assets/ElephantsRw.jpg'

import Chimpanzee from '../assets/chimpanzee.jpg'
import Giraffe from '../assets/giraffe_murchision.jpg'
import Impala from '../assets/impala_lake_mburo.jpg'
import Lion from '../assets/lion-in-queen-elizabeth-national-park.jpg'

const countries = [
  { icon: <Globe className='w-4 h-4' />, name: 'All Tours' },
  { icon: '🇺🇬', name: 'Uganda' },
  { icon: '🇷🇼', name: 'Rwanda' },
  { icon: '🇰🇪', name: 'Kenya' },
  { icon: '🇹🇿', name: 'Tanzania' },
]

const tours = [
  {
    name: '6 Days Gorilla & Chimpanzee Tracking',
    title: 'Primate Adventure',
    image: Chimp,
    categories: ['Uganda'],
    location: 'Bwindi, Queen Elizabeth & Lake Bunyonyi',
  },
  {
    name: '3 days Bwindi Gorilla Tracking Safari',
    title: 'Gorilla Encounter',
    image: Gorrila,
    categories: ['Uganda'],
    location: 'Bwindi Impenetrable National Park',
  },
  {
    name: '6 days Uganda And Rwanda Primate Safari',
    title: 'Two-Country Primate Adventure',
    image: GoldenMonkeyPrimate,
    categories: ['Uganda', 'Rwanda'],
    location: 'Bwindi Impenetrable & Volcanoes National Park',
  },
  {
    name: '8 Days Gorilla & Golden Monkey Tracking',
    title: 'Gorilla and Monkey Expedition',
    image: GoldenMonkeyRw,
    categories: ['Uganda', 'Rwanda'],
    location: 'Bwindi, Queen Elizabeth & Volcanoes',
  },
  {
    name: '4 days Uganda wildlife safari',
    title: 'Uganda Wildlife Express',
    image: Lion,
    categories: ['Uganda'],
    location: 'Bwindi & Queen Elizabeth National Park',
  },
  {
    name: '10 days Uganda wildlife safari',
    title: 'Comprehensive Uganda Wildlife Tour',
    image: Giraffe,
    categories: ['Uganda'],
    location:
      'Murchision Falls, Kibale, Bwindi & Queen Elizabeth National Park',
  },
  {
    name: '7 Days Uganda Safari',
    title: 'Uganda Highlights Safari',
    image: Impala,
    categories: ['Uganda'],
    location: 'Lake Mburo, Bwindi & Queen Elizabeth National Park',
  },
  {
    name: '5 Days Uganda Safari',
    title: 'Uganda Safari Essentials',
    image: MountainGorilla,
    categories: ['Uganda'],
    location: 'Bwindi & Queen Elizabeth National Park',
  },
  {
    name: '3 Days Murchison Falls National Park Safari',
    title: 'Murchison Falls Express',
    image: Giraffe,
    categories: ['Uganda'],
    location: 'Murchison Falls National Park',
  },
  {
    name: '15 Days Eastern and Northern Cultural Tour to Uganda',
    title: 'Comprehensive Uganda Cultural Expedition',
    image: Imbalu,
    categories: ['Uganda'],
    location:
      'Murchision Falls, Kidepo, Lake Kyoga, Mt.Elgon, West, East & North Uganda',
  },
  {
    name: 'Sunset Cruise To Equator Island',
    title: 'Equator Island Adventure',
    image: Sunset,
    categories: ['Uganda'],
    location: 'Equator Island - Lake Victoria',
  },
  {
    name: '4 Days Explore Lake Nakuru & Masai Mara National Parks',
    title: 'Lake and Savannah Adventure',
    image: Nakuru,
    categories: ['Kenya'],
    location: 'Lake Nakuru & Masai Mara National Parks',
  },
  {
    name: '3 Days Masai Mara Safari',
    title: 'Masai Mara Express',
    image: Mara,
    categories: ['Kenya'],
    location: 'Masai Mara National Park',
  },
  {
    name: '15 Days Climb Kilimanjaro & Tanzania Safari',
    title: 'Kilimanjaro Climb and Serengeti Safari',
    image: Serengeti,
    categories: ['Tanzania'],
    location: 'Serengeti National Park, Mount Kilimanjaro',
  },
  {
    name: '6 Days Uganda And Rwanda Primate Safari',
    title: 'Two-Country Primate Adventure',
    image: GoldenMonkeyPrimate,
    categories: ['Uganda', 'Rwanda'],
    location: 'Bwindi Impenetrable & Volcanoes National Park',
  },
  {
    name: '5 Days Rwanda Primate Safari',
    title: 'Rwanda Primate Expedition',
    image: Chimpanzee,
    categories: ['Rwanda'],
    location: 'Nyungwe National Park & Chamudong',
  },
  {
    name: '2 Days Gorilla Tracking at Volcanoes National Park',
    title: 'Volcanoes Gorilla Trek',
    image: MountainGorilla,
    categories: ['Rwanda'],
    location: 'Volcanoes National Park',
  },
  {
    name: '7 Days Rwanda Safari',
    title: 'Comprehensive Rwanda Adventure',
    image: ElephantRW,
    categories: ['Rwanda'],
    location: 'All Rwanda National Parks',
  },
  {
    name: '8 Days Gorilla & Golden Monkey Tracking',
    title: 'Gorilla and Monkey Expedition',
    image: GoldenMonkeyRw,
    categories: ['Uganda', 'Rwanda'],
    location: 'Bwindi, Queen Elizabeth & Volcanoes',
  },
]

export default function TourismPlatform() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCountry, setSelectedCountry] = useState('All Tours')

  const filteredTours = useMemo(() => {
    if (selectedCountry === 'All Tours') {
      return tours
    }
    return tours.filter((tour) =>
      tour.categories.some((category) => category === selectedCountry)
    )
  }, [selectedCountry])

  const nextSlide = () => {
    const increment = window.innerWidth >= 768 ? 3 : 1
    setCurrentIndex((prevIndex) =>
      prevIndex + increment >= filteredTours.length ? 0 : prevIndex + increment
    )
  }

  const prevSlide = () => {
    const increment = window.innerWidth >= 768 ? 3 : 1
    setCurrentIndex((prevIndex) =>
      prevIndex - increment < 0
        ? Math.max(filteredTours.length - increment, 0)
        : prevIndex - increment
    )
  }

  const getCountryTitle = (country) => {
    switch (country) {
      case 'All Tours':
        return 'Explore all East African tours'
      case 'Uganda':
        return 'Explore tours in Uganda'
      case 'Rwanda':
        return "Discover Rwanda's beauty"
      case 'Kenya':
        return 'Experience Kenyan adventures'
      case 'Tanzania':
        return "Tanzania's wonders await"
      default:
        return `Discover ${country} tours`
    }
  }

  const getSeoFriendlyUrl = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  return (
    <div className='bg-white text-black px-2 sm:px-8 py-6' id='tours-section'>
      {/* Hero Section */}
      <div className='text-center mb-12'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl  max-w-2xl mx-auto leading-tight'>
          Unforgettable adventures,
          <br />
          in the heart of East Africa.
        </h1>
      </div>

      {/* Countries */}
      <div className='mb-12 overflow-x-auto'>
        <div className='flex flex-wrap justify-center gap-4 py-2 sm:py-0'>
          {countries.map((country, index) => (
            <button
              key={index}
              onClick={() => setSelectedCountry(country.name)}
              className={`px-4 py-2 rounded-md flex items-center gap-2 text-sm m-1
                ${
                  country.name === selectedCountry
                    ? 'bg-[#2ba924] text-white'
                    : 'border border-black hover:bg-gray-100'
                }`}
            >
              <span>{country.icon}</span>
              <span>{country.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tours Section */}
      <div className='mb-12'>
        <div className='text-center mb-6'>
          <h2 className='text-xl font-semibold'>
            {getCountryTitle(selectedCountry)}
          </h2>
        </div>

        {/* Carousel */}
        <div className='relative overflow-hidden'>
          <div className='flex gap-4'>
            {filteredTours
              .slice(
                currentIndex,
                currentIndex + (window.innerWidth >= 768 ? 3 : 1)
              )
              .map((tour, index) => (
                <Link
                  key={index}
                  to={`/tour/${getSeoFriendlyUrl(tour.name)}`}
                  className='relative flex-none w-full sm:w-[240px] md:w-[calc(33.333%-1rem)] cursor-pointer'
                >
                  <div className='flex flex-col h-[400px] overflow-hidden rounded-lg bg-gray-200'>
                    <div className='relative h-[75%] overflow-hidden group'>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50' />
                      <img
                        src={tour.image || '/placeholder.svg'}
                        alt={tour.name}
                        className='object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110'
                      />
                    </div>
                    <div className='h-[25%] p-4'>
                      <h3 className='font-semibold text-lg leading-tight mb-1 text-gray-900 line-clamp-1'>
                        {tour.title}
                      </h3>
                      <p className='text-sm text-gray-600 line-clamp-1'>
                        {tour.name}
                      </p>
                      <p className='text-xs text-gray-500 mt-1'>
                        {tour.categories.join(', ')}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-md p-2'
          >
            <ChevronLeft className='w-6 h-6 text-white' />
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-md p-2'
          >
            <ChevronRight className='w-6 h-6 text-white' />
          </button>

          {/* Dots (hidden on all devices) */}
          <div className='hidden justify-center gap-1 mt-4'>
            {Array.from({ length: filteredTours.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
