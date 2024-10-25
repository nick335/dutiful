'use client'
import React, { useState } from 'react'
import styles from '../authPages.module.css'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from "react-hook-form"
import TextInput from '@/components/utility/form/TextInput'
import PasswordInput from '@/components/utility/form/PasswordInput'
import EmailInput from '@/components/utility/form/EmailInput'
import CheckBox from '@/components/utility/form/CheckBox'
import Link from 'next/link'
import FormButton from '@/components/utility/buttons/FormButton'
import SelectBox from '@/components/utility/form/SelectBox'
import { CiUser } from "react-icons/ci";
import { CiShop } from "react-icons/ci";

const SignupForm = () => {
  const signupModeData = [
    {
      label: 'Regular User',
      value: 'user',
      icon: <CiUser className='text-lg' />
    },
    {
      label: 'Service Provider',
      value: 'business',
      icon: <CiShop className='text-lg' />
    }
  ]
  const [signupMode, setSignupMode] = useState(signupModeData[0].value)
  type FormSchemaType = z.infer<typeof formSchema>
  //form validation
  const formSchema = z.object({
    fullName:z.string().min(1, 'user name is required'),
    email:z.string().email("Invalid email").min(1, "Email is Required"),
    password:z.string().min(1, 'password is Required').min(8, 'minimum of 8 characters'),
    confirmPassword: z.string().min(1, 'password is Required').min(8, 'minimum of 8 characters'),
    number:z.string().min(1, "phone number is required").max(11, "phone number is invalid"),
    acceptPrivacyPolicy: z.boolean({
      required_error: "You must accept the privacy policy",
    }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  })
  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors,}
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  //handle checkbox
  const handlePrivacyPolicyCheckbox = (value: boolean) => {
    if(value){ 
      setValue('acceptPrivacyPolicy', value)
     }else{
      setValue('acceptPrivacyPolicy', false)
    } 
  }
  //submit form, simple console log
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data)
  }
  const onChange = (value: string) => {
    setSignupMode(value)
  }
  return (
    <div>
      <div className='grid grid-cols-2 gap-x-4 mt-6 lg:mt-10'>
        {
          signupModeData.map((each, idx) => {
            return <SelectBox key={idx} value={each.value} label={each.label} activeState={signupMode} onChange={onChange} icon={each.icon}  />
          })
        }
      </div>
      <form  className={`${styles.authForm}`} onSubmit={handleSubmit(onSubmit)}>
        <TextInput 
          label='Full Name'
          placeholder='Ex. bobby_dehaze'
          register={register}
          inputName='fullName'
          error={errors.fullName}
          errorMessage={errors.fullName?.message}
        />
        <EmailInput
          placeholder='Ex. bobby@dehaze.com'
          register={register}
          inputName='email'
          error={errors.email}
          errorMessage={errors.email?.message}
        />
        <TextInput 
          label='Phone Number'
          placeholder='Ex. 1234567890'
          register={register}
          inputName='number'
          error={errors.number}
          errorMessage={errors.number?.message}
        />
        <PasswordInput 
          label='Password'
          placeholder='Type Here' 
          register={register}
          inputName='password'
          error={errors.password}
          errorMessage={errors.password?.message}
        />
        <PasswordInput 
          label='Re-type Password'
          placeholder='Type Here' 
          register={register}
          inputName='confirmPassword'
          error={errors.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
        />
        <CheckBox 
          label={<p>I agree to Dutiful <a className=' text-textHighlight underline' href='/termsofuse' >Terms and Conditions</a></p>}
          register={register}
          inputName='acceptPrivacyPolicy'
          error={errors.acceptPrivacyPolicy}
          errorMessage={errors.acceptPrivacyPolicy?.message}
          handleCheckbox={handlePrivacyPolicyCheckbox}
        />
        <div className='mt-6'>
          <FormButton name='Sign Up' />
          <p className=' mt-3 font-circular text-[#A3B1BF] text-base font-medium text-center '>Already have an account? <Link  href='/login'  className='underline text-textHighlight'>Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
