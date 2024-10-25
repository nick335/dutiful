import type { Metadata } from "next";
import SignupForm from '@/components/pages/authPages/authPagesForm/SignupForm'
import FormHeader from '@/components/utility/form/FormHeader'
import React from 'react'


export const metadata: Metadata = {
  title: 'Dutiful | Sign Up',
  description: 'Sign Up for free',
}

const SignUpPage = () => {
  return (
    <section className='formLayout'>
      <FormHeader 
        subHeader='sign up for free'
        header='Get Started'
      />
      <SignupForm />
    </section>
  )
}

export default SignUpPage
