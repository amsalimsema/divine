import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, HeartHandshake, Zap, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: MapPin,
    title: 'Best Destinations',
    description: 'Handpicked African wonders await you.',
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
  {
    icon: DollarSign,
    title: 'Unbeatable Value',
    description: 'Premium experiences at competitive prices.',
  },
]

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className='p-4 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md flex flex-col h-full'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className='flex flex-col items-center md:items-start md:flex-row md:justify-start mb-2'>
        <Icon
          className='w-8 h-8 md:w-6 md:h-6 text-amber-600 mb-2 md:mb-0 md:mr-3 flex-shrink-0'
          aria-hidden='true'
        />
        <div className='text-center md:text-left'>
          <h3 className='text-lg font-semibold text-gray-900'>{title}</h3>
          <p className='text-sm text-gray-600 mt-1'>{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUs() {
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
              className='inline-block px-6 py-3 bg-amber-600 text-white rounded-md font-semibold hover:bg-amber-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600'
            >
              Book Your Safari Adventure
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
