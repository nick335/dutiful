import LoginForm from '@/components/pages/authPages/authPagesForm/LoginForm'
import FormHeader from '@/components/utility/form/FormHeader'
import React from 'react'

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
