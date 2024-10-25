/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'  
import { Checkbox } from "@/components/shadcnui/checkbox"
import { useState } from "react";
import { UseFormRegister } from 'react-hook-form';
import { FieldError, Merge } from "react-hook-form";

interface props {
  label: string | React.ReactNode
  register: UseFormRegister<any>
  inputName: string
  errorMessage: string | undefined,
  error:  Merge<FieldError, (FieldError | undefined)[]> | undefined
  handleCheckbox: (value: boolean) => void
}

 const CheckBox = ({ label, register, inputName, error, handleCheckbox }: props) => {
  const [privacy, setPrivacy] = useState(false)

  function handleChange(value: boolean){  
    setPrivacy(value)
    handleCheckbox(value)
  }
  return (
    <div className="flex items-center space-x-2">
      <Checkbox onClick={() => handleChange(!privacy)} id="terms" className={`!w-3.5 !h-3.5 ${
        error ? ' !border-red-500 ' : ''
      }`} {...register(inputName)}  />
      <label
        htmlFor={inputName}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  )
}

export default CheckBox