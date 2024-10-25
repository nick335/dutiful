import FormHeader from '@/components/utility/form/FormHeader'
import React from 'react'

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
