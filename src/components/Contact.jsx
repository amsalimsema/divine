import React, { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import Hero from './Hero'

export default function Component() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    nationality: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to your backend
  }

  return (
    <>
      <Hero title='CONTACT US' />
      <div className='bg-gray-100'>
        <div className='max-w-4xl mx-auto p-4 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            <div className='flex flex-col items-center text-center'>
              <Phone
                className='w-8 h-8 mb-4 text-gray-600'
                aria-hidden='true'
              />
              <h2 className='text-xl font-semibold mb-2'>PHONE</h2>
              <p className='text-gray-600'>Office: +256 759 650705</p>
              <p className='text-gray-600'>Mobile: +256 775 650705</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <Mail className='w-8 h-8 mb-4 text-gray-600' aria-hidden='true' />
              <h2 className='text-xl font-semibold mb-2'>EMAIL</h2>
              <p className='text-gray-600 mb-2'>
                Our Email is one of the most reliable modes of communication.
              </p>
              <p className='text-gray-600 mb-2'>We'll Always Reply.</p>
              <a
                href='mailto:info@divineafricantours.com'
                className='text-green-600 hover:underline'
              >
                info@divineafricantours.com
              </a>
            </div>
            <div className='flex flex-col items-center text-center'>
              <MapPin
                className='w-8 h-8 mb-4 text-gray-600'
                aria-hidden='true'
              />
              <h2 className='text-xl font-semibold mb-2'>LOCATION</h2>
              <p className='text-gray-600 mb-2'>Plot 30, Lumumba Avenue.</p>
              <p className='text-gray-600 mb-2'>P.O.BOX: 129920.</p>
              <p className='text-gray-600'>Kampala - Uganda</p>
            </div>
          </div>

          <div className='w-full p-0 rounded-lg min-h-full mb-12'>
            <h2 className='text-4xl font-extrabold text-center mb-3'>
              Get in Touch
            </h2>
            <p className='text-xl text-center text-gray-600 mb-8 font-medium'>
              We're here to help and answer any question you might have.
            </p>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='fullName' className='sr-only'>
                    Full Name
                  </label>
                  <input
                    id='fullName'
                    type='text'
                    name='fullName'
                    placeholder='Full Name*'
                    required
                    className='w-full p-2 border border-gray-300 rounded'
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Email*'
                    required
                    className='w-full p-2 border border-gray-300 rounded'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor='phoneNumber' className='sr-only'>
                    Phone Number
                  </label>
                  <input
                    id='phoneNumber'
                    type='tel'
                    name='phoneNumber'
                    placeholder='Phone Number'
                    className='w-full p-2 border border-gray-300 rounded'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor='nationality' className='sr-only'>
                    Nationality
                  </label>
                  <input
                    id='nationality'
                    type='text'
                    name='nationality'
                    placeholder='Nationality'
                    className='w-full p-2 border border-gray-300 rounded'
                    value={formData.nationality}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor='subject' className='sr-only'>
                  Subject
                </label>
                <input
                  id='subject'
                  type='text'
                  name='subject'
                  placeholder='Subject*'
                  required
                  className='w-full p-2 border border-gray-300 rounded'
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='message' className='sr-only'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Message*'
                  required
                  rows={4}
                  className='w-full p-2 border border-gray-300 rounded'
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300'
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
