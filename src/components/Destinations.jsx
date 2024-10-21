import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

//images for safari
//import ugandaLion from '../assets/Divine-Tours-3.jpg'
//import kenyaElephant from '../assets/Divine-Tours-3.jpg'
//import tanzaniaZebras from '../assets/Divine-Tours-3.jpg'
//import rwandaGiraffe from '../assets/Divine-Tours-3.jpg'

const destinations = [
  {
    src: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Lion in the savanna',
    country: 'Uganda',
    tours: 15,
    slug: 'uganda-safari',
  },
  {
    src: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Elephant in the wild',
    country: 'Kenya',
    tours: 12,
    slug: 'kenya-wildlife',
  },
  {
    src: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Zebras grazing',
    country: 'Tanzania',
    tours: 18,
    slug: 'tanzania-adventure',
  },
  {
    src: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Giraffe close-up',
    country: 'Rwanda',
    tours: 10,
    slug: 'rwanda-expedition',
  },
]

export default function Component() {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='text-center mb-12'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4'>
          Explore Destinations
        </h2>
        <p className='text-base sm:text-lg text-gray-600 max-w-3xl mx-auto'>
          We are dedicated and committed to giving the best tour experience of
          your lifetime.
        </p>
      </div>
      <div className='w-full overflow-hidden'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
          {destinations.map((destination, index) => (
            <div key={index} className='w-full px-1'>
              <div
                className='relative overflow-hidden group rounded-lg'
                style={{ height: '250px' }}
              >
                <img
                  src={destination.src}
                  alt={destination.alt}
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 transition-opacity duration-500 ease-in-out' />
                <div className='absolute inset-x-0 bottom-0 p-4'>
                  <div className='flex justify-between items-center text-white mb-2'>
                    <div className='flex items-center'>
                      <MapPin size={16} className='mr-1' />
                      <span className='text-sm font-medium'>
                        {destination.country}
                      </span>
                    </div>
                    <span className='text-sm font-medium'>
                      {destination.tours} tours
                    </span>
                  </div>
                  <div className='overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-in-out'>
                    <Link
                      to={`/tours/${destination.slug}`}
                      className='text-sm font-semibold block text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out'
                    >
                      View all tours
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
