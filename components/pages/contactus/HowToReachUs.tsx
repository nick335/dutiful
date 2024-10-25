import { contactDB } from '@/lib/database/contact/contactDB'
import React from 'react'
import ReachUsBox from './ReachUsBox'

const HowToReachUs = () => {
  return (
    <section className='marginLayout mt-6'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-5 lg:mb-10 lg:-mt-24'>
        {
          contactDB.map((data, index) => {
            return (
              <ReachUsBox data={data} key={index} />
            )}
         )}
      </div>
    </section>
  )
}

export default HowToReachUs
