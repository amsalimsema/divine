// import React, { useState } from 'react'
// import { Phone, Mail, MapPin } from 'lucide-react'
// import Hero from './Hero'

// export default function Component() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     nationality: '',
//     subject: '',
//     message: '',
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//     // Here you would typically send the form data to your backend
//   }

//   return (
//     <>
//       <Hero/>
//       <div className='bg-white'>
//         <div className='max-w-5xl mx-auto p-4 py-8 flex flex-col gap-12 w-full lg:w-[70%]'>
//           <h1 className='text-center text-4xl mb-1 text-black'>Get in Touch</h1>

//           <div className='text-black flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0'>
//             <div className='text-center lg:text-left'>
//               <Phone
//                 className='w-6 h-6 text-[#2ba924] mb-2 mx-auto lg:mx-0'
//                 aria-hidden='true'
//               />
//               <h2 className='text-lg font-semibold mb-1 text-black'>Phone</h2>
//               <a
//                 href='tel:+256759650705'
//                 className='text-black hover:underline block'
//               >
//                 +256 759 650705
//               </a>
//               <a
//                 href='tel:+256775650705'
//                 className='text-black hover:underline block'
//               >
//                 +256 775 650705
//               </a>
//             </div>
//             <div className='text-center lg:text-left'>
//               <Mail
//                 className='w-6 h-6 text-[#2ba924] mb-2 mx-auto lg:mx-0'
//                 aria-hidden='true'
//               />
//               <h2 className='text-lg font-semibold mb-1 text-black'>Email</h2>
//               <a
//                 href='mailto:info@divineafricantours.com'
//                 className='text-[#2ba924] hover:underline'
//               >
//                 info@divineafricantours.com
//               </a>
//             </div>
//             <div className='text-center lg:text-left'>
//               <MapPin
//                 className='w-6 h-6 text-[#2ba924] mb-2 mx-auto lg:mx-0'
//                 aria-hidden='true'
//               />
//               <h2 className='text-lg font-semibold mb-1 text-black'>
//                 Location
//               </h2>
//               <p className='text-black'>Plot 30, Lumumba Avenue</p>
//               <p className='text-black'>Kampala, Uganda</p>
//             </div>
//           </div>
//           <div className='w-full p-0 rounded-lg min-h-full text-black'>
//             <form onSubmit={handleSubmit} className='space-y-4'>
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//                 <div>
//                   <label htmlFor='fullName' className='sr-only'>
//                     Full Name
//                   </label>
//                   <input
//                     id='fullName'
//                     type='text'
//                     name='fullName'
//                     placeholder='Full Name*'
//                     required
//                     className='w-full p-2 border border-gray-300 rounded placeholder-black'
//                     value={formData.fullName}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor='email' className='sr-only'>
//                     Email
//                   </label>
//                   <input
//                     id='email'
//                     type='email'
//                     name='email'
//                     placeholder='Email*'
//                     required
//                     className='w-full p-2 border border-gray-300 rounded placeholder-black'
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor='phoneNumber' className='sr-only'>
//                     Phone Number
//                   </label>
//                   <input
//                     id='phoneNumber'
//                     type='tel'
//                     name='phoneNumber'
//                     placeholder='Phone Number'
//                     className='w-full p-2 border border-gray-300 rounded placeholder-black'
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor='nationality' className='sr-only'>
//                     Nationality
//                   </label>
//                   <input
//                     id='nationality'
//                     type='text'
//                     name='nationality'
//                     placeholder='Nationality'
//                     className='w-full p-2 border border-gray-300 rounded placeholder-black'
//                     value={formData.nationality}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor='subject' className='sr-only'>
//                   Subject
//                 </label>
//                 <input
//                   id='subject'
//                   type='text'
//                   name='subject'
//                   placeholder='Subject*'
//                   required
//                   className='w-full p-2 border border-gray-300 rounded placeholder-black'
//                   value={formData.subject}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label htmlFor='message' className='sr-only'>
//                   Message
//                 </label>
//                 <textarea
//                   id='message'
//                   name='message'
//                   placeholder='Message*'
//                   required
//                   rows={4}
//                   className='w-full p-2 border border-gray-300 rounded placeholder-black'
//                   value={formData.message}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>
//               <button
//                 type='submit'
//                 className='w-auto bg-[#2ba924] text-white py-2 px-4 rounded hover:bg-[#248f1f] transition duration-300 mx-auto block'
//               >
//                 SEND MESSAGE
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
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
      <Hero title='Contact' />
      <div className='bg-white'>
        <div className='max-w-5xl mx-auto p-4 py-8 flex flex-col gap-12 w-full lg:w-[70%]'>
          <h1 className='text-center text-4xl mb-1 text-black'>Get in Touch</h1>

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
          <div className='w-full p-0 rounded-lg min-h-full text-black mt-8 lg:mt-0'>
            <form onSubmit={handleSubmit} className='space-y-4'>
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
                    required
                    className='w-full p-2 border border-gray-300 rounded text-sm -webkit-appearance-none appearance-none'
                    value={formData.fullName}
                    onChange={handleChange}
                  />
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
                    required
                    className='w-full p-2 border border-gray-300 rounded text-sm -webkit-appearance-none appearance-none'
                    value={formData.email}
                    onChange={handleChange}
                  />
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
                  required
                  className='w-full p-2 border border-gray-300 rounded text-sm -webkit-appearance-none appearance-none'
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='message' className='block text-black mb-1'>
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Enter your message here'
                  required
                  rows={4}
                  className='w-full p-2 border border-gray-300 rounded text-sm -webkit-appearance-none appearance-none'
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
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
