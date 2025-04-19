import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin } from 'lucide-react'

export default function NotFound() {
  return (
    <div className='bg-white min-h-screen flex flex-col items-center justify-center px-4 py-12'>
      <div className='max-w-md w-full text-center'>
        {/* Safari Compass Icon */}
        <div className='mx-auto w-24 h-24 bg-[#2ba924] rounded-full flex items-center justify-center mb-6'>
          <MapPin className='w-12 h-12 text-white' />
        </div>

        <h1 className='text-4xl font-bold mb-2 text-gray-900'>
          Destination Not Found
        </h1>

        <p className='text-xl text-gray-600 mb-8'>
          It seems you've ventured off the beaten path. This safari destination
          doesn't exist.
        </p>

        <div className='flex flex-col space-y-4'>
          <Link
            to='/'
            className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2ba924] text-white rounded-md hover:bg-[#228a1d] transition-colors'
          >
            <ArrowLeft className='w-5 h-5' />
            Return to Home
          </Link>

          <Link
            to='/destinations'
            className='inline-flex items-center justify-center px-6 py-3 border border-[#2ba924] text-[#2ba924] rounded-md hover:bg-gray-50 transition-colors'
          >
            Explore Available Tours
          </Link>
        </div>

        <div className='mt-12 pt-8 border-t border-gray-200'>
          <p className='text-gray-500'>
            Need assistance? Contact our safari experts at{' '}
            <a
              href='mailto:info@divinetours.com'
              className='text-[#2ba924] hover:underline'
            >
              info@divineafricantours.com
            </a>
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-100 to-transparent opacity-50 -z-10'></div>
      <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent opacity-50 -z-10'></div>
    </div>
  )
}
