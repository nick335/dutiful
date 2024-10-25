'use client'
import {
  InputOTP,
  InputOTPSlot,
} from "@/components/shadcnui/input-otp"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/shadcnui/form"
import styles from '@/components/utility/form/form.module.css'
import FormButton from "@/components/utility/buttons/FormButton"
import FormErrorMessage from "@/components/utility/ErrorHandling/FormErrorMessage"
import { useRouter } from "next/navigation"
import { useState } from "react"


const OtpForm = () => {
  const navigate = useRouter()
  const [errorMessage, setErrorMessage] = useState<string | undefined>()

  const FormSchema = z.object({
    pin: z.string().min(6, {
      message: "Your one-time password must be 4 characters.",
    }),
  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
   async function onSubmit(data: z.infer<typeof FormSchema>) {
    setErrorMessage('')
    console.log(data)
    navigate.push('/login')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='mt-16 mx-auto pb-14 lg:pb-20 font-satoshi'>
        <FormField 
           control={form.control}
           name="pin"
           render={({field}) => (
            <FormItem>
              <FormControl>
                <div>
                  <InputOTP maxLength={6} className='w-full !flex !items-center !justify-between' {...field}>
                    <div className=' mt-6 flex items-center justify-between w-full'>
                      <InputOTPSlot index={0} className={`${styles.otpSlot}`} />
                      <InputOTPSlot index={1} className={`${styles.otpSlot}`}/>
                      <InputOTPSlot index={2} className={`${styles.otpSlot}`}/>
                      <InputOTPSlot index={3} className={`${styles.otpSlot}`}/>
                    </div>       
                  </InputOTP>
                </div>
              </FormControl>
            </FormItem>
           )}
        >
          
        </FormField>
        {
          (form.formState.errors.pin || errorMessage) && <FormErrorMessage message={`${form.formState.errors.pin ?  form.formState.errors.pin.message : errorMessage ? errorMessage : '' }`} />
        }
        
        <p className=" text-center text-sm lg:text-base font-medium flex items-center my-4 pt-4">
          Enter OTP code that was sent to your email, segunsolaru@gmail.com. 
         </p>
        <FormButton 
          name="Verify"
        />
        <p className='text-center mt-4 text-sm lg:text-base text-[#686868]'>
          Did not get a Code? <span   className='underline text-textHighlight'>Resend </span>
        </p>
      </form>
    </Form>
    
  )
}

export default OtpForm
