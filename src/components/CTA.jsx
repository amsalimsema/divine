import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function CTASection() {
  return (
    <div className='mt-12 bg-gray-200 shadow-xl overflow-hidden px-2 sm:px-6 lg:px-8'>
      <div className='px-6 py-12 sm:px-12 sm:py-16 flex flex-col items-center text-center text-black'>
        <div>
          <h2 className='text-3xl font-light tracking-tight text-black sm:text-4xl'>
            Ready to embark on your adventure?
          </h2>
          <p className='mt-3 max-w-3xl text-lg text-gray-700'>
            Book your Safari Adventure today and create memories that will last
            a lifetime. Our team is ready to assist you with any questions and
            help you plan your perfect safari experience.
          </p>
        </div>
        <div className='mt-8'>
          <div className='inline-flex rounded-md shadow'>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center px-5 py-3 border border-[#2ba924] text-base font-light rounded-md text-white bg-[#2ba924] hover:bg-transparent hover:text-black transition-colors duration-300 shadow-md group'
            >
              Contact Us
              <ArrowUpRight className='ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
