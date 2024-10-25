import type { Metadata } from "next";
import LoginForm from '@/components/pages/authPages/authPagesForm/LoginForm'
import FormHeader from '@/components/utility/form/FormHeader'
import React from 'react'


export const metadata: Metadata = {
  title: 'Dutiful | Login',
  description: 'Login to your account',
}

const LoginPage = () => {
  return (
    <section className='formLayout'>
      <FormHeader 
        subHeader='Join right back in'
        header='Login'
      />
      <LoginForm />
    </section>
  )
}

export default LoginPage
