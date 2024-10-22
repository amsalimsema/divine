import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, HeartHandshake, Zap, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

//images for safari
import ugandaLion from '../assets/Divine-Tours-3.jpg'
import kenyaElephant from '../assets/Divine-Tours-3.jpg'
import tanzaniaZebras from '../assets/Divine-Tours-3.jpg'
import rwandaGiraffe from '../assets/Divine-Tours-3.jpg'

// why choose us
const features = [
  {
    icon: MapPin,
    title: 'Best Destinations',
    description: 'Handpicked African wonders await you.',
  },
  {
    icon: DollarSign,
    title: 'Unbeatable Value',
    description: 'Premium experiences at competitive prices.',
  },
  {
    icon: HeartHandshake,
    title: 'Great Customer Care',
    description: 'Personalized attention, exceptional service always.',
  },
  {
    icon: Zap,
    title: 'Easy Booking Process',
    description: 'Effortless reservations, instant confirmations.',
  },
]

// destinations

// for choose us
const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className='p-4 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md flex flex-col h-full'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className='flex flex-col items-start'>
        <Icon
          className='w-6 h-6 text-amber-600 mb-2 flex-shrink-0'
          aria-hidden='true'
        />
        <h3 className='text-lg font-semibold text-gray-900 mb-1'>{title}</h3>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </motion.div>
  )
}

export function WhyChooseUs() {
  return (
    <section
      className='w-full py-16 md:py-24 bg-gray-50'
      aria-labelledby='why-choose-us-title'
    >
      <div className='container mx-auto px-4 md:px-6'>
        <motion.h2
          id='why-choose-us-title'
          className='text-3xl font-bold text-center mb-12 text-gray-900'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Divine African Tours
        </motion.h2>
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='lg:w-1/2'>
            <div className='grid grid-cols-2 gap-4 h-full'>
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
          <motion.div
            className='lg:w-1/2'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='bg-white rounded-lg shadow-sm p-6 h-full flex flex-col justify-between relative overflow-hidden'>
              <motion.div
                className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-amber-600'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <div className='space-y-4'>
                <motion.p
                  className='text-gray-600'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  At{' '}
                  <span className='font-semibold text-amber-600'>
                    Divine African Tours
                  </span>
                  , we bring the magic of Africa to life. With over 20 years of
                  experience, our passionate team crafts unforgettable safari
                  adventures that showcase the continent's breathtaking
                  landscapes and diverse wildlife.
                </motion.p>
                <motion.p
                  className='text-gray-600'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  We're committed to sustainable tourism, ensuring that your
                  journey not only creates lasting memories but also positively
                  impacts local communities and conservation efforts. Choose
                  Divine African Tours for an authentic and responsible African
                  experience.
                </motion.p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to='/about'
                  className='text-amber-600 hover:text-amber-700 font-semibold inline-block mt-4'
                >
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className='text-center mt-12'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to='/book'
              className='inline-block px-6 py-3 bg-amber-600 text-white rounded-md font-semibold hover:bg-green-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600'
            >
              Book Your Safari Adventure
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// destinations

export function SafariAnimals() {
  const destinations = [
    {
      src: ugandaLion,
      alt: 'Lion in the savanna',
      country: 'Uganda',
      tours: 15,
      slug: 'uganda-safari',
    },
    {
      src: kenyaElephant,
      alt: 'Elephant in the wild',
      country: 'Kenya',
      tours: 12,
      slug: 'kenya-wildlife',
    },
    {
      src: tanzaniaZebras,
      alt: 'Zebras grazing',
      country: 'Tanzania',
      tours: 18,
      slug: 'tanzania-adventure',
    },
    {
      src: rwandaGiraffe,
      alt: 'Giraffe close-up',
      country: 'Rwanda',
      tours: 10,
      slug: 'rwanda-expedition',
    },
  ]

  useEffect(() => {
    // Preload the first image (assuming it's above the fold)
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = destinations[0].src
    document.head.appendChild(link)
  }, [])
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
                  loading={index === 0 ? 'eager' : 'lazy'}
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
