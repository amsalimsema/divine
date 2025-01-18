import React from 'react'
import { Shield, DollarSign, ThumbsUp, Globe } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Expert Guides',
    description:
      'Our experienced local guides ensure your safety and enrich your journey.',
  },
  {
    icon: DollarSign,
    title: 'Unbeatable Value',
    description: 'Premium experiences at competitive prices.',
  },
  {
    icon: ThumbsUp,
    title: 'Sustainable Tourism',
    description:
      'We prioritize eco-friendly practices and support local communities.',
  },
  {
    icon: Globe,
    title: 'Diverse Destinations',
    description:
      'Explore the best of East Africa with our carefully curated tours.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8'>
          Why Choose Divine African Tours
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={index}
                className='flex flex-col items-center text-center'
              >
                <div className='bg-white p-3 md:p-4 rounded-full shadow-md mb-3 md:mb-4 hover:bg-[#2ba924] transition-colors duration-300 group'>
                  <IconComponent className='w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-lg md:text-xl font-semibold mb-1 md:mb-2'>
                  {reason.title}
                </h3>
                <p className='text-xs md:text-sm lg:text-base text-gray-600'>
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
