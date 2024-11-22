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
        name: '3 Days Bwindi Gorilla Tracking',
        duration: '3 days',
        groupSize: 'Any',
        location: 'Bwindi Impenetrable National Park',
        image: UGTours,
        description: ' ',
        link: '/tour/3-days-bwindi-gorilla-tracking-safari',
      },
      {
        id: 2,
        name: 'Murchison Falls Safari',
        duration: '4 days',
        groupSize: 'Any',
        location: 'Bwindi Impenetrable National Park',
        image:
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description:
          'Witness the power of the Nile at Murchison Falls National Park.',
        link: '/tours/uganda/murchison-falls',
      },
      {
        id: 3,
        name: '7 Days Uganda Safari',
        duration: '7 days',
        groupSize: 'Any',
        location: 'Lake Mburo ,Bwindi & Queen Elizabeth National Park',
        image: Impala,
        description: '',
        link: '/tours/uganda/queen-elizabeth-park',
      },
    ],
  },
  'kenya-wildlife': {
    name: 'Kenya',
    image: KTours,
    tours: [
      {
        id: 1,
        name: 'Masai Mara Wildlife Safari',
        duration: '4 days',
        groupSize: '8',
        location: '',
        image:
          'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description:
          'Witness the great wildebeest migration in the Masai Mara.',
        link: '/tours/kenya/masai-mara-safari',
      },
      {
        id: 2,
        name: 'Amboseli Elephant Expedition',
        duration: '3 days',
        groupSize: '6',
        location: '',
        image:
          'https://images.unsplash.com/photo-1575996587496-91d8a7d8bf6d?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description:
          'Get close to elephants with Mt. Kilimanjaro as your backdrop.',
        link: '/tours/kenya/amboseli-expedition',
      },
      {
        id: 3,
        name: 'Lake Nakuru Flamingo Tour',
        duration: '2 days',
        groupSize: '10',
        location: '',
        image:
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1468&ixlib=rb-4.0.3',
        description: 'See thousands of flamingos paint Lake Nakuru pink.',
        link: '/tours/kenya/lake-nakuru-tour',
      },
    ],
  },
  'tanzania-adventure': {
    name: 'Tanzania',
    image: TzTours,
    tours: [
      {
        id: 1,
        name: 'Serengeti Migration Safari',
        duration: '5 days',
        groupSize: '8',
        location: '',
        image: TzTours,
        description: 'Follow the great migration through the Serengeti plains.',
        link: '/tours/tanzania/serengeti-migration',
      },
      {
        id: 2,
        name: 'Ngorongoro Crater Adventure',
        duration: '3 days',
        groupSize: '6',
        location: '',
        image:
          'https://images.unsplash.com/photo-1589825743636-e3c9d3c6f1f7?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description:
          'Descend into the Ngorongoro Crater, a natural wildlife haven.',
        link: '/tours/tanzania/ngorongoro-crater',
      },
      {
        id: 3,
        name: 'Mount Kilimanjaro Trekking',
        duration: '7 days',
        groupSize: '12',
        location: '',
        image:
          'https://images.unsplash.com/photo-1589825743636-e3c9d3c6f1f7?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description: "Climb to the 'Roof of Africa' on this challenging trek.",
        link: '/tours/tanzania/kilimanjaro-trek',
      },
    ],
  },
  'rwanda-expedition': {
    name: 'Rwanda',
    image: RwTours,
    tours: [
      {
        id: 1,
        name: 'Volcanoes National Park Gorilla Trek',
        duration: '2 days',
        groupSize: '8',
        location: '',
        image:
          'https://images.unsplash.com/photo-1598880940371-c756e015faf1?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
        description:
          'Trek through misty forests to encounter mountain gorillas.',
        link: '/tours/rwanda/volcanoes-gorilla-trek',
      },
      {
        id: 2,
        name: 'Nyungwe Forest Chimpanzee Tour',
        duration: '3 days',
        groupSize: '6',
        location: '',
        image:
          'https://images.unsplash.com/photo-1628944681206-2ee8d63b0a6b?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description:
          "Walk among chimpanzees in one of Africa's oldest rainforests.",
        link: '/tours/rwanda/nyungwe-chimpanzee-tour',
      },
      {
        id: 3,
        name: 'Akagera National Park Safari',
        duration: '4 days',
        groupSize: '10',
        location: '',
        image:
          'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
        description:
          "Explore Rwanda's only savannah park, home to the Big Five.",
        link: '/tours/rwanda/akagera-safari',
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
                  <li className='flex items-center'>
                    <Users className='mr-2 h-4 w-4 text-gray-400' />
                    <span className='text-gray-800'>
                      Group size: {tour.groupSize}
                    </span>
                  </li>
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
