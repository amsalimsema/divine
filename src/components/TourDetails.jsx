import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Clock, Users, MapPin, ArrowLeft, Calendar } from 'lucide-react'
import Hero from './Hero'

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
    longDescription:
      "Embark on an unforgettable 5-day adventure to Murchison Falls National Park, home to the world's most powerful waterfall. This safari offers a perfect blend of wildlife viewing and natural wonder exploration. You'll have the chance to spot the Big Five, enjoy boat safaris on the Nile, and witness the incredible force of Murchison Falls up close.",
    highlights: [
      'Game drives to spot lions, elephants, giraffes, and more',
      'Boat safari on the Nile to see hippos and crocodiles',
      'Hike to the top of Murchison Falls',
      'Chimpanzee tracking in Budongo Forest',
      'Bird watching with over 450 species in the park',
    ],
    included: [
      'All park entrance fees',
      'Experienced English-speaking guide',
      'Comfortable accommodation',
      'All meals as per itinerary',
      'Transportation in a 4x4 safari vehicle',
      'Bottled water during game drives',
    ],
    itinerary: [
      {
        day: 1,
        activity:
          'Arrival in Entebbe, transfer to Murchison Falls National Park',
      },
      {
        day: 2,
        activity:
          'Morning game drive, afternoon boat safari to the base of Murchison Falls',
      },
      {
        day: 3,
        activity: 'Full day game drive in the northern sector of the park',
      },
      {
        day: 4,
        activity: 'Chimpanzee tracking in Budongo Forest, evening game drive',
      },
      {
        day: 5,
        activity: 'Morning hike to the top of Murchison Falls, departure',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlcmVuZ2V0aXxlbnwwfHwwfHx8MA%3D%3D',
    ],
  },
  {
    title: 'Bwindi Gorilla Trek',
    description:
      'Embark on an unforgettable journey to see the endangered mountain gorillas in their natural habitat.',
    duration: '4 days',
    groupSize: '2-8',
    location: 'Bwindi Impenetrable National Park, Uganda',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D',
    longDescription:
      "Experience the thrill of a lifetime on this 4-day gorilla trekking adventure in Bwindi Impenetrable National Park. Home to nearly half of the world's remaining mountain gorillas, Bwindi offers a rare opportunity to observe these gentle giants in their natural habitat. Trek through the lush, misty forests with expert guides as you search for a habituated gorilla family.",
    highlights: [
      'Gorilla trekking in Bwindi Impenetrable Forest',
      "Guided nature walks to discover the forest's flora and fauna",
      'Visit to a local Batwa community to learn about their culture',
      "Bird watching in one of Africa's most biodiverse forests",
      'Scenic drive through the Ugandan countryside',
    ],
    included: [
      'Gorilla trekking permit',
      'Experienced local guides and trackers',
      'Comfortable lodge accommodation',
      'All meals and non-alcoholic drinks',
      'Ground transportation in a 4x4 vehicle',
      'Walking stick and gaiters for the trek',
    ],
    itinerary: [
      {
        day: 1,
        activity:
          'Arrival in Entebbe, transfer to Bwindi Impenetrable National Park',
      },
      {
        day: 2,
        activity: 'Early morning briefing, gorilla trekking experience',
      },
      { day: 3, activity: 'Nature walk and Batwa community visit' },
      { day: 4, activity: 'Morning bird watching, departure to Entebbe' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YndpbmRpJTIwZm9yZXN0fGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YndpbmRpJTIwZm9yZXN0fGVufDB8fDB8fHww',
    ],
  },
  // Add more tour packages here with their unique data
]

export default function TourDetails() {
  const [activeTab, setActiveTab] = useState('details')
  const { tourName } = useParams()
  const tour = tourPackages.find(
    (t) => t.title.toLowerCase().replace(/\s+/g, '-') === tourName
  )

  if (!tour) {
    return <div>Tour not found</div>
  }

  return (
    <>
      <Hero />
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <Link
            to='/'
            className='flex items-center text-gray-900 hover:text-[#2C5E1A] mb-6 transition duration-300'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to all tours
          </Link>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
            <div>
              <img
                src={tour.image}
                alt={tour.title}
                className='w-full h-96 object-cover rounded-lg shadow-md'
              />
            </div>
            <div>
              <h1 className='text-3xl font-bold mb-4'>{tour.title}</h1>
              <div className='flex items-center mb-4'>
                <Star className='w-5 h-5 text-yellow-400 mr-1' />
                <span className='font-semibold'>{tour.rating}</span>
              </div>
              <p className='text-gray-600 mb-4'>{tour.description}</p>
              <div className='flex items-center mb-2'>
                <Clock className='w-5 h-5 mr-2 text-gray-500' />
                <span>{tour.duration}</span>
              </div>
              <div className='flex items-center mb-2'>
                <Users className='w-5 h-5 mr-2 text-gray-500' />
                <span>{tour.groupSize}</span>
              </div>
              <div className='flex items-center mb-4'>
                <MapPin className='w-5 h-5 mr-2 text-gray-500' />
                <span>{tour.location}</span>
              </div>
              <button className='bg-[#2C5E1A] text-white px-6 py-2 rounded-md hover:bg-[#FFA500] transition duration-300'>
                Book Now
              </button>
            </div>
          </div>

          <div className='mb-8'>
            <div className='border-b border-gray-200'>
              <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
                {['details', 'itinerary', 'photos'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'border-[#2C5E1A] text-[#2C5E1A]'
                        : 'border-transparent text-gray-900 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {activeTab === 'details' && (
            <div>
              <h2 className='text-2xl font-bold mb-4'>Tour Details</h2>
              <p className='text-gray-600 mb-6'>{tour.longDescription}</p>
              <h3 className='text-xl font-semibold mb-2'>Highlights</h3>
              <ul className='list-disc pl-5 mb-6'>
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className='text-gray-600 mb-1'>
                    {highlight}
                  </li>
                ))}
              </ul>
              <h3 className='text-xl font-semibold mb-2'>What's Included</h3>
              <ul className='list-disc pl-5'>
                {tour.included.map((item, index) => (
                  <li key={index} className='text-gray-600 mb-1'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'itinerary' && (
            <div>
              <h2 className='text-2xl font-bold mb-4'>Itinerary</h2>
              <ul className='space-y-4'>
                {tour.itinerary.map((item) => (
                  <li key={item.day} className='flex items-start'>
                    <Calendar className='w-5 h-5 mr-2 mt-1 text-[#2C5E1A]' />
                    <div>
                      <span className='font-semibold'>Day {item.day}:</span>{' '}
                      {item.activity}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'photos' && (
            <div>
              <h2 className='text-2xl font-bold mb-4'>Photo Gallery</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {tour.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${tour.title} image ${index + 1}`}
                    className='w-full h-48 object-cover rounded-lg shadow-md'
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
