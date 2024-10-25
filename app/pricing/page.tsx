import Features from '@/components/pages/pricing/Features'
import Hero from '@/components/pages/pricing/Hero'
import PricingPlan from '@/components/pages/pricing/PricingPlan'
import React from 'react'

const PricingPage = () => {
  return (
    <>
      <Hero />
      <div className='pt-10 lg:pt-20 pb-14 lg:pb-20 bg-[#FCFAFF] '>
        <div className='marginLayout'>
          <PricingPlan />
          <Features />
        </div>
      </div>
    </>
  )
}

export default PricingPage
