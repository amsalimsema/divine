import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Clock, Users, MapPin, ArrowLeft } from 'lucide-react'

const tourPackages = [
  {
    title: 'Murchison Falls Safari',
    description:
      "Experience the breathtaking wildlife and the world's most powerful waterfall in Murchison Falls National Park.",
    duration: '5 days',
    groupSize: '6-12',
    location: 'Murchison Falls National Park, Uganda',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpfGVufDB8fDB8fHww',
    longDescription:
      "Embark on an unforgettable 5-day adventure to Murchison Falls National Park, home to the world's most powerful waterfall. This safari offers a perfect blend of wildlife viewing and natural wonder exploration. You'll have the chance to spot the Big Five, enjoy boat safaris on the Nile, and witness the incredible force of Murchison Falls up close. Our experienced guides will ensure you get the most out of your safari experience, providing insights into the local ecosystem and wildlife behaviors.",
    highlights: [
      'Game drives to spot lions, elephants, giraffes, and more',
      'Boat safari on the Nile to see hippos and crocodiles',
      'Hike to the top of Murchison Falls',
      'Chimpanzee tracking in Budongo Forest',
      'Bird watching with over 450 species in the park',
    ],
    included: [
      'All park entrance fees',
      'Experienced English-speaking guide',
      'Comfortable accommodation',
      'All meals as per itinerary',
      'Transportation in a 4x4 safari vehicle',
      'Bottled water during game drives',
    ],
  },
  {
    title: 'Queen Elizabeth Park Tour',
    description:
      "Witness the diverse ecosystems and abundant wildlife in Uganda's most popular national park.",
    duration: '6 days',
    groupSize: '4-10',
    location: 'Queen Elizabeth National Park, Uganda',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D',
    longDescription:
      "Explore the wonders of Queen Elizabeth National Park on this 6-day safari adventure. Known for its diverse ecosystems, including sprawling savanna, shady forests, sparkling lakes, and lush wetlands, this park is home to an incredible array of wildlife. From tree-climbing lions to chimpanzees, and over 600 species of birds, you'll be amazed by the biodiversity. Enjoy game drives, boat safaris, and guided nature walks led by expert local guides.",
    highlights: [
      'Game drives in search of tree-climbing lions and other big cats',
      'Boat cruise on the Kazinga Channel to see hippos and water birds',
      'Chimpanzee tracking in Kyambura Gorge',
      'Visit to the Ishasha sector, famous for its tree-climbing lions',
      "Guided nature walks to explore the park's diverse ecosystems",
    ],
    included: [
      'All park entrance and activity fees',
      'Professional English-speaking guide',
      'Comfortable lodge accommodation',
      'Full board meals',
      '4x4 safari vehicle with pop-up roof',
      'Drinking water throughout the safari',
    ],
  },
  {
    title: 'Kibale Forest Expedition',
    description:
      'Explore the lush rainforest and encounter diverse primate species in Kibale National Park.',
    duration: '4 days',
    groupSize: '4-8',
    location: 'Kibale National Park, Uganda',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhbiUyMGVsZXBoYW50fGVufDB8fDB8fHww',
    longDescription:
      "Immerse yourself in the lush, tropical Kibale Forest on this 4-day expedition. Known as the primate capital of the world, Kibale is home to 13 primate species, including the largest population of chimpanzees in East Africa. This adventure offers a unique opportunity to trek through the dense forest in search of our closest relatives, observe their behaviors, and learn about their complex social structures. Beyond chimps, you'll discover the forest's rich biodiversity, from colorful butterflies to exotic bird species.",
    highlights: [
      'Chimpanzee trekking with expert local guides',
      'Night walks to spot nocturnal primates and other wildlife',
      'Guided nature walks through the lush forest',
      'Visit to the nearby Bigodi Wetland Sanctuary',
      'Cultural experiences with local communities',
    ],
    included: [
      'Chimpanzee trekking permits',
      'Experienced naturalist guide',
      'Comfortable forest lodge accommodation',
      'All meals during the tour',
      'Transportation in a 4x4 vehicle',
      'Drinking water and snacks',
    ],
  },
  {
    title: 'Kidepo Valley Adventure',
    description:
      'Discover the remote beauty and unique wildlife of Kidepo Valley National Park in northern Uganda.',
    duration: '7 days',
    groupSize: '2-8',
    location: 'Kidepo Valley National Park, Uganda',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlcmVuZ2V0aXxlbnwwfHwwfHx8MA%3D%3D',
    longDescription:
      "Embark on a 7-day adventure to one of Uganda's most remote and spectacular national parks. Kidepo Valley, nestled in the country's northeastern corner, offers a truly off-the-beaten-path safari experience. With its rugged savannah, dominated by the jagged Mount Morungole and transected by the Kidepo and Narus rivers, this park is a haven for a diverse range of wildlife. Experience close encounters with lions, leopards, cheetahs, and over 475 bird species. This tour also offers unique cultural interactions with the local Karamojong people.",
    highlights: [
      'Game drives in the Narus Valley to spot rare wildlife',
      'Walking safaris with armed rangers',
      'Visit to Kanangorok Hot Springs',
      'Bird watching in diverse habitats',
      'Cultural encounters with the Karamojong and IK people',
    ],
    included: [
      'All park entrance and activity fees',
      'Experienced guide and armed rangers',
      'Comfortable safari lodge accommodation',
      'All meals and drinks',
      '4x4 safari vehicle',
      'Domestic flights to and from Kidepo',
    ],
  },
  {
    title: 'Lake Mburo Safari',
    description:
      "Experience the diverse wildlife and beautiful landscapes in one of Uganda's smallest national parks.",
    duration: '3 days',
    groupSize: '4-10',
    location: 'Lake Mburo National Park, Uganda',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D',
    longDescription:
      "Discover the hidden gem of Uganda's national parks on this 3-day safari to Lake Mburo. Despite being one of the country's smallest parks, Lake Mburo offers a diverse array of wildlife and stunning landscapes. The park is known for its large population of zebras, impalas, and over 300 bird species. Unlike other parks in Uganda, Lake Mburo allows for unique activities like horseback safaris and night game drives, providing a different perspective on African wildlife.",
    highlights: [
      'Game drives to spot zebras, impalas, and buffalo',
      'Boat safari on Lake Mburo',
      'Horseback safari through the savannah',
      'Night game drive to see nocturnal animals',
      'Guided nature walk with a chance to see giraffes up close',
    ],
    included: [
      'Park entrance fees and activity costs',
      'Professional safari guide',
      'Accommodation in a tented camp or lodge',
      'All meals and non-alcoholic drinks',
      'Transportation in a 4x4 safari vehicle',
      'Bottled water during activities',
    ],
  },
  {
    title: 'Bwindi Gorilla Trek',
    description:
      'Embark on an unforgettable journey to see the endangered mountain gorillas in their natural habitat.',
    duration: '5 days',
    groupSize: '2-6',
    location: 'Bwindi Impenetrable National Park, Uganda',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D',
    longDescription:
      "Experience the thrill of a lifetime on this 5-day gorilla trekking adventure in Bwindi Impenetrable National Park. Home to nearly half of the world's remaining mountain gorillas, Bwindi offers a rare opportunity to observe these gentle giants in their natural habitat. Trek through the lush, misty forests with expert guides as you search for a habituated gorilla family. Spend an unforgettable hour in their presence, observing their behaviors and family dynamics. This tour also includes cultural experiences and nature walks to explore the rich biodiversity of the forest.",
    highlights: [
      'Gorilla trekking in Bwindi Impenetrable Forest',
      "Guided nature walks to discover the forest's flora and fauna",
      'Visit to a local Batwa community to learn about their culture',
      "Bird watching in one of Africa's most biodiverse forests",
      'Optional visit to nearby Lake Bunyonyi',
    ],
    included: [
      'Gorilla trekking permit',
      'Experienced local guides and trackers',
      'Comfortable lodge accommodation',
      'All meals and non-alcoholic drinks',
      'Ground transportation in a 4x4 vehicle',
      'Walking stick and gaiters for the trek',
    ],
  },
]

export default function TourDetails() {
  const { tourName } = useParams()
  const tour = tourPackages.find(
    (t) => t.title.toLowerCase().replace(/\s+/g, '-') === tourName
  )

  if (!tour) {
    return <div>Tour not found</div>
  }

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <Link
          to='/'
          className='flex items-center text-blue-600 hover:text-blue-800 mb-6'
        >
          <ArrowLeft className='w-4 h-4 mr-2' />
          Back to all tours
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <img
              src={tour.image}
              alt={tour.title}
              className='w-full h-96 object-cover rounded-lg shadow-md'
            />
          </div>
          <div>
            <h1 className='text-3xl font-bold mb-4'>{tour.title}</h1>
            <div className='flex items-center mb-4'>
              <Star className='w-5 h-5 text-yellow-400 mr-1' />
              <span className='font-semibold'>{tour.rating}</span>
            </div>
            <p className='text-gray-600 mb-4'>{tour.description}</p>
            <div className='flex items-center mb-2'>
              <Clock className='w-5 h-5 mr-2 text-gray-500' />
              <span>{tour.duration}</span>
            </div>
            <div className='flex items-center mb-2'>
              <Users className='w-5 h-5 mr-2 text-gray-500' />
              <span>{tour.groupSize}</span>
            </div>
            <div className='flex items-center mb-4'>
              <MapPin className='w-5 h-5 mr-2 text-gray-500' />
              <span>{tour.location}</span>
            </div>
            <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300'>
              Book Now
            </button>
          </div>
        </div>
        <div className='mt-12'>
          <h2 className='text-2xl font-bold mb-4'>Tour Details</h2>
          <p className='text-gray-600 mb-6'>{tour.longDescription}</p>
          <h3 className='text-xl font-semibold mb-2'>Highlights</h3>
          <ul className='list-disc pl-5 mb-6'>
            {tour.highlights.map((highlight, index) => (
              <li key={index} className='text-gray-600  mb-1'>
                {highlight}
              </li>
            ))}
          </ul>
          <h3 className='text-xl font-semibold mb-2'>What's Included</h3>
          <ul className='list-disc pl-5'>
            {tour.included.map((item, index) => (
              <li key={index} className='text-gray-600 mb-1'>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
