import React from 'react'
import content from '@/public/home/sectionContent.png'
import phone from '@/public/home/phone.png'
import ResponsiveImage from '@/components/utility/image/ResponsiveImage'

const ImageSection = () => {
  return (
    <section className='marginLayout mt-8 lg:mt-12 bg-[#FCFAFF] px-1 lg:px-8 rounded-xl lg:rounded-3xl py-4 lg:py-8 lg:flex lg:items-end'>
      <div className='relative hidden lg:block lg:w-2/4'>
        <ResponsiveImage 
          src={phone} 
          alt='phone'
          placeholder='blur'
          width={638} 
          height={651}
        />
      </div>
      <div className='relative w-full lg:w-2/4 lg:-ml-28 lg:z-10'>
        <ResponsiveImage 
          src={content} 
          alt='section content'
          placeholder='blur'
          width={566}
          height={717}
        />
      </div>
    </section>
  )
}

export default ImageSection
