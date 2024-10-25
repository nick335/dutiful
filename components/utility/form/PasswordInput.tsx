/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '@/components/utility/form/form.module.css'
import { UseFormRegister } from 'react-hook-form';
import { FieldError, Merge } from "react-hook-form";
import FormErrorMessage from '../ErrorHandling/FormErrorMessage';
import { PiEyeFill } from "react-icons/pi";
import { PiEyeSlashFill } from "react-icons/pi";
import { useState } from 'react';


interface props {
  label: string
  placeholder: string,
  register: UseFormRegister<any>
  inputName: string
  errorMessage: string | undefined,
  error:  Merge<FieldError, (FieldError | undefined)[]> | undefined
  className?: string
}


const PasswordInput = ({ label,placeholder, register, inputName, errorMessage, error, className }: props) => {
  const [showPassword, setShowPassword] = useState(false)

  const show = () => {
    setShowPassword(true)
  }
  const hide = () => {
    setShowPassword(false)
  }
  return (
    <div>
      <label className={`${styles.inputLabel}`}>{label}</label>
      <div className='relative'>
        <input type={showPassword ? 'text' : 'password'} placeholder={placeholder} className={`${styles.input} ${className} ${
        error ? styles.inputError : 'border-none'
      }`} {...register(inputName)}/>
      <div className='absolute right-3 -translate-y-[calc(50%-2px)] top-[calc(50%+2px)] cursor-pointer'>
        { !showPassword && <PiEyeFill onClick={show} className='text-[#A16AE8] text-2xl !leading-none right-6 h-fit'  />}
        { showPassword && <PiEyeSlashFill onClick={hide} className='text-[#A16AE8] text-2xl !leading-none right-6 h-fit'  />}
      </div>
        
      </div>
      
      
      {
        error && <FormErrorMessage message={`${errorMessage}`} />
      }
    </div>
  )
}

export default PasswordInput
