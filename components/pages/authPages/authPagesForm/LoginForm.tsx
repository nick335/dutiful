'use client'
import React from 'react'
import PasswordInput from '@/components/utility/form/PasswordInput'
import EmailInput from '@/components/utility/form/EmailInput'
import Link from 'next/link'
import FormButton from '@/components/utility/buttons/FormButton'
import styles from '../authPages.module.css'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from "react-hook-form"

const LoginForm = () => {
  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    email:z.string().email("Invalid email").min(1, "Email is Required"),
    password:z.string().min(1, 'password is Required').min(8, 'minimum of 8 characters')
  })
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })
  //submit form, simple console log
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data)
  }
  return (
    <form  className={`${styles.authForm}`} onSubmit={handleSubmit(onSubmit)}>
      <EmailInput 
        placeholder='Ex. bobby@dehaze.com'
        register={register}
        inputName='email'
        error={errors.email}
        errorMessage={errors.email?.message}
      />
      <PasswordInput 
        label='Password'
        placeholder='Type Here' 
        register={register}
        inputName='password'
        error={errors.password}
        errorMessage={errors.password?.message}
      />
      <p className='text-right'><Link  href='/forgotpassword'  className='underline text-textHighlight text-right -mt-2'>Forgot Password?</Link></p>
      <div className='mt-6'>
        <FormButton name='Login' />
        <p className=' mt-3 font-circular text-[#A3B1BF] text-base font-medium text-center '>Don&apos;t have an account? <Link  href='/signup'  className='underline text-textHighlight'>Sign Up</Link></p>
      </div>
    </form>
  )
}

export default LoginForm
