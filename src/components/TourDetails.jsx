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
import Elephant from '../assets/divine.jpg'
import Lake from '../assets/Lake-Ihema.jpg'
import GoldenMonkey from '../assets/uganda-golden-monkey.jpg'
import Lion from '../assets/lion-in-queen-elizabeth-national-park.jpg'
import Bird from '../assets/Birds-of-Lake-Bunyonyi.jpg'
import ChimpTrek from '../assets/uganda-gorillas-trek-chimp.jpg'

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
    title: '5 Days Rwanda Primate Safari',
    description: 'Request Quote',
    duration: '5 days',
    location: 'Nyungwe National Park & Chamudong',
    image: Chimp,
    fullDescription: `This primate safari takes you to Nyungwe National Park, one of Africa's oldest rainforests. The park is renowned for its abundant chimpanzee population and offers a thrilling canopy walk on a suspended bridge 70 meters above the ground, providing breathtaking scenic views. In addition to the natural wonders, the safari also offers an emotional experience with a visit to the Genocide Memorial Museum, offering a profound insight into Rwanda's history.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          '5 days of chimpanzee and golden monkey sightings in the Nyungwe National Park, a canopy walk with scenic views, and a visit to the Genocide Memorial Museum for a poignant historical experience.',
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
          'Overnight accomodation at Kinigi Cottages',
        ],
      },
      {
        day: 2,
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
          'Overnight accomodation at Kinigi Cottages',
        ],
      },
      {
        day: 3,
        title: 'Golden Monkeys Tracking',
        activities: [
          'After breakfast, proceed to the park headquarters for a briefing on Golden monkey tracking',
          'Rangers will brief you on the behavior required while around the primates',
          'Golden monkey tracking offers an exciting adventure and an epic encounter with the rare Golden monkeys',
          'Uganda and Rwanda are the only two countries where you can trek these beautiful monkeys',
          'Overnight accomodation at Topview Hotel Gisskura',
        ],
      },
      {
        day: 4,
        title: 'Transfer to Nyungwe',
        activities: [
          'After breakfast, head to the park headquarters for chimpanzee tracking briefing',
          'Begin chimp tracking, searching for active and playful chimpanzees in Nyungwe Forest',
          'Chimpanzees are easily spotted as they jump from tree to tree, chattering and laughing',
          'Chimp tracking usually lasts about 3 hours',
          'Return to accommodation for lunch',
          'After lunch, go on a walking trail to the Canopy Walk',
          'Experience the 50-meter-long swing bridge with a bird’s eye view of the rainforest',
          'Spot wildlife from above as you walk through the forest',
          'Overnight accomodation at Topview Hotel Gisskura',
        ],
      },
      {
        day: 5,
        title: 'Chimpanzee Tracking in Chamudong & Transfer to Kigali',
        activities: [
          'Wake up early and have breakfast in preparation for chimpanzee trekking',
          'Chimpanzee trekking starts at 5 am to increase chances of finding the primates',
          'Transfer to the park offices and visitor center in Uwinka for briefing',
          'Rangers/Guides provide rules and requirements for chimpanzee trekking',
          'Travelers may be divided into two groups depending on the number of participants: one group from Uwinka and the other from Cyamudongo',
          'Trekking through the forest, you’ll hear jungle noises from birds, primates, and insects',
          'Chimpanzee trekking can take up to 4 hours depending on their location',
          'Chimpanzees move frequently, so the trek can be more unpredictable than gorilla trekking',
          'Chimps are vocal, making it easier to locate them based on their sounds (screams, hoots, barks)',
          'Transfer to Kigali',
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
  {
    id: 5,
    title: '7 Days Rwanda Safari',
    description: 'Request Quote',
    duration: '7 days',
    location: 'All Rwanda National Parks',
    image: Elephant,
    fullDescription: `This 7-day Rwanda gorilla safari explores all of Rwanda's national parks. Highlights include wildlife game drives in Akagera National Park, golden monkey and gorilla trekking in Volcanoes National Park, and chimpanzee trekking in Nyungwe Forest, home to 13 primate species.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          "This 7 day Rwanda gorilla safari explores all of Rwanda's national parks (Akagera National Park, Volcanoes National Park & Nyungwe Forest home to 13 primate species.",
          'Contact us for a personalized quote.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          '4x4 Land Cruiser/Minibus with fuel and an English-speaking guide',
          'Full-board accommodation',
          'Gorilla tracking permit',
          'Chimpanzee tracking permit',
          'All entrance fees',
          'Boat cruise on Lake Ihema',
          'Game drive',
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
          'Chimpanzee tracking',
          'Boat cruise',
          'Game drive',
          'Breathtaking scenery',
          'Hospitable people and rich culture',
          'Knowledgeable guides',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival ',
        activities: [
          'Arrival at Kigali International Airport',
          'Meet and greet by a representative from the Rwanda travel agency',
          'Transfer to your hotel in Kigali',
          'Hotel check-in',
        ],
      },
      {
        day: 2,
        title: 'Akagera National Park & Boat Cruise on Lake Ihema',
        activities: [
          'Breakfast to start the second day',
          'Transfer to Akagera National Park',
          'Check-in at the lodge/hotel',
          'Lunch with an option to try local dishes',
          'Boat trip on Lake Ihema',
          'Opportunity to see water-loving animals like hippopotamuses, crocodiles, and various bird species',
        ],
      },
      {
        day: 3,
        title: 'Game Drive & Transfer to Volcanoes National Park',
        activities: [
          'Wake up early for an early morning game drive',
          'Opportunity to see grazing animals and predators hunting in the morning',
          'Return to the hotel/lodge to freshen up and have lunch',
          'Pack up for the journey to Volcanoes National Park',
          'Check-in at Volcanoes National Park accommodation',
          'Relax and prepare for the next day',
          'Dinner served at hotel/lodge ',
        ],
      },
      {
        day: 4,
        title: 'Gorilla Tracking',
        activities: [
          'Early breakfast',
          'Head to Volcanoes National Park headquarters for a gorilla tracking briefing',
          'Receive information on the Do’s and Don’ts of the gorilla tour',
          'Allocation of a random gorilla group to track',
          'Trek into the Virunga jungles covered in thick rainforest for the gorilla encounter',
          'Gorilla tracking lasts between 2 to 8 hours',
          'Return to the lodge for relaxation and lunch',
          'Optional visit to a local Banywarwanda community for a cultural encounter',
          'Return to the hotel/lodge for dinner before nightfall',
        ],
      },
      {
        day: 5,
        title: 'Golden Monkey Tracking',
        activities: [
          'Gather at the park headquarters for briefing in the morning',
          'Option to go for golden monkey tracking or hike to Karisoke Research Centre',
          "Learn about Dian Fossey's conservation work and the mountain gorillas at the research center",
          'Return and pack up for the journey to Nyungwe Forest National Park',
          'Enjoy lunch with Rwandan local dishes en route to Nyungwe',
          'Continue the journey to Nyungwe Forest',
          'Check-in at the hotel/lodge upon arrival at Nyungwe',
          'Dinner served at the lodge',
        ],
      },
      {
        day: 6,
        title: 'Chimpanzee Tracking',
        activities: [
          'After breakfast, head to the park headquarters for chimpanzee tracking briefing',
          'Begin chimp tracking, searching for active and playful chimpanzees in Nyungwe Forest',
          'Chimpanzees are easily spotted as they jump from tree to tree, chattering and laughing',
          'Chimp tracking usually lasts about 3 hours',
          'Return to accommodation for lunch',
          'After lunch, go on a walking trail to the Canopy Walk',
          'Experience the 50-meter-long swing bridge with a bird’s eye view of the rainforest',
          'Spot wildlife from above as you walk through the forest',
          'Return to the hotel/lodge for dinner before nightfall',
        ],
      },
      {
        day: 7,
        title: 'Transfer to Kigali (Departure)',
        activities: [
          'Pack up after breakfast and begin the journey back to Kigali',
          'Arrive in Kigali and go for a city tour',
          'Optional visit to the genocide memorial site in Kigali',
          'Drop-off at the hotel or airport in time for your flight back home',
        ],
      },
    ],
    photos: [
      {
        url: Elephant,
        title: 'Elephant',
      },
      {
        url: Chimp,
        title: 'Chimpanzee',
      },
      {
        url: Lake,
        title: 'Lake Ihema Hippo',
      },
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
  {
    id: 6,
    title: '8 Days Gorilla & Golden Monkey Tracking',
    description: 'Request Quote',
    duration: '8 days',
    location: 'Bwindi,Queen Elizabeth & Volcanoes',
    image: GoldenMonkey,
    fullDescription: `This adventure starts in Entebbe and ends in Kigali, exploring two stunning countries. It offers breathtaking scenic views with lush green hills. Highlights include encountering the endangered Mountain Gorilla and Golden monkey, as well as visiting Dian Fossey's grave to appreciate her conservation efforts for Mountain Gorillas.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          "This adventure, starting in Entebbe and ending in Kigali, features stunning landscapes and encounters with Mountain Gorillas, Golden monkeys, and a visit to Dian Fossey's grave, celebrating her conservation work for eight days.",
          'Contact us for a personalized quote.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          '4x4 Land Cruiser/Minibus with an English-speaking driver guide',
          'Full board accommodation as per the itinerary',
          'Game drive',
          'Entrance fees',
          'Boat cruise',
          'Tracking the Golden monkeys',
          'City tour and visit the Genocide memorial',
          'Gorilla permits',
          'The Batwa community experience',
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
          'Golden Monkey tracking',
          'Boat cruise',
          'Game drive',
          'Breathtaking scenery',
          'Hospitable people and rich culture',
          'Knowledgeable guides',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival ',
        activities: [
          'Arrival at Entebbe International Airport',
          'Meet with a representative from Divine African Holidays',
          'Transfer to your hotel',
          'Check-in at the hotel (Accacia Lodge or Acactus hotel)',
          'Briefing about the upcoming safari',
        ],
      },
      {
        day: 2,
        title: 'Transfer to Queen Elizabeth National Park',
        activities: [
          'After breakfast, begin the 5-6 hour journey to Queen Elizabeth National Park',
          'Pass through the towns of Masaka, Mbarara, and others',
          'Stop at the Uganda Equator along Masaka road to stand in both hemispheres and experiment with water swirling in different directions',
          'Take photos and buy souvenirs at the Equator',
          'Continue the journey and enjoy the cool air and lush tea plantations near Bushenyi',
          'Pass through Kalinzu Forest Reserve on the way to Queen Elizabeth National Park',
          'Arrive at the lodge and relax while waiting for the evening game drive',
          'Accomodation at Bush Lodge / Warjoja Safari Lodge',
        ],
      },
      {
        day: 3,
        title: 'Game Drive & Boat Cruise',
        activities: [
          'Start the day with an early game drive to spot diverse animals, including the Big 5: Elephants, Buffaloes, Lions, Leopards, and more',
          'Spot warthogs, hyenas, and other species along the driving circuits',
          'Observe a rich birdlife, including storks in wetland areas and flamingoes in salt lakes at Kasenyi',
          'After lunch, enjoy a 2-hour boat cruise on the Kazinga Channel, linking Lake George and Lake Edward',
          'See hippos, Nile crocodiles, and warthogs along the channel banks',
          'Use binoculars for a better view of birds and animals, including African Elephants',
          'Accomodation at Bush Lodge / Warjoja Safari Lodge',
        ],
      },
      {
        day: 4,
        title: 'Transfer to Bwindi National Impenetrable Park',
        activities: [
          'Early morning drive after breakfast towards the south of the park',
          'Pass through the shining Savannah vegetation',
          'Transfer to Bwindi Impenetrable National Park via the Ishasha sector, famous for tree-climbing lions',
          'Upon arrival, check in at the lodge',
          'Accomodation at Gorilla Mist Camp / Ride for a woman guest house',
          'Relax and prepare for a strenuous day ahead',
        ],
      },
      {
        day: 5,
        title: 'Gorilla Tracking',
        activities: [
          'Early morning breakfast, followed by a briefing at the park headquarters on gorilla trekking dos and don’ts',
          'Rangers accompany you to the rainforest to begin the search for the gorillas',
          'The trek can be tough but is a rewarding experience upon encountering the gorillas',
          'Trekkers are advised to carry raincoats and boots due to unpredictable weather',
          'Potters are available to carry luggage for a small fee',
          'On sighting the gorillas, maintain a 6-meter distance as guided by the rangers',
          'Gorilla tracking may take 2 to 8 hours, depending on the location of the gorillas',
          'Physical fitness is recommended for trekkers',
          'After the trek, return to the lodge for lunch',
          'In the afternoon, optional visit to the Batwa community for cultural performances',
          'Accomodation at Gorilla Mist Camp / Ride for a woman guest house',
        ],
      },
      {
        day: 6,
        title: 'Transfer to Volcanoes National park',
        activities: [
          'Volcanoes National Park is located in the northwestern part of Rwanda',
          'The park covers 160 square kilometers of rainforest',
          'It encompasses eight volcanoes in the Virunga Mountain range, including Karisimbi, Bisoke, Mgahinga, Muhabura, and Sabinyo',
          'The park is home to the endangered mountain gorillas',
          'The grave of Dian Fossey, a famous primatologist who helped conserve mountain gorillas, is located in the park',
          'Accomodation at Five Volcanoes / Kinigi Cottages',
        ],
      },
      {
        day: 7,
        title: 'Golden Monkey Tracking & Hike to Dian Fossey Grave',
        activities: [
          'Early morning hike to the Dian Fossey grave, taking 2-3 hours',
          'Visit her grave and former research camp',
          'Pay homage to Dian Fossey and learn about her work conserving gorillas',
          'Track the golden monkeys in the park',
          'Accomodation at Five Volcanoes / Kinigi Cottages',
          'Transfer to Kigali for overnight stay',
        ],
      },
      {
        day: 8,
        title: 'City Tour and Departure',
        activities: [
          'City tour depending on flight time',
          'Visit craft markets',
          'Visit the Genocide Memorial Center',
        ],
      },
    ],
    photos: [
      {
        url: Elephant,
        title: 'Elephant',
      },
      {
        url: Chimp,
        title: 'Chimpanzee',
      },
      {
        url: GoldenMonkey,
        title: 'Golden Monkey',
      },
      {
        url: Lion,
        title: 'Lion At Queen Elizabeth National Park',
      },

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
  {
    id: 6,
    title: '6 Days Gorilla & Chimpanzee Tracking',
    description: '$2650',
    duration: '6 days',
    location: 'Bwindi,Queen Elizabeth & Lake Bunyonyi',
    image: ChimpTrek,
    fullDescription: `This six day extraordinary journey takes you through Uganda’s pristine wilderness, where awe-inspiring landscapes meet thrilling wildlife encounters. This adventure takes you to the lush Bwindi Impenetrable Forest National Park, home to the majestic Mountain Gorillas, affectionately known as the “gentle giants.” The experience continues to Queen Elizabeth National Park, Uganda’s most visited park, renowned for its abundant wildlife and spectacular views and unwind amidst the serene beauty of Lake Bunyonyi, Africa’s "place of little birds.`,
    tourDetails: [
      {
        title: 'Tour Cost',
        icon: Sun,
        items: [
          '$2650',
          'Rate for 1 person for a single self-contained room',
          'Contact us for a personalized experience.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          'A 4x4 land cruiser/Minibus with a professional English driver guide',
          'Fuel',
          'Full board accommodation as per the itinerary',
          '1 Gorilla permit',
          'Game drive',
          'Boat cruise',
          '1 chimpanzee permit',
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
          'Tracking the Mountain Gorilla',
          'The Batwa experience',
          'A game drive',
          'Boat cruise on the Kazinga channel',
          'Tracking the chimpanzees in the Kalinzu forest',
          'Canoeing at Lake Bunyonyi',
          'Breathtaking scenery',
          'Knowledgeable guides',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival ',
        activities: [
          'Meet a representative from Divine African Holidays in Kigali for a warm welcome and safari briefing.',
          'Travel to the home of the Mountain Gorillas.',
          'Dinner and overnight stay at either Gorilla Mist or Buhoma Community Lodge.',
        ],
      },
      {
        day: 2,
        title: 'Gorilla Trekking',
        activities: [
          'Transfer to the park headquarters for a briefing and allocation of a gorilla group.',
          'Enjoy a thrilling gorilla trekking experience.',
          'Have lunch after the trek.',
          'Participate in the Batwa experience, including learning about their daily life, enjoying dance and drama, and seeing traditional fire-making using friction.',
          'Dinner and overnight stay at either Gorilla Mist or Buhoma Community Lodge.',
        ],
      },
      {
        day: 3,
        title: 'Transfer to Queen Elizabeth National Park',
        activities: [
          'Wake up in the morning and have breakfast.',
          'Travel to Queen Elizabeth National Park, arriving late in the evening.',
          'Check in upon arrival.',
          'Dinner and overnight stay at Bush Lodge.',
        ],
      },
      {
        day: 4,
        title: 'Game Drive',
        activities: [
          'Wake up early and have breakfast.',
          'Go for a game drive in the southern part of the park (Ishasha), known for its tree-climbing lions.',
          'Arrive in time for lunch.',
          'After lunch, enjoy a boat cruise on the Kazinga Channel, spotting hippos, elephants, and other wildlife.',
          'Return to your lodge after the cruise.',
          'Dinner and overnight stay at Bush Lodge.',
        ],
      },
      {
        day: 5,
        title: 'Chimp Trekking',
        activities: [
          'Wake up in the morning and have breakfast.',
          'Head to either Kyambura or Kalinzu for chimp trekking.',
          'Transfer to Lake Bunyonyi, arriving late in the evening.',
          'Check in upon arrival.',
          'Dinner and overnight stay at Overland Resort.',
        ],
      },
      {
        day: 6,
        title: 'Transfer to Kigali',
        activities: [
          'Wake up early in the morning and have breakfast.',
          'Participate in optional activities such as canoeing on Lake Bunyonyi or horseback riding.',
          'Have lunch.',
          'Transfer to Kigali in the afternoon.',
        ],
      },
    ],
    photos: [
      {
        url: Elephant,
        title: 'Elephants',
      },
      {
        url: Chimp,
        title: 'Chimpanzee',
      },
      {
        url: Bird,
        title: 'Birds at Lake Bunyonyi',
      },
      {
        url: Lion,
        title: 'Lions At Queen Elizabeth National Park',
      },

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
