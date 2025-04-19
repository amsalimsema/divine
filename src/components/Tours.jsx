import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react'

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
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/1sqIyoXPoindIetpSA4ZrT/1d27b6d049fe16e0bfd6943cd4d4e353/chimpanzee.jpg?w=800&h=450&fm=jpg&fl=progressive',
    categories: ['Uganda'],
    location: 'Bwindi, Queen Elizabeth & Lake Bunyonyi',
  },
  {
    name: '7 days of Adventure, Wildlife & Primates',
    title: 'Wildlife & Primate Adventure',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/dVt2lGWjCPAhbpOMyXZO9/8b00f1791e02d7ba8a0d5f32cf000aa3/buffalo.jpg?w=1920&h=1285&fm=jpg&fl=progressive',
    categories: ['Uganda'],
    location: 'Kibale, Queen Elizabeth & Bwindi',
  },
  {
    name: '3 days Bwindi Gorilla Tracking Safari',
    title: 'Gorilla Encounter',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/48HODmruh7Bg0LVd2GHZrj/5eb4b7f3b882ae618062717365f0010b/Gorilla.jpg?w=554&h=554&fm=jpg&fl=progressive',
    categories: ['Uganda'],
    location: 'Bwindi Impenetrable National Park',
  },
  {
    name: '6 days Uganda And Rwanda Primate Safari',
    title: 'Two-Country Primate Adventure',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/2tBADC3vvAVR2cs2jRTlwP/757526e4d48a17c54514dfa6af2eab6f/GoldenMonkey.jpg?w=1200&h=1021&fm=jpg&fl=progressive',
    categories: ['Uganda', 'Rwanda'],
    location: 'Bwindi Impenetrable & Volcanoes National Park',
  },
  {
    name: '8 Days Gorilla & Golden Monkey Tracking',
    title: 'Gorilla and Monkey Expedition',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/7MuHpS3ZODAgG9kOR9A90z/09f58ea10ce1043e1d99187693a2244b/uganda-golden-monkey.jpg?w=750&h=450&fm=jpg&fl=progressive',
    categories: ['Uganda', 'Rwanda'],
    location: 'Bwindi, Queen Elizabeth & Volcanoes',
  },
  {
    name: '4 days Uganda wildlife safari',
    title: 'Uganda Wildlife Express',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/VIK94LoqQbQEtKR5MDarV/86aed5f208320bc5e9f18ca1fd20e5ab/lion-in-queen-elizabeth-national-park.jpg?w=850&h=500&fm=jpg&fl=progressive',
    categories: ['Uganda'],
    location: 'Bwindi & Queen Elizabeth National Park',
  },
  {
    name: '10 days Uganda wildlife safari',
    title: 'Comprehensive Uganda Wildlife Tour',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/59fQJ4qa1dCEsZmr62CpqX/57e4ad9cd9f27e7c3b702f9638c043c9/giraffe_murchision.jpg?w=1080&h=721&fm=jpg&fl=progressive',
    categories: ['Uganda'],
    location:
      'Murchision Falls, Kibale, Bwindi & Queen Elizabeth National Park',
  },
  {
    name: '7 Days Uganda Safari',
    title: 'Uganda Highlights Safari',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/2fydVAZeIT9I1JRJM0GyKQ/740e24744bffecede023f1ae5d2e3141/impala_lake_mburo.jpg?w=1920&h=1280&fm=jpg&fl=progressive',
    categories: ['Uganda'],
    location: 'Lake Mburo, Bwindi & Queen Elizabeth National Park',
  },
  {
    name: '5 Days Uganda Safari',
    title: 'Uganda Safari Essentials',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/6GFicKthut49pcvHyWueAU/5872d6f2ebceaa72bda04a23f0d7cfd7/bwindi_gorilla.jpg?w=1920&h=1503&fm=jpg&fl=progressive',
    categories: ['Uganda'],
    location: 'Bwindi & Queen Elizabeth National Park',
  },
  {
    name: '3 Days Murchison Falls National Park Safari',
    title: 'Murchison Falls Express',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/59fQJ4qa1dCEsZmr62CpqX/57e4ad9cd9f27e7c3b702f9638c043c9/giraffe_murchision.jpg?w=1080&h=721&fm=jpg&fl=progressive',
    categories: ['Uganda'],
    location: 'Murchison Falls National Park',
  },
  {
    name: '15 Days Eastern and Northern Cultural Tour to Uganda',
    title: 'Comprehensive Uganda Cultural Expedition',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/cnloa5euUBWbXBYYtJcLJ/62c2ad334c6e3b8bf4f103d13d121775/imbalu-celebrations.jpg?w=1240&h=600&fm=jpg&fl=progressive',
    categories: ['Uganda'],
    location:
      'Murchision Falls, Kidepo, Lake Kyoga, Mt.Elgon, West, East & North Uganda',
  },
  {
    name: 'Sunset Cruise To Equator Island',
    title: 'Equator Island Adventure',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/2ElTCbC4xxpOdilTXIaknG/0afd2e2f44c9b5b496613fc2c2217305/Divine-African-Tours-1.webp?w=1200&h=800&fm=jpg&fl=progressive',
    categories: ['Uganda'],
    location: 'Equator Island - Lake Victoria',
  },
  {
    name: '4 Days Explore Lake Nakuru & Masai Mara National Parks',
    title: 'Lake and Savannah Adventure',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/3u3vx1VmdZ2IPHuAi71uD6/073cead2ca20cbff399d8c405e8339fc/Nakuru.jpg?w=640&h=427&fm=jpg&fl=progressive',
    categories: ['Kenya'],
    location: 'Lake Nakuru & Masai Mara National Parks',
  },
  {
    name: '3 Days Masai Mara Safari',
    title: 'Masai Mara Express',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/D90honCWvEP4KUV82EO1r/bc28b3404d9278f795f5f74f1576e2aa/Mara.jpg?w=640&h=427&fm=jpg&fl=progressive',
    categories: ['Kenya'],
    location: 'Masai Mara National Park',
  },
  {
    name: '15 Days Climb Kilimanjaro & Tanzania Safari',
    title: 'Kilimanjaro Climb and Serengeti Safari',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/1v7WtV63auHflMGmFvDIas/b99e15db26d925dd2530de8ca1570f3e/serengeti.jpg?w=640&h=427&fm=jpg&fl=progressive',
    categories: ['Tanzania'],
    location: 'Serengeti National Park, Mount Kilimanjaro',
  },
  {
    name: '6 Days Uganda And Rwanda Primate Safari',
    title: 'Two-Country Primate Adventure',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/2tBADC3vvAVR2cs2jRTlwP/757526e4d48a17c54514dfa6af2eab6f/GoldenMonkey.jpg?w=1200&h=1021&fm=jpg&fl=progressive',
    categories: ['Uganda', 'Rwanda'],
    location: 'Bwindi Impenetrable & Volcanoes National Park',
  },
  {
    name: '5 Days Rwanda Primate Safari',
    title: 'Rwanda Primate Expedition',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/1sqIyoXPoindIetpSA4ZrT/1d27b6d049fe16e0bfd6943cd4d4e353/chimpanzee.jpg?w=800&h=450&fm=jpg&fl=progressive',
    categories: ['Rwanda'],
    location: 'Nyungwe National Park & Chamudong',
  },
  {
    name: '2 Days Gorilla Tracking at Volcanoes National Park',
    title: 'Volcanoes Gorilla Trek',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/6GFicKthut49pcvHyWueAU/5872d6f2ebceaa72bda04a23f0d7cfd7/bwindi_gorilla.jpg?w=1920&h=1503&fm=jpg&fl=progressive',
    categories: ['Rwanda'],
    location: 'Volcanoes National Park',
  },
  {
    name: '7 Days Rwanda Safari',
    title: 'Comprehensive Rwanda Adventure',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/6iCZd9em4DK2hp2pazcESz/fe570bb03db847e3330ee9df4f749692/ElephantsRw.jpg?w=1200&h=675&fm=jpg&fl=progressive',
    categories: ['Rwanda'],
    location: 'All Rwanda National Parks',
  },
  {
    name: '8 Days Gorilla & Golden Monkey Tracking',
    title: 'Gorilla and Monkey Expedition',
    image:
      'https://images.ctfassets.net/4uh13bd20zjq/7MuHpS3ZODAgG9kOR9A90z/09f58ea10ce1043e1d99187693a2244b/uganda-golden-monkey.jpg?w=750&h=450&fm=jpg&fl=progressive',
    categories: ['Uganda', 'Rwanda'],
    location: 'Bwindi, Queen Elizabeth & Volcanoes',
  },
]

export default function TourismPlatform() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCountry, setSelectedCountry] = useState('All Tours')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // Initial call to make sure we have the correct width
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Reset currentIndex when country changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [selectedCountry])

  const filteredTours = useMemo(() => {
    if (selectedCountry === 'All Tours') {
      return tours
    }
    return tours.filter((tour) =>
      tour.categories.some((category) => category === selectedCountry)
    )
  }, [selectedCountry])

  const nextSlide = () => {
    const increment = windowWidth >= 768 ? 3 : 1
    setCurrentIndex((prevIndex) =>
      prevIndex + increment >= filteredTours.length ? 0 : prevIndex + increment
    )
  }

  const prevSlide = () => {
    const increment = windowWidth >= 768 ? 3 : 1
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
        <h1 className='font-light text-3xl sm:text-4xl md:text-5xl  max-w-2xl mx-auto leading-tight'>
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
            {filteredTours.length > 0 ? (
              filteredTours
                .slice(
                  currentIndex,
                  currentIndex + (windowWidth >= 768 ? 3 : 1)
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
                          src={tour.image}
                          alt={tour.name}
                          className='object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110'
                        />
                      </div>
                      <div className='h-[25%] p-4'>
                        <h3 className='font-semibold text-lg leading-tight mb-1 text-gray-800 line-clamp-1'>
                          {tour.title}:
                        </h3>
                        <h3 className='font-semibold text-lg leading-tight mb-1 text-gray-900 line-clamp-1'>
                          {tour.name}
                        </h3>
                        <p className='text-xs text-gray-900 font-medium mt-1'>
                          {tour.location}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
            ) : (
              <div className='w-full text-center py-8'>
                <p>No tours available for this selection.</p>
              </div>
            )}
          </div>

          {/* Navigation Arrows - Only show if there are tours */}
          {filteredTours.length > 0 && (
            <>
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
            </>
          )}

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
