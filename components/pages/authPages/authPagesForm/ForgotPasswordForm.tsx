import React from 'react'
import EmailInput from '@/components/utility/form/EmailInput'
import styles from '@/components/pages/AuthPages/authPage.module.css'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import FormButton from '@/components/utility/buttons/FormButton'


const ForgotPasswordForm = () => {
  type FormSchemaType = z.infer<typeof formSchema>
  const navigate = useRouter()
  const formSchema = z.object({
    email:z.string().email("Invalid email").min(1, "Email is Required"),
  })
  const {
    register,
    handleSubmit,
    formState: {errors,}
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data)
    navigate.push('/otpsent')
  }

  return (
    <form  className={`${styles.authForm}`} onSubmit={handleSubmit(onSubmit)}>
      <EmailInput 
        placeholder=''
        register={register}
        inputName='email'
        error={errors.email}
        errorMessage={errors.email?.message}
        showIcon={true}
      />
      <div className='mt-6'>
        <FormButton name='Send Email' />
        <p className=' mt-3 font-circular text-[#A3B1BF] text-base font-medium text-center '>or <a href='/login' className='underline text-textHighlight'>Login</a></p>
      </div>
    </form>
  )
}

export default ForgotPasswordForm
