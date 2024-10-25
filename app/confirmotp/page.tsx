import type { Metadata } from "next";
import OtpForm from '@/components/pages/authPages/authPagesForm/OtpForm'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dutiful | Confirm OTP',
  description: 'Confirm your OTP code',
}

const ConfirmOtpPage = () => {
  return (
    <section className='formLayout'>
      <OtpForm />
    </section>
  )
}

export default ConfirmOtpPage
