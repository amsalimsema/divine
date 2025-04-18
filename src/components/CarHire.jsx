import React, { useState } from 'react'
import {
  Car,
  Users,
  Fuel,
  Cog,
  Check,
  Info,
  ChevronDown,
  Phone,
  Mail,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
//import Hero from './Hero'

export default function CarHireSection() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (itemId) => {
    setOpenAccordion(openAccordion === itemId ? null : itemId)
  }

  const images = [
    {
      src: 'https://images.ctfassets.net/4uh13bd20zjq/6ggCj8r9KfTBnuwr1E6IJX/2b45f914ec5713cdbc2cc67f1ed75aa9/dat_hiace.jpg?w=1008&h=756&fm=jpg&fl=progressive',
      alt: 'hiace',
    },
    {
      src: 'https://images.ctfassets.net/4uh13bd20zjq/5iaRqEbqtcEu13laO36xoZ/fa93cb351bea144e774e64fa99848639/dat_open.jpg?w=1008&h=567&fm=jpg&fl=progressive',
      alt: 'open top',
    },
    {
      src: 'https://images.ctfassets.net/4uh13bd20zjq/7IoxaEHEsMzNKV5AXr8fTM/3bc769c3ee2a5b653910c6010589c0aa/dat_pickup.jpg?w=1100&h=863&fm=jpg&fl=progressive',
      alt: 'pickup truck',
    },
    {
      src: 'https://images.ctfassets.net/4uh13bd20zjq/silfRqKUg4Urh4pJoce2N/6d918d3c2f9e32e60114b4edba3a8112/dat_suv.jpg?w=640&h=480&fm=jpg&fl=progressive',
      alt: 'suv',
    },
  ]
  return (
    <>
      {/* <Hero title='Discover the Wild Heart of East Africa' sub='Car Hire' /> */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='py-2 bg-white overflow-hidden'
      >
        <div className='container mx-auto px-2 text-black'>
          {/* new */}
          <section className='py-2 bg-white'>
            <div className='container mx-auto px-2'>
              <div className='flex flex-col lg:flex-row gap-8'>
                {/* Right Column - Image Grid */}
                <div className='lg:w-1/2 overflow-hidden'>
                  <div className='grid grid-cols-2 gap-4 justify-center rotate-12'>
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className='aspect-square overflow-hidden rounded-lg transform rotate-5 hover:scale-105 transition duration-300 ease-in-out'
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className='w-full h-full object-cover transform -rotate-5 scale-125'
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Left Column - Copy */}
                <div className='lg:w-1/2 space-y-6'>
                  <h2 className='text-3xl font-bold text-gray-900'>
                    Divine African Tours Car Hire
                  </h2>
                  <p className='text-lg text-gray-700'>
                    Traveling in Uganda can be stressing if you don't have a car
                    at your disposal. Uganda public transport is always a
                    nightmare as they drive carelessly.
                  </p>
                  <p className='text-lg text-gray-700'>
                    At Divine tours we do understand that and have the largest
                    fleet of vehicles in Kampala for all your travel needs
                    whether you are on Holiday or visiting relatives and
                    friends. All our drivers are well trained and with a minimum
                    of 15 years of driving experience of driving in East Africa.
                  </p>
                  <p className='text-lg text-gray-700'>
                    All our Cars are comprehensively insured and our prices very
                    competitive.
                  </p>

                  {/* call buttons */}
                  <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-10 py-16'>
                    <a href='tel:+256759650705' className='inline-block'>
                      <button className='w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent border border-[#2ba924] text-[#2ba924] hover:bg-[#2ba924] hover:text-white py-2 px-4 rounded-md transition duration-300'>
                        <Phone size={18} />
                        <span>Call Now</span>
                      </button>
                    </a>
                    <Link to='/contact' className='inline-block'>
                      <button className='w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent border border-[#2ba924] text-[#2ba924] hover:bg-[#2ba924] hover:text-white py-2 px-4 rounded-md transition duration-300'>
                        <Mail size={18} />
                        <span>Send Message</span>
                      </button>
                    </Link>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
          </section>

          {/* new */}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='bg-gray-50 rounded-lg shadow-lg p-8 mb-12 py-12'
          >
            <h3 className='text-2xl font-semibold mb-6'>
              Why Choose Divine African Tours for Your Car Hire?
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  icon: <Car className='w-12 h-12 text-[#2ba924]' />,
                  title: 'Wide Range of Vehicles',
                  description:
                    'From rugged 4x4s to comfortable luxury cars, we have the perfect vehicle for your needs.',
                },
                {
                  icon: <Check className='w-12 h-12 text-[#2ba924]' />,
                  title: 'Quality Assurance',
                  description:
                    'All our vehicles are regularly serviced and maintained to ensure your safety and comfort.',
                },
                {
                  icon: <Users className='w-12 h-12 text-[#2ba924]' />,
                  title: 'Experienced Staff',
                  description:
                    'Our knowledgeable team can help you choose the right vehicle and provide local insights for your trip.',
                },
                {
                  icon: <Fuel className='w-12 h-12 text-[#2ba924]' />,
                  title: 'Flexible Fuel Options',
                  description:
                    'Choose between petrol and diesel vehicles to suit your preference and budget.',
                },
                {
                  icon: <Cog className='w-12 h-12 text-[#2ba924]' />,
                  title: '24/7 Support',
                  description:
                    'Enjoy peace of mind with our round-the-clock customer support and roadside assistance.',
                },
                {
                  icon: <Info className='w-12 h-12 text-[#2ba924]' />,
                  title: 'Transparent Pricing',
                  description:
                    'No hidden fees. Our prices include insurance and standard mileage allowance.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className='flex flex-col items-center text-center'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <motion.div
                    className='mb-4'
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className='text-xl font-semibold mb-2'>
                    {feature.title}
                  </h4>
                  <p className='text-black'>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className='bg-gray-100 rounded-lg shadow-lg p-8'
          >
            <h3 className='text-2xl font-semibold mb-6'>
              Frequently Asked Questions
            </h3>
            <div className='space-y-4'>
              {[
                {
                  id: 'item-1',
                  question: 'What documents do I need to hire a car?',
                  answer:
                    "You'll need a valid driver's license, passport, and a credit card for the security deposit. International drivers may also need an International Driving Permit.",
                },
                {
                  id: 'item-2',
                  question: 'Is insurance included in the rental price?',
                  answer:
                    'Basic insurance is included in our rental prices. However, we offer additional coverage options for extra peace of mind.',
                },
                {
                  id: 'item-3',
                  question: 'Can I hire a car with a driver?',
                  answer:
                    'Yes, we offer chauffeur services. Our experienced drivers are knowledgeable about local routes and attractions.',
                },
                {
                  id: 'item-4',
                  question: 'What is your cancellation policy?',
                  answer:
                    'Free cancellation is available up to 48 hours before your pickup time. Cancellations made within 48 hours may incur a fee.',
                },
                {
                  id: 'item-5',
                  question: 'Are there any mileage restrictions?',
                  answer:
                    'Our standard rentals come with unlimited mileage. However, some specialty vehicles may have mileage restrictions. Please check the specific terms for your chosen vehicle.',
                },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  className='border-b border-[#2ba924]/30 pb-4'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className='flex justify-between items-center w-full text-left'
                  >
                    <span className='text-lg font-semibold'>
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openAccordion === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className='w-5 h-5' />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openAccordion === item.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='mt-2 text-black'
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
