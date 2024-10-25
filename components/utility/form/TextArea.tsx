/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '@/components/utility/form/form.module.css'
import { UseFormRegister } from 'react-hook-form';
import { FieldError, Merge } from "react-hook-form";
import FormErrorMessage from '../ErrorHandling/FormErrorMessage';

interface props {
  label: string
  register: UseFormRegister<any>
  inputName: string
  errorMessage: string | undefined,
  error:  Merge<FieldError, (FieldError | undefined)[]> | undefined
  className?: string
}

const TextArea = ({ label, register, inputName, errorMessage, error, className }:props) => {
  return (
    <div className='font-satoshi'>
      <label className={`${styles.inputLabel}`}>{label}</label>
      <textarea  placeholder='Type Here' className={`${styles.textArea}
        ${className}  ${
          error ? styles.inputError : 'border-none'
        }
      `} {...register(inputName)} />
      {
        error && <FormErrorMessage message={`${errorMessage}`} />
      }
    </div>
  )
}

export default TextArea
