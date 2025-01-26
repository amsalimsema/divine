import React, { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import Hero from './Hero'
import emailjs from '@emailjs/browser'

export default function Component() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    nationality: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    nationality: '',
    subject: '',
    message: '',
  })

  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    validateField(name, value)
  }

  const validateField = (name, value) => {
    let error = ''
    switch (name) {
      case 'fullName':
        if (!value.trim())
          error = 'Please provide your full name for our records'
        break
      case 'email':
        if (!value.trim())
          error = 'We need your email to send you tour information'
        else if (!/\S+@\S+\.\S+/.test(value))
          error = 'Please enter a valid email address'
        break
      case 'phoneNumber':
        if (value && !/^\+?[0-9\s\-()]+$/.test(value))
          error = 'Please enter a valid phone number with country code'
        break
      case 'subject':
        if (!value.trim()) error = 'Please specify the subject of your inquiry'
        break
      case 'message':
        if (!value.trim())
          error = 'Please tell us about your dream African adventure'
        else if (value.trim().length < 20)
          error = 'Please provide more details about your tour preferences'
        break
      default:
        break
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }))
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { ...errors }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name for our records'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'We need your email to send you tour information'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (
      formData.phoneNumber &&
      !/^\+?[0-9\s\-()]+$/.test(formData.phoneNumber)
    ) {
      newErrors.phoneNumber =
        'Please enter a valid phone number with country code'
      isValid = false
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify the subject of your inquiry'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your dream African adventure'
      isValid = false
    } else if (formData.message.trim().length < 20) {
      newErrors.message =
        'Please provide more details about your tour preferences'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Mimic sending
      setSuccessMessage('Sending...')

      // Simulate API call delay
      setTimeout(() => {
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log('Email sent successfully:', result.text)
              setSuccessMessage('Message sent successfully!')
              // Clear form fields
              setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                nationality: '',
                subject: '',
                message: '',
              })
              // Clear errors
              setErrors({
                fullName: '',
                email: '',
                phoneNumber: '',
                nationality: '',
                subject: '',
                message: '',
              })
              // Clear success message after 5 seconds
              setTimeout(() => setSuccessMessage(''), 5000)
            },
            (error) => {
              console.error('Failed to send email:', error.text)
              setSuccessMessage('Failed to send message. Please try again.')
              // Clear error message after 5 seconds
              setTimeout(() => setSuccessMessage(''), 5000)
            }
          )
      }, 2000) // Simulate 2 seconds delay
    }
  }

  return (
    <>
      <Hero
        heading='Get in Touch'
        sub="Let's plan your unforgettable African adventure together"
      />
      <div className='bg-white'>
        <div className='max-w-5xl mx-auto p-4 py-8 flex flex-col gap-12 w-full lg:w-[70%]'>
          <div className='text-black flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0'>
            <div className='text-center lg:text-left'>
              <Phone
                className='w-6 h-6 text-[#2ba924] mb-2 mx-auto lg:mx-0'
                aria-hidden='true'
              />
              <h2 className='text-lg font-semibold mb-1 text-black'>Phone</h2>
              <a
                href='tel:+256759650705'
                className='text-black hover:underline block'
              >
                +256 759 650705
              </a>
              <a
                href='tel:+256775650705'
                className='text-black hover:underline block'
              >
                +256 775 650705
              </a>
            </div>
            <div className='text-center lg:text-left'>
              <Mail
                className='w-6 h-6 text-[#2ba924] mb-2 mx-auto lg:mx-0'
                aria-hidden='true'
              />
              <h2 className='text-lg font-semibold mb-1 text-black'>Email</h2>
              <a
                href='mailto:info@divineafricantours.com'
                className='text-[#2ba924] hover:underline'
              >
                info@divineafricantours.com
              </a>
            </div>
            <div className='text-center lg:text-left'>
              <MapPin
                className='w-6 h-6 text-[#2ba924] mb-2 mx-auto lg:mx-0'
                aria-hidden='true'
              />
              <h2 className='text-lg font-semibold mb-1 text-black'>
                Location
              </h2>
              <p className='text-black'>Plot 30, Lumumba Avenue</p>
              <p className='text-black'>Kampala, Uganda</p>
            </div>
          </div>
          <div className='w-full p-0 rounded-lg min-h-full text-black mt-8 lg:mt-10'>
            {successMessage && (
              <div
                className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4'
                role='alert'
              >
                <span className='block sm:inline'>{successMessage}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className='space-y-4' noValidate>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='fullName' className='block text-black mb-1'>
                    Full Name *
                  </label>
                  <input
                    id='fullName'
                    type='text'
                    name='fullName'
                    placeholder='Enter your full name'
                    className='w-full p-2 border border-gray-300 rounded text-sm -webkit-appearance-none appearance-none'
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor='email' className='block text-black mb-1'>
                    Email *
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Enter your email address'
                    className='w-full p-2 border border-gray-300 rounded text-sm -webkit-appearance-none appearance-none'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor='phoneNumber'
                    className='block text-black mb-1'
                  >
                    Phone Number
                  </label>
                  <input
                    id='phoneNumber'
                    type='tel'
                    name='phoneNumber'
                    placeholder='Enter your phone number'
                    className='w-full p-2 border border-gray-300 rounded text-sm -webkit-appearance-none appearance-none'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor='nationality'
                    className='block text-black mb-1'
                  >
                    Nationality
                  </label>
                  <input
                    id='nationality'
                    type='text'
                    name='nationality'
                    placeholder='Enter your nationality'
                    className='w-full p-2 border border-gray-300 rounded text-sm -webkit-appearance-none appearance-none'
                    value={formData.nationality}
                    onChange={handleChange}
                  />
                  {errors.nationality && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.nationality}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor='subject' className='block text-black mb-1'>
                  Subject *
                </label>
                <input
                  id='subject'
                  type='text'
                  name='subject'
                  placeholder='Enter the subject of your message'
                  className='w-full p-2 border border-gray-300 rounded text-sm -webkit-appearance-none appearance-none'
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className='text-red-500 text-xs mt-1'>{errors.subject}</p>
                )}
              </div>
              <div>
                <label htmlFor='message' className='block text-black mb-1'>
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Enter your message here'
                  rows={4}
                  className='w-full p-2 border border-gray-300 rounded text-sm -webkit-appearance-none appearance-none'
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className='text-red-500 text-xs mt-1'>{errors.message}</p>
                )}
              </div>
              <p className='text-sm text-gray-600 mt-2 mb-4'>
                * Required fields
              </p>
              <button
                type='submit'
                className='w-auto bg-[#2ba924] text-white py-2 px-4 rounded hover:bg-[#248f1f] transition duration-300 mx-auto block'
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
