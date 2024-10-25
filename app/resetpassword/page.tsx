import type { Metadata } from "next";
import ResetPasswordForm from '@/components/pages/authPages/authPagesForm/ResetPasswordForm'
import FormHeader from '@/components/utility/form/FormHeader'
import React from 'react'


export const metadata: Metadata = {
  title: 'Dutiful | Reset Password',
  description: 'set your new password',
}

const ResetPasswordPage = () => {
  return (
    <section className='formLayout'>
      <FormHeader 
        subHeader='set your new password'
        header='Reset Password'
        containerStyle='!flex-col'
      />
      <ResetPasswordForm />
    </section>
  )
}

export default ResetPasswordPage
