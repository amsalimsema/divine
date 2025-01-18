import React from 'react'

const Hero = ({ title, sub }) => {
  return (
    <section
      className='h-[320px] overflow-hidden bg-cover bg-center flex items-center'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      <div className='container mx-auto px-4 relative'>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Text content */}
          <div className='w-full text-center'>
            <div className='space-y-2'>
              <p className='text-3xl font-medium text-white'>{title}</p>
              <p className='text-3xl text-white'>{sub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
