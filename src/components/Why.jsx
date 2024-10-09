import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Sunrise, Users, Shield, Layers, Heart, UserPlus } from 'lucide-react'

const features = [
  {
    icon: Sunrise,
    title: 'Unforgettable Experiences',
    description:
      'Curated itineraries that showcase the best of African wildlife, landscapes, and cultures.',
  },
  {
    icon: Users,
    title: 'Expert Local Guides',
    description:
      "Knowledgeable and passionate guides who bring Africa's wonders to life.",
  },
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'Your well-being is our top priority, with strict safety measures in place.',
  },
  {
    icon: Layers,
    title: 'Unbeatable Value',
    description:
      "Experience Africa's wonders without breaking the bank. Quality adventures at fair prices.",
  },
  {
    icon: Heart,
    title: 'Responsible Tourism',
    description:
      "We're committed to sustainable practices and supporting local communities.",
  },
  {
    icon: UserPlus,
    title: 'Personalized Service',
    description:
      'Tailored experiences to meet your unique preferences and requirements.',
  },
]

function RandomRectangles() {
  const rectangles = useMemo(() => {
    const rects = []
    for (let i = 0; i < 50; i++) {
      const x = `${Math.random() * 100}%`
      const y = `${Math.random() * 100}%`
      const width = Math.random() * 20 + 10
      const height = Math.random() * 30 + 20
      const color = Math.random() > 0.5 ? '#FFA500' : '#D2691E'
      rects.push(
        <rect
          key={i}
          x={x}
          y={y}
          width={width}
          height={height}
          fill={color}
          opacity='0.2'
        />
      )
    }
    return rects
  }, [])

  return rectangles
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className='relative p-6 bg-[#F4A460] bg-opacity-80 rounded-lg overflow-hidden group'>
      <div
        className='absolute inset-0 bg-[#FFA500] opacity-10 blur-xl'
        aria-hidden='true'
      ></div>
      <div className='relative z-10'>
        <div className='flex items-center mb-4'>
          <Icon
            className='w-8 h-8 text-[#4CAF50] group-hover:text-white transition-colors duration-300 mr-3'
            aria-hidden='true'
          />
          <h3 className='text-xl font-semibold text-gray-900'>{title}</h3>
        </div>
        <p className='text-gray-700'>{description}</p>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 relative overflow-hidden'>
      <svg
        className='absolute inset-0 w-full h-full'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
      >
        <RandomRectangles />
      </svg>
      <div className='container mx-auto px-4 relative z-10'>
        <h2 className='text-3xl font-bold text-center mb-8 text-gray-900'>
          Why Choose Divine African Tours
        </h2>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className='text-center mt-8'>
          <Link
            to='/'
            className='inline-block px-6 py-3 bg-[#4CAF50] text-white rounded-md font-semibold hover:bg-[#45a049] transition-colors duration-200'
          >
            Book Your Adventure
          </Link>
        </div>
      </div>
    </section>
  )
}
