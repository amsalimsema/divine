import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Clock,
  Users,
  MapPin,
  ArrowLeft,
  Calendar,
  Check,
  Camera,
  //Compass,
  Coffee,
  Circle,
  Tent,
  CircleOff,
  // DollarSign,
  Music,
  Leaf,
  Eye,
  DollarSign,
} from 'lucide-react'
import GGMT from '../assets/golden_tracking.jpg'
import BGT from '../assets/bwindi_gorilla.jpg'
import PG from '../assets/primate_hero.jpg'

const tourPackages = [
  {
    id: 1,
    title: 'Bwindi Gorilla Tracking',
    description:
      'The safari starts in Rwanda “the land of a thousand hills” to Bwindi Impenetrable National Park - home to the Mountain Gorilla',
    duration: '3 days',
    // groupSize: '',
    location: 'Bwindi Impenetrable National Park - Uganda',
    // Price: '',
    image: BGT,
    fullDescription: `Bwindi Impenetrable National park is one of the most popular gorilla trekking destinations sheltering more than half the World's surviving population  of mountain gorillas in more than 40 families, 20 of which are habituated for trekking. Bwindi forest was gazetted into a National park in 1991 and was later declared a UNESCO world heritage site in 1994.`,

    // tourDetails: [
    //   {
    //     title: 'Tour Cost',
    //     description:
    //       'Our experienced local guides are passionate about wildlife and have in-depth knowledge of the Serengeti ecosystem.',
    //     icon: Compass,
    //   },
    //   {
    //     title: 'Price Includes',
    //     description:
    //       'A 4x4 Land Cruiser or Minibus with a professional English-speaking driver-guide, full board accommodation, gorilla tracking permit, entrance fees, and the Batwa cultural experience.',
    //     icon: Tent,
    //   },
    //   {
    //     title: 'Game Drives',
    //     description:
    //       'Enjoy daily game drives in custom-designed 4x4 vehicles, offering unobstructed views of the wildlife.',
    //     icon: Camera,
    //   },
    //   {
    //     title: 'Small Groups',
    //     description:
    //       "With a maximum of 12 participants, you're guaranteed a personalized experience and ample opportunity to interact with your guide.",
    //     icon: Users,
    //   },
    //   {
    //     title: 'Cultural Encounters',
    //     description:
    //       'Visit a Maasai village to learn about their traditional way of life and how they coexist with wildlife.',
    //     icon: Coffee,
    //   },
    //   {
    //     title: 'Photographic Opportunities',
    //     description:
    //       "Whether you're a professional or amateur photographer, you'll have plenty of chances to capture stunning wildlife and landscape shots.",
    //     icon: Camera,
    //   },
    // ],
    tourDetails: [
      {
        title: 'Tour Cost',
        icon: DollarSign,
        items: [
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
          'Dinner and overnight stay at Gorilla Mist Lodge.',
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
    title: 'Primate Safari',
    description:
      'Experience the rich traditions and daily life of the Maasai people in this immersive cultural adventure.',
    duration: '6 days',
    groupSize: '4-10 people',
    location: 'Uganda | Rwanda',
    Price: '2300',
    image: PG,
    fullDescription: `This safari offers thrilling encounters with endangered Mountain Gorillas and the rare, beautiful Golden Monkeys. Beginning in Uganda, "The Pearl of Africa," and continuing into Rwanda, "The Land of a Thousand Hills," tracking these primates can be challenging, but the experience of meeting them in their natural habitat is truly rewarding.`,
    tourDetails: [
      {
        title: 'Local Maasai Guides',
        description:
          'Our experienced Maasai guides will share their deep knowledge of their culture, traditions, and the local ecosystem.',
        icon: Users,
      },
      {
        title: 'Traditional Accommodations',
        description:
          'Stay in traditional Maasai-style accommodations, specially adapted for visitors while maintaining authenticity.',
        icon: Tent,
      },
      {
        title: 'Cultural Activities',
        description:
          'Participate in a wide range of cultural activities, from traditional dances to craft-making and herding.',
        icon: Music,
      },
      {
        title: 'Small Groups',
        description:
          'With a maximum of 10 participants, you are guaranteed an intimate and personalized cultural experience.',
        icon: Users,
      },
      {
        title: 'Wildlife Encounters',
        description:
          'Learn about the Maasais relationship with wildlife and potentially spot animals on guided walks.',
        icon: Camera,
      },
      {
        title: 'Sustainable Tourism',
        description:
          'This tour directly benefits the local Maasai community and supports sustainable cultural tourism practices.',
        icon: Leaf,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Welcome Ceremony',
        activities: [
          'Arrival at Maasai Mara and transfer to the Maasai village',
          'Traditional Maasai welcome ceremony',
          'Introduction to your host family and accommodation',
          'Evening bonfire with storytelling and star gazing',
        ],
      },
      {
        day: 2,
        title: 'Daily Life and Customs',
        activities: [
          'Early morning livestock activities with Maasai herders',
          'Traditional beadwork and jewelry making workshop',
          'Afternoon nature walk with Maasai warriors, learning about medicinal plants',
          'Evening lessons in Maasai language and dance',
        ],
      },
      {
        day: 3,
        title: 'Maasai Traditions and Skills',
        activities: [
          'Participate in preparing a traditional Maasai feast',
          'Learn spear throwing and other traditional Maasai games',
          'Visit to a local Maasai school and community project',
          'Participate in a traditional Maasai ceremony',
        ],
      },
      {
        day: 4,
        title: 'Wildlife and Conservation',
        activities: [
          'Early morning wildlife spotting walk with Maasai guides',
          'Learn about Maasai wildlife conservation efforts',
          'Afternoon visit to a Maasai-run wildlife sanctuary',
          'Evening traditional music and dance performance',
        ],
      },
      {
        day: 5,
        title: 'Reflection and Departure',
        activities: [
          'Morning meditation and reflection with Maasai elders',
          'Participate in a farewell blessing ceremony',
          'Final traditional meal with your host family',
          'Departure from Maasai Mara',
        ],
      },
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1489367874814-f5d040621dd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        title: 'Maasai Warriors',
      },
      {
        url: 'https://images.unsplash.com/photo-1511282491208-41dae29a0c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        title: 'Traditional Maasai Village',
      },
      {
        url: 'https://images.unsplash.com/photo-1591376496140-90aebc9f8c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        title: 'Maasai Beadwork',
      },
    ],
  },
  {
    id: 3,
    title: 'Volcanoes Gorilla Tracking',
    description:
      'This 2-day Gorilla Safari, starts and ends in Rwanda, explores Volcanoes National Park in northwestern Rwanda, home to endangered Mountain Gorillas and rare Golden Monkeys.',
    duration: '2 days',
    groupSize: '4-10 people',
    location: 'Rwanda',
    Price: '2300',
    image: PG,
    fullDescription: `This 2-day Gorilla Safari begins and ends in Rwanda, taking you to Volcanoes National Park in northwestern Rwanda. Spanning 160 square kilometers of lush rainforest, the park encompasses eight volcanoes in the Virunga Mountain range, including Karisimbi, Bisoke, Mgahinga, Muhabura, and Sabinyo. Home to the endangered Mountain Gorillas and the rare, striking Golden Monkeys, it offers a truly unique wildlife experience.`,
    tourDetails: [
      {
        title: 'Local Maasai Guides',
        description:
          'Our experienced Maasai guides will share their deep knowledge of their culture, traditions, and the local ecosystem.',
        icon: Users,
      },
      {
        title: 'Traditional Accommodations',
        description:
          'Stay in traditional Maasai-style accommodations, specially adapted for visitors while maintaining authenticity.',
        icon: Tent,
      },
      {
        title: 'Cultural Activities',
        description:
          'Participate in a wide range of cultural activities, from traditional dances to craft-making and herding.',
        icon: Music,
      },
      {
        title: 'Small Groups',
        description:
          'With a maximum of 10 participants, you are guaranteed an intimate and personalized cultural experience.',
        icon: Users,
      },
      {
        title: 'Wildlife Encounters',
        description:
          'Learn about the Maasais relationship with wildlife and potentially spot animals on guided walks.',
        icon: Camera,
      },
      {
        title: 'Sustainable Tourism',
        description:
          'This tour directly benefits the local Maasai community and supports sustainable cultural tourism practices.',
        icon: Leaf,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Welcome Ceremony',
        activities: [
          'Arrival at Maasai Mara and transfer to the Maasai village',
          'Traditional Maasai welcome ceremony',
          'Introduction to your host family and accommodation',
          'Evening bonfire with storytelling and star gazing',
        ],
      },
      {
        day: 2,
        title: 'Daily Life and Customs',
        activities: [
          'Early morning livestock activities with Maasai herders',
          'Traditional beadwork and jewelry making workshop',
          'Afternoon nature walk with Maasai warriors, learning about medicinal plants',
          'Evening lessons in Maasai language and dance',
        ],
      },
      {
        day: 3,
        title: 'Maasai Traditions and Skills',
        activities: [
          'Participate in preparing a traditional Maasai feast',
          'Learn spear throwing and other traditional Maasai games',
          'Visit to a local Maasai school and community project',
          'Participate in a traditional Maasai ceremony',
        ],
      },
      {
        day: 4,
        title: 'Wildlife and Conservation',
        activities: [
          'Early morning wildlife spotting walk with Maasai guides',
          'Learn about Maasai wildlife conservation efforts',
          'Afternoon visit to a Maasai-run wildlife sanctuary',
          'Evening traditional music and dance performance',
        ],
      },
      {
        day: 5,
        title: 'Reflection and Departure',
        activities: [
          'Morning meditation and reflection with Maasai elders',
          'Participate in a farewell blessing ceremony',
          'Final traditional meal with your host family',
          'Departure from Maasai Mara',
        ],
      },
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1489367874814-f5d040621dd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        title: 'Maasai Warriors',
      },
      {
        url: 'https://images.unsplash.com/photo-1511282491208-41dae29a0c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        title: 'Traditional Maasai Village',
      },
      {
        url: 'https://images.unsplash.com/photo-1591376496140-90aebc9f8c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        title: 'Maasai Beadwork',
      },
    ],
  },
  {
    id: 4,
    title: 'Gorilla & Golden Monkey Tracking',
    description:
      'This adventure starts in Entebbe and ends in Kigali. It explores two beautiful countries Uganda & Rwanda',
    duration: '8 days',
    groupSize: '4-10 people',
    location: 'Uganda | Rwanda',
    Price: '2300',
    image: GGMT,
    fullDescription: `This adventure starts in Entebbe and ends in Kigali, exploring two beautiful and richly endowed countries. The lush, green rolling hills create breathtaking scenic beauty. From encountering the endangered mountain gorilla and the golden monkey to visiting Dian Fossey's grave, this journey provides a deep appreciation for the work of this renowned primatologist. Her contributions have enabled generations to continue tracking and studying the mountain gorilla.`,
    tourDetails: [
      {
        title: 'Local Maasai Guides',
        description:
          'Our experienced Maasai guides will share their deep knowledge of their culture, traditions, and the local ecosystem.',
        icon: Users,
      },
      {
        title: 'Traditional Accommodations',
        description:
          'Stay in traditional Maasai-style accommodations, specially adapted for visitors while maintaining authenticity.',
        icon: Tent,
      },
      {
        title: 'Cultural Activities',
        description:
          'Participate in a wide range of cultural activities, from traditional dances to craft-making and herding.',
        icon: Music,
      },
      {
        title: 'Small Groups',
        description:
          'With a maximum of 10 participants, you are guaranteed an intimate and personalized cultural experience.',
        icon: Users,
      },
      {
        title: 'Wildlife Encounters',
        description:
          'Learn about the Maasais relationship with wildlife and potentially spot animals on guided walks.',
        icon: Camera,
      },
      {
        title: 'Sustainable Tourism',
        description:
          'This tour directly benefits the local Maasai community and supports sustainable cultural tourism practices.',
        icon: Leaf,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Welcome Ceremony',
        activities: [
          'Arrival at Maasai Mara and transfer to the Maasai village',
          'Traditional Maasai welcome ceremony',
          'Introduction to your host family and accommodation',
          'Evening bonfire with storytelling and star gazing',
        ],
      },
      {
        day: 2,
        title: 'Daily Life and Customs',
        activities: [
          'Early morning livestock activities with Maasai herders',
          'Traditional beadwork and jewelry making workshop',
          'Afternoon nature walk with Maasai warriors, learning about medicinal plants',
          'Evening lessons in Maasai language and dance',
        ],
      },
      {
        day: 3,
        title: 'Maasai Traditions and Skills',
        activities: [
          'Participate in preparing a traditional Maasai feast',
          'Learn spear throwing and other traditional Maasai games',
          'Visit to a local Maasai school and community project',
          'Participate in a traditional Maasai ceremony',
        ],
      },
      {
        day: 4,
        title: 'Wildlife and Conservation',
        activities: [
          'Early morning wildlife spotting walk with Maasai guides',
          'Learn about Maasai wildlife conservation efforts',
          'Afternoon visit to a Maasai-run wildlife sanctuary',
          'Evening traditional music and dance performance',
        ],
      },
      {
        day: 5,
        title: 'Reflection and Departure',
        activities: [
          'Morning meditation and reflection with Maasai elders',
          'Participate in a farewell blessing ceremony',
          'Final traditional meal with your host family',
          'Departure from Maasai Mara',
        ],
      },
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1489367874814-f5d040621dd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        title: 'Maasai Warriors',
      },
      {
        url: 'https://images.unsplash.com/photo-1511282491208-41dae29a0c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        title: 'Traditional Maasai Village',
      },
      {
        url: 'https://images.unsplash.com/photo-1591376496140-90aebc9f8c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        title: 'Maasai Beadwork',
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
            <h1 className='text-4xl sm:text-5xl font-semibold text-white mb-4'>
              {tour.title}
            </h1>
            <div className='flex flex-wrap gap-4 text-white'>
              <div className='flex items-center'>
                <Clock className='w-5 h-5 mr-2' />
                <span>{tour.duration}</span>
              </div>
              {/* <div className='flex items-center'>
                <Users className='w-5 h-5 mr-2' />
                <span>{tour.groupSize}</span>
              </div> */}
              <div className='flex items-center'>
                <MapPin className='w-5 h-5 mr-2' />
                <span>{tour.location}</span>
              </div>
              {/* <div className='flex items-center'>
                <DollarSign className='w-5 h-5 mr-0' />
                <span>{tour.Price}</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
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
            {activeTab === 'details' && (
              <div>
                <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
                  Tour Details
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {tour.tourDetails.map((detail, index) => (
                    <div
                      key={index}
                      className='bg-gray-50 rounded-lg p-2 flex items-start'
                    >
                      <div className='flex-shrink-0 mr-4'>
                        <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
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
                    </div>
                  ))}
                </div>

                {/*
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {tour.tourDetails.map((detail, index) => (
                    <div
                      key={index}
                      className='bg-gray-50 rounded-lg p-2 flex items-start'
                    >
                      <div className='flex-shrink-0 mr-4'>
                        <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
                          <detail.icon className='w-6 h-6 text-green-600' />
                        </div>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                          {detail.title}
                        </h3>
                        <p className='text-gray-600'>{detail.description}</p>
                        <Check className='w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1' />
                        <span className='text-gray-700'>
                          {detail.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            )}
            {activeTab === 'itinerary' && (
              <div>
                <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
                  Itinerary
                </h2>
                {/* <img
                  src={tour.image}
                  alt={tour.title}
                  className='w-full h-64 object-cover rounded'
                /> */}

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {tour.itinerary.map((day, index) => (
                    <div key={index} className='bg-gray-50 rounded-lg p-2'>
                      <div className='flex items-center mb-4'>
                        <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4'>
                          <Calendar className='w-6 h-6 text-green-600' />
                        </div>
                        <div>
                          <h3 className='text-lg font-medium text-gray-800'>
                            Day {day.day}
                          </h3>
                          <p className='text-base text-gray-800 font-bold'>
                            {day.title}
                          </p>
                        </div>
                      </div>
                      <ul className='space-y-2'>
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className='flex items-start'>
                            <Check className='w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1' />
                            <span className='text-gray-700'>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'photos' && (
              <div>
                <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
                  Photos
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {tour.photos.map((photo, index) => (
                    <div
                      key={index}
                      className='relative overflow-hidden rounded-lg'
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
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                  className='inline-flex items-center justify-center px-5 py-3 border border-transparent  text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-600'
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
