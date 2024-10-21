import React from 'react'
import { WhyChooseUs } from '../components/Why'

import Tours from '../components/Tours'
import MainHero from '../components/MainHero'
import Destinations from '../components/Destinations'

function Home() {
  return (
    <>
      <MainHero />
      <WhyChooseUs />
      <Tours />

      <Destinations />
    </>
  )
}

export default Home
