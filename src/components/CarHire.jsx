// import React, { useState } from 'react'
// import { Car, Users, Fuel, Cog, Check, Info, ChevronDown } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Hero from './Hero'

// export default function CarHireSection() {
//   const [activeTab, setActiveTab] = useState('all')
//   const [openAccordion, setOpenAccordion] = useState(null)

//   const vehicles = [
//     {
//       name: 'Safari Jeep',
//       image:
//         'https://images.unsplash.com/photo-1605559911160-a3d95d213904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80',
//       description: 'Perfect for off-road adventures and game drives',
//       capacity: 6,
//       transmission: 'Manual',
//       fuel: 'Diesel',
//       pricePerDay: 80,
//       features: [
//         '4x4 Capability',
//         'Roof Rack',
//         'Air Conditioning',
//         'GPS Navigation',
//       ],
//     },
//     {
//       name: 'Luxury SUV',
//       image:
//         'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80',
//       description: 'Comfortable and spacious for long journeys',
//       capacity: 7,
//       transmission: 'Automatic',
//       fuel: 'Petrol',
//       pricePerDay: 120,
//       features: [
//         'Leather Seats',
//         'Panoramic Sunroof',
//         'Advanced Safety Features',
//         'Premium Sound System',
//       ],
//     },
//     {
//       name: 'Economy Car',
//       image:
//         'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80',
//       description: 'Fuel-efficient and easy to maneuver in cities',
//       capacity: 5,
//       transmission: 'Manual',
//       fuel: 'Petrol',
//       pricePerDay: 50,
//       features: [
//         'Fuel Efficiency',
//         'Compact Size',
//         'Bluetooth Connectivity',
//         'USB Charging Ports',
//       ],
//     },
//   ]

//   const toggleAccordion = (itemId) => {
//     setOpenAccordion(openAccordion === itemId ? null : itemId)
//   }

//   return (
//     <>
//       <Hero title='CAR HIRE' />
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className='py-16 bg-amber-50'
//       >
//         <div className='container mx-auto px-4 text-gray-800'>
//           <motion.h2
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className='text-3xl font-semibold mb-2 text-center'
//           >
//             Car Hire Options
//           </motion.h2>
//           <motion.p
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className='text-base text-center mb-12 max-w-3xl mx-auto'
//           >
//             Choose from our well-maintained vehicles, ideal for any African
//             adventure, whether it's a safari, city tour, or cross-country
//             expedition
//           </motion.p>

//           <div className='mb-12'>
//             <motion.div
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//               className='flex justify-center mb-8'
//             >
//               {['all', '4x4', 'luxury', 'economy'].map((tab) => (
//                 <motion.button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-4 py-2 mx-2 rounded-md ${
//                     activeTab === tab
//                       ? 'bg-orange-600 text-white'
//                       : 'bg-white text-gray-700 hover:bg-orange-100'
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </motion.button>
//               ))}
//             </motion.div>
//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//               className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
//             >
//               <AnimatePresence>
//                 {vehicles
//                   .filter(
//                     (vehicle) =>
//                       activeTab === 'all' ||
//                       (activeTab === '4x4' && vehicle.name === 'Safari Jeep') ||
//                       (activeTab === 'luxury' &&
//                         vehicle.name === 'Luxury SUV') ||
//                       (activeTab === 'economy' &&
//                         vehicle.name === 'Economy Car')
//                   )
//                   .map((vehicle, index) => (
//                     <motion.div
//                       key={vehicle.name}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <VehicleCard vehicle={vehicle} />
//                     </motion.div>
//                   ))}
//               </AnimatePresence>
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//             className='bg-white rounded-lg shadow-lg p-8 mb-12'
//           >
//             <h3 className='text-2xl font-semibold mb-6'>
//               Why Choose Divine African Tours for Your Car Hire?
//             </h3>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//               {[
//                 {
//                   icon: <Car className='w-12 h-12 text-orange-600' />,
//                   title: 'Wide Range of Vehicles',
//                   description:
//                     'From rugged 4x4s to comfortable luxury cars, we have the perfect vehicle for your needs.',
//                 },
//                 {
//                   icon: <Check className='w-12 h-12 text-orange-600' />,
//                   title: 'Quality Assurance',
//                   description:
//                     'All our vehicles are regularly serviced and maintained to ensure your safety and comfort.',
//                 },
//                 {
//                   icon: <Users className='w-12 h-12 text-orange-600' />,
//                   title: 'Experienced Staff',
//                   description:
//                     'Our knowledgeable team can help you choose the right vehicle and provide local insights for your trip.',
//                 },
//                 {
//                   icon: <Fuel className='w-12 h-12 text-orange-600' />,
//                   title: 'Flexible Fuel Options',
//                   description:
//                     'Choose between petrol and diesel vehicles to suit your preference and budget.',
//                 },
//                 {
//                   icon: <Cog className='w-12 h-12 text-orange-600' />,
//                   title: '24/7 Support',
//                   description:
//                     'Enjoy peace of mind with our round-the-clock customer support and roadside assistance.',
//                 },
//                 {
//                   icon: <Info className='w-12 h-12 text-orange-600' />,
//                   title: 'Transparent Pricing',
//                   description:
//                     'No hidden fees. Our prices include insurance and standard mileage allowance.',
//                 },
//               ].map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   className='flex flex-col items-center text-center'
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 * index, duration: 0.5 }}
//                 >
//                   <motion.div
//                     className='mb-4'
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                   >
//                     {feature.icon}
//                   </motion.div>
//                   <h4 className='text-xl font-semibold mb-2'>
//                     {feature.title}
//                   </h4>
//                   <p className='text-gray-600'>{feature.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.7, duration: 0.5 }}
//             className='bg-orange-100 rounded-lg shadow-lg p-8'
//           >
//             <h3 className='text-2xl font-semibold mb-6'>
//               Frequently Asked Questions
//             </h3>
//             <div className='space-y-4'>
//               {[
//                 {
//                   id: 'item-1',
//                   question: 'What documents do I need to hire a car?',
//                   answer:
//                     "You'll need a valid driver's license, passport, and a credit card for the security deposit. International drivers may also need an International Driving Permit.",
//                 },
//                 {
//                   id: 'item-2',
//                   question: 'Is insurance included in the rental price?',
//                   answer:
//                     'Basic insurance is included in our rental prices. However, we offer additional coverage options for extra peace of mind.',
//                 },
//                 {
//                   id: 'item-3',
//                   question: 'Can I hire a car with a driver?',
//                   answer:
//                     'Yes, we offer chauffeur services. Our experienced drivers are knowledgeable about local routes and attractions.',
//                 },
//                 {
//                   id: 'item-4',
//                   question: 'What is your cancellation policy?',
//                   answer:
//                     'Free cancellation is available up to 48 hours before your pickup time. Cancellations made within 48 hours may incur a fee.',
//                 },
//                 {
//                   id: 'item-5',
//                   question: 'Are there any mileage restrictions?',
//                   answer:
//                     'Our standard rentals come with unlimited mileage. However, some specialty vehicles may have mileage restrictions. Please check the specific terms for your chosen vehicle.',
//                 },
//               ].map((item) => (
//                 <motion.div
//                   key={item.id}
//                   className='border-b border-orange-200 pb-4'
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <button
//                     onClick={() => toggleAccordion(item.id)}
//                     className='flex justify-between items-center w-full text-left'
//                   >
//                     <span className='text-lg font-semibold'>
//                       {item.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openAccordion === item.id ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <ChevronDown className='w-5 h-5' />
//                     </motion.div>
//                   </button>
//                   <AnimatePresence>
//                     {openAccordion === item.id && (
//                       <motion.p
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className='mt-2 text-gray-600'
//                       >
//                         {item.answer}
//                       </motion.p>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>
//     </>
//   )
// }

// function VehicleCard({ vehicle }) {
//   return (
//     <motion.div
//       className='bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full'
//       whileHover={{ scale: 1.03 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className='relative w-full h-[400px]'>
//         <motion.img
//           src={vehicle.image}
//           alt={vehicle.name}
//           className='absolute inset-0 w-full h-full object-cover object-center'
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />
//       </div>
//       <div className='p-6 flex flex-col flex-grow'>
//         <h3 className='text-xl font-semibold mb-2'>{vehicle.name}</h3>
//         <p className='text-gray-600 mb-4 flex-grow'>{vehicle.description}</p>
//         <div className='grid grid-cols-2 gap-4 mb-4'>
//           <div className='flex items-center'>
//             <Users className='w-5 h-5 mr-2' />
//             <span>{vehicle.capacity} Passengers</span>
//           </div>
//           <div className='flex items-center'>
//             <Cog className='w-5 h-5 mr-2' />
//             <span>{vehicle.transmission}</span>
//           </div>
//           <div className='flex items-center'>
//             <Fuel className='w-5 h-5 mr-2' />
//             <span>{vehicle.fuel}</span>
//           </div>
//           <div className='flex items-center'>
//             <Car className='w-5 h-5 mr-2' />
//             <span>A/C</span>
//           </div>
//         </div>
//         <div className='mb-4'>
//           {vehicle.features.map((feature, index) => (
//             <motion.span
//               key={index}
//               className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1, duration: 0.3 }}
//             >
//               {feature}
//             </motion.span>
//           ))}
//         </div>
//         <div className='flex justify-between items-center mt-auto'>
//           <div className='text-2xl font-bold'>
//             ${vehicle.pricePerDay}
//             <span className='text-sm  font-normal'>/day</span>
//           </div>
//           <motion.button
//             className='bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Book Now
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

import React, { useState } from 'react'
import { Car, Users, Fuel, Cog, Check, Info, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './Hero'

export default function CarHireSection() {
  const [activeTab, setActiveTab] = useState('all')
  const [openAccordion, setOpenAccordion] = useState(null)

  const vehicles = [
    {
      name: 'Safari Jeep',
      image:
        'https://images.unsplash.com/photo-1605559911160-a3d95d213904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80',
      description: 'Perfect for off-road adventures and game drives',
      capacity: 6,
      transmission: 'Manual',
      fuel: 'Diesel',
      pricePerDay: 80,
      features: [
        '4x4 Capability',
        'Roof Rack',
        'Air Conditioning',
        'GPS Navigation',
      ],
      category: 'Pickup Trucks',
    },
    {
      name: 'Luxury SUV',
      image:
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80',
      description: 'Comfortable and spacious for long journeys',
      capacity: 7,
      transmission: 'Automatic',
      fuel: 'Petrol',
      pricePerDay: 120,
      features: [
        'Leather Seats',
        'Panoramic Sunroof',
        'Advanced Safety Features',
        'Premium Sound System',
      ],
      category: 'SUVs',
    },
    {
      name: 'Economy Car',
      image:
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80',
      description: 'Fuel-efficient and easy to maneuver in cities',
      capacity: 5,
      transmission: 'Manual',
      fuel: 'Petrol',
      pricePerDay: 50,
      features: [
        'Fuel Efficiency',
        'Compact Size',
        'Bluetooth Connectivity',
        'USB Charging Ports',
      ],
      category: 'SUVs',
    },
    {
      name: 'Pickup Truck',
      image:
        'https://images.unsplash.com/photo-1559416523-140ddc3d238c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80',
      description: 'Versatile vehicle for both work and adventure',
      capacity: 5,
      transmission: 'Manual',
      fuel: 'Diesel',
      pricePerDay: 90,
      features: [
        'High Ground Clearance',
        'Spacious Cargo Bed',
        'Towing Capability',
        'Durable Construction',
      ],
      category: 'Pickup Trucks',
    },
    {
      name: 'Minibus',
      image:
        'https://images.unsplash.com/photo-1545780518-29f9d8b1b9e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80',
      description: 'Ideal for group travel and tours',
      capacity: 15,
      transmission: 'Automatic',
      fuel: 'Diesel',
      pricePerDay: 150,
      features: [
        'Spacious Interior',
        'Comfortable Seating',
        'Luggage Storage',
        'Air Conditioning',
      ],
      category: 'Minibuses',
    },
    {
      name: 'Shuttle Van',
      image:
        'https://images.unsplash.com/photo-1609520778163-a16fb3b9d4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80',
      description: 'Perfect for airport transfers and small group transport',
      capacity: 12,
      transmission: 'Automatic',
      fuel: 'Petrol',
      pricePerDay: 100,
      features: [
        'Ample Legroom',
        'Overhead Storage',
        'Easy Entry/Exit',
        'Reliable Performance',
      ],
      category: 'Minibuses',
    },
    {
      name: 'Landcruiser Opentop',
      image:
        'https://images.unsplash.com/photo-1612825173281-9a193378f6f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80',
      description: 'Ultimate safari experience with panoramic views',
      capacity: 8,
      transmission: 'Manual',
      fuel: 'Diesel',
      pricePerDay: 200,
      features: [
        'Open-air Seating',
        'Elevated Viewing',
        'Rugged 4x4 Capability',
        'Safari Equipment',
      ],
      category: 'Landcruiser opentop',
    },
    {
      name: 'Safari Landcruiser',
      image:
        'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80',
      description: 'Reliable and comfortable for extended safari trips',
      capacity: 7,
      transmission: 'Automatic',
      fuel: 'Diesel',
      pricePerDay: 180,
      features: [
        'Pop-up Roof',
        'Long-range Fuel Tank',
        'Comfortable Interior',
        'Reliable Performance',
      ],
      category: 'Landcruiser opentop',
    },
    {
      name: 'Compact SUV',
      image:
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80',
      description:
        'Versatile and efficient for both city and light off-road use',
      capacity: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      pricePerDay: 70,
      features: [
        'Fuel Efficiency',
        'Easy Maneuverability',
        'Ample Cargo Space',
        'Modern Infotainment',
      ],
      category: 'SUVs',
    },
  ]

  const toggleAccordion = (itemId) => {
    setOpenAccordion(openAccordion === itemId ? null : itemId)
  }

  return (
    <>
      <Hero title='CAR HIRE' />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='py-16 bg-amber-50'
      >
        <div className='container mx-auto px-4 text-gray-800'>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='text-3xl font-semibold mb-2 text-center'
          >
            Car Hire Options
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className='text-base text-center mb-12 max-w-3xl mx-auto'
          >
            Choose from our well-maintained vehicles, ideal for any African
            adventure, whether it's a safari, city tour, or cross-country
            expedition
          </motion.p>

          <div className='mb-12'>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className='flex justify-center mb-8'
            >
              {[
                'all',
                'SUVs',
                'Pickup Trucks',
                'Minibuses',
                'Landcruiser opentop',
              ].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 mx-2 rounded-md ${
                    activeTab === tab
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-orange-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            >
              <AnimatePresence>
                {vehicles
                  .filter(
                    (vehicle) =>
                      activeTab === 'all' || vehicle.category === activeTab
                  )
                  .map((vehicle, index) => (
                    <motion.div
                      key={vehicle.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <VehicleCard vehicle={vehicle} />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='bg-white rounded-lg shadow-lg p-8 mb-12'
          >
            <h3 className='text-2xl font-semibold mb-6'>
              Why Choose Divine African Tours for Your Car Hire?
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  icon: <Car className='w-12 h-12 text-orange-600' />,
                  title: 'Wide Range of Vehicles',
                  description:
                    'From rugged 4x4s to comfortable luxury cars, we have the perfect vehicle for your needs.',
                },
                {
                  icon: <Check className='w-12 h-12 text-orange-600' />,
                  title: 'Quality Assurance',
                  description:
                    'All our vehicles are regularly serviced and maintained to ensure your safety and comfort.',
                },
                {
                  icon: <Users className='w-12 h-12 text-orange-600' />,
                  title: 'Experienced Staff',
                  description:
                    'Our knowledgeable team can help you choose the right vehicle and provide local insights for your trip.',
                },
                {
                  icon: <Fuel className='w-12 h-12 text-orange-600' />,
                  title: 'Flexible Fuel Options',
                  description:
                    'Choose between petrol and diesel vehicles to suit your preference and budget.',
                },
                {
                  icon: <Cog className='w-12 h-12 text-orange-600' />,
                  title: '24/7 Support',
                  description:
                    'Enjoy peace of mind with our round-the-clock customer support and roadside assistance.',
                },
                {
                  icon: <Info className='w-12 h-12 text-orange-600' />,
                  title: 'Transparent Pricing',
                  description:
                    'No hidden fees. Our prices include insurance and standard mileage allowance.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className='flex flex-col items-center text-center'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <motion.div
                    className='mb-4'
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className='text-xl font-semibold mb-2'>
                    {feature.title}
                  </h4>
                  <p className='text-gray-600'>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className='bg-orange-100 rounded-lg shadow-lg p-8'
          >
            <h3 className='text-2xl font-semibold mb-6'>
              Frequently Asked Questions
            </h3>
            <div className='space-y-4'>
              {[
                {
                  id: 'item-1',
                  question: 'What documents do I need to hire a car?',
                  answer:
                    "You'll need a valid driver's license, passport, and a credit card for the security deposit. International drivers may also need an International Driving Permit.",
                },
                {
                  id: 'item-2',
                  question: 'Is insurance included in the rental price?',
                  answer:
                    'Basic insurance is included in our rental prices. However, we offer additional coverage options for extra peace of mind.',
                },
                {
                  id: 'item-3',
                  question: 'Can I hire a car with a driver?',
                  answer:
                    'Yes, we offer chauffeur services. Our experienced drivers are knowledgeable about local routes and attractions.',
                },
                {
                  id: 'item-4',
                  question: 'What is your cancellation policy?',
                  answer:
                    'Free cancellation is available up to 48 hours before your pickup time. Cancellations made within 48 hours may incur a fee.',
                },
                {
                  id: 'item-5',
                  question: 'Are there any mileage restrictions?',
                  answer:
                    'Our standard rentals come with unlimited mileage. However, some specialty vehicles may have mileage restrictions. Please check the specific terms for your chosen vehicle.',
                },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  className='border-b border-orange-200 pb-4'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className='flex justify-between items-center w-full text-left'
                  >
                    <span className='text-lg font-semibold'>
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openAccordion === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className='w-5 h-5' />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openAccordion === item.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='mt-2 text-gray-600'
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

function VehicleCard({ vehicle }) {
  return (
    <motion.div
      className='bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full'
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className='relative w-full h-[400px]'>
        <motion.img
          src={vehicle.image}
          alt={vehicle.name}
          className='absolute inset-0 w-full h-full object-cover object-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className='p-6 flex flex-col flex-grow'>
        <h3 className='text-xl font-semibold mb-2'>{vehicle.name}</h3>
        <p className='text-gray-600 mb-4 flex-grow'>{vehicle.description}</p>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div className='flex items-center'>
            <Users className='w-5 h-5 mr-2' />
            <span>{vehicle.capacity} Passengers</span>
          </div>
          <div className='flex items-center'>
            <Cog className='w-5 h-5 mr-2' />
            <span>{vehicle.transmission}</span>
          </div>
          <div className='flex items-center'>
            <Fuel className='w-5 h-5 mr-2' />
            <span>{vehicle.fuel}</span>
          </div>
          <div className='flex items-center'>
            <Car className='w-5 h-5 mr-2' />
            <span>A/C</span>
          </div>
        </div>
        <div className='mb-4'>
          {vehicle.features.map((feature, index) => (
            <motion.span
              key={index}
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {feature}
            </motion.span>
          ))}
        </div>
        <div className='flex justify-between items-center mt-auto'>
          <div className='text-2xl font-bold'>
            ${vehicle.pricePerDay}
            <span className='text-sm  font-normal'>/day</span>
          </div>
          <motion.button
            className='bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
