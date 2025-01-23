import React from 'react'
import Chimp from '../assets/chimpanzee.jpg'
import GoldenMonkeyRw from '../assets/uganda-golden-monkey.jpg'
import Nakuru from '../assets/Nakuru.jpg'
import Mara from '../assets/Mara.jpg'
import MountainGorilla from '../assets/bwindi_gorilla.jpg'
import Giraffe from '../assets/giraffe_murchision.jpg'
import Impala from '../assets/impala_lake_mburo.jpg'
import Lion from '../assets/lion-in-queen-elizabeth-national-park.jpg'

const Hero = ({ heading, sub }) => {
  return (
    <div className='relative w-full h-[350px] overflow-hidden'>
      {/* Masonry Background */}
      <div className='absolute inset-0 grid grid-cols-4 gap-1'>
        <div className='grid gap-1'>
          <img
            src={Chimp || '/placeholder.svg'}
            alt='Chimpanzee'
            className='w-full h-[170px] object-cover'
          />
          <img
            src={GoldenMonkeyRw || '/placeholder.svg'}
            alt='Golden Monkey in Rwanda'
            className='w-full h-[180px] object-cover'
          />
        </div>
        <div className='grid gap-1'>
          <img
            src={Nakuru || '/placeholder.svg'}
            alt='Lake Nakuru'
            className='w-full h-[220px] object-cover'
          />
          <img
            src={Mara || '/placeholder.svg'}
            alt='Maasai Mara'
            className='w-full h-[130px] object-cover'
          />
        </div>
        <div className='grid gap-1'>
          <img
            src={MountainGorilla || '/placeholder.svg'}
            alt='Mountain Gorilla in Bwindi'
            className='w-full h-[150px] object-cover'
          />
          <img
            src={Giraffe || '/placeholder.svg'}
            alt='Giraffe in Murchison Falls'
            className='w-full h-[200px] object-cover'
          />
        </div>
        <div className='grid gap-1'>
          <img
            src={Impala || '/placeholder.svg'}
            alt='Impala in Lake Mburo'
            className='w-full h-[180px] object-cover'
          />
          <img
            src={Lion || '/placeholder.svg'}
            alt='Lion in Queen Elizabeth National Park'
            className='w-full h-[170px] object-cover'
          />
        </div>
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>

      {/* Content */}
      <div className='relative z-10 h-full flex flex-col items-center justify-center text-center px-4'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg'>
          {heading}
          {/* Discover African Adventures */}
        </h2>
        <p className='text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md'>
          {sub}
          {/* Embark on unforgettable journeys through the heart of East Africa */}
        </p>
      </div>
    </div>
  )
}

export default Hero
