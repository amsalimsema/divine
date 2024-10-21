import React from 'react'
import { WhyChooseUs, SafariAnimals } from '../components/Why'

import Tours from '../components/Tours'
import MainHero from '../components/MainHero'
import Destinations from '../components/Destinations'

function Home() {
  return (
    <>
      <MainHero />
      <WhyChooseUs />
      <Tours />
      <SafariAnimals />
      <Destinations />
    </>
  )
}

export default Home
