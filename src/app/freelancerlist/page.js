
import React from 'react'
import HeroSection from '../../../components/freelancerListHero'
// import FreelancerList from '../../../components/freelancerListComponent'
import FreelancerList from './FreelancerListContent'
import { Suspense } from 'react'


function freelancerlist() {
  return (
    <div>
      <HeroSection />
      {/* <FreelancerList /> */}

      <Suspense fallback={<div>Loading...</div>}>
        <FreelancerList />
      </Suspense>
    </div>
  )
}

export default freelancerlist