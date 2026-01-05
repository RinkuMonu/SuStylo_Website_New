
import React from 'react'
import HeroSection from '../../../components/salonListHero'
// import SalonList from '../../../components/salonListComponent'
import SalonList from './salonlistComponent'
import { Suspense } from 'react'


function salonlist() {
  return (
    <div>
      <HeroSection />
      {/* <SalonList /> */}

      <Suspense fallback={<div>Loading...</div>}>

        <SalonList />
      </Suspense>

    </div>
  )
}

export default salonlist