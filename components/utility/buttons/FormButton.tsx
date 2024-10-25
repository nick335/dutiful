import React from 'react'
import { Icon } from '@iconify/react'

interface props {
  name: string
  isLoading?: boolean
}

const FormButton = ({ name, isLoading=false }: props) => {
  //since there is no action triggering a loading state, it is set by default to false
  return (
    <button disabled={isLoading}   type="submit" className=" bg-[#532F82] w-full min-h-[3.8125rem] sm:min-h-[4.875rem] max-h-fit rounded-md text-white font-medium font-circular lg:text-lg text-base flex justify-center items-center outline-none shadow-formbtn ">
     {
        isLoading ? <Icon icon="line-md:loading-loop" className='text-3xl text-abodeTealGD-light' /> : name
      }
    </button>
  )
}

export default FormButton
