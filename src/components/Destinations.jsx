import React from 'react'

const galleryItems = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'Mountain Adventure',
    description: 'Explore the majestic peaks',
    ctaText: 'Book Now',
  },
  {
    id: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'Tropical Paradise',
    description: 'Relax on pristine beaches',
    ctaText: 'Plan Your Trip',
  },
  {
    id: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'Starry Night',
    description: 'Witness breathtaking night skies',
    ctaText: 'Discover More',
  },
  {
    id: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'City Lights',
    description: 'Experience vibrant urban life',
    ctaText: 'Explore Cities',
  },
]

export default function Component() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-3xl font-bold text-center mb-8'>
        Discover Amazing Destinations
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className='relative overflow-hidden rounded-lg group'
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white p-4'>
              <h3 className='text-2xl font-bold mb-2'>{item.title}</h3>
              <p className='text-center mb-4'>{item.description}</p>
              <button className='px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-black transition-colors duration-300'>
                {item.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
