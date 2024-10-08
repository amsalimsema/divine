import React from 'react'
import { Sunrise, Users, Shield, Layers, Heart, UserPlus } from 'lucide-react'

function RandomCircles() {
  const circles = []
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * 100 + '%'
    const y = Math.random() * 100 + '%'
    const size = Math.random() * 10 + 5
    const color = Math.random() > 0.5 ? '#45a049' : '#FF8C00' // Slightly more intense colors
    circles.push(
      <circle key={i} cx={x} cy={y} r={size} fill={color} opacity='0.15' /> // Increased opacity
    )
  }
  return circles
}

export default function WhyChooseDivineAfricaTours() {
  return (
    <section className='w-full container mx-auto py-12 md:py-24 lg:py-32 relative overflow-hidden'>
      <svg
        className='absolute inset-0 w-full h-full'
        xmlns='http://www.w3.org/2000/svg'
      >
        <RandomCircles />
      </svg>
      <div className='container px-4 md:px-6 relative z-10'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Why Choose Divine Africa Tours
            </h2>
            <p className='max-w-[900px] text-zinc-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400'>
              Experience the magic of Africa with a tour company that goes above
              and beyond.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3'>
          <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg group bg-white bg-opacity-80'>
            <Sunrise className='h-12 w-12 text-[#4CAF50] group-hover:text-[#FFA500] transition-colors duration-200' />
            <h3 className='text-xl font-bold'>Unforgettable Experiences</h3>
            <p className='text-sm text-zinc-700 dark:text-zinc-400 text-center'>
              Curated itineraries that showcase the best of African wildlife,
              landscapes, and cultures.
            </p>
          </div>
          <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg group bg-white bg-opacity-80'>
            <Users className='h-12 w-12 text-[#4CAF50] group-hover:text-[#FFA500] transition-colors duration-200' />
            <h3 className='text-xl font-bold'>Expert Local Guides</h3>
            <p className='text-sm text-zinc-700 dark:text-zinc-400 text-center'>
              Knowledgeable and passionate guides who bring Africa's wonders to
              life.
            </p>
          </div>
          <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg group bg-white bg-opacity-80'>
            <Shield className='h-12 w-12 text-[#4CAF50] group-hover:text-[#FFA500] transition-colors duration-200' />
            <h3 className='text-xl font-bold'>Safety First</h3>
            <p className='text-sm text-zinc-700 dark:text-zinc-400 text-center'>
              Your well-being is our top priority, with strict safety measures
              in place.
            </p>
          </div>
          <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg group bg-white bg-opacity-80'>
            <Layers className='h-12 w-12 text-[#4CAF50] group-hover:text-[#FFA500] transition-colors duration-200' />
            <h3 className='text-xl font-bold'>Unbeatable Value</h3>
            <p className='text-sm text-zinc-700 dark:text-zinc-400 text-center'>
              Experience Africa's wonders without breaking the bank. Quality
              adventures at fair prices.
            </p>
          </div>
          <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg group bg-white bg-opacity-80'>
            <Heart className='h-12 w-12 text-[#4CAF50] group-hover:text-[#FFA500] transition-colors duration-200' />
            <h3 className='text-xl font-bold'>Responsible Tourism</h3>
            <p className='text-sm text-zinc-700 dark:text-zinc-400 text-center'>
              We're committed to sustainable practices and supporting local
              communities.
            </p>
          </div>
          <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg group bg-white bg-opacity-80'>
            <UserPlus className='h-12 w-12 text-[#4CAF50] group-hover:text-[#FFA500] transition-colors duration-200' />
            <h3 className='text-xl font-bold'>Personalized Service</h3>
            <p className='text-sm text-zinc-700 dark:text-zinc-400 text-center'>
              Tailored experiences to meet your unique preferences and
              requirements.
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='bg-[#4CAF50] text-white hover:bg-[#FFA500] px-4 py-2 rounded-md font-semibold transition-colors duration-200'>
            Book Your African Adventure
          </button>
        </div>
      </div>
    </section>
  )
}
