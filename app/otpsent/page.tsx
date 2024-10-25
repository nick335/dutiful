'use client'
import FormButton from '@/components/utility/buttons/FormButton'
import { useRouter } from 'next/navigation'
import React from 'react'
import sent from '@/public/sent.png'
import ResponsiveImage from '@/components/utility/image/ResponsiveImage'

const OTPSentPage = () => {
  const navigate = useRouter()
  return (
   <section className='formLayout'>
    <div className='relative mx-auto w-[6rem] lg:w-[8.6875rem] lg:mx-auto'>
      <ResponsiveImage 
        alt='sent'
        width={139}
        height={139}
        placeholder={"blur"}
        src={sent}
      />
    </div>
    <p className='text-center mt-4 text-sm lg:text-base text-[#686868]'>
    An OTP code has been sent to segunsolaru@gmail.com. Check your email to get the code</p>
    <div onClick={() => navigate.push('/confirmotp')} className='mt-7 text-center'>
      <FormButton name='Next' />
    </div>
    
   </section>
  )
}

export default OTPSentPage
