import React from 'react'
import { Link } from 'react-router-dom'
import { Sunrise, Users, Shield, Layers, Heart, UserPlus } from 'lucide-react'

function RandomRectangles() {
  const rectangles = []
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * 100 + '%'
    const y = Math.random() * 100 + '%'
    const width = Math.random() * 20 + 10
    const height = Math.random() * 30 + 20
    const color = Math.random() > 0.5 ? '#FFA500' : '#D2691E'
    rectangles.push(
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
  return rectangles
}

export default function Component() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 relative overflow-hidden'>
      <svg
        className='absolute inset-0 w-full h-full'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
      >
        <RandomRectangles />
      </svg>
      <div className='container mx-auto px-4 md:px-6 relative z-10'>
        <div className='flex flex-col items-center'>
          <div className='text-center max-w-3xl mx-auto space-y-4 mb-8'>
            <h2 className='text-gray-900 text-3xl font-bold tracking-tighter sm:text-5xl'>
              Why Choose Divine African Tours
            </h2>
            <p className='text-zinc-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400'>
              Experience the magic of Africa with a tour company that goes above
              and beyond.
            </p>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl'>
            {[
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
            ].map((item, index) => (
              <div
                key={index}
                className='relative flex flex-col items-center p-6 group bg-[#F4A460] bg-opacity-80 border border-gray-100 transition-all duration-200 hover:border-[#FFA500]/20 hover:shadow-lg overflow-hidden'
              >
                <div className='absolute inset-0 bg-[#FFA500] opacity-10 blur-xl'></div>
                <div className='relative z-10 flex flex-col items-center space-y-4'>
                  <div className='bg-[#4CAF50] p-3 rounded-full group-hover:bg-[#45a049] transition-colors duration-200'>
                    <item.icon className='h-8 w-8 text-white group-hover:text-[#FFD700] transition-colors duration-200' />
                  </div>
                  <h3 className='text-xl font-bold text-center text-gray-900'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray-900 text-center'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-8'>
            <Link
              to='/'
              className='bg-[#4CAF50] text-white hover:bg-[#FFD700] hover:text-black px-6 py-3 rounded-md font-semibold transition-colors duration-200 text-lg inline-block'
            >
              Book Your African Adventure
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
