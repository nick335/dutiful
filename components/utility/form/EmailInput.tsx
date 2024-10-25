/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '@/components/utility/form/form.module.css'
import { UseFormRegister } from 'react-hook-form';
import { FieldError, Merge } from "react-hook-form";
import FormErrorMessage from '../ErrorHandling/FormErrorMessage';
import { HiOutlineEnvelope } from "react-icons/hi2";

interface props {
  placeholder: string,
  register: UseFormRegister<any>
  inputName: string
  errorMessage: string | undefined,
  error:  Merge<FieldError, (FieldError | undefined)[]> | undefined
  className?: string
  showIcon?: boolean
}


const EmailInput = ({placeholder, register, inputName, errorMessage, error, className, showIcon=false}: props) => {
  return (
    <div className='font-satoshi'>
      <label className={`${styles.inputLabel}`}>Email</label>
      <div className='relative'>
        <input type='email' placeholder={placeholder} className={`${styles.input} ${className} ${
        error ? styles.inputError : 'border-none'
      }`} {...register(inputName)} />
      </div>
      
      {
        error && <FormErrorMessage message={`${errorMessage}`} />
      }
      <div className='absolute right-3 -translate-y-[calc(50%-2px)] top-[calc(50%+2px)] cursor-pointer'>
        {
          showIcon && <HiOutlineEnvelope className='text-[#A16AE8] text-2xl '  />
        }
      </div>
    </div>
  )
}

export default EmailInput
