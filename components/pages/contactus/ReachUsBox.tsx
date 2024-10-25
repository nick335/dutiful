import ResponsiveImage from '@/components/utility/image/ResponsiveImage'
import { StaticImageData } from 'next/image'
import React from 'react'


interface data {
  para: string
  header: string
  image: string | StaticImageData
}

interface ReachUsBoxProps {
  data: data
}

const ReachUsBox = ({ data }: ReachUsBoxProps) => {
  return (
    <div className='bg-white rounded-xl border border-[#EEEEFF] px-4 py-3 lg:py-5 flex flex-col items-stretch min-h-[148px] lg:pb-6'>
      <div className='flex justify-center items-center'>
        <div className='relative w-9 lg:w-12 h-9 lg:h-12 mr-4 lg:mr-6'>
          <ResponsiveImage 
            src={data.image}
            alt={'email'}
            placeholder='blur'
            width={48}
            height={48}
          />
        </div>
        <h3 className='font-circular text-lg lg:text-2xl font-medium text-center text-[#1E1E4B]'>{data.header}</h3>
      </div>
      <p className='font-circular text-base lg:text-lg font-medium text-center mt-4 text-[#656565]'>{data.para}</p>
    </div>
  )
}

export default ReachUsBox
