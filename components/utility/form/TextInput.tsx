import styles from '@/components/utility/form/form.module.css'
import { UseFormRegister } from 'react-hook-form';
import { FieldError, Merge } from "react-hook-form";
import FormErrorMessage from '../ErrorHandling/FormErrorMessage';

interface props {
  label: string
  placeholder: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  inputName: string
  errorMessage: string | undefined,
  error:  Merge<FieldError, (FieldError | undefined)[]> | undefined
  className?: string
}

const TextInput = ({ label,placeholder, register, inputName, errorMessage, error, className }:props) => {
  return (
    <div className=' font-circular'>
      <label className={`${styles.inputLabel} `}>{label}</label>
      <input type='text' placeholder={placeholder}className={`${styles.input} ${className}  ${
        error ? styles.inputError : 'border-none'
      }`} {...register(inputName)} />
      {
        error && <FormErrorMessage message={`${errorMessage}`} />
      }
    </div>
  )
}

export default TextInput
