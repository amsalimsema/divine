import { useState, useEffect } from 'react'

const heroContent = [
  {
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80',
    title: 'Discover the Wild Heart of Africa',
    description:
      "Embark on unforgettable safaris across the breathtaking landscapes of Africa. Experience nature's grandeur up close.",
  },
  {
    image:
      'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80',
    title: 'Explore Ancient Cultures and Traditions',
    description:
      'Immerse yourself in the rich heritage of African tribes. Witness age-old customs and vibrant celebrations.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80',
    title: 'Luxury Meets Adventure',
    description:
      'Experience the perfect blend of comfort and excitement. Our tours offer premium accommodations amidst wild terrains.',
  },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
    }, 60000) // Change every 60 seconds (1 minute)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className='relative min-h-screen bg-cover bg-center flex flex-col transition-all duration-1000 ease-in-out'
      style={{ backgroundImage: `url('${heroContent[currentIndex].image}')` }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>

      <div className='relative z-10 flex-grow flex flex-col justify-center items-center text-center'>
        <div className='container mx-auto px-4 sm:px-6'>
          <a
            href='/'
            className='text-white text-3xl font-bold mb-12 inline-block'
          >
            Divine African Tours
          </a>
          <div className='max-w-2xl mx-auto'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6'>
              {heroContent[currentIndex].title}
            </h1>
            <p className='text-xl md:text-2xl text-gray-200 mb-8'>
              {heroContent[currentIndex].description}
            </p>
            <button className='bg-green-600/40 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300'>
              Start Your Adventure
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
