import React from 'react'
import Plan from './Plan'
import { PricingPlanData } from '@/lib/database/pricing/pricingPlanDb'

const PricingPlan = () => {
  return (
    <section className='pt-4 lg:pt-8 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8'>
      {
        PricingPlanData.map((each, index) => {
          return (<Plan key={index} data={each} />)
        })
      }
    </section>
  )
}

export default PricingPlan
