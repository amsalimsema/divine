import React from 'react'

const HeroWithSafariImages = () => {
  return (
    <section className='relative h-[35vh] overflow-hidden'>
      <div className='absolute inset-0 flex'>
        <div className='w-1/5 relative'>
          <img
            src='https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=900&q=80'
            alt='Sunrise over Serengeti'
            className='absolute inset-0 w-full h-full object-cover'
          />
        </div>
        <div className='w-1/5 relative'>
          <img
            src='https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'
            alt='Elephants in African savanna'
            className='absolute inset-0 w-full h-full object-cover'
          />
        </div>
        <div className='w-1/5 relative'>
          <img
            src='https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=750&q=80'
            alt='Silverback gorilla in the forest'
            className='absolute inset-0 w-full h-full object-cover'
          />
        </div>
        <div className='w-1/5 relative'>
          <img
            src='https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=825&q=80'
            alt='Zebras in the wild'
            className='absolute inset-0 w-full h-full object-cover'
          />
        </div>
        <div className='w-1/5 relative'>
          <img
            src='https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=700&q=80'
            alt='Giraffe on the African plains'
            className='absolute inset-0 w-full h-full object-cover'
          />
        </div>
      </div>
      <div className='absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center pb-8'>
        <h1 className='text-2xl md:text-4xl font-bold text-white text-center'>
          Discover Africa's Majestic Wildlife
        </h1>
      </div>
    </section>
  )
}

export default HeroWithSafariImages
