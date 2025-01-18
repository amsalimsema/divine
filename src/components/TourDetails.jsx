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
import Elephant from '../assets/ElephantHerd.jpg'
import Lake from '../assets/Lake-Ihema.jpg'
import GoldenMonkey from '../assets/uganda-golden-monkey.jpg'
import Lion from '../assets/lion-in-queen-elizabeth-national-park.jpg'
import Bird from '../assets/Birds-of-Lake-Bunyonyi.jpg'
import ChimpTrek from '../assets/uganda-gorillas-trek-chimp.jpg'
import Giraffe from '../assets/giraffe_murchision.jpg'
import Impala from '../assets/impala_lake_mburo.jpg'
import Imbalu from '../assets/imbalu-celebrations.jpg'
import Sunset from '../assets/Divine-African-Tours-1.jpg'

const tourPackages = [
  {
    id: 1,
    title: '3 days Bwindi Gorilla Tracking Safari',
    description: '$1485/Person',
    duration: '3 days',
    location: 'Bwindi Impenetrable National Park - Uganda',
    image: BGT,
    fullDescription: `Bwindi Impenetrable National park is one of the most popular gorilla trekking destinations sheltering more than half the World's surviving population  of mountain gorillas in more than 40 families, 20 of which are habituated for trekking. Bwindi forest was gazetted into a National park in 1991 and was later declared a UNESCO world heritage site in 1994.`,
    tourDetails: [
      {
        title: 'Tour Cost',
        icon: Sun,
        items: [
          '$1485 per person',
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
          'Dinner and an overnight stay at  Gorilla Mist Lodge or Buhoma Community',
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
          'Accomodation at  Gorilla Mist Lodge or Buhoma Community',
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
          'Accomodation at Gorilla Mist Lodge',
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
          'Accomodation at Gorilla Mist Lodge',
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
          'Accomodation at Five Volcanoes or Kinigi Cottages',
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
          'Accomodation at Chez Lando Hotel includes meal plan, bed and breakfast',
        ],
      },
      {
        day: 2,
        title: 'Akagera National Park & Boat Cruise on Lake Ihema',
        activities: [
          'Breakfast to start the second day',
          'Transfer to Akagera National Park',
          'Check-in at the Akagezi Lodge',
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
          'Check-in at Akagezi lodge',
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
          'Accomodation at Five Volcanoes or Kinigi Cottages',
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
          'Accomodation at Five Volcanoes or Kinigi Cottages',
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
          'Accomodation at Kivu Resort',
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
    id: 7,
    title: '6 Days Gorilla & Chimpanzee Tracking',
    description: '$2500/Person',
    duration: '6 days',
    location: 'Bwindi,Queen Elizabeth & Lake Bunyonyi',
    image: ChimpTrek,
    fullDescription: `This six day extraordinary journey takes you through Uganda’s pristine wilderness, where awe-inspiring landscapes meet thrilling wildlife encounters. This adventure takes you to the lush Bwindi Impenetrable Forest National Park, home to the majestic Mountain Gorillas, affectionately known as the “gentle giants.” The experience continues to Queen Elizabeth National Park, Uganda’s most visited park, renowned for its abundant wildlife and spectacular views and unwind amidst the serene beauty of Lake Bunyonyi, Africa’s "place of little birds.`,
    tourDetails: [
      {
        title: 'Tour Cost',
        icon: Sun,
        items: [
          '$2500 per person',
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
  {
    id: 8,
    title: '4 days Uganda wildlife safari',
    description: 'Request Quote',
    duration: '4 days',
    location: 'Bwindi & Queen Elizabeth National Park',
    image: Lion,
    fullDescription: `Experience the best of Uganda on a 4-day wildlife safari featuring unforgettable gorilla tracking, a game drive, and a boat cruise for wildlife viewing in Queen Elizabeth National Park. This short but memorable tour also includes visits to iconic sites like the equator monument and the Igongo Cultural Museum in Mbarara town.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          'Experience the best of Uganda on a 4-day wildlife safari featuring unforgettable gorilla tracking, a game drive, and a boat cruise for wildlife viewing in Queen Elizabeth National Park.',
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
          'All permits',
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
          'A game drive',
          'Boat cruise on the Kazinga channel',
          'Breathtaking scenery',
          'Knowledgeable guides',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Transfer Kampala/ Entebbe to Bwindi',
        activities: [
          'Early morning pickup in Kampala/Entebbe and departure for Bwindi.',
          'Road travel time: 9-10 hours.',
          'Stop at the equator monument for photos.',
          'Lunch stop in Mbarara town at Igongo Cultural Tour.',
          'Continue to Buhoma, northern sector of Bwindi.',
          'Check-in at Buhoma Lodge or Gorilla Mist Camp.',
          'Optional: Dinner and overnight stay.',
        ],
      },
      {
        day: 2,
        title: 'Gorilla Tracking',
        activities: [
          'After breakfast, head to the visitor center for briefing with other visitors.',
          'Guides take you through the forest to track gorillas.',
          'Once gorillas are found, enjoy 1 hour taking photos and learning about their lifestyle.',
          'Return for lunch.',
          'Depart for Queen Elizabeth National Park, driving via Ishasha.',
          'In Ishasha, view tree-climbing lions.',
          'Continue to your lodge.',
          'Dinner and overnight stay at Mweya Safari Lodge, Simba Safari Camp, or Enganzi Lodge.',
        ],
      },
      {
        day: 3,
        title: 'Early Riser Game Drive and Boat Cruise',
        activities: [
          'Wildlife viewing starts early at 06:45 AM with a game drive safari.',
          'Look for lions, leopards, elephants, buffaloes, giraffes, warthogs, and antelope species like Uganda kob and topi.',
          'Break for lunch.',
          'In the afternoon, enjoy a 2-hour boat cruise on the Kazinga Channel.',
          'The channel is home to many hippos, crocodiles, and water birds.',
          'Spot animals that come to drink, including elephants, buffaloes, and waterbucks.',
          'Dinner and overnight stay.',
        ],
      },
      {
        day: 4,
        title: 'Transfer to Kampala',
        activities: [
          'After breakfast, depart Queen driving back to Kampala which will mark the end of your safari.',
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
  {
    id: 9,
    title: '10 days Uganda wildlife safari',
    description: 'Request Quote',
    duration: '10 days',
    location:
      'Murchision Falls, Kibale ,Bwindi & Queen Elizabeth National Park',
    image: Giraffe,
    fullDescription: `The 10-day Uganda safari offers an unforgettable adventure, blending wildlife, culture, and nature across four major national parks: Murchison Falls, Queen Elizabeth, Kibale, and Bwindi Impenetrable. Highlights include gorilla trekking, chimpanzee tracking, game drives, boat cruises, and visits to cultural communities like the Batwa. The tour also features a hike to the spectacular Murchison Falls, boat launches, and a visit to Ziwa Rhino Sanctuary. Starting in Kampala and ending in Kigali, this safari provides an unparalleled experience of Uganda's wildlife and landscapes, making it the perfect blend of adventure and exploration.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          'Experience the best of Uganda on a 10-day wildlife safari featuring unforgettable gorilla tracking in Bwindi, a game drive, and a boat cruise for wildlife viewing in Queen Elizabeth, Kibale & Murchision Falls National Park.',
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
          'All permits',
          'Game drive',
          'Boat cruise',
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
          'A game drive',
          'Boat cruise on the Kazinga channel',
          'Breathtaking scenery',
          'Knowledgeable guides',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Transfer to the Hotel',
        activities: [
          'On arrival, meet your guide from Divine African Tours.',
          'Drive to your lodge for a night stay.',
          'The first day of your 10-day Uganda safari is focused on pickup, briefing, and relaxation.',
          'Accommodation options include Victoria Serena, The Boma Guest House, Golden Tulip, and Cassia Lodge',
        ],
      },
      {
        day: 2,
        title: 'Transfer to Murchison',
        activities: [
          'Wake up to a delicious breakfast and meet your guide for a briefing about your 10-day Uganda safari.',
          'Drive to Uganda’s largest national park, Murchison Falls National Park.',
          'Activities include hiking to the top of the falls, game drives, and wildlife viewing (lions, leopards, elephants, giraffes, hartebeests, oribi, Uganda Kobs, waterbucks, buffaloes, hippos, and various bird species).',
          'See more wildlife along the Albert Nile.',
          'Stopover at Ziwa Rhino Sanctuary, the only place to view rhinos in the wild.',
          'Dinner and overnight stay.',
          'Accommodation options include Murchison River Lodge and Pakuba Safari Lodge.',
        ],
      },
      {
        day: 3,
        title: 'Game Drive,Boat Cruise & Hike to the falls',
        activities: [
          'Have an early morning game drive with your guide to view various wildlife in Murchison Falls National Park, including lions, leopards, buffalo herds, elephants, giraffes, antelopes, and hartebeests.',
          'Later in the afternoon, enjoy a boat cruise on the Albert Nile, spotting crocodiles, hippos, and a variety of bird species, making it a great hub for birders.',
          'Hike to the picturesque Murchison Falls and enjoy the stunning sounds of the falls as it passes through the narrow gorge.',
          'Return to your lodge for dinner and rest.',
          'Accommodation options include Murchison River Lodge and Pakuba Safari Lodge.',
        ],
      },
      {
        day: 4,
        title: 'Transfer to Kibale National Park',
        activities: [
          'Wake up to a hearty breakfast.',
          'Transfer to Kibale Forest National Park, home to the endangered chimpanzees and known for chimpanzee trekking.',
          'Dinner and overnight stay.',
          'Accommodation options include Kyaninga Safari Lodge, Crater Safari Lodge, and Kibale Forest Camp.',
        ],
      },
      {
        day: 5,
        title: 'Chimp Tracking and Bigodi Walk',
        activities: [
          'Start the day with a flavorful breakfast and packed lunch.',
          'Head to the briefing center where a game ranger will brief you about chimpanzee trekking.',
          'Proceed to the forest for the chimpanzee trekking activity.',
          'Along the trek, view other primates like black & white colobus, grey-cheeked mangabey, and red-tailed monkeys, along with various bird species and plants.',
          'In the afternoon, embark on the Bigodi community walk, visiting the atmospheric village of Bigodi.',
          'Meet a traditional healer who will share knowledge about spirits, herbs, plants, and local medicines.',
          'Visit the homes of elderly villagers who will tell fascinating stories about birth, marriage, ceremonies, clans, and traditional life.',
          "Experience the Ugandan school system, visit the local church, and explore Bigodi's trading center, the heart of rural life.",
          'Return to the lodge for dinner and overnight stay.',
          'Accommodation options include Kyaninga Safari Lodge, Crater Safari Lodge, and Kibale Forest Camp.',
        ],
      },
      {
        day: 6,
        title: 'Transfer to Queen Elizabeth National Park ',
        activities: [
          "Wake up to a delicious breakfast and get ready to head to Queen Elizabeth National Park, Uganda's second-largest park, famous for its tree-climbing lions.",
          "Explore the park's diverse ecosystems, including savanna, forests, lakes, craters, and wetlands, home to big game, ten primate species, and over 600 bird species.",
          'In the afternoon, embark on a launch cruise along the 40m-long Kazinga Channel, linking Lake Edward and Lake George.',
          'The banks of the channel host the highest concentration of hippos and bird species year-round.',
          'Dinner and overnight stay.',
          'Accommodation options include Mazike Safari Lodge, Parkview Safari Lodge, and Engazi Game Lodge.',
        ],
      },
      {
        day: 7,
        title: 'Game Drive and Maramagambo Forest Walk.',
        activities: [
          'Start the day with an epicurean breakfast.',
          'Set off for a morning game drive in the plains of the park, where you will view wildlife such as Cape buffalo, Uganda kob, waterbuck, warthogs, lions, leopards, hyenas, giant forest hogs, topis, and elephants.',
          'After a delightful lunch, head out for a forest walk in Maramagambo Forest.',
          'Maramagambo is home to chimpanzees, elephants, bush pigs, pythons, bats, and the rare Bats’ pygmy antelope, and is known for its bat caves.',
          'During the trek, spot primates like Chimpanzees, Black and White Colobus Monkeys, L’hoest Monkeys, Baboons, Red Tailed Monkeys, Blue Monkeys, and Vervet Monkeys.',
          'The forest is also a prime destination for bird watchers, with rare species like the Rwenzori Turaco, white-naped pigeons, and flycatchers.',
          'Dinner and overnight stay.',
          'Accommodation options include Mazike Safari Lodge, Parkview Safari Lodge, and Engazi Game Lodge.',
        ],
      },
      {
        day: 8,
        title: 'Transfer to Bwindi via Ishasha Sector',
        activities: [
          'Wake up to an ambrosial breakfast and head to Bwindi Impenetrable National Park via the Ishasha sector, known for its unique tree-climbing lions.',
          'The Ishasha sector is dominated by candelabra trees with large branches, providing a perfect spot for lions to climb and rest.',
          'Along the way, view a variety of wildlife, including large buffalo herds, antelopes, elephants, and hippos.',
          'After a game drive in the Ishasha sector, proceed to Bwindi Impenetrable National Park, located in the southern part of Uganda.',
          'Bwindi Impenetrable National Park is home to half of the world’s population of the endangered mountain gorillas, making it ideal for gorilla trekking.',
          'The park was gazetted in 1991 and designated as a UNESCO Natural World Heritage Site in 1994.',
          'Located next to the DRC border, Bwindi is part of the Bwindi Impenetrable Forest and borders the Virunga National Park, on the rim of the Albertine Rift.',
          'Upon arrival, check into your lodge for dinner and overnight stay.',
          'Accommodation options include Chameleon Hill Lodge, Ichumbi Gorilla Lodge, and The Four Gorillas Lodge.',
        ],
      },
      {
        day: 9,
        title: 'Mountain Gorilla Trekking Experience',
        activities: [
          'Start the day with a delicious breakfast and a packed lunch.',
          'Meet up with your guide, who will take you to the park’s briefing center where park rangers will introduce you to the activity and provide guidelines for gorilla trekking.',
          'After the briefing, proceed into the park for the gorilla trekking experience.',
          'Once you find the mountain gorillas, you are allowed to stay with them for one hour, with a group of only 8 people allowed to trek at a time.',
          'After trekking, return to the lodge to relax. If finished early, an optional Batwa Trail experience is available.',
          'On the Batwa Trail, you will visit the first inhabitants of the forest, the Batwa people, and participate in activities such as storytelling, traditional practices, and learning about their way of life.',
          'The Batwa experience offers a fascinating glimpse into their history and culture, making for a memorable evening.',
          'Dinner and overnight stay.',
          'Accommodation options include Chameleon Hill Lodge, Ichumbi Gorilla Lodge, and The Four Gorillas Lodge.',
        ],
      },
      {
        day: 10,
        title: 'Transfer to Kigali and City Tour',
        activities: [
          'Start the day with a succulent breakfast.',
          'Set off to Kigali for a city tour, one of the cleanest and most organized cities in Africa.',
          'Kigali is home to several key attractions including Kandt House Museum, the oldest building and the foundation of the city’s establishment.',
          'Visit Inema Arts Center, Ivuka Arts Center, Museum of National History, and the Presidential Museum.',
          'Explore the Kigali Genocide Memorial Center, Statehouse Museum, and Miyo Art Gallery.',
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
  {
    id: 10,
    title: '7 Days Uganda Safari',
    description: 'Request Quote',
    duration: '7 days',
    location: 'Lake Mburo ,Bwindi & Queen Elizabeth National Park',
    image: Impala,
    fullDescription: `Embark on an affordable 7-day Uganda safari with Divine African Tours, offering an unforgettable experience to explore mountain gorillas in Bwindi and diverse wildlife in Queen Elizabeth and Lake Mburo National Parks. This budget-friendly safari includes expert guides and exciting activities like gorilla trekking, game drives, and boat cruises, providing a chance to witness Uganda’s rich wildlife and stunning landscapes, including tree-climbing lions, elephants, zebras, and over 600 bird species. A perfect adventure for nature lovers seeking an unforgettable African experience.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          'Experience the best of Uganda on a 7-day wildlife safari featuring unforgettable gorilla tracking in Bwindi, a game drive, and a boat cruise for wildlife viewing in Lake Mburo & Queen Elizabeth.',
          'Contact us for a personalized experience.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          'A 4x4 land cruiser/Minibus with a professional English driver guide',
          'Full board accommodation as per the itinerary',
          'All permits',
          'Game drive',
          'Boat cruise',
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
          'A game drive',
          'Boat cruise on the Kazinga channel',
          'Breathtaking scenery',
          'Knowledgeable guides',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Transfer to the Hotel',
        activities: [
          'On arrival, meet your guide from Divine African Tours.',
          'Drive to your lodge for a night stay.',
          'The first day of your 10-day Uganda safari is focused on pickup, briefing, and relaxation.',
          'Accommodation options include Victoria Serena, The Boma Guest House, Golden Tulip, and Cassia Lodge',
        ],
      },
      {
        day: 2,
        title: 'Transfer to Murchison',
        activities: [
          'Wake up to a delicious breakfast and meet your guide for a briefing about your 10-day Uganda safari.',
          'Drive to Uganda’s largest national park, Murchison Falls National Park.',
          'Activities include hiking to the top of the falls, game drives, and wildlife viewing (lions, leopards, elephants, giraffes, hartebeests, oribi, Uganda Kobs, waterbucks, buffaloes, hippos, and various bird species).',
          'See more wildlife along the Albert Nile.',
          'Stopover at Ziwa Rhino Sanctuary, the only place to view rhinos in the wild.',
          'Dinner and overnight stay.',
          'Accommodation options include Murchison River Lodge and Pakuba Safari Lodge.',
        ],
      },
      {
        day: 3,
        title: 'Game Drive,Boat Cruise & Hike to the falls',
        activities: [
          'Have an early morning game drive with your guide to view various wildlife in Murchison Falls National Park, including lions, leopards, buffalo herds, elephants, giraffes, antelopes, and hartebeests.',
          'Later in the afternoon, enjoy a boat cruise on the Albert Nile, spotting crocodiles, hippos, and a variety of bird species, making it a great hub for birders.',
          'Hike to the picturesque Murchison Falls and enjoy the stunning sounds of the falls as it passes through the narrow gorge.',
          'Return to your lodge for dinner and rest.',
          'Accommodation options include Murchison River Lodge and Pakuba Safari Lodge.',
        ],
      },
      {
        day: 4,
        title: 'Transfer to Kibale National Park',
        activities: [
          'Wake up to a hearty breakfast.',
          'Transfer to Kibale Forest National Park, home to the endangered chimpanzees and known for chimpanzee trekking.',
          'Dinner and overnight stay.',
          'Accommodation options include Kyaninga Safari Lodge, Crater Safari Lodge, and Kibale Forest Camp.',
        ],
      },
      {
        day: 5,
        title: 'Chimp Tracking and Bigodi Walk',
        activities: [
          'Start the day with a flavorful breakfast and packed lunch.',
          'Head to the briefing center where a game ranger will brief you about chimpanzee trekking.',
          'Proceed to the forest for the chimpanzee trekking activity.',
          'Along the trek, view other primates like black & white colobus, grey-cheeked mangabey, and red-tailed monkeys, along with various bird species and plants.',
          'In the afternoon, embark on the Bigodi community walk, visiting the atmospheric village of Bigodi.',
          'Meet a traditional healer who will share knowledge about spirits, herbs, plants, and local medicines.',
          'Visit the homes of elderly villagers who will tell fascinating stories about birth, marriage, ceremonies, clans, and traditional life.',
          "Experience the Ugandan school system, visit the local church, and explore Bigodi's trading center, the heart of rural life.",
          'Return to the lodge for dinner and overnight stay.',
          'Accommodation options include Kyaninga Safari Lodge, Crater Safari Lodge, and Kibale Forest Camp.',
        ],
      },
      {
        day: 6,
        title: 'Transfer to Queen Elizabeth National Park ',
        activities: [
          "Wake up to a delicious breakfast and get ready to head to Queen Elizabeth National Park, Uganda's second-largest park, famous for its tree-climbing lions.",
          "Explore the park's diverse ecosystems, including savanna, forests, lakes, craters, and wetlands, home to big game, ten primate species, and over 600 bird species.",
          'In the afternoon, embark on a launch cruise along the 40m-long Kazinga Channel, linking Lake Edward and Lake George.',
          'The banks of the channel host the highest concentration of hippos and bird species year-round.',
          'Dinner and overnight stay.',
          'Accommodation options include Mazike Safari Lodge, Parkview Safari Lodge, and Engazi Game Lodge.',
        ],
      },
      {
        day: 7,
        title: 'Game Drive and Maramagambo Forest Walk.',
        activities: [
          'Start the day with an epicurean breakfast.',
          'Set off for a morning game drive in the plains of the park, where you will view wildlife such as Cape buffalo, Uganda kob, waterbuck, warthogs, lions, leopards, hyenas, giant forest hogs, topis, and elephants.',
          'After a delightful lunch, head out for a forest walk in Maramagambo Forest.',
          'Maramagambo is home to chimpanzees, elephants, bush pigs, pythons, bats, and the rare Bats’ pygmy antelope, and is known for its bat caves.',
          'During the trek, spot primates like Chimpanzees, Black and White Colobus Monkeys, L’hoest Monkeys, Baboons, Red Tailed Monkeys, Blue Monkeys, and Vervet Monkeys.',
          'The forest is also a prime destination for bird watchers, with rare species like the Rwenzori Turaco, white-naped pigeons, and flycatchers.',
          'Dinner and overnight stay.',
          'Accommodation options include Mazike Safari Lodge, Parkview Safari Lodge, and Engazi Game Lodge.',
        ],
      },
      {
        day: 8,
        title: 'Transfer to Bwindi via Ishasha Sector',
        activities: [
          'Wake up to an ambrosial breakfast and head to Bwindi Impenetrable National Park via the Ishasha sector, known for its unique tree-climbing lions.',
          'The Ishasha sector is dominated by candelabra trees with large branches, providing a perfect spot for lions to climb and rest.',
          'Along the way, view a variety of wildlife, including large buffalo herds, antelopes, elephants, and hippos.',
          'After a game drive in the Ishasha sector, proceed to Bwindi Impenetrable National Park, located in the southern part of Uganda.',
          'Bwindi Impenetrable National Park is home to half of the world’s population of the endangered mountain gorillas, making it ideal for gorilla trekking.',
          'The park was gazetted in 1991 and designated as a UNESCO Natural World Heritage Site in 1994.',
          'Located next to the DRC border, Bwindi is part of the Bwindi Impenetrable Forest and borders the Virunga National Park, on the rim of the Albertine Rift.',
          'Upon arrival, check into your lodge for dinner and overnight stay.',
          'Accommodation options include Chameleon Hill Lodge, Ichumbi Gorilla Lodge, and The Four Gorillas Lodge.',
        ],
      },
      {
        day: 9,
        title: 'Mountain Gorilla Trekking Experience',
        activities: [
          'Start the day with a delicious breakfast and a packed lunch.',
          'Meet up with your guide, who will take you to the park’s briefing center where park rangers will introduce you to the activity and provide guidelines for gorilla trekking.',
          'After the briefing, proceed into the park for the gorilla trekking experience.',
          'Once you find the mountain gorillas, you are allowed to stay with them for one hour, with a group of only 8 people allowed to trek at a time.',
          'After trekking, return to the lodge to relax. If finished early, an optional Batwa Trail experience is available.',
          'On the Batwa Trail, you will visit the first inhabitants of the forest, the Batwa people, and participate in activities such as storytelling, traditional practices, and learning about their way of life.',
          'The Batwa experience offers a fascinating glimpse into their history and culture, making for a memorable evening.',
          'Dinner and overnight stay.',
          'Accommodation options include Chameleon Hill Lodge, Ichumbi Gorilla Lodge, and The Four Gorillas Lodge.',
        ],
      },
      {
        day: 10,
        title: 'Transfer to Kigali and City Tour',
        activities: [
          'Start the day with a succulent breakfast.',
          'Set off to Kigali for a city tour, one of the cleanest and most organized cities in Africa.',
          'Kigali is home to several key attractions including Kandt House Museum, the oldest building and the foundation of the city’s establishment.',
          'Visit Inema Arts Center, Ivuka Arts Center, Museum of National History, and the Presidential Museum.',
          'Explore the Kigali Genocide Memorial Center, Statehouse Museum, and Miyo Art Gallery.',
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
  {
    id: 11,
    title: '5 Days Uganda Safari',
    description: 'Request Quote',
    duration: '5 days',
    location: 'Bwindi & Queen Elizabeth National Park',
    image: Impala,
    fullDescription: `This safari begins in Kampala and takes you to the Bwindi impenetrable National Park where you will get an opportunity to trek mountain gorillas in their natural habitat. We will also visit the Batwa pygmy community for a culture experience before transferring to Queen Elizabeth National Park the most popular game Park in Uganda for a game viewing adventure where you will see some of Africa’s Big 5 animals. The lunch Cruise on the kazinga channel will be another highlight of the Safari before returning to Kampala`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          'Captivating 5-day Ugandan adventure featuring mountain gorilla trekking in Bwindi, a cultural encounter with the Batwa community, and unforgettable wildlife experiences, including a game drive and boat cruise in Queen Elizabeth National Park.',
          'Contact us for a personalized experience.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          'Accommodation as highlighted in itinerary',
          'Meals as highlighted in itinerary',
          'Transportation in a four-wheel drive vehicle',
          'Full-time service of an English-speaking driver-guide',
          'Bottled drinking water',
          'Park entrance fee',
          'Gorilla trek',
          'Lunch cruise on Kazinga Channel',
        ],
      },
      {
        title: 'Price Excludes',
        icon: CircleOff,
        items: [
          'Visa',
          'International flights',
          'Insurance',
          'Personal expenditures such as laundry services, tips, and alcoholic drinks',
        ],
      },
      {
        title: 'What to Expect',
        icon: Eye,
        items: [
          'Tracking the Mountain Gorilla',
          'A game drive',
          'Boat cruise on the Kazinga channel',
          'Breathtaking scenery',
          'Knowledgeable guides',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Transfer to Bwindi impenetrable Forest National Park',
        activities: [
          'Very early morning, you will be picked up by your safari driver-guide who will brief you about the safari.',
          'Begin the 7-hour drive to Bwindi Impenetrable Forest National Park.',
          'Bwindi is known for the best gorilla trekking safari experience in the world, home to the largest population of mountain gorillas.',
          'Enjoy the rich diversity of flora and other wildlife, including monkey species, forest elephants, and over 345 bird species.',
          'Have an en-route lunch before arriving at the park late in the evening.',
          'Accommodation options include Buhoma Camp (budget), Gorilla Mist Camp, Buhoma Haven Lodge (midrange), and Bwindi Lodge, Clouds Mountain Gorilla Lodge (luxury).',
        ],
      },
      {
        day: 2,
        title: 'Gorilla Trekking and Batwa Cultural Visit',
        activities: [
          'Early breakfast followed by transfer to the park headquarters for a briefing by the park ranger.',
          'Head into the forest at 8 a.m. to search for the habituated gorilla family, encountering various butterfly, tree, insect, and bird species, along with some types of monkeys.',
          'Once the gorilla family is found, spend a maximum of one hour observing their behavior, taking photographs, and witnessing their interactions.',
          'Enjoy a lunch break.',
          'In the afternoon, visit the nearby Batwa pygmy community, where you will experience vibrant performances of dances, songs, and drama.',
          'Return to your accommodation for dinner and overnight rest.',
          'Meal Plan: Breakfast, Lunch, and Dinner.',
          'Accommodation options: Buhoma Camp (budget), Gorilla Mist Camp, Buhoma Haven Lodge (midrange), Bwindi Lodge, Clouds Mountain Gorilla Lodge (luxury).',
        ],
      },
      {
        day: 3,
        title: 'Transfer to Queen Elizabeth National Park',
        activities: [
          'Have a final breakfast at your lodge and set out on the drive to Queen Elizabeth National Park, Uganda’s most popular park, named after Queen Elizabeth II.',
          'Enjoy the beautiful park, which features diverse habitats including wetlands, savanna grasslands, forests, and small lakes, home to a variety of wildlife, including some of the Big Five and numerous bird species.',
          "Explore the park's famous tree-climbing lions, particularly in the Ishasha area.",
          "Upon arrival, check-in at your accommodation, enjoy lunch, and later embark on an evening game drive to spot some of the park's animals.",
          'Meal Plan: Breakfast, Lunch, and Dinner.',
          'Accommodation options: Bush Lodge (budget), Marafiki Safari Lodge (midrange), Engazi Lodge, Mweya Safari Lodge (luxury).',
        ],
      },
      {
        day: 4,
        title: 'Game Drive and Boat Cruise on Kazinga Channel',
        activities: [
          "After breakfast, drive along the Kasenyi tracks for a game viewing experience where you'll see animals such as Uganda kobs, lions, spotted hyenas, buffaloes, waterbucks, elephants, warthogs, and more.",
          "After lunch, transfer for a 2-hour boat cruise on the Kazinga Channel, a natural waterway connecting Lakes George and Edward, where you'll spot hippos, crocodiles, and water birds.",
          'Return to your accommodation for dinner and overnight rest.',
          'Meal Plan: Breakfast, Lunch, and Dinner.',
          'Accommodation options: Bush Lodge (budget), Marafiki Safari Lodge (midrange), Engazi Lodge, Mweya Safari Lodge (luxury).',
        ],
      },
      {
        day: 5,
        title: 'Departure Back To Kampala',
        activities: [
          'Enjoy a final breakfast at the lodge and check out.',
          'As you drive out of the park, you may be lucky to spot some animals along the way.',
          'Have lunch en-route and later arrive in Kampala in the late afternoon.',
          'This marks the end of your safari.',
          'Meal Plan: Breakfast and Lunch.',
          'Travel Time: 6 hours.',
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
  {
    id: 12,
    title: '3 Days Murchison Falls National Park Safari',
    description: 'Request Quote',
    duration: '3 days',
    location: 'Murchison Falls National Park',
    image: Giraffe,
    fullDescription: `The 3-day safari in Murchison Falls National Park, Uganda’s largest and most popular park, offers a diverse experience of wildlife and natural beauty. Covering 3,840 sq km, the park features habitats such as wetlands, woodlands, savannah, and grasslands, home to over 451 bird species and 87 mammals, including the Big Five. The highlight of the safari is a visit to Murchison Falls, where the River Nile forces large volumes of water through a narrow gorge, creating a stunning waterfall. Additionally, a visit to the Ziwa Rhino Sanctuary provides the opportunity to track rhinos.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          'Captivating 3-day Ugandan adventure in the Murchison Falls National Park with a diverse experience of wildlife and natural beauty.',
          'Contact us for a personalized experience.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          'Full-time English-speaking professional driver-guide.',
          'Full board accommodation as highlighted in the itinerary.',
          'Park entrance fees.',
          'Transportation in a four-wheel drive Land Cruiser.',
          'Rhino tracking fee at the Ziwa Rhino Sanctuary.',
          'Bottled drinking water.',
          'Ranger guide.',
        ],
      },
      {
        title: 'Price Excludes',
        icon: CircleOff,
        items: [
          'All international flights and visas.',
          'Activities highlighted as optional.',
          'Accommodation while in Kampala.',
          'Personal expenses such as laundry service, drinks, purchase of souvenirs, cigars, and tips.',
        ],
      },
      {
        title: 'What to Expect',
        icon: Eye,
        items: ['A game drive', 'Breathtaking scenery', 'Knowledgeable guides'],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Transfer to Murchison Falls National Park',
        activities: [
          'After an early breakfast, meet your safari driver-guide at 7:00 am for a briefing.',
          'Begin the long drive to Murchison Falls National Park in northeastern Uganda.',
          'Have lunch in Masindi en-route.',
          'Make a stop at Ziwa Rhino Sanctuary to track rhinos on foot.',
          'Ziwa Rhino Sanctuary, established in 2005, is dedicated to restoring the rhino population in Uganda.',
          'Continue to Murchison Falls National Park and check into your accommodation for dinner and overnight stay.',
          'Meal Plan: Lunch and Dinner.',
          'Journey Time: 6 to 7 hours.',
          'Accommodation options: Baker’s Lodge / Paraa Safari Lodge (luxury), Fort Murchison or Murchison River Lodge (mid-range), Heritage Safari Lodge (budget).',
        ],
      },
      {
        day: 2,
        title: 'Game Drive, Launch Cruise and Option hike to top of falls',
        activities: [
          "Start the day early with a morning game drive to explore the park's various habitats and spot wildlife such as elephants, hyenas, lions, Uganda kobs, buffaloes, and giraffes.",
          'Return to the lodge for lunch and relaxation.',
          'After lunch, embark on a 2-hour launch cruise along the River Nile to the bottom of Murchison Falls, where you’ll see the falls in their full grandeur.',
          'Encounter wildlife along the riverbanks, including Nile crocodiles, hippos, elephants, and a variety of birds.',
          'Option to hike to the top of Murchison Falls for a different view of the falls. The hike takes about 45 minutes and offers beautiful scenery and unique vegetation.',
          'Return to your accommodation for dinner and overnight rest.',
          'Meal Plan: Lunch and Dinner.',
          'Accommodation options: Baker’s Lodge / Paraa Safari Lodge (luxury), Fort Murchison or Murchison River Lodge (mid-range), Heritage Safari Lodge (budget).',
        ],
      },
      {
        day: 3,
        title: 'Departure to Kampala',
        activities: [
          'On the final day of the safari, enjoy a morning game drive in the park to spot any remaining wildlife.',
          'Begin the drive back to Kampala, with an estimated arrival in the late afternoon.',
          'Depending on your travel plans, you will be dropped off either at Entebbe International Airport for your outbound flight or at a hotel of your choice.',
          'End of Safari.',
          'Meal Plan: Breakfast and Lunch.',
          'Journey Time: 6 to 7 hours.',
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
  {
    id: 13,
    title: '15 Days Eastern and Northern Cultural Tour to Uganda',
    description: 'Request Quote',
    duration: '15 days',
    location:
      'Murchision Falls, Kidepo ,Lake Kyoga, Mt.Elgon, West, East & North Uganda',
    image: Imbalu,
    fullDescription: `The culture of Uganda is made up of a diverse range of ethnic groups. Lake Kyoga forms the northern boundary for the Bantu-speaking peoples, who dominate much of east, central ,and southern Africa. In Uganda, they include the Baganda and several other tribes. In the north live the Lango and the Acholi, who speak Nilotic languages. To the east are the Iteso and Karamojong, who speak a Nilotic language, the Gishu are part of the Bantu and they live mainly on the slops of Mt Elgon. They speak lumasaba closely related to the Luhya of Kenya. A few Pygmies live isolated in the rainforests of western Uganda.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          'With this cultural safaris we take you to the remote virgin areas full of exciting culture that hasn’t been exploited. These trips are for those who love and more interested in knowing about other cultures, people and their ways of life.',
          'Contact us for a personalized experience.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          'Accommodation as highlighted in itinerary',
          'Meals as highlighted in itinerary',
          'Transportation in a four-wheel drive vehicle',
          'Full-time service of an English-speaking driver-guide',
          'Bottled drinking water',
          'Park entrance fee',
        ],
      },
      {
        title: 'Price Excludes',
        icon: CircleOff,
        items: [
          'Visa',
          'International flights',
          'Insurance',
          'Personal expenditures such as laundry services, tips, and alcoholic drinks',
        ],
      },
      {
        title: 'What to Expect',
        icon: Eye,
        items: [
          'Diverse cultural experience,',
          'Sipi Falls',
          'A game drive',
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
          'Arrival at Entebbe Airport.',
          'Welcome by Divine African Tours representative.',
          'Transfer to your hotel.',
          'Overnight at Protea Hotel Entebbe, Cassia Lodge, or Namirembe Guest House.',
        ],
      },
      {
        day: 2,
        title: 'City Buganda Cultural Tour',
        activities: [
          'After breakfast, go for the City Cultural Buganda tour.',
          'Visit Kabaka’s Lake, believed to be man-made.',
          'Continue to Lubiri Palace in Mengo.',
          'Visit Namugongo Shrines, where the young Uganda Martyrs were burned alive due to religious persecution by King Mwanga.',
          'Overnight at Protea Hotel Entebbe, Cassia Lodge, or Namirembe Guest House.',
        ],
      },
      {
        day: 3,
        title: 'Visit to Buganda Cultural Sites',
        activities: [
          'Visit all the Buganda Cultural Sites in the city.',
          'Explore Naggalabi Coronation Site, the starting point for the Buganda Kingdom.',
          'Visit Kasubi Tombs and Wamala Tombs, burial places for the Baganda Kings.',
          'Tour the palaces of some Buganda Kings.',
          'Overnight at Protea Hotel Entebbe, Cassia Lodge, or Namirembe Guest House.',
        ],
      },
      {
        day: 4,
        title: 'Jinja –Sipi Falls',
        activities: [
          'Leave Jinja and continue to Sipi Falls, passing through Mbale, a charming town at the foot of Mount Elgon.',
          'Explore Mbale, known for its strong culture, including bi-annual circumcision ceremonies during leap years.',
          'Proceed to Sipi Village, located in the mountains and waterfalls.',
          'Dinner and overnight at Sipi River Lodge or Lacam Lodge.',
        ],
      },
      {
        day: 5,
        title: 'Sipi Falls',
        activities: [
          'After breakfast, hike to the beautiful Sipi Falls, a series of three waterfalls.',
          'Enjoy the walk to the bottom of the waterfall on the edge of Mt. Elgon.',
          'Continue to the caves, plantations, crops, and typical bandas.',
          'After lunch and relaxation, visit the Coffee Project in Sipi Falls and interact with local farmers.',
          'Dinner and overnight at Sipi River Lodge or Lacam Lodge.',
          'Note: The flow of water at Sipi Falls is more during the wet season and less during the dry season.',
        ],
      },
      {
        day: 6,
        title: 'Sipi Falls- Kitgmu',
        activities: [
          'Travel to the Northern region, passing through unique landscapes.',
          'Reach Kitgum, a region known for its distinct culture.',
          'Stopover for the night in Kitgum.',
          'Dinner and overnight at Boma Guest House or Four Seasons.',
        ],
      },
      {
        day: 7,
        title: 'Kitgum Cultural Tour',
        activities: [
          'Visit one of the former homes of Idi Amin, the ex-President of Uganda, located in the mountains.',
          'See the famous chair built by Idi Amin from rock.',
          'Explore other cultural sites, local communities, markets, and homes.',
          'Dinner and overnight at Boma Guest House or Four Seasons.',
        ],
      },
      {
        day: 8,
        title: 'Kitgum - Kidepo Valley National Park',
        activities: [
          'Drive to Kidepo Valley National Park, known for its rich game, uniqueness, and virgin culture.',
          'After lunch, enjoy an evening game drive.',
          'Dinner and overnight at Apoka Lodge, Nga’Moru Wilderness Camp, or UWA Bandas.',
        ],
      },
      {
        day: 9,
        title: 'Game Drive & Nature Walk',
        activities: [
          'Enjoy another exciting game drive, with a chance to spot a variety of animals, including tree-climbing lions.',
          'After lunch, go on a cultural walk to explore the virgin culture of the Karamoja people.',
          'Dinner and overnight at Apoka Lodge, Nga’Moru Wilderness Camp, or UWA Bandas.',
        ],
      },
      {
        day: 10,
        title: 'Gulu Tour',
        activities: [
          'Continue to Gulu after lunch.',
          'Take a walk through the street and visit the market place.',
          'Visit Lacor Hospital and the IDP camp sites.',
          'Dinner and overnight at the Boma Hotel or Hotel Pearl Afrique.',
        ],
      },
      {
        day: 11,
        title: "Baker's Fort Patiko",
        activities: [
          'Visit Baker’s Fort, also known as Fort Patiko, founded by Sir Samuel Baker.',
          'Located 32 km north of Gulu town, the fort is a memorable site for the slave trade.',
          'The fort was taken over by the Arab slave traders in 1872 from Sir Samuel Baker.',
          'Dinner and overnight at the Boma Hotel or Hotel Pearl Afrique.',
        ],
      },
      {
        day: 12,
        title: 'Murchison Falls',
        activities: [
          'Continue to Murchison Falls National Park with an evening game drive.',
          'Dinner and overnight at Paraa Lodge, Nile Safari Lodge, Sambiya Lodge, or Red Chili.',
        ],
      },
      {
        day: 13,
        title: 'Game drive & Boat Trip',
        activities: [
          'Go for an early morning game drive on the northern bank with the help of the guide.',
          'Spot elephant, lion, Rothchild’s giraffe, cape buffalo, waterbuck, hartebeest, bushbuck, and possibly leopard.',
          'After lunch, go for a boat safari upstream the calm Victoria Nile to the base of the falls.',
          'Stop near the ‘Devil’s Cauldron’ and spot hippos, crocodiles, waterbuck, elephant, and Uganda Kob along the 17km stretch.',
          'View bird species such as goliath heron, Egyptian goose, pelican, bee-eater, kingfisher, hornbill, cormorant, and the rare shoebill stork.',
          'Dinner and overnight at Paraa Lodge, Nile Safari Lodge, Sambiya Lodge, or Red Chili.',
        ],
      },
      {
        day: 14,
        title: 'Drive back to Kampala',
        activities: [
          'Transfer to Kampala.',
          'Overnight at Le Petit Hotel, Cassia Lodge, or Namirembe Guest House.',
        ],
      },
      {
        day: 15,
        title: 'Departure',
        activities: [
          'You will be transfered to the airport to catch your flight back home',
        ],
      },
    ],
    photos: [
      { url: Imbalu, title: 'Imbalu Celebrations' },
      {
        url: Elephant,
        title: 'Elephants',
      },
      {
        url: Chimp,
        title: 'Chimpanzee',
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
  {
    id: 14,
    title: 'Sunset Cruise To Equator Island',
    description: 'Request Quote',
    duration: '1 day',
    location: 'Equator Island - Lake Victoria',
    image: Sunset,
    fullDescription: `Embark on an enchanting sunset cruise across Lake Victoria, Uganda's largest lake, and experience the thrill of crossing the Equator at 0° latitude. This unique journey offers the chance to float serenely on the boat or take a refreshing swim right at the Equator line, making it an unforgettable evening on the water.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          'Experience a magical sunset cruise on Lake Victoria, crossing the Equator at 0° latitude, with opportunities to float or swim at this iconic landmark.',
          'Contact us for a personalized experience.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          'Sunset Cruise',
          'Tour Guide',
          'Entrance Fees',
          'All transportation in destination location',
        ],
      },
      {
        title: 'Price Excludes',
        icon: CircleOff,
        items: ['Tips', 'Any Private Expenses'],
      },
      {
        title: 'What to Expect',
        icon: Eye,
        items: [
          'Breathtaking landscapes, rich wildlife, and the iconic Big Five on thrilling game drives',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Entebbe to Equator Island',
        activities: [
          'Evening Cruise starts at 5:00 PM from Entebbe za Mugula',
          'Visit Equator Island',
          'Duration: Birdwatching at Bird Point and Sightseeing experience to 7:00 PM or 7:30 PM depending on the season of the year)',
          'Refreshments: Fish fingers, fish fillets, drinks, and snacks',
        ],
      },
    ],
    photos: [{ url: Sunset, title: 'Sunset' }],
  },
  {
    id: 15,
    title: '3 Days Masai Mara Safari',
    description: 'Request Quote',
    duration: '3 days',
    location: 'Masai Mara National Park',
    image: Sunset,
    fullDescription: `Experience an unforgettable 3-day Maasai Mara safari, exploring the renowned Maasai Mara National Reserve. Discover breathtaking landscapes, rich wildlife, and the iconic Big Five on thrilling game drives, while immersing yourself in the heart of Africa’s wilderness.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          'Experience an unforgettable 3-day Maasai Mara safari, exploring the renowned Maasai Mara National Reserve.',
          'Contact us for a personalized experience.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          'Tour Guide',
          'Entrance Fees',
          'All transportation in destination location',
        ],
      },
      {
        title: 'Price Excludes',
        icon: CircleOff,
        items: ['Tips', 'Any Private Expenses'],
      },
      {
        title: 'What to Expect',
        icon: Eye,
        items: [
          'Breathtaking landscapes, rich wildlife, and the iconic Big Five on thrilling game drives',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Departure from Nairobi',
        activities: [
          'Depart Nairobi at 7:00 AM for a scenic drive through the Great Rift Valley',
          'Brief stopover en route for stretching and sightseeing',
          'Arrive at Maasai Mara in time for lunch',
          'Afternoon game drive in the African wild',
          'Accommodation options: Budget camping, Ol Moran Tented Camp (midrange), Sentirm Mara Camp (luxury)',
        ],
      },
      {
        day: 2,
        title: 'Game Drives',
        activities: [
          'Morning departure for a full day of game drives in Maasai Mara',
          'Wildlife viewing: lions, leopards, cheetahs, buffalo, zebras, giraffes, and various bird species',
          'Experience the annual wildebeest migration (July to September) and Mara River crossing spectacle',
          'Evening return to the camp',
          'Accommodation options: Budget camping, Ol Moran Tented Camp (midrange), Sentirm Mara Camp (luxury)',
        ],
      },
      {
        day: 3,
        title: 'Maasai Mara – Nairobi',
        activities: [
          'Early morning game drive at 6:00 AM to spot nocturnal and semi-nocturnal wildlife',
          'Return to camp for breakfast and prepare for departure',
          'Transfer back to Nairobi, arriving by late afternoon',
        ],
      },
    ],
    photos: [{ url: Sunset, title: 'Sunset' }],
  },
  {
    id: 16,
    title: '4 Days Explore Lake Nakuru & Masai Mara National Parks',
    description: 'Request Quote',
    duration: '4 days',
    location: 'Lake Nakuru & Masai Mara National Parks',
    image: Sunset,
    fullDescription: `This 4-day safari takes you to Lake Nakuru, a birdwatcher’s paradise, and the iconic Maasai Mara, known for its incredible wildlife. Explore the diverse habitats of Lake Nakuru, perfect for bird watching and game drives. Then, venture to Maasai Mara, one of Africa’s greatest wildlife reserves, home to over 95 species of mammals and 570 bird species. Witness the spectacular wildebeest migration (July–October) or enjoy the dry season (December–February) for prime big cat sightings. This tour offers unparalleled wildlife experiences in two of Kenya's top national parks.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          'Experience an unforgettable 3-day Maasai Mara safari, exploring the renowned Maasai Mara National Reserve.',
          'Contact us for a personalized experience.',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          'Tour Guide',
          'Entrance Fees',
          'All transportation in destination location',
        ],
      },
      {
        title: 'Price Excludes',
        icon: CircleOff,
        items: ['Tips', 'Any Private Expenses'],
      },
      {
        title: 'What to Expect',
        icon: Eye,
        items: [
          'Breathtaking landscapes, rich wildlife, and the iconic Big Five on thrilling game drives',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Lake Nakuru National Park',
        activities: [
          'Depart Nairobi in the early hours for Lake Nakuru National Park',
          'Spend the day game watching, with sightings of flamingos, rhinos, lions, leopards, hyenas, and antelopes',
          'Observe Rothschild’s giraffes and other wildlife',
          'Major highlight: Flamingo population at Lake Nakuru',
          'Accommodation options: Wildlife Clubs Guesthouse (budget), Hill Court Resort (midrange), Lake Nakuru Lodge (luxury)',
        ],
      },
      {
        day: 2,
        title: 'Lake Nakuru – Masai Mara National Park',
        activities: [
          'Depart after breakfast for a 6-hour drive through the Great Rift Valley',
          'Arrive at Maasai Mara National Reserve in time for lunch',
          'Leisure afternoon followed by a game-viewing drive through the park’s rolling hills and open plains',
          'Opportunity to capture wildlife in their natural habitats',
          'Accommodation options: Budget camping, Ol Moran Tented Camp (midrange), Sentirm Mara Camp (luxury)',
        ],
      },
      {
        day: 3,
        title: 'Maasai Mara – Game drives',
        activities: [
          'Full day of game drives in Maasai Mara to view the Big Five and other wildlife',
          'Spot giraffes, zebras, hippos, baboons, wildebeests, warthogs, gazelles, crocodiles, and birds',
          'Witness the wildebeest and zebra migration (July–October) and Mara River crossing',
          'Optional Maasai Village visit for cultural engagement, dances, and learning',
          'Accommodation options: Budget camping, Ol Moran Tented Camp (midrange), Sentirm Mara Camp (luxury)',
        ],
      },
      {
        day: 4,
        title: 'Maasai Mara – Nairobi',
        activities: [
          'Early 6:00 AM game drive to spot nocturnal and semi-nocturnal animals',
          'Return to camp for breakfast and preparation for departure',
          'Travel back to Nairobi, arriving by late afternoon',
        ],
      },
    ],
    photos: [{ url: Sunset, title: 'Sunset' }],
  },
  {
    id: 17,
    title: '15 Days Climb Kilimanjaro & Tanzania Safari',
    description: 'Request Quote',
    duration: '15 days',
    location: 'Serengeti National Park, Mount Kilimanjaro',
    image: Sunset,
    fullDescription: `Mount Kilimanjaro, Africa's highest mountain and the largest free-standing mountain in the world, offers an unforgettable adventure. The 15-day Kilimanjaro climb and Tanzania safari combines the challenge of summiting the iconic peak with a relaxing 4-day wildlife game drive through Lake Manyara, Ngorongoro, and Serengeti National Parks. This once-in-a-lifetime experience begins at Kilimanjaro International Airport, where the towering mountain beckons, and ends with the thrill of Tanzania's incredible wildlife.`,
    tourDetails: [
      {
        title: 'Tour Summary',
        icon: Sun,
        items: [
          'Best times to climb Kilimanjaro: January-March and June-October',
          'June-October is the busiest season due to summer holidays',
          'April, May, and November are the wettest months, not ideal for trekking',
          'December is becoming popular, though very cold on the summit',
          'Snow cover is highest between November and May',
          'Departure and return location: Arusha',
        ],
      },
      {
        title: 'Price Includes',
        icon: Circle,
        items: [
          'Tour Guide',
          'Entrance Fees',
          'All transportation in destination location',
        ],
      },
      {
        title: 'Price Excludes',
        icon: CircleOff,
        items: ['Tips', 'Any Private Expenses'],
      },
      {
        title: 'What to Expect',
        icon: Eye,
        items: [
          'Breathtaking landscapes, rich wildlife, and the iconic Big Five on thrilling game drives',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Arusha',
        activities: [
          'Upon arrival at the airport, transfer to your overnight stay',
          'Dinner and overnight at Planet Lodge',
        ],
      },
      {
        day: 2,
        title: 'Machame Gate/Machame Camp',
        activities: [],
      },
      {
        day: 3,
        title: 'Machame Camp/Shira Camp',
        activities: [
          'After breakfast, leave the rainforest and follow an ascending path',
          'Cross a valley and walk along a steep rocky ridge covered with heather',
          'Route turns west to a river gorge at 3658m (5-7 hours)',
          'Dinner and overnight at the Shira Hut campsite at 3800m',
        ],
      },
      {
        day: 4,
        title: 'Hira Camp/Barranco Camp',
        activities: [
          'Trek east from the Shira plateau towards the Lava Tower (the Shark’s Tooth)',
          'Reach a junction leading to the Arrow Glacier after the tower',
          'Continue to Barranco Hut campsite at 3950m for dinner and overnight (5-7 hours walking)',
        ],
      },
      {
        day: 5,
        title: 'Barranco Camp/Karanga Valley Camp',
        activities: [
          'After breakfast, start with a descent into the Gorge',
          'Climb the eastern wall with views of Kilimanjaro’s ice fields',
          'Continue hiking to Kilimanjaro Karanga Valley campsite at 13,900 feet (4-5 hours walking)',
        ],
      },
      {
        day: 6,
        title: 'Karanga Valley Camp/Barafu Camp',
        activities: [
          'After breakfast, hike through Karanga Valley and steadily uphill towards Barafu Camp',
          'Landscape becomes colder and more sparse as you approach Barafu Camp',
          'Barafu Camp, at 15,200 feet, is set on a flat ridge and serves as a base for the summit attempt',
          'Total walking time: 6-7 hours',
        ],
      },
      {
        day: 7,
        title: 'Barafu Camp/Uhuru Peak (Roof Of Africa)',
        activities: [
          'Trek to Stella Point (5745m) just after midnight on the way to the summit',
          'Reach the highest point in Africa, Uhuru Peak (5895m) after about 8 hours',
          'Descend to Mweka Hut campsite at 3100m for dinner and overnight (5 hours walking)',
        ],
      },
      {
        day: 8,
        title: 'Mweka Camp/Mweka Gate',
        activities: [
          'Spend the day descending to the Mweka park gate (3-4 hours)',
          'At the gate, receive your climbing certificate',
          'Transfer to Planet Lodge for late lunch, dinner, and overnight',
        ],
      },
      {
        day: 9,
        title: 'Arusha National Park',
        activities: [
          'After breakfast, drive to Arusha National Park for a game drive with a picnic lunch',
          'Spot giraffes, antelopes, flamingos in the Momela Lakes, and search for the rare black and white Colobus Monkey',
          'After lunch, enjoy 2 hours of canoe riding in the Momela Lakes',
          'Dinner and overnight at Planet Lodge',
        ],
      },
      {
        day: 10,
        title: 'Mtowambu Village',
        activities: [
          'After breakfast, drive to Mtowambu village for a guided village walk and interact with local people from all 120 tribes in Tanzania',
          'Visit a local banana beer bar, a nursery school, and banana/rice farms, with an opportunity to try farm work',
          'Continue to Twiga Lodge for lunch',
          'In the afternoon, bike ride across the villages to Lake Manyara to spot animals from a distance, guided by a local',
          'Return to Twiga Lodge for dinner',
          'Depart for a night game drive to look for nocturnal animals with special night drive vehicles',
          'Dinner and overnight at Twiga Lodge',
        ],
      },
      {
        day: 11,
        title: 'Lake Manyara National Park',
        activities: [
          'After breakfast, a game drive in Lake Manyara National Park',
          'See the largest concentration of baboons in North Tanzania, tree-climbing lions, flamingos, and other birds',
          'Return to Manyara Twiga Lodge for late lunch and rest',
          'In the afternoon, visit a traditional Maasai village to explore their culture',
          'Dinner and overnight at Twiga Lodge',
        ],
      },
      {
        day: 12,
        title: 'Serengeti National Park',
        activities: [
          'After breakfast, drive to Serengeti National Park for a game drive with picnic lunch',
          'Spot the largest concentration of big mammals in the world, including lions, leopards, cheetahs, elephants, impalas, and giraffes',
          'Dinner and overnight at Serengeti Bush Camp',
        ],
      },
      {
        day: 13,
        title: 'Serengeti National Park',
        activities: [
          'Morning and afternoon game drives in Serengeti National Park, with early departures to spot active cats and hunting predators',
          'All meals and overnight at Serengeti Bush Camp',
        ],
      },
      {
        day: 14,
        title: 'Ngorongoro National Park',
        activities: [
          'After breakfast, drive to Ngorongoro National Park for a game drive in the crater with picnic lunch',
          'Spot the endangered black rhino, along with zebras, wildebeests, hippos, gazelles, and hyenas',
          'Dinner and overnight at Eileen Trees Inn',
        ],
      },
      {
        day: 15,
        title: 'Departure',
        activities: [
          'After breakfast, drive back to Arusha for lunch',
          'Continue to the airport for your departure after this amazing experience',
        ],
      },
    ],
    photos: [{ url: Sunset, title: 'Sunset' }],
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
        <Link to='/destinations' className='text-gray-500 hover:underline'>
          Return to all tours
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
      </div>
    </div>
  )
}
