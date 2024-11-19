import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock,
  MapPin,
  ArrowLeft,
  Calendar,
  Check,
  Circle,
  CircleOff,
  Eye,
  Sun,
  ChevronDown,
  ChevronUp,
  BadgeDollarSign,
} from 'lucide-react'
//import GGMT from '../assets/golden_tracking.jpg'
import BGT from '../assets/bwindi_gorilla.jpg'
import PG from '../assets/primate_hero.jpg'
import GM from '../assets/GoldenMonkey.jpg'
import Chimp from '../assets/chimpanzee.jpg'

const tourPackages = [
  {
    id: 1,
    title: '3 days Bwindi Gorilla Tracking Safari',
    description: '$1650',
    duration: '3 days',
    location: 'Bwindi Impenetrable National Park - Uganda',
    image: BGT,
    fullDescription: `Bwindi Impenetrable National park is one of the most popular gorilla trekking destinations sheltering more than half the World's surviving population  of mountain gorillas in more than 40 families, 20 of which are habituated for trekking. Bwindi forest was gazetted into a National park in 1991 and was later declared a UNESCO world heritage site in 1994.`,
    tourDetails: [
      {
        title: 'Tour Cost',
        icon: Sun,
        items: [
          '$1650',
          'Tour rates are flexible and can be tailored to your preferences. Contact us for a personalized quote.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          'A 4x4 Land Cruiser or Minibus with a professional English-speaking driver-guide',
          'Full Board accomodation',
          'Gorilla tracking permit',
          'The Batwa cultural experience',
          'Entrance Fee',
        ],
      },
      {
        title: 'Price Excludes',
        icon: CircleOff,
        items: [
          'International flights',
          'Laundry services',
          'Any Private Expenses',
          'Tips to the local guides',
        ],
      },
      {
        title: 'What to Expect',
        icon: Eye,
        items: [
          'Encounter with the Gorillas',
          'The Batwa cultural experience',
          'Hospitable people',
          'Breathtaking scenic beauty',
          'Professional & knowledgeable safari guide',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kampala - Bwindi Impenetrable National Park',
        activities: [
          'An experienced tour driver/guide will pick you up from the airport for transfer to Bwindi Impenetrable National Park.',
          'Enjoy a stop at the equator to stand in both the Northern and Southern hemispheres and take photos.',
          'Continue the journey with a lunch stop in Mbarara.',
          'Dinner and an overnight stay at a prebooked lodge of your choice.',
          'Meal plan includes breakfast, lunch, and dinner.',
        ],
      },
      {
        day: 2,
        title: 'Gorilla Tracking and Batwa cultural Experience',
        activities: [
          'Start with an early breakfast, then proceed to the park headquarters for a briefing on gorilla trekking guidelines.',
          'Rangers will lead you into the rainforest to begin your search for the gorillas, a challenging but unforgettable experience.',
          'Carry raincoats and boots due to unpredictable weather.',
          'Porters are available for a small fee to assist with carrying luggage.',
          'On encountering gorillas, maintain a 6-meter distance as guided by rangers.',
          'Tracking duration is unpredictable, typically taking 2 to 8 hours depending on gorilla locations.',
          'Physical fitness is recommended for trekkers.',
          'After the trek, return to the lodge for lunch.',
          'Optionally, visit the Batwa community in the afternoon to enjoy cultural performances.',
          'Dinner and an overnight stay at a prebooked lodge of your choice.',
          'Meal plan includes breakfast, lunch, and dinner.',
        ],
      },
      {
        day: 3,
        title: 'Bwindi Impenetrable National Park - Kampala',
        activities: [
          'Early breakfast and depart for Kampala.',
          'Stop for lunch en route.',
          'Continue to Kampala, then transfer to Entebbe International Airport.',
          'Arrive at the airport in time for your return flight, depending on flight schedule.',
        ],
      },
    ],
    photos: [
      {
        url: BGT,
        title: 'Mountain Gorilla',
      },
    ],
  },
  {
    id: 2,
    title: '6 days Uganda And Rwanda Primate Safari',
    description: 'Request Quote',
    duration: '6 days',
    location: 'Bwindi Impenetrable & Volcanoes National Park',
    image: GM,
    fullDescription: `Embark on a safari that promises unforgettable encounters with the endangered Mountain Gorillas and the rare, stunning Golden Monkeys. Your journey begins in Uganda, "The Pearl of Africa," and takes you into Rwanda, "The Land of a Thousand Hills." While tracking these remarkable primates can be physically demanding, the reward of witnessing them in their natural habitat is truly unparalleled.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          'This 6-day safari takes you to both Bwindi Impenetrable and Volcanoes National Park, offering unforgettable encounters with endangered Mountain Gorillas and rare Golden Monkeys in Uganda and Rwanda. It’s a deeply rewarding experience.',
          'Contact us for a personalized quote.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          'Travel in a 4x4 Land Cruiser or Minibus with fuel and an English-speaking driver guide.',
          'Full-board accommodation as per the itinerary.',
          'Gorilla tracking permit.',
          'Golden Monkey tracking permit.',
          'City tour.',
        ],
      },
      {
        title: 'Price Excludes',
        icon: CircleOff,
        items: [
          'International flights',
          'Laundry services',
          'Any Private Expenses',
          'Tips to the local guides',
        ],
      },
      {
        title: 'What to Expect',
        icon: Eye,
        items: [
          'Mountain Gorilla Tracking.',
          'Golden Monkey Tracking.',
          'Visit and experience the Uganda Equator.',
          'Interact with hospitable local people.',
          'Enjoy breathtaking scenery.',
          'Professional & knowledgeable safari guide',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival',
        activities: [
          'Arrive at Entebbe International Airport',
          "Receive a warm welcome from the company's tour guide",
          'Exchange greetings with the tour guide',
          'Transfer to your hotel',
          'Check in at your hotel (Latitude 0 or Imperial Botanical Hotel)',
          'Receive a detailed briefing about your safari',
        ],
      },
      {
        day: 2,
        title: 'Transfer to Bwindi Impenetrable National Park',
        activities: [
          'Have an early breakfast at the hotel ',
          'Get picked up from your hotel by the tour guide',
          'Transfer to Bwindi Impenetrable National Park',
          'Make a stopover at the equator',
          'Stand in both the Southern and Northern Hemispheres simultaneously',
          'Witness water moving anti-clockwise',
          'Take photographs at the equator',
          'Continue the journey to Bwindi with a lunch break in Mbarara',
          'Enjoy the breathtaking scenery en route to Bwindi',
          'Accomodation at Bwindi Community Guest House',
        ],
      },
      {
        day: 3,
        title: 'Gorilla Tracking',
        activities: [
          'Have an early morning breakfast',
          'Proceed to the park headquarters for a briefing on Gorilla trekking',
          'Accompany rangers into the rainforest to search for the gentle giants',
          'Prepare for a challenging trek through the forest',
          'Experience a memorable and rewarding encounter with gorillas',
          'Bring essential gear such as raincoats and boots for unpredictable weather',
          'Opt for potters to assist with carrying luggage at a small cost',
          'Follow rangers’ guidance to maintain a 6-meter distance while observing gorillas',
          'Spend 1 hour with the gorillas once located',
          'Ensure physical fitness for the trek',
          'Accomodation at Bwindi Community Guest House',
        ],
      },
      {
        day: 4,
        title: 'Transfer to Volcanoes National Park',
        activities: [
          'Transfer to Volcanoes National Park in the northwestern part of Rwanda.',
          'Explore the Virunga Mountains, which include eight volcanoes: Karisimbi, Bisoke, Mgahinga, Muhabura, and Sabinyo.',
          'Take in the breathtaking mountain scenery.',
          'Learn about the wildlife of Volcanoes National Park, including Mountain Gorillas and the rare Golden Monkeys.',
          'Stay overnight at Five Volcanoes or Kinigi Cottages.',
        ],
      },
      {
        day: 5,
        title: 'Tracking the Golden Monkeys',
        activities: [
          'Morning briefing at park headquarters.',
          'Choose between golden monkey tracking or hiking to Karisoke Research Centre established by Dian Fossey,an American primatologist .',
          'Learn about mountain gorillas at Karisoke Research Centre.',
          'Return to organize and pack for the Nyungwe Forest National Park trip.',
          'Enjoy a special lunch of Rwandan local dishes en route to Nyungwe.',
          'Continue the journey to Nyungwe Forest National Park.',
          'Check in to Five Volcanoes or Kinigi Cottages for an overnight stay.',
          'Dinner served at the lodge/hotel.',
        ],
      },
      {
        day: 6,
        title: 'City Tour and Departure',
        activities: [
          'City tour of Kigali town, depending on flight time.',
          'Visit the Genocide Memorial Museum.',
          'Explore craft and local markets.',
          'Transfer to Kigali International Airport for your flight back home.',
        ],
      },
    ],
    photos: [
      {
        url: GM,
        title: 'Golden Monkey',
      },
      {
        url: PG,
        title: 'Mountain Gorilla',
      },
    ],
  },
  {
    id: 3,
    title: '4 Days Rwanda Primate Safari',
    description: 'Request Quote',
    duration: '4 days',
    location: 'Nyungwe National Park',
    image: Chimp,
    fullDescription: `This primate safari takes you to Nyungwe National Park, one of Africa's oldest rainforests. The park is renowned for its abundant chimpanzee population and offers a thrilling canopy walk on a suspended bridge 70 meters above the ground, providing breathtaking scenic views. In addition to the natural wonders, the safari also offers an emotional experience with a visit to the Genocide Memorial Museum, offering a profound insight into Rwanda's history.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          '4 days of chimpanzee and golden monkey sightings in the Nyungwe National Park, a canopy walk with scenic views, and a visit to the Genocide Memorial Museum for a poignant historical experience.',
          'Contact us for a personalized quote.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          'A 4X4 Land Cruiser/Minibus with a professional driver guide',
          'Full board accommodation',
          'Chimpanzee permits',
          'Entrance fees',
          'Golden monkey tracking',
        ],
      },
      {
        title: 'Price Excludes',
        icon: CircleOff,
        items: [
          'International flights',
          'Laundry services',
          'Any Private Expenses',
          'Tips to the local guides',
        ],
      },
      {
        title: 'What to Expect',
        icon: Eye,
        items: [
          'Golden monkey tracking',
          'Chimpanzee tracking',
          'Canopy walk',
          'Breathtaking scenery',
          'Knowledgeable guides',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival',
        activities: [
          'Upon arrival at Kigali International Airport, you will be welcomed by the tour guide.',
          'If time permits, enjoy a city tour of Kigali, visiting sites like genocide memorials and markets.',
          'Option to have lunch in Kigali.',
          'Afterward, transfer to Kinigi, the closest town to Volcanoes National Park, home to the Mountain Gorillas in Rwanda.',
        ],
      },
      {
        day: 2,
        title: 'Tracking Golden Monkeys',
        activities: [
          'After breakfast, proceed to the park headquarters for a briefing about Golden monkey tracking.',
          'Rangers will brief you on how to behave around the primates.',
          'Golden monkey tracking offers an exciting adventure with epic encounters with the rare and beautiful Golden monkeys.',
          'Uganda and Rwanda are the only two countries where visitors can trek these beautiful monkeys.',
          'Afterward, transfer to Nyungwe National Park.',
        ],
      },
      {
        day: 3,
        title: 'Chimpanzee Tracking and Canopy Walk',
        activities: [
          'Wake up early and have breakfast to prepare for the adventurous chimpanzee trekking, which starts at 5 am.',
          'Early start increases the chances of finding the primates, as their location is not guaranteed.',
          'The driver will take you to the Uwinka Visitor Centre for a briefing and to meet the park Rangers/Guides.',
          'Guides will brief you on the rules and requirements for chimpanzee trekking.',
          'If there are many travelers, groups will be split between the Uwinka and Cyamudongo areas.',
          'Nyungwe forest is home to about 500 chimpanzees, and trekking can take up to 4 hours.',
          'Chimpanzees move freely, making the trek unpredictable, unlike gorillas which stay in one place longer.',
          'The chimpanzees are very vocal, with loud screams, hoots, and barks helping to locate them.',
        ],
      },
      {
        day: 4,
        title: 'Transfer to Kigali',
        activities: [
          'Early morning transfer to Kigali.',
          'Depending on flight time, you may have a city tour of Kigali town.',
          'Visit the Genocide Memorial, Convention Center, or the craft markets.',
        ],
      },
    ],
    photos: [
      {
        url: Chimp,
        title: 'Chimpanzee',
      },
      {
        url: GM,
        title: 'Golden Monkey',
      },
    ],
  },
  {
    id: 4,
    title: '2 Days Gorilla Tracking at Volcanoes National Park',
    description: 'Request Quote',
    duration: '2 days',
    location: 'Volcanoes National Park',
    image: BGT,
    fullDescription: `This 2-day Gorilla Safari begins and ends in Kigali, taking visitors to Rwanda's Volcanoes National Park in the northwest. Spanning 160 sq. km of rainforest, the park encompasses eight volcanoes in the Virunga Mountains, including Karisimbi, Bisoke, Mgahinga, Muhabura, and Sabinyo. It is home to endangered mountain gorillas and rare golden monkeys.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          "This 2-day Gorilla Safari in Rwanda's Volcanoes National Park offers a chance to see endangered mountain gorillas and rare golden monkeys in a stunning volcanic rainforest setting.",
          'Contact us for a personalized quote.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          '4x4 Land Cruiser/Minibus with a professional English-speaking safari guide',
          'Full-board accommodation',
          'Gorilla tracking permit',
          'Entrance fees',
          'Water throughout the safari',
        ],
      },
      {
        title: 'Price Excludes',
        icon: CircleOff,
        items: [
          'International flights',
          'Travel insurance',
          'Any private expenses',
          'Tips',
          'Porter fees',
        ],
      },
      {
        title: 'What to Expect',
        icon: Eye,
        items: [
          'Gorilla tracking',
          'Breathtaking scenery',
          'Hospitable people',
          'Rich culture',
          'Knowledgeable guides',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Transfer to Volcanoes National Park',
        activities: [
          'Welcome at Kigali International Airport by the tour guide',
          'Optional city tour of Kigali, including visits to genocide memorials and markets',
          'Optional lunch in Kigali',
          'Transfer to Kinigi, the closest town to Volcanoes National Park - home to mountain gorillas in Rwanda',
        ],
      },
      {
        day: 2,
        title: 'Gorilla Tracking',
        activities: [
          'Early morning breakfast and briefing at park headquarters on gorilla trekking guidelines',
          'Guided trek into the rainforest to search for mountain gorillas with rangers',
          'Opportunity to encounter and spend 1 hour with mountain gorillas, maintaining a 6-meter distance',
          'Advisable to bring raincoats, boots, and hire porters for luggage assistance (optional at a small cost)',
          'Emphasis on physical fitness due to the challenging trek',
          'Transfer back to Kigali after the trek',
        ],
      },
    ],
    photos: [
      {
        url: BGT,
        title: 'Mountain Gorilla',
      },
      {
        url: GM,
        title: 'Golden Monkey',
      },
    ],
  },
]

export default function TourDetails() {
  const { slug } = useParams()
  const tour = tourPackages.find(
    (t) =>
      t.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') === slug
  )
  const [activeTab, setActiveTab] = useState('details')
  const [openActivities, setOpenActivities] = useState({})

  if (!tour) {
    return (
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center'>
        <h2 className='text-2xl font-bold mb-4'>Tour not found</h2>
        <Link to='/' className='text-gray-500 hover:underline'>
          Return to home
        </Link>
      </div>
    )
  }

  const toggleActivities = (dayIndex) => {
    setOpenActivities((prev) => ({
      ...prev,
      [dayIndex]: !prev[dayIndex],
    }))
  }

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  }

  return (
    <div className='bg-white'>
      <div className='relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] w-full overflow-hidden'>
        <img
          src={tour.image}
          alt={tour.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-40 flex items-end'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full'>
            <h1 className='text-2xl sm:text-5xl font-normal text-white mb-4'>
              {tour.title}
            </h1>

            <div className='flex flex-wrap gap-4 text-white'>
              <div className='flex items-center'>
                <Clock className='w-5 h-5 mr-2 text-green-500' />
                <span>{tour.duration}</span>
              </div>
              <div className='flex items-center'>
                <MapPin className='w-5 h-5 mr-2 text-green-500' />
                <span>{tour.location}</span>
              </div>
              <div className='flex items-center'>
                <BadgeDollarSign className='w-5 h-5 mr-2 text-green-500' />
                <span className='font-semibold'>{tour.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'> */}
      <div className='w-[98%] max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6'>
        <Link
          to='/'
          className='inline-flex items-center text-blue-500 hover:underline mb-8'
        >
          <ArrowLeft className='w-4 h-4 mr-2' />
          Back to home page
        </Link>
        <div className='bg-white rounded-lg overflow-hidden'>
          <div className='p-2'>
            <p className='text-lg text-gray-800 mb-8'>{tour.fullDescription}</p>
            <div className='border-b border-gray-200 mb-6'>
              <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
                {['details', 'itinerary', 'photos'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'border-green-800 text-gray-800'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>
            <AnimatePresence mode='wait'>
              {activeTab === 'details' && (
                <motion.div
                  key='details'
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  variants={tabVariants}
                >
                  <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
                    Tour Details
                  </h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {tour.tourDetails.map((detail, index) => (
                      <motion.div
                        key={index}
                        className='bg-gray-50 rounded-lg p-2 flex items-start'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className='flex-shrink-0 mr-4'>
                          <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center'>
                            <detail.icon className='w-6 h-6 text-green-600' />
                          </div>
                        </div>
                        <div>
                          <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                            {detail.title}
                          </h3>
                          <ul className='space-y-2'>
                            {detail.items.map((item, itemIndex) => (
                              <li key={itemIndex} className='flex items-start'>
                                <Check className='w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1' />
                                <span className='text-gray-700'>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              {activeTab === 'itinerary' && (
                <motion.div
                  key='itinerary'
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  variants={tabVariants}
                >
                  <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
                    Itinerary
                  </h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {tour.itinerary.map((day, index) => (
                      <motion.div
                        key={index}
                        className='bg-gray-50 rounded-lg p-2'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div
                          className='flex items-center mb-4 cursor-pointer'
                          onClick={() => toggleActivities(index)}
                        >
                          <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4'>
                            <Calendar className='w-6 h-6 text-green-600' />
                          </div>
                          <div className='flex-grow'>
                            <h3 className='text-lg font-medium text-gray-800'>
                              Day {day.day}
                            </h3>
                            <p className='text-base text-gray-800 font-bold'>
                              {day.title}
                            </p>
                          </div>
                          {openActivities[index] ? (
                            <ChevronUp className='w-5 h-5 text-gray-500' />
                          ) : (
                            <ChevronDown className='w-5 h-5 text-gray-500' />
                          )}
                        </div>
                        <AnimatePresence>
                          {openActivities[index] && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className='space-y-2 overflow-hidden'
                            >
                              {day.activities.map((activity, actIndex) => (
                                <motion.li
                                  key={actIndex}
                                  className='flex items-start'
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: actIndex * 0.05 }}
                                >
                                  <Check className='w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1' />
                                  <span className='text-gray-700'>
                                    {activity}
                                  </span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              {activeTab === 'photos' && (
                <motion.div
                  key='photos'
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  variants={tabVariants}
                >
                  <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
                    Photos
                  </h2>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {tour.photos.map((photo, index) => (
                      <motion.div
                        key={index}
                        className='relative overflow-hidden rounded-lg'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className='w-full h-64 object-cover'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2'>
                          <p className='text-sm font-medium text-center'>
                            {photo.title}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className='mt-12 bg-green-800 rounded-lg shadow-xl overflow-hidden'>
          <div className='px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Ready to embark on your adventure?
              </h2>
              <p className='mt-3 max-w-3xl text-lg text-green-100'>
                Book your Safari Adventure today and create memories that will
                last a lifetime. Our team is ready to assist you with any
                questions and help you plan your perfect safari experience.
              </p>
            </div>
            <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
              <div className='inline-flex rounded-md shadow'>
                <Link
                  to='/book'
                  className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-green-50'
                >
                  Book Now
                </Link>
              </div>
              <div className='ml-3 inline-flex rounded-md shadow'>
                <Link
                  to='/contact'
                  className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-600'
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
