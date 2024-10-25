'use client'
import React from 'react'
import PasswordInput from '@/components/utility/form/PasswordInput'
import styles from '../authPages.module.css'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from "react-hook-form"
import Link from 'next/link'
import FormButton from '@/components/utility/buttons/FormButton'
import { useRouter } from 'next/navigation'

const ResetPasswordForm = () => {
  const navigate = useRouter()
  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    password:z.string().min(1, 'password is Required').min(8, 'minimum of 8 characters'),
    confirmPassword: z.string().min(1, 'password is Required').min(8, 'minimum of 8 characters'),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  })
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  //submit form, simple console log
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data)
    navigate.push('/login')
  }

  return (
    <div>
     <form  className={`${styles.authForm}`} onSubmit={handleSubmit(onSubmit)}>
      <PasswordInput 
        label='Enter New Password'
        placeholder='Type Here' 
        register={register}
        inputName='password'
        error={errors.password}
        errorMessage={errors.password?.message}
      />
      <PasswordInput 
        label='Re-Enter New Password'
        placeholder='Type Here' 
        register={register}
        inputName='confirmPassword'
        error={errors.confirmPassword}
        errorMessage={errors.confirmPassword?.message}
      />
      <div className='mt-6'>
        <FormButton name='Reset Password' isLoading={isSubmitting} />
        <p className=' mt-3 font-circular text-[#A3B1BF] text-base font-medium text-center '>or <Link  href='/signup'  className='underline text-textHighlight'>Create an Account</Link></p>
      </div>
     </form>
    </div>
  )
}

export default ResetPasswordForm
