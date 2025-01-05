import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, MapPin, Users } from 'lucide-react'

import UGTours from '../assets/Gorilla.jpg'
import UgandaTours from '../assets/UgandaTours.jpg'
import TzTours from '../assets/TzTours.jpg'
import RwTours from '../assets/RwTours.jpg'
import KTours from '../assets/KTours.jpg'

import Impala from '../assets/impala_lake_mburo.jpg'

// Mock data for tours
const toursData = {
  'uganda-safari': {
    name: 'Uganda',
    image: UgandaTours,
    tours: [
      {
        id: 1,
        name: '6 Days Gorilla & Chimpanzee Tracking',
        duration: '6 days',
        groupSize: '',
        location: 'Bwindi,Queen Elizabeth & Lake Bunyonyi',
        image: UGTours,
        description: ' ',
        link: '/tour/6-days-gorilla-chimpanzee-tracking',
      },
      {
        id: 2,
        name: '3 days Bwindi Gorilla Tracking Safari',
        duration: '3 days',
        groupSize: '',
        location: 'Bwindi Impenetrable National Park',
        image:
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description: '',
        link: '/tour/3-days-bwindi-gorilla-tracking-safari',
      },
      {
        id: 3,
        name: '6 days Uganda And Rwanda Primate Safari',
        duration: '6 days',
        groupSize: '',
        location: 'Bwindi Impenetrable & Volcanoes National Park',
        image: Impala,
        description: '',
        link: '/tour/6-days-uganda-and-rwanda-primate-safari',
      },
      {
        id: 4,
        name: '8 Days Gorilla & Golden Monkey Tracking',
        duration: '8 days',
        groupSize: '',
        location: 'Bwindi,Queen Elizabeth & Volcanoes',
        image: Impala,
        description: '',
        link: '/tour/8-days-gorilla-golden-monkey-tracking',
      },
      {
        id: 5,
        name: '4 days Uganda wildlife safari',
        duration: '4 days',
        groupSize: '',
        location: 'Bwindi & Queen Elizabeth National Park',
        image: Impala,
        description: '',
        link: '/tour/4-days-uganda-wildlife-safari',
      },
      {
        id: 6,
        name: '10 days Uganda wildlife safari',
        duration: '10 days',
        groupSize: '',
        location:
          'Murchision Falls, Kibale ,Bwindi & Queen Elizabeth National Park',
        image: Impala,
        description: '',
        link: '/tour/10-days-uganda-wildlife-safari',
      },
      {
        id: 7,
        name: '7 Days Uganda Safari',
        duration: '7 days',
        groupSize: '',
        location: 'Lake Mburo ,Bwindi & Queen Elizabeth National Park',
        image: Impala,
        description: '',
        link: '/tour/7-days-uganda-safari',
      },
      {
        id: 8,
        name: '5 Days Uganda Safari',
        duration: '5 days',
        groupSize: '',
        location: 'Bwindi & Queen Elizabeth National Park',
        image: Impala,
        description: '',
        link: '/tour/5-days-uganda-safari',
      },
      {
        id: 9,
        name: '3 Days Murchison Falls National Park Safari',
        duration: '3 days',
        groupSize: '',
        location: 'Murchison Falls National Park',
        image: Impala,
        description: '',
        link: '/tour/3-days-murchison-falls-national-park-safari',
      },
      {
        id: 10,
        name: '15 Days Eastern and Northern Cultural Tour to Uganda',
        duration: '15 days',
        groupSize: '',
        location:
          'Murchision Falls, Kidepo ,Lake Kyoga, Mt.Elgon, West, East & North Uganda',
        image: Impala,
        description: '',
        link: '/tour/15-days-eastern-and-northern-cultural-tour-to-uganda',
      },
      {
        id: 11,
        name: 'Sunset Cruise To Equator Island',
        duration: '1 day',
        groupSize: '',
        location: 'Equator Island - Lake Victoria',
        image: Impala,
        description: '',
        link: '/tour/sunset-cruise-to-equator-island',
      },
    ],
  },
  'kenya-wildlife': {
    name: 'Kenya',
    image: KTours,
    tours: [
      {
        id: 1,
        name: '4 Days Explore Lake Nakuru & Masai Mara National Parks',
        duration: '4 days',
        groupSize: '',
        location: 'Lake Nakuru & Masai Mara National Parks',
        image:
          'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description: '',
        link: '/tour/4-days-explore-lake-nakuru-masai-mara-national-parks',
      },

      {
        id: 2,
        name: '3 Days Masai Mara Safari',
        duration: '3 days',
        groupSize: '',
        location: 'Masai Mara National Park',
        image:
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1468&ixlib=rb-4.0.3',
        description: '',
        link: '/tour/3-days-masai-mara-safari',
      },
    ],
  },
  'tanzania-adventure': {
    name: 'Tanzania',
    image: TzTours,
    tours: [
      {
        id: 1,
        name: '15 Days Climb Kilimanjaro & Tanzania Safari',
        duration: '15 days',
        groupSize: '',
        location: 'Serengeti National Park, Mount Kilimanjaro',
        image: TzTours,
        description: 'Follow the great migration through the Serengeti plains.',
        link: '/tour/15-days-climb-kilimanjaro-tanzania-safari',
      },
    ],
  },
  'rwanda-expedition': {
    name: 'Rwanda',
    image: RwTours,
    tours: [
      {
        id: 1,
        name: '6 Days Uganda And Rwanda Primate Safari',
        duration: '6 days',
        groupSize: '',
        location: 'Bwindi Impenetrable & Volcanoes National Park',
        image:
          'https://images.unsplash.com/photo-1598880940371-c756e015faf1?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
        description: '',
        link: '/tour/6-days-gorilla-chimpanzee-tracking',
      },
      {
        id: 2,
        name: '5 Days Rwanda Primate Safari',
        duration: '5 days',
        groupSize: '',
        location: 'Nyungwe National Park & Chamudong',
        image:
          'https://images.unsplash.com/photo-1628944681206-2ee8d63b0a6b?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description: '',
        link: '/tour/5-days-rwanda-primate-safari',
      },
      {
        id: 3,
        name: '2 Days Gorilla Tracking at Volcanoes National Park',
        duration: '2 days',
        groupSize: '',
        location: 'Volcanoes National Park',
        image:
          'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description: '',
        link: '/tour/2-days-gorilla-tracking-at-volcanoes-national-park',
      },
      {
        id: 4,
        name: '7 Days Rwanda Safari',
        duration: '7 days',
        groupSize: '',
        location: 'All Rwanda National Parks',
        image:
          'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description: '',
        link: '/tour/7-days-rwanda-safari',
      },
      {
        id: 5,
        name: '8 Days Gorilla & Golden Monkey Tracking',
        duration: '8 days',
        groupSize: '',
        location: 'Bwindi,Queen Elizabeth & Volcanoes',
        image:
          'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description: '',
        link: '/tour/8-days-gorilla-golden-monkey-tracking',
      },
    ],
  },
}

export default function CountryTours() {
  const { slug } = useParams()
  const countryData = toursData[slug] || {
    name: 'Unknown',
    tours: [],
    image: '',
  }

  return (
    <div className='bg-[#F8F5F0]'>
      <div className='relative h-96 overflow-hidden'>
        <img
          src={countryData.image}
          alt={`${countryData.name} landscape`}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <h1 className='text-4xl font-bold text-white'>
            {countryData.name} Tours
          </h1>
        </div>
      </div>

      <div className='container mx-auto px-4 py-8'>
        <Link
          to='/'
          className='inline-flex items-center text-amber-600 hover:text-amber-700 mb-8'
        >
          <ArrowLeft className='mr-2 h-4 w-4' />
          Back to All Destinations
        </Link>

        <p className='text-gray-800 mb-8'>
          Explore our exciting tours in {countryData.name}
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {countryData.tours.map((tour) => (
            <div
              key={tour.id}
              className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col'
            >
              <div className='relative h-48'>
                <img
                  src={tour.image}
                  alt={tour.name}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6 flex-grow'>
                <h2 className='text-xl font-semibold mb-2 text-gray-800'>
                  {tour.name}
                </h2>
                <p className='text-gray-600 mb-4'>{tour.description}</p>
                {/* <p className='text-gray-800 font-semibold mb-4'>
                  {tour.location}
                </p> */}
                <ul className='space-y-2'>
                  <li className='flex items-center'>
                    <MapPin className='mr-2 h-4 w-4 text-gray-400' />
                    <span className='text-gray-800'>{tour.location}</span>
                  </li>
                  <li className='flex items-center'>
                    <Clock className='mr-2 h-4 w-4 text-gray-400' />
                    <span className='text-gray-800'>{tour.duration}</span>
                  </li>
                  {/* <li className='flex items-center'>
                    <Users className='mr-2 h-4 w-4 text-gray-400' />
                    <span className='text-gray-800'>
                      Group size: {tour.groupSize}
                    </span>
                  </li> */}
                </ul>
              </div>
              <div className='p-6'>
                <Link
                  to={tour.link}
                  className='block w-full bg-amber-600 text-white text-center py-2 px-4 rounded hover:bg-amber-700 transition-colors'
                >
                  View Tour Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {countryData.tours.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-xl text-gray-800'>
              No tours available for {countryData.name} at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
