import React from 'react'
import HomeSectionContentComponent from './utility/HomeSectionContentComponent'
import appointment from '@/public/home/calendar.png'
import ResponsiveImage from '@/components/utility/image/ResponsiveImage'

const Appointment = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:justify-start lg:item-center marginLayout lg:gap-[2%] mt-8 lg:mt-12 lg:px-24 pb-10 lg:pb-20 gap-8' >
      <HomeSectionContentComponent 
        sectionHeader='Accept and sell appointments'
        sectionPara='Let customers book their own appointment or consultation. Start accepting payments for appointments through your booking page. '
        sectionContainerStyle='w-full lg:-mt-20 lg:w-[50%] lg:ml-5'
      />
      <div className='w-full lg:w-[50%] '>
        <ResponsiveImage 
          src={appointment}
          alt={'review'}
          placeholder='blur'
          width={521}
          height={477}
        />
      </div>
    </section>
  )
}

export default Appointment
