import { motion } from 'framer-motion'
import { Leaf, Users, Heart, TreePine } from 'lucide-react'
import Hero from './Hero'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const AboutCard = ({ icon: Icon, title, content }) => (
  <div className='flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md'>
    <Icon className='w-12 h-12 text-[#2ba924] flex-shrink-0' />
    <div>
      <h3 className='text-lg font-semibold mb-1'>{title}</h3>
      <p className='text-sm text-gray-600'>{content}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <>
      <Hero heading='About us' sub='Our story is simple, We are Divine' />

      <motion.div {...fadeIn} className='py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl font-medium text-center text-gray-900 mb-8'>
            About Divine African Tours
          </h2>
          <div className='bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 space-y-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <p className='text-lg leading-relaxed text-gray-700'>
                  Divine African Holidays tours and travel is a ground handling
                  tours and Travel Company that organizes both inbound and
                  outbound safaris throughout the East African region.
                </p>
                <p className='text-lg leading-relaxed text-gray-700'>
                  We specialize in tailor-made and set departure safaris in the
                  East African region ensuring that they are Eco-friendly and
                  respecting the cultures of the local community.
                </p>
              </div>
              <AboutCard
                icon={Users}
                title='Professional Team'
                content='Ingeniously owned and managed, we are a thoroughly professional and established company.'
              />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <AboutCard
                icon={Leaf}
                title='Eco-Friendly Safaris'
                content='We specialize in tailor-made and set departure safaris that are eco-friendly and respect local cultures.'
              />
              <div className='space-y-4'>
                <p className='text-lg leading-relaxed text-gray-700'>
                  As part of giving back to the community, a percentage of our
                  revenue is given to selected orphanages.
                </p>
                <p className='text-lg leading-relaxed text-gray-700'>
                  In a way to conserve the environment, we do plant trees and
                  also encourage people to do the same. If more trees are
                  planted, then the world's environment will become a safer
                  place to live in.
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <p className='text-lg leading-relaxed text-gray-700'>
                  Trees provide oxygen to the environment, provide medicine,
                  provide shelter for birds that attract tourists, and reduce
                  pollution.
                </p>
                <p className='text-lg leading-relaxed text-gray-700'>
                  At Divine African holidays tours and travel we are
                  enthusiastic in making the tourism industry offering
                  professional advice on corporate ventures.
                </p>
              </div>
              <AboutCard
                icon={TreePine}
                title='Environmental Conservation'
                content='We actively plant trees and encourage others to do the same to create a safer, cleaner environment.'
              />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <AboutCard
                icon={Heart}
                title='Community Support'
                content='A percentage of our revenue is given to selected orphanages as part of our commitment to giving back.'
              />
              <div className='space-y-4'>
                <p className='text-lg leading-relaxed text-gray-700'>
                  Our commitment to the community and environment goes hand in
                  hand with our passion for providing unforgettable travel
                  experiences. We believe that responsible tourism can make a
                  positive impact on both travelers and the destinations we
                  visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
