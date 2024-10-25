import React from 'react'
import HomeSectionContentComponent from './utility/HomeSectionContentComponent'
import review from '@/public/home/homeReview.png'
import ResponsiveImage from '@/components/utility/image/ResponsiveImage'

const CustomerReview = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:justify-start lg:item-center marginLayout  mt-8 lg:mt-12' >
      <HomeSectionContentComponent 
        sectionHeader='Collect reviews and ratings from customers'
        sectionPara='Accelerate your business reputation by 90% and gain social proof through reviews and ratings requested from customers.'
        sectionContainerStyle='w-full lg:w-[50%] lg:ml-5 lg:mr-10'
      />
      <div className='w-full lg:w-[50%] '>
        <ResponsiveImage 
          src={review}
          alt={'review'}
          placeholder='blur'
          width={592}
          height={579.5}
        />
      </div>
    </section>
  )
}

export default CustomerReview
