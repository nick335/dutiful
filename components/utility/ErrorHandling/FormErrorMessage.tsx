import React from 'react'

interface props {
  message: string 
}

const FormErrorMessage = ({message }: props) => {
  return (
    <p className='font-medium font-sans text-xs mt-1 text-red-500'>{message}</p>
  )
}

export default FormErrorMessage
