import React from 'react'

const Hero = ({ title, sub }) => {
  return (
    <div className='relative h-[300px] overflow-hidden bg-gradient-to-b from-[#2ba924] via-[#228c1d] to-[#1a6f16]'>
      {/* Safari pattern overlay */}
      <div className='absolute inset-0 opacity-20'>
        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
          <pattern
            id='pattern'
            width='40'
            height='40'
            patternUnits='userSpaceOnUse'
          >
            <path
              d='M0 0L40 0L40 40L0 40Z'
              fill='none'
              stroke='white'
              strokeWidth='1'
            />
            <circle cx='20' cy='20' r='8' fill='white' opacity='0.5' />
          </pattern>
          <rect width='100%' height='100%' fill='url(#pattern)' />
        </svg>
      </div>

      {/* Animal silhouettes */}
      <div className='absolute bottom-0 left-0 right-0'>
        <svg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='rgba(0,0,0,0.1)'
            fillOpacity='1'
            d='M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,181.3C840,171,960,181,1080,181.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl mb-4 text-shadow'>
          {title}
        </h1>

        <h3 className='text-2xl'>{sub}</h3>

        {/* Decorative elements */}
      </div>
    </div>
  )
}

export default Hero
