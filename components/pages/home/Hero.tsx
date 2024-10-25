import React from 'react'
import HomeSectionContentComponent from './utility/HomeSectionContentComponent'
import ResponsiveImage from '@/components/utility/image/ResponsiveImage'
import homeHero from '@/public/home/homeHero.png'

const Hero = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start lg:item-center marginLayout gap-8 lg:gap-[10%] mt-8 lg:mt-12'>
      <HomeSectionContentComponent 
        sectionHeader='List and grow your business  with just few clicks'
        sectionPara='Eliminate manual work and save time by listing your business or service on the best business directory in Nigeria.' 
        sectionContainerStyle='lg:w-[40%]'
      />
      <div className='w-full lg:w-[50%] '>
        <ResponsiveImage 
          src={homeHero}
          alt={'homeHero'}
          placeholder='blur'
          width={674}
          height={563}
        />
      </div>
    </section>
  )
}

export default Hero
