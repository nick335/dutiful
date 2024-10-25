import FormButton from '@/components/utility/buttons/FormButton'
import React from 'react'
import { IoCheckmark } from "react-icons/io5";


type PricingPlan = {
  package: string;
  price: string;
  benefits: string[];
};

interface PricingPlanProps {
  data: PricingPlan;
}

const Plan = ({data}: PricingPlanProps) => {
  return (
    <div className='bg-white px-4 lg:px-8 pt-9 lg:pt-16 pb-10 lg:pb-20 '>
      <p className='font-circular text-black font-medium text-base lg:text-xl capitalize'>{data.package}</p>
      <h3 className='text-2xl lg:text-4xl font-semibold text-black mt-4 font-recoleta'>{data.price}</h3>
      <div className='mt-4'>
        <FormButton name='Get Started' />
      </div>
      <ul className='mt-8 lg:mt-10 grid grid-cols-1 gap-6'>
        {
          data.benefits.map((each, index) => {
            return (<li className='text-base lg:text-xl text-[#656565] flex justify-start items-center' key={index}>
          <IoCheckmark className='mr-7 text-2xl text-black' />
          {each}</li>)
          })
        }
        
      </ul>
    </div>
  )
}

export default Plan 
