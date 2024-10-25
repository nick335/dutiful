import SignupForm from '@/components/pages/authPages/authPagesForm/SignupForm'
import FormHeader from '@/components/utility/form/FormHeader'
import React from 'react'

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
