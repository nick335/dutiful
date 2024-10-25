'use client'
import React from 'react'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from "react-hook-form"
import TextInput from '@/components/utility/form/TextInput'
import EmailInput from '@/components/utility/form/EmailInput'
import FormButton from '@/components/utility/buttons/FormButton'
import TextArea from '@/components/utility/form/TextArea'
const ContactUsForm = () => {
  type FormSchemaType = z.infer<typeof formSchema>
  //form validation
  const formSchema = z.object({
    fullName:z.string().min(1, 'user name is required'),
    email:z.string().email("Invalid email").min(1, "Email is Required"),
    businessType:z.string().optional(),
    subject:z.string().min(1, 'subject is required'),
    message:z.string().min(1, 'message is required'),

  })
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors,}
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  //submit form, simple console log
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data)
    reset()
  }
  return (
    <section className='mt-10 lg:mt-20 pb-14 lg:pb-20 marginLayout'>
      <div className='formLayout lg:!max-w-[600px]'>
        <form className='grid grid-cols-1 gap-y-5' onSubmit={handleSubmit(onSubmit)}>
          <TextInput 
            label='Full Name'
            placeholder=''
            register={register}
            inputName='fullName'
            error={errors.fullName}
            errorMessage={errors.fullName?.message}
          />
          <EmailInput
            placeholder=''
            register={register}
            inputName='email'
            error={errors.email}
            errorMessage={errors.email?.message}
          />
          <TextInput
            label='Business Type(Optional)'
            placeholder=''
            register={register}
            inputName='businessType'
            error={errors.businessType}
            errorMessage={errors.businessType?.message}
          />
          <TextInput 
            label='Subject'
            placeholder=''
            register={register}
            inputName='subject'
            error={errors.subject}
            errorMessage={errors.subject?.message}
          />
          <TextArea 
            label='Message'
            register={register}
            inputName='message'
            error={errors.message}
            errorMessage={errors.message?.message}
          />
          <div className='mt-6'>
            <FormButton name='Send Message' />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactUsForm
