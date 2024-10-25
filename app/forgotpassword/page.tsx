import type { Metadata } from "next";
import FormHeader from '@/components/utility/form/FormHeader'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dutiful | Forgot Password',
  description: 'Enter your email and well send you a mail on how to reset your password.',
}

const ForgotPasswordPage = () => {
  return (
    <section className='formLayout'>
      <FormHeader 
        subHeader='Enter your email and well send you a mail on how to reset your password.'
        header='Forgot Password'
        containerStyle='!flex-col'
      />
    </section>
  )
}

export default ForgotPasswordPage
